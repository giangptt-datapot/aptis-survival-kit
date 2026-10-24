/* Ghi nhận kết quả một phiên luyện tập: thống kê, nhật ký ngày, XP, nhiệm vụ lộ trình, huy hiệu */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const U = A.util;
  const store = () => A.store;

  A.session = {
    /**
     * record({ module, sub, ref, correct, total, seconds, rating })
     * - module: vocab | grammar | reading | listening | writing | speaking
     * - sub: nhóm con (vd "tenses:b1", "sentence")
     * - ref: id đề cụ thể (vd "rs1")
     * - rating: điểm tự chấm 0–5 (Writing/Speaking)
     */
    record({ module, sub = '', ref = '', correct = 0, total = 0, seconds = 0, rating = null, countSession = true }) {
      const today = U.dateKey();
      let xp = 0;

      store().update('stats', (s) => {
        const m = (s[module] = s[module] || { c: 0, t: 0, n: 0, sec: 0, subs: {}, refs: {} });
        m.c += correct;
        m.t += total;
        m.n += 1;
        m.sec += seconds;
        const acc = total ? correct / total : null;
        const bump = (o, k) => {
          const r = (o[k] = o[k] || { c: 0, t: 0, n: 0, best: null, last: null, at: 0 });
          r.c += correct;
          r.t += total;
          r.n += 1;
          if (acc != null) {
            r.last = acc;
            r.best = r.best == null ? acc : Math.max(r.best, acc);
          }
          if (rating != null) r.rating = rating;
          r.at = Date.now();
        };
        if (sub) bump(m.subs, sub);
        if (ref) bump(m.refs, ref);
      });

      const dl = store().dayLog(today);
      dl.q += total;
      dl.c += correct;
      if (countSession) dl.sessions += 1;
      store().save('log');

      // XP
      if (total) {
        xp += correct * 2 + 10;
        if (total >= 5 && correct / total >= 0.8) xp += 20;
      } else {
        xp += 25; // Writing / Speaking tự chấm
      }
      if (total >= 8 && correct === total) {
        store().update('game', (g) => {
          g.flags = g.flags || {};
          g.flags.perfect = true;
        });
      }

      let task = null;
      if (countSession) {
        task = A.plan.completeModule(module);
        if (task) {
          xp += 15;
          if (A.plan.dayStatus(A.plan.currentDay()).complete) xp += 40;
        }
      }
      A.game.addXP(xp, today);
      const badges = A.game.checkBadges();
      const out = { xp, task, badges };
      A.bus.emit('session', out);
      return out;
    },

    /** Ghi nhận học từ vựng (số lượt ôn thẻ) */
    recordWords(n) {
      const dl = store().dayLog();
      dl.words += n;
      store().save('log');
    },
  };
})();
