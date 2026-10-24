/* Thành tích: XP, cấp độ, streak, mục tiêu tuần, huy hiệu */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;
  const U = A.util;

  ui.router.add(
    '/achievements',
    () => {
      A.game.checkBadges();
      const g = A.store.get('game');
      const lv = A.game.level();
      const st = A.game.streaks();
      const s = A.game.state();
      const goals = A.game.weeklyGoals();
      const earned = A.game.BADGES.filter((b) => g.badges[b.id]).length;
      const grid = h('div', { class: 'grid grid-4 badges' });
      A.game.BADGES.forEach((b) => {
        const got = g.badges[b.id];
        const pr = b.prog ? b.prog(s) : null;
        grid.append(
          h(
            'div',
            { class: ['badge', got ? 'earned' : 'locked'] },
            h('div', { class: 'badge-icon', 'aria-hidden': 'true' }, b.icon),
            h('strong', null, b.name),
            h('span', { class: 'muted small' }, b.vi),
            got ? h('span', { class: 'chip chip-good' }, 'Đạt ' + U.fmtDate(got)) : pr ? [ui.Progress({ value: Math.min(100, (pr[0] / pr[1]) * 100), thin: true, label: b.name }), h('span', { class: 'small muted' }, `${Math.min(pr[0], pr[1])}/${pr[1]}`)] : h('span', { class: 'chip chip-neutral' }, 'Chưa đạt'),
            h('span', { class: 'sr-only' }, got ? ' (đã đạt)' : ' (chưa đạt)'),
          ),
        );
      });
      return {
        title: 'Thành tích',
        module: 'achievements',
        node: h(
          'div',
          null,
          ui.PageHeader({ title: 'Thành tích', sub: `${earned}/${A.game.BADGES.length} huy hiệu` }),
          h(
            'div',
            { class: 'grid grid-stats' },
            ui.Stat({ icon: '⭐', label: 'Cấp độ', value: 'Lv ' + lv.level, sub: `${lv.xp} XP · cần ${lv.next} XP để lên Lv ${lv.level + 1}` }),
            ui.Stat({ icon: '🔥', label: 'Streak hiện tại', value: st.current + ' ngày', sub: `Kỷ lục ${st.best} ngày`, tone: 'warn' }),
            ui.Stat({ icon: '⏱️', label: 'Tổng thời gian', value: U.fmtHours(s.minutes * 60) + ' giờ' }),
            ui.Stat({ icon: '🧠', label: 'Từ đã thuộc', value: s.wordsMastered, sub: `${s.wordsLearned} từ đã học` }),
          ),
          ui.Card({ title: 'Tiến độ lên cấp' }, ui.Progress({ value: lv.pct, tone: 'accent', label: 'XP' }), h('p', { class: 'muted small' }, `Kiếm XP: +2/câu đúng, +10/phiên, +20 khi ≥ 80%, +15/nhiệm vụ lộ trình, +40 khi xong cả ngày, +100/Mock.`)),
          ui.Card({ title: 'Mục tiêu tuần này' }, goals.map((x) => h('div', { class: 'goal' }, h('div', { class: 'goal-head' }, h('span', null, x.icon + ' ' + x.label), h('span', { class: 'muted small' }, `${Math.min(x.cur, x.target)}/${x.target} ${x.unit}${x.cur >= x.target ? ' ✓' : ''}`)), ui.Progress({ value: (x.cur / x.target) * 100, tone: x.cur >= x.target ? 'good' : 'primary', thin: true, label: x.label })))),
          h('h2', null, 'Huy hiệu'),
          grid,
        ),
      };
    },
    'achievements',
  );
})();
