/* Lộ trình 30 ngày: tổng quan 4 tuần + chi tiết từng ngày */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;
  const U = A.util;

  ui.router.add(
    '/roadmap',
    () => {
      const raw = A.plan.rawDay();
      const cur = A.plan.currentDay();
      const overall = A.plan.overall();
      const root = h('div', null, ui.PageHeader({ title: 'Lộ trình 30 ngày', sub: `Ngày 1 = ${U.fmtDate(A.plan.startDate())}. Hoàn thành ${A.plan.completedDays()}/30 ngày đầy đủ · ${overall.pct}% nhiệm vụ.`, actions: ui.Button({ label: 'Hôm nay (Ngày ' + cur + ')', kind: 'accent', href: '#/roadmap/day/' + cur }) }));
      A.plan.data().weeks.forEach((w) => {
        const grid = h('div', { class: 'daygrid' });
        for (let d = w.range[0]; d <= w.range[1]; d++) {
          const s = A.plan.dayStatus(d);
          const dd = A.plan.day(d);
          const state = s.complete ? 'done' : d === cur && raw <= 30 ? 'today' : d < raw ? (s.done ? 'part' : 'missed') : 'future';
          grid.append(
            h(
              'a',
              { class: 'daycard state-' + state, href: '#/roadmap/day/' + d },
              h('div', { class: 'daycard-head' }, h('strong', null, 'Ngày ' + d), h('span', { class: 'muted small' }, U.fmtDate(A.plan.dateOfDay(d)))),
              h('div', { class: 'daycard-title' }, dd.title),
              h('div', { class: 'daycard-foot muted small' }, dd.special ? (dd.special.startsWith('mock') ? '📝 Mock' : '🧭 Diagnostic') : s.minutes + ' phút', ' · ', `${s.done}/${s.total}`, s.complete ? ' ✓' : ''),
            ),
          );
        }
        root.append(ui.Card({ title: `Tuần ${w.n}: ${w.title} (${w.vi})`, sub: w.goal }, grid));
      });
      return { title: 'Lộ trình 30 ngày', module: 'roadmap', node: root };
    },
    'roadmap',
  );

  ui.router.add(
    '/roadmap/day/:n',
    (ctx) => {
      const d = Number(ctx.params.n);
      if (!(d >= 1 && d <= A.plan.DAYS)) return { redirect: '#/roadmap' };
      const dd = A.plan.day(d);
      const wk = A.plan.weekOf(d);
      const s = A.plan.dayStatus(d);
      const raw = A.plan.rawDay();
      const when = d === raw ? 'Hôm nay' : d < raw ? 'Đã qua' : 'Sắp tới';
      const sum = h('div', { class: 'mb' });
      const drawSum = () => {
        const st = A.plan.dayStatus(d);
        ui.clear(sum);
        sum.append(h('p', null, `${st.done}/${st.total} nhiệm vụ · tổng ${st.minutes} phút`), ui.Progress({ value: st.total ? (st.done / st.total) * 100 : 0, tone: 'accent', label: 'Tiến độ ngày' }));
      };
      drawSum();
      const node = h(
        'div',
        null,
        ui.PageHeader({
          title: `Ngày ${d}: ${dd.title}`,
          sub: dd.focus,
          crumbs: [{ label: 'Lộ trình', href: '#/roadmap' }, { label: `Tuần ${wk.n} · ${wk.title}` }],
          actions: [d > 1 && ui.Button({ label: '← Ngày ' + (d - 1), kind: 'ghost', size: 'sm', href: '#/roadmap/day/' + (d - 1) }), d < A.plan.DAYS && ui.Button({ label: 'Ngày ' + (d + 1) + ' →', kind: 'ghost', size: 'sm', href: '#/roadmap/day/' + (d + 1) })],
        }),
        ui.Card({ title: `${when} · ${U.fmtDate(A.plan.dateOfDay(d))}`, sub: `Thời lượng mục tiêu ${A.store.get('profile').dailyMinutes} phút/ngày (đổi trong Cài đặt)` }, sum, ui.TaskList(d, { onChange: drawSum })),
        dd.special && ui.Callout('info', dd.special.startsWith('mock') ? 'Ngày thi thử: hãy làm trong điều kiện như thi thật (yên tĩnh, bấm giờ, không tra từ). Mock lưu tiến độ nên bạn có thể chia làm 2 lần.' : 'Diagnostic: làm trung thực, không tra từ điển.'),
        ui.Card({ title: 'Checklist cuối ngày' }, h('ul', { class: 'checklist' }, ['Đã làm xong các nhiệm vụ trên (hoặc đánh dấu hoàn thành)', 'Đã ôn thẻ từ vựng đến hạn', 'Ghi 1–3 điều học được hoặc lỗi hay mắc vào sổ tay', 'Xem nhanh nhiệm vụ ngày mai'].map((t, i) => h('li', null, h('label', null, h('input', { type: 'checkbox', onChange: (e) => saveNote(d, i, e.target.checked), checked: !!(A.store.get('plan').notes[`d${d}.c${i}`]) }), ' ' + t))))),
      );
      return { title: `Ngày ${d}`, module: 'roadmap', node };
    },
    'roadmap',
  );

  function saveNote(d, i, on) {
    A.store.update('plan', (p) => {
      if (on) p.notes[`d${d}.c${i}`] = 1;
      else delete p.notes[`d${d}.c${i}`];
    });
  }
})();
