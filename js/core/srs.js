/* Lặp lại ngắt quãng (spaced repetition) — biến thể SM-2 gọn.
   Chấm: 0 = Quên, 1 = Khó, 2 = Được, 3 = Dễ. */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const U = A.util;

  const SRS = (A.srs = {
    MASTERED_DAYS: 21,

    /** Tính thẻ mới sau khi chấm. `card` có thể undefined (từ mới). */
    grade(card, g, today = U.dateKey()) {
      const c = Object.assign({ ef: 2.5, iv: 0, reps: 0, lapses: 0, due: today, last: today }, card || {});
      if (g === 0) {
        c.reps = 0;
        c.lapses += 1;
        c.iv = 0;
        c.ef = Math.max(1.3, c.ef - 0.2);
        c.due = today; // học lại ngay trong phiên
      } else {
        if (g === 1) {
          c.iv = c.reps === 0 ? 1 : Math.max(1, Math.round(c.iv * 1.2));
          c.ef = Math.max(1.3, c.ef - 0.15);
        } else if (g === 2) {
          c.iv = c.reps === 0 ? 1 : c.reps === 1 ? 3 : Math.round(c.iv * c.ef);
        } else {
          c.iv = c.reps === 0 ? 3 : Math.round(c.iv * c.ef * 1.3);
          c.ef = c.ef + 0.15;
        }
        c.reps += 1;
        c.due = U.addDays(today, c.iv);
      }
      c.last = today;
      return c;
    },

    /** Nhãn khoảng nghỉ dự kiến cho 4 nút chấm */
    preview(card, today = U.dateKey()) {
      return [0, 1, 2, 3].map((g) => {
        const n = SRS.grade(card, g, today);
        return g === 0 ? 'lại ngay' : n.iv === 1 ? '1 ngày' : n.iv + ' ngày';
      });
    },

    isDue: (card, today = U.dateKey()) => !!card && card.due <= today,

    /** 'new' | 'learning' | 'mastered' */
    status(card) {
      if (!card) return 'new';
      return card.iv >= SRS.MASTERED_DAYS ? 'mastered' : 'learning';
    },
  });
})();
