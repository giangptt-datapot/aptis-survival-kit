/* Truy vấn kho từ vựng + sinh câu hỏi quiz tự động */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const U = A.util;

  const CATS = [
    { id: 'education', en: 'Education', vi: 'Giáo dục', icon: '🎓' },
    { id: 'technology', en: 'Technology', vi: 'Công nghệ', icon: '💻' },
    { id: 'business', en: 'Business', vi: 'Kinh doanh', icon: '💼' },
    { id: 'environment', en: 'Environment', vi: 'Môi trường', icon: '🌱' },
    { id: 'travel', en: 'Travel', vi: 'Du lịch', icon: '✈️' },
    { id: 'health', en: 'Health', vi: 'Sức khoẻ', icon: '🩺' },
    { id: 'work', en: 'Work', vi: 'Công việc', icon: '🏢' },
    { id: 'dailylife', en: 'Daily Life', vi: 'Đời sống', icon: '🏠' },
  ];

  let cache = null;
  const byId = new Map();

  function build() {
    if (cache) return cache;
    const raw = (globalThis.AptisData && globalThis.AptisData.vocab) || {};
    cache = [];
    for (const c of CATS) {
      (raw[c.id] || []).forEach((r, i) => {
        const o = { id: r[0].toLowerCase(), cat: c.id, order: i, w: r[0], pos: r[1], ipa: r[2], vi: r[3], ex: r[4], col: r[5], lv: r[6] };
        cache.push(o);
        byId.set(o.id, o);
      });
    }
    return cache;
  }

  const V = (A.vocabdb = {
    cats: CATS,
    cat: (id) => CATS.find((c) => c.id === id),
    all: build,
    get: (id) => (build(), byId.get(id)),
    byCat: (cat) => build().filter((w) => w.cat === cat),
    count: () => build().length,

    /** Câu ví dụ với chỗ trống thay cho từ (nhận cả dạng chia) */
    cloze(word) {
      const first = word.w.toLowerCase().split(/\s+/)[0].replace(/[^a-z-]/g, '');
      const stem = first.slice(0, Math.max(3, first.length - 3));
      const re = new RegExp('\\b' + U.escapeRegExp(stem) + '[\\p{L}-]*', 'iu');
      return re.test(word.ex) ? word.ex.replace(re, '_____') : null;
    },

    /** Sinh câu hỏi quiz. kinds: 'en2vi' | 'vi2en' | 'cloze' */
    makeQuestions(words, { kinds = ['en2vi', 'vi2en', 'cloze'], rnd = Math.random } = {}) {
      const all = build();
      return words.map((w, i) => {
        let kind = kinds[(i + Math.floor(rnd() * kinds.length)) % kinds.length];
        const blank = kind === 'cloze' ? V.cloze(w) : null;
        if (kind === 'cloze' && !blank) kind = 'en2vi';
        // ứng viên gây nhiễu: cùng từ loại, ưu tiên cùng chủ đề
        const samePos = all.filter((x) => x.id !== w.id && x.pos === w.pos);
        const sameCat = samePos.filter((x) => x.cat === w.cat);
        const pool = U.shuffle(sameCat.length >= 6 ? sameCat : samePos.length >= 3 ? samePos : all.filter((x) => x.id !== w.id), rnd);
        const used = new Set();
        const distract = [];
        for (const x of pool) {
          const key = kind === 'vi2en' || kind === 'cloze' ? x.w.toLowerCase() : x.vi.toLowerCase();
          const correctKey = kind === 'vi2en' || kind === 'cloze' ? w.w.toLowerCase() : w.vi.toLowerCase();
          if (key === correctKey || used.has(key)) continue;
          used.add(key);
          distract.push(x);
          if (distract.length === 3) break;
        }
        let q, o, correct;
        if (kind === 'en2vi') {
          q = `“${w.w}” (${w.pos}) nghĩa là gì?`;
          correct = w.vi;
          o = [correct, ...distract.map((x) => x.vi)];
        } else if (kind === 'vi2en') {
          q = `Từ tiếng Anh nào có nghĩa “${w.vi}”?`;
          correct = w.w;
          o = [correct, ...distract.map((x) => x.w)];
        } else {
          q = blank;
          correct = w.w;
          o = [correct, ...distract.map((x) => x.w)];
        }
        const order = U.shuffle(o.map((_, j) => j), rnd);
        const opts = order.map((j) => o[j]);
        const a = opts.indexOf(correct);
        return {
          q,
          o: opts,
          a,
          e: `${w.w} ${w.ipa} — ${w.vi}.\nVí dụ: ${w.ex}\nKết hợp: ${w.col}`,
          tag: 'vocab',
          hint: kind === 'cloze' ? 'Chọn từ điền vào chỗ trống (có thể phải chia dạng từ).' : '',
          wordId: w.id,
        };
      });
    },
  });
})();
