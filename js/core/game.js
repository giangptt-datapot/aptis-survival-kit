/* Gamification: XP, cấp độ, streak, mục tiêu tuần, huy hiệu */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const U = A.util;
  const store = () => A.store;

  // Bus sự kiện rất nhỏ để lõi báo cho giao diện (toast, cập nhật header)
  A.bus =
    A.bus ||
    (() => {
      const m = {};
      return {
        on(e, f) {
          (m[e] = m[e] || []).push(f);
          return () => (m[e] = m[e].filter((x) => x !== f));
        },
        emit(e, p) {
          (m[e] || []).slice().forEach((f) => {
            try {
              f(p);
            } catch (err) {
              console.error(err);
            }
          });
        },
      };
    })();

  const STUDY_MIN_SEC = 600; // ngày tính là "có học" khi ≥ 10 phút hoặc có ≥ 1 phiên hoàn thành
  const qualifies = (l) => !!l && (l.sec >= STUDY_MIN_SEC || l.sessions >= 1);

  const BADGES = [
    { id: 'first-step', kind: 'misc', icon: '👣', name: 'First Step', vi: 'Hoàn thành phiên luyện tập đầu tiên', test: (s) => s.sessions >= 1 },
    { id: 'know-yourself', kind: 'misc', icon: '🧭', name: 'Know Yourself', vi: 'Làm xong Diagnostic Test', test: (s) => s.diagCount >= 1 },
    { id: 'streak-3', kind: 'streak', icon: '🔥', name: '3-Day Streak', vi: 'Học liên tiếp 3 ngày', test: (s) => s.bestStreak >= 3, prog: (s) => [s.bestStreak, 3] },
    { id: 'streak-7', kind: 'streak', icon: '🔥', name: '7-Day Streak', vi: 'Học liên tiếp 7 ngày', test: (s) => s.bestStreak >= 7, prog: (s) => [s.bestStreak, 7] },
    { id: 'streak-14', kind: 'streak', icon: '🔥', name: '14-Day Streak', vi: 'Học liên tiếp 14 ngày', test: (s) => s.bestStreak >= 14, prog: (s) => [s.bestStreak, 14] },
    { id: 'streak-30', kind: 'streak', icon: '👑', name: '30-Day Streak', vi: 'Học liên tiếp đủ 30 ngày', test: (s) => s.bestStreak >= 30, prog: (s) => [s.bestStreak, 30] },
    { id: 'word-collector', kind: 'skill', icon: '🔤', name: 'Word Collector', vi: 'Học 100 từ vựng', test: (s) => s.wordsLearned >= 100, prog: (s) => [s.wordsLearned, 100] },
    { id: 'wordsmith', kind: 'skill', icon: '📚', name: 'Wordsmith', vi: 'Học 300 từ vựng', test: (s) => s.wordsLearned >= 300, prog: (s) => [s.wordsLearned, 300] },
    { id: 'vocab-master', kind: 'skill', icon: '🧠', name: 'Vocab Master', vi: '100 từ ở mức “thuộc” (khoảng nghỉ ≥ 21 ngày)', test: (s) => s.wordsMastered >= 100, prog: (s) => [s.wordsMastered, 100] },
    { id: 'grammar-master', kind: 'skill', icon: '🧩', name: 'Grammar Master', vi: 'Đạt ≥ 80% ở mọi chủ điểm ngữ pháp', test: (s) => s.grammarTotal > 0 && s.grammarMastered >= s.grammarTotal, prog: (s) => [s.grammarMastered, s.grammarTotal || 8] },
    { id: 'reading-warrior', kind: 'skill', icon: '📖', name: 'Reading Warrior', vi: '60 câu Reading với độ chính xác ≥ 70%', test: (s) => s.readingQ >= 60 && s.readingAcc >= 0.7, prog: (s) => [Math.min(s.readingQ, 60), 60] },
    { id: 'listening-pro', kind: 'skill', icon: '🎧', name: 'Listening Pro', vi: '12 bài nghe với độ chính xác ≥ 70%', test: (s) => s.listeningSets >= 12 && s.listeningAcc >= 0.7, prog: (s) => [Math.min(s.listeningSets, 12), 12] },
    { id: 'writer', kind: 'skill', icon: '✍️', name: 'Writer', vi: 'Hoàn thành 8 bài Writing', test: (s) => s.writingDone >= 8, prog: (s) => [s.writingDone, 8] },
    { id: 'speaker', kind: 'skill', icon: '🎤', name: 'Speaker', vi: 'Hoàn thành 12 bài Speaking', test: (s) => s.speakingDone >= 12, prog: (s) => [s.speakingDone, 12] },
    { id: 'perfect', kind: 'misc', icon: '💯', name: 'Perfect Score', vi: 'Đạt 100% trong một quiz ≥ 8 câu', test: (s) => !!s.flags.perfect },
    { id: 'time-10h', kind: 'time', icon: '⏳', name: '10 Hours In', vi: 'Tổng thời gian học 10 giờ', test: (s) => s.minutes >= 600, prog: (s) => [Math.round(s.minutes), 600] },
    { id: 'time-25h', kind: 'time', icon: '⌛', name: '25 Hours In', vi: 'Tổng thời gian học 25 giờ', test: (s) => s.minutes >= 1500, prog: (s) => [Math.round(s.minutes), 1500] },
    { id: 'roadmap-rider', kind: 'misc', icon: '🗺️', name: 'Roadmap Rider', vi: 'Hoàn thành đủ nhiệm vụ của 15 ngày', test: (s) => s.completedDays >= 15, prog: (s) => [s.completedDays, 15] },
    { id: 'finisher', kind: 'misc', icon: '🏁', name: 'Finisher', vi: 'Hoàn thành đủ nhiệm vụ của 30 ngày', test: (s) => s.completedDays >= 30, prog: (s) => [s.completedDays, 30] },
    { id: 'mock-rookie', kind: 'mock', icon: '📝', name: 'Mock Rookie', vi: 'Hoàn thành 1 bài Mock Test', test: (s) => s.mocks >= 1 },
    { id: 'mock-veteran', kind: 'mock', icon: '🎖️', name: 'Mock Veteran', vi: 'Hoàn thành 3 bài Mock Test', test: (s) => s.mocks >= 3, prog: (s) => [s.mocks, 3] },
    { id: 'level-up', kind: 'mock', icon: '📈', name: 'Level Up', vi: 'Điểm Diagnostic tăng ≥ 20% so với lần đầu', test: (s) => s.diagImprove != null && s.diagImprove >= 0.2 },
    { id: 'b2-ready', kind: 'mock', icon: '🏆', name: 'B2 Ready', vi: 'Xác suất đạt B2 ≥ 80% ở Mock gần nhất', test: (s) => s.lastMockProb != null && s.lastMockProb >= 0.8 },
  ];

  const G = (A.game = {
    STUDY_MIN_SEC,
    BADGES,
    qualifies,

    /** Streak hiện tại và tốt nhất, tính từ nhật ký học */
    streaks(today = U.dateKey()) {
      const log = store().get('log');
      let k = today;
      if (!qualifies(log[k])) k = U.addDays(today, -1);
      let cur = 0;
      while (qualifies(log[k])) {
        cur++;
        k = U.addDays(k, -1);
      }
      const keys = Object.keys(log).filter((x) => qualifies(log[x])).sort();
      let best = 0;
      let run = 0;
      let prev = null;
      keys.forEach((x) => {
        run = prev && U.daysBetween(prev, x) === 1 ? run + 1 : 1;
        best = Math.max(best, run);
        prev = x;
      });
      return { current: cur, best: Math.max(best, cur), studiedToday: qualifies(log[today]) };
    },

    level(xp = store().get('game').xp) {
      const lvl = Math.floor(Math.sqrt(xp / 60)) + 1;
      const base = 60 * (lvl - 1) ** 2;
      const next = 60 * lvl ** 2;
      return { level: lvl, xp, base, next, pct: Math.round(((xp - base) / (next - base)) * 100) };
    },

    addXP(n, today = U.dateKey()) {
      if (!n) return 0;
      store().update('game', (g) => {
        g.xp += n;
      });
      store().dayLog(today).xp += n;
      store().save('log');
      A.bus.emit('xp', n);
      return n;
    },

    /** Mục tiêu tuần hiện tại */
    weeklyGoals(today = U.dateKey()) {
      const log = store().get('log');
      const wk = U.weekKey(today);
      let days = 0;
      let sec = 0;
      let words = 0;
      let q = 0;
      for (let i = 0; i < 7; i++) {
        const l = log[U.addDays(wk, i)];
        if (!l) continue;
        if (qualifies(l)) days++;
        sec += l.sec || 0;
        words += l.words || 0;
        q += l.q || 0;
      }
      const dm = store().get('profile').dailyMinutes;
      const mocksThisWeek = store().get('mocks').filter((m) => U.dateKey(new Date(m.at)) >= wk && U.dateKey(new Date(m.at)) < U.addDays(wk, 7)).length;
      return [
        { id: 'days', icon: '📅', label: 'Học ít nhất 5 ngày', cur: days, target: 5, unit: 'ngày' },
        { id: 'minutes', icon: '⏱️', label: `Học ${dm * 5} phút`, cur: Math.round(sec / 60), target: dm * 5, unit: 'phút' },
        { id: 'words', icon: '🔤', label: 'Ôn/học 100 lượt từ vựng', cur: words, target: 100, unit: 'lượt' },
        { id: 'questions', icon: '❓', label: 'Trả lời 150 câu hỏi', cur: q, target: 150, unit: 'câu' },
        { id: 'mock', icon: '📝', label: 'Làm 1 bài Mock (từ tuần 2)', cur: mocksThisWeek, target: 1, unit: 'bài' },
      ];
    },

    /** Gom số liệu để xét huy hiệu */
    state() {
      const stats = store().get('stats');
      const log = store().get('log');
      const srs = store().get('srs');
      const mocks = store().get('mocks');
      const diag = store().get('diag').attempts;
      const st = G.streaks();
      const cards = Object.values(srs);
      const grammar = globalThis.AptisData && globalThis.AptisData.grammar ? globalThis.AptisData.grammar : [];
      const gs = (stats.grammar && stats.grammar.subs) || {};
      let gMastered = 0;
      grammar.forEach((t) => {
        const best = Math.max(0, ...['b1', 'b2', 'review'].map((lv) => (gs[t.id + ':' + lv] ? gs[t.id + ':' + lv].best || 0 : 0)));
        const b2 = Math.max(gs[t.id + ':b2'] ? gs[t.id + ':b2'].best || 0 : 0, gs[t.id + ':review'] ? gs[t.id + ':review'].best || 0 : 0);
        if (best >= 0.8 && b2 >= 0.8) gMastered++;
      });
      const acc = (m) => (stats[m] && stats[m].t ? stats[m].c / stats[m].t : 0);
      const refsN = (m) => Object.keys((stats[m] && stats[m].refs) || {}).length;
      const lastMock = mocks[mocks.length - 1];
      const d0 = diag[0];
      const d1 = diag[diag.length - 1];
      return {
        sessions: Object.values(log).reduce((n, l) => n + (l.sessions || 0), 0),
        minutes: Object.values(log).reduce((n, l) => n + (l.sec || 0), 0) / 60,
        streak: st.current,
        bestStreak: st.best,
        wordsLearned: cards.filter((c) => c.reps >= 1).length,
        wordsMastered: cards.filter((c) => c.iv >= A.srs.MASTERED_DAYS).length,
        grammarMastered: gMastered,
        grammarTotal: grammar.length,
        readingQ: (stats.reading && stats.reading.t) || 0,
        readingAcc: acc('reading'),
        listeningSets: refsN('listening'),
        listeningAcc: acc('listening'),
        writingDone: refsN('writing'),
        speakingDone: refsN('speaking'),
        mocks: mocks.length,
        lastMockProb: lastMock ? lastMock.prob : null,
        diagCount: diag.length,
        diagImprove: d0 && d1 && diag.length > 1 ? G.diagImprovement().relative : null,
        completedDays: A.plan.completedDays(),
        flags: store().get('game').flags || {},
      };
    },

    /** Tăng điểm Diagnostic: lần cuối so với lần đầu */
    diagImprovement() {
      const diag = store().get('diag').attempts;
      if (diag.length < 2) return { first: diag[0] ? diag[0].score100 : null, last: null, abs: null, relative: null, ok: false };
      const f = diag[0].score100;
      const l = diag[diag.length - 1].score100;
      const rel = f > 0 ? (l - f) / f : l > 0 ? 1 : 0;
      return { first: f, last: l, abs: l - f, relative: rel, ok: rel >= 0.2 || l >= 90 };
    },

    /** Xét huy hiệu; trả về danh sách huy hiệu mới đạt */
    checkBadges() {
      const s = G.state();
      const g = store().get('game');
      const fresh = [];
      BADGES.forEach((b) => {
        if (!g.badges[b.id] && b.test(s)) {
          g.badges[b.id] = U.dateKey();
          fresh.push(b);
        }
      });
      if (fresh.length) {
        store().save('game');
        fresh.forEach((b) => A.bus.emit('badge', b));
      }
      return fresh;
    },
  });
})();
