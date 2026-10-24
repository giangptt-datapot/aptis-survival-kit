/* Widget cấp trang dùng ở nhiều màn hình: danh sách nhiệm vụ, thanh kỹ năng, lịch 30 ngày */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = (A.ui = A.ui || {});
  const U = A.util;
  const { h } = ui;

  /** Danh sách nhiệm vụ của ngày d, có checkbox đánh dấu thủ công */
  ui.TaskList = (d, { onChange, compact } = {}) => {
    const root = h('ul', { class: ['tasks', compact && 'tasks-compact'] });
    function draw() {
      ui.clear(root);
      A.plan.tasksFor(d).forEach((t) => {
        const done = A.plan.isDone(t.id);
        const id = 'tk-' + t.id.replace('.', '-');
        root.append(
          h(
            'li',
            { class: ['task-row', done && 'done'] },
            h('input', { type: 'checkbox', id, checked: done, onChange: (e) => (A.plan.setDone(t.id, e.target.checked), draw(), onChange && onChange()) }),
            h(
              'label',
              { for: id },
              h('span', { class: 'task-title' }, h('span', { 'aria-hidden': 'true' }, (A.labels.modules[t.module] || {}).icon + ' '), t.label, t.priority && h('span', { class: 'chip chip-warn', title: 'Kỹ năng yếu của bạn — thêm thời gian' }, '⭐ ưu tiên')),
              h('span', { class: 'task-desc muted small' }, t.desc),
            ),
            h('span', { class: 'task-min muted small' }, t.minutes + ' phút'),
            h('a', { class: ['btn btn-sm', done ? 'btn-ghost' : 'btn-primary'], href: t.route }, done ? 'Làm lại' : 'Làm ngay'),
          ),
        );
      });
    }
    draw();
    return root;
  };

  /** Thanh điểm từng kỹ năng với vạch mục tiêu B2 (38/50) */
  ui.SkillBars = (est) =>
    h(
      'div',
      { class: 'skillbars' },
      A.scoring.SKILLS.map((s) => {
        const e = est[s.id];
        const v = e && e.score != null ? e.score : null;
        return h(
          'div',
          { class: 'skillbar' },
          h('div', { class: 'skillbar-head' }, h('span', null, s.icon + ' ' + s.short), h('span', { class: 'muted small' }, v == null ? 'chưa có dữ liệu' : `${v}/50 · ${A.scoring.cefr(v)}`)),
          h('div', { class: 'skillbar-track', role: 'img', 'aria-label': `${s.name}: ${v == null ? 'chưa có' : v + ' trên 50'}, mục tiêu ${A.scoring.B2_MIN}` }, h('div', { class: ['skillbar-fill', v != null && v >= A.scoring.B2_MIN && 'ok'], style: { width: (v == null ? 0 : (v / 50) * 100) + '%' } }), h('div', { class: 'skillbar-tick', style: { left: (A.scoring.B2_MIN / 50) * 100 + '%' }, title: 'Mục tiêu B2' })),
        );
      }),
      h('p', { class: 'muted small' }, 'Vạch dọc = ngưỡng B2 ước lượng (38/50). Nguồn điểm: Mock gần nhất → Diagnostic → luyện tập.'),
    );

  /** Lịch 30 ngày xếp theo thứ trong tuần */
  ui.Calendar = () => {
    const start = A.plan.startDate();
    const offset = (U.parseKey(start).getDay() + 6) % 7;
    const today = A.plan.currentDay();
    const raw = A.plan.rawDay();
    const grid = h('div', { class: 'calendar', role: 'grid', 'aria-label': 'Lịch học 30 ngày' });
    ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].forEach((w) => grid.append(h('div', { class: 'cal-h', role: 'columnheader' }, w)));
    for (let i = 0; i < offset; i++) grid.append(h('div', { class: 'cal-empty', 'aria-hidden': 'true' }));
    for (let d = 1; d <= A.plan.DAYS; d++) {
      const s = A.plan.dayStatus(d);
      const dd = A.plan.day(d);
      let state = 'future';
      if (s.complete) state = 'done';
      else if (d < raw) state = s.done ? 'part' : 'missed';
      else if (d === today && raw <= A.plan.DAYS) state = s.done ? 'part' : 'today';
      if (d === today && raw <= A.plan.DAYS && !s.complete) state += ' is-today';
      const label = `Ngày ${d}: ${dd.title}. ${s.done}/${s.total} nhiệm vụ.`;
      grid.append(
        h('a', { class: 'cal-day state-' + state.replace(' ', ' '), href: `#/roadmap/day/${d}`, role: 'gridcell', 'aria-label': label, title: label }, h('span', { class: 'cal-n' }, d), h('span', { class: 'cal-date' }, U.fmtDate(A.plan.dateOfDay(d))), dd.special && h('span', { class: 'cal-flag', 'aria-hidden': 'true' }, dd.special.startsWith('mock') ? '📝' : '🧭')),
      );
    }
    return h(
      'div',
      null,
      grid,
      h('div', { class: 'legend small muted' }, h('span', null, h('i', { class: 'swatch sw-done' }), 'Hoàn thành'), h('span', null, h('i', { class: 'swatch sw-part' }), 'Một phần'), h('span', null, h('i', { class: 'swatch sw-missed' }), 'Bỏ lỡ'), h('span', null, '📝 Mock · 🧭 Diagnostic')),
    );
  };

  /** Liên kết "bài tiếp theo" dùng chung */
  ui.linkBtn = (href, label, kind = 'secondary', icon) => ui.Button({ label, href, kind, icon });
})();
