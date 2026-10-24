/* Lộ trình 30 ngày: dựng nhiệm vụ theo ngày, theo thời lượng và kỹ năng yếu */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const U = A.util;
  const store = () => A.store;
  const L = () => A.labels;
  const DAYS = 30;

  const MIN60 = { vocab: 12, grammar: 10, reading: 10, listening: 10, writing: 10, speaking: 8 };
  const CORE_PAIRS = [['grammar', 'reading'], ['listening', 'speaking'], ['writing', 'grammar'], ['reading', 'listening'], ['speaking', 'writing']];

  const data = () => globalThis.AptisData.roadmap;

  function setsFor(module, type) {
    const D = globalThis.AptisData;
    if (module === 'reading') return ((D.reading || {})[type] || []).map((s) => s.id);
    if (module === 'listening') return (D.listening || []).filter((x) => x.type === type).map((x) => x.id);
    if (module === 'writing') return (D.writing || []).filter((x) => x.task === Number(type)).map((x) => x.id);
    if (module === 'speaking') return ((D.speaking || {})[type] || []).map((x) => x.id);
    return [];
  }

  const P = (A.plan = {
    DAYS,
    data,
    day: (d) => data().days[d - 1],
    weekOf: (d) => data().weeks.find((w) => d >= w.range[0] && d <= w.range[1]),

    /** Đảm bảo có ngày bắt đầu (mặc định hôm nay) */
    ensureStart() {
      const p = store().get('profile');
      if (!p.startDate) {
        p.startDate = U.dateKey();
        p.createdAt = Date.now();
        store().save('profile');
      }
      return p.startDate;
    },
    startDate: () => store().get('profile').startDate || U.dateKey(),
    /** Ngày thứ mấy của lộ trình (có thể >30 khi quá hạn) */
    rawDay: (today = U.dateKey()) => U.daysBetween(P.startDate(), today) + 1,
    currentDay: (today = U.dateKey()) => U.clamp(P.rawDay(today), 1, DAYS),
    dateOfDay: (d) => U.addDays(P.startDate(), d - 1),
    /** Số ngày còn lại trước ngày thi (nếu đã đặt) */
    daysToExam() {
      const e = store().get('profile').examDate;
      return e ? U.daysBetween(U.dateKey(), e) : null;
    },

    /** Mô-đun yếu: từ Mock gần nhất, nếu chưa có thì từ Diagnostic gần nhất */
    weakModules() {
      const mocks = store().get('mocks');
      const diag = store().get('diag').attempts;
      const out = new Set();
      const m = mocks[mocks.length - 1];
      if (m && m.weakest) {
        m.weakest.forEach((s) => (s === 'gv' ? (out.add('vocab'), out.add('grammar')) : out.add(s)));
      } else if (diag.length) {
        diag[diag.length - 1].weakest.forEach((s) => out.add(s));
      }
      return out;
    },

    /** Chủ điểm ngữ pháp có tỉ lệ đúng thấp nhất (ưu tiên chủ điểm chưa làm) */
    weakGrammarTopic() {
      const topics = (globalThis.AptisData.grammar || []).map((t) => t.id);
      const st = (store().get('stats').grammar || {}).subs || {};
      let best = null;
      let bestScore = 2;
      for (const t of topics) {
        let c = 0;
        let n = 0;
        ['b1', 'b2', 'review'].forEach((lv) => {
          const s = st[t + ':' + lv];
          if (s) {
            c += s.c;
            n += s.t;
          }
        });
        const score = n ? c / n : -1; // chưa làm → ưu tiên cao nhất
        if (score < bestScore) {
          bestScore = score;
          best = t;
        }
      }
      return best || 'tenses';
    },

    /** Chọn đề tiếp theo: chưa làm trước, rồi đề có điểm tốt nhất thấp nhất */
    nextRef(module, type) {
      const ids = setsFor(module, type);
      const refs = ((store().get('stats')[module] || {}).refs) || {};
      let pick = null;
      let score = Infinity;
      for (const id of ids) {
        const r = refs[id];
        const s = r ? (typeof r.best === 'number' ? r.best : 0.5) + r.n : -1;
        if (s < score) {
          score = s;
          pick = id;
        }
      }
      return pick;
    },

    newWordsPerDay: () => ({ 30: 15, 60: 25, 90: 35 }[store().get('profile').dailyMinutes] || 25),

    /** Danh sách nhiệm vụ của ngày d */
    tasksFor(d) {
      const day = P.day(d);
      const mode = store().get('profile').dailyMinutes;
      const weak = P.weakModules();
      const lab = L();
      const tasks = [];
      const add = (module, o) => tasks.push(Object.assign({ id: `d${d}.${module}`, module, priority: weak.has(module) && module !== 'mock' }, o));
      const minutes = (m) => {
        const base = mode === 90 ? 15 : mode === 30 ? 10 : MIN60[m];
        return base + (weak.has(m) && mode !== 30 ? 5 : 0);
      };

      // Nhiệm vụ đặc biệt (chẩn đoán, thi thử)
      if (day.special === 'diagnostic' || day.special === 'diagnostic-final') {
        const fin = day.special === 'diagnostic-final';
        add('diagnostic', { label: fin ? 'Diagnostic cuối (đề B)' : 'Diagnostic đầu vào (đề A)', desc: 'Khoảng 20 phút: Vocabulary, Grammar, Reading, Listening.', minutes: 20, route: fin ? '#/diagnostic?form=B' : '#/diagnostic?form=A' });
      } else if (day.special === 'mock-mini' || day.special === 'mock-full') {
        const full = day.special === 'mock-full';
        add('mock', { label: full ? 'Full Mock Test' : 'Mini Mock Test', desc: full ? 'Đủ 5 phần như thi thật (~2,5 giờ). Có thể chia 2 lần trong ngày — tiến độ được lưu.' : 'Phiên bản rút gọn (~60 phút) để đo tiến bộ.', minutes: full ? 150 : 60, route: `#/mock?mode=${full ? 'full' : 'mini'}` });
      }
      const isMock = tasks.some((t) => t.module === 'mock');
      const isDiag = tasks.some((t) => t.module === 'diagnostic');

      // Từ vựng luôn có (ngày thi thử chỉ ôn thẻ)
      add('vocab', {
        label: 'Từ vựng',
        desc: isMock ? 'Ôn các thẻ đến hạn (SRS).' : `${P.newWordsPerDay()} từ mới nhóm ${day.cat === 'all' ? 'tổng hợp' : A.vocabdb.cat(day.cat).vi} + ôn thẻ đến hạn.`,
        minutes: isMock ? 10 : minutes('vocab'),
        route: `#/vocab/daily?cat=${day.cat}`,
      });
      if (isMock) return tasks;

      // Chọn các kỹ năng của ngày theo thời lượng
      let mods = ['grammar', 'reading', 'listening', 'writing', 'speaking'];
      if (mode === 30) {
        mods = CORE_PAIRS[(d - 1) % 5].slice();
        const w = [...weak].filter((m) => m !== 'vocab' && m !== 'diagnostic');
        if (d % 2 === 0 && w.length && !mods.includes(w[0])) mods[1] = w[0];
      }
      if (isDiag) mods = mode === 30 ? [] : mods.slice(0, 2);

      mods.forEach((m) => {
        if (m === 'grammar') {
          let [topic, lv] = day.grammar;
          if (topic === 'weak') topic = P.weakGrammarTopic();
          const t = topic === 'all' ? null : (globalThis.AptisData.grammar || []).find((x) => x.id === topic);
          add('grammar', { label: 'Ngữ pháp', desc: topic === 'all' ? 'Quiz tổng hợp các chủ điểm đã học.' : `${t ? t.title : topic} — ${lab.grammarLevel[lv]}`, minutes: minutes('grammar'), route: `#/grammar/${topic}/quiz/${lv}` });
        } else if (m === 'reading') {
          const ref = P.nextRef('reading', day.reading);
          add('reading', { label: 'Reading', desc: `${lab.reading[day.reading].name} (${lab.reading[day.reading].part})`, minutes: minutes('reading'), route: ref ? `#/reading/${day.reading}/${ref}` : `#/reading/${day.reading}` });
        } else if (m === 'listening') {
          const ref = P.nextRef('listening', day.listening);
          add('listening', { label: 'Listening', desc: `${lab.listening[day.listening].name} — ${lab.listening[day.listening].vi}`, minutes: minutes('listening'), route: ref ? `#/listening/${ref}` : '#/listening' });
        } else if (m === 'writing') {
          const ref = P.nextRef('writing', day.writing);
          add('writing', { label: 'Writing', desc: `${lab.writing[day.writing].name}: ${lab.writing[day.writing].vi}`, minutes: minutes('writing'), route: ref ? `#/writing/${day.writing}/${ref}` : `#/writing/${day.writing}` });
        } else if (m === 'speaking') {
          const key = 'p' + day.speaking;
          const ref = P.nextRef('speaking', key);
          add('speaking', { label: 'Speaking', desc: `${lab.speaking[key].name}: ${lab.speaking[key].vi}`, minutes: minutes('speaking'), route: ref ? `#/speaking/${key}/${ref}` : `#/speaking/${key}` });
        }
      });
      return tasks;
    },

    isDone: (taskId) => !!store().get('plan').done[taskId],
    setDone(taskId, on = true) {
      store().update('plan', (p) => {
        if (on) p.done[taskId] = U.dateKey();
        else delete p.done[taskId];
      });
    },
    dayStatus(d) {
      const tasks = P.tasksFor(d);
      const done = tasks.filter((t) => P.isDone(t.id)).length;
      return { done, total: tasks.length, complete: tasks.length > 0 && done === tasks.length, minutes: U.sum(tasks.map((t) => t.minutes)) };
    },
    /** Số ngày hoàn thành đủ nhiệm vụ */
    completedDays() {
      let n = 0;
      for (let d = 1; d <= DAYS; d++) if (P.dayStatus(d).complete) n++;
      return n;
    },
    /** Tiến độ tổng (% nhiệm vụ đã xong trên toàn 30 ngày; ngày chưa tới tính theo cấu hình hiện tại) */
    overall() {
      let done = 0;
      let total = 0;
      for (let d = 1; d <= DAYS; d++) {
        const s = P.dayStatus(d);
        done += s.done;
        total += s.total;
      }
      return { done, total, pct: total ? Math.round((done / total) * 100) : 0 };
    },

    /** Gọi khi hoàn thành một phiên: đánh dấu nhiệm vụ cùng mô-đun của hôm nay. Trả về task đã đánh dấu. */
    completeModule(module) {
      const d = P.currentDay();
      const t = P.tasksFor(d).find((x) => x.module === module && !P.isDone(x.id));
      if (!t) return null;
      P.setDone(t.id, true);
      return t;
    },
    /** Khoá ngày theo lịch cho biểu đồ tiến độ: số nhiệm vụ hoàn thành lũy kế theo ngày */
    doneByDate() {
      const out = {};
      Object.values(store().get('plan').done).forEach((dk) => (out[dk] = (out[dk] || 0) + 1));
      return out;
    },
  });
})();
