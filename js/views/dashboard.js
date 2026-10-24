/* Dashboard: ngày X/30, tiến độ, streak, điểm mục tiêu B2, lịch, nhiệm vụ hôm nay */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;
  const U = A.util;

  const TIPS = [
    'Mỗi ngày 30 phút đều đặn tốt hơn một buổi 3 giờ rồi bỏ.',
    'Đọc câu hỏi trước khi đọc đoạn văn — bạn sẽ biết cần tìm gì.',
    'Câu nào không chắc: loại 1–2 đáp án sai rồi đoán, đừng để trống.',
    'Nghe lần 1 để nắm ý chung, lần 2 để bắt số liệu và đính chính.',
    'Mỗi bài Writing chép lại 3 cụm hay từ bài mẫu vào sổ tay.',
    'Nói to thành tiếng, kể cả khi không ghi âm — miệng cần luyện như tay.',
    'Ôn thẻ từ vựng đến hạn trước, học từ mới sau.',
    'Gặp từ lạ khi đọc: đoán nghĩa từ ngữ cảnh trước khi tra.',
    'Ngủ đủ trước ngày thi thử: trí nhớ được củng cố khi ngủ.',
    'Lỗi lặp lại nhiều nhất của bạn là gì? Ghi ra và sửa đúng một lỗi mỗi tuần.',
  ];

  ui.router.add(
    '/',
    () => {
      const store = A.store;
      const profile = store.get('profile');
      const raw = A.plan.rawDay();
      const day = A.plan.currentDay();
      const dd = A.plan.day(day);
      const wk = A.plan.weekOf(day);
      const tasks = A.plan.tasksFor(day);
      const doneN = tasks.filter((t) => A.plan.isDone(t.id)).length;
      const overall = A.plan.overall();
      const next = tasks.find((t) => !A.plan.isDone(t.id));
      const est = A.scoring.estimates();
      const overallEst = A.scoring.overallEstimate();
      const st = A.game.streaks();
      const lv = A.game.level();
      const totalSec = Object.values(store.get('log')).reduce((n, l) => n + (l.sec || 0), 0);
      const todaySec = (store.dayLog(U.dateKey(), false) || {}).sec || 0;
      const diag = store.get('diag').attempts;
      const mocks = store.get('mocks');
      const lastMock = mocks[mocks.length - 1];
      const srs = store.get('srs');
      const dueN = Object.values(srs).filter((c) => A.srs.isDue(c)).length;
      const greeting = profile.name ? `Chào ${profile.name}!` : 'Chào bạn!';
      const examLeft = A.plan.daysToExam();

      const root = h('div', { class: 'dash' });

      // --- Hero ---
      const heroCta = !diag.length
        ? ui.Button({ label: 'Làm Diagnostic Test (~20 phút)', kind: 'accent', icon: '🧭', href: '#/diagnostic?form=A' })
        : next
        ? ui.Button({ label: `Làm tiếp: ${next.label}`, kind: 'accent', icon: (A.labels.modules[next.module] || {}).icon, href: next.route })
        : ui.Button({ label: 'Hôm nay đã xong! Luyện thêm', kind: 'accent', icon: '🎉', href: '#/practice' });
      root.append(
        h(
          'section',
          { class: 'hero hero-dash' },
          h(
            'div',
            { class: 'hero-main' },
            h('p', { class: 'eyebrow' }, raw > A.plan.DAYS ? 'Bạn đã đi qua lộ trình 30 ngày' : `Tuần ${wk.n}: ${wk.title} · ${wk.vi}`),
            h('h1', null, greeting + (raw > A.plan.DAYS ? ' Tiếp tục ôn tập nhé' : ` Hôm nay là Ngày ${day}/${A.plan.DAYS}`)),
            h('p', { class: 'lead' }, raw > A.plan.DAYS ? 'Làm thêm Mock Test và vá điểm yếu cho đến ngày thi.' : `${dd.title} — ${dd.focus}`),
            examLeft != null && examLeft >= 0 && h('p', { class: 'chip chip-primary' }, `Còn ${examLeft} ngày tới ngày thi`),
            h('div', { class: 'quiz-actions' }, heroCta, !diag.length ? ui.Button({ label: 'Hoặc luyện ngay', kind: 'secondary', href: '#/practice' }) : ui.Button({ label: 'Xem lộ trình', kind: 'secondary', href: `#/roadmap/day/${day}` })),
          ),
          h('div', { class: 'hero-side' }, ui.Ring({ value: overall.pct, size: 120, stroke: 12, label: overall.pct + '%', sub: 'lộ trình' })),
        ),
      );

      // --- Thống kê ---
      root.append(
        h(
          'div',
          { class: 'grid grid-stats' },
          ui.Stat({ icon: '🔥', label: 'Streak', value: st.current + ' ngày', sub: `Tốt nhất ${st.best} ngày${st.studiedToday ? ' · hôm nay đã học ✓' : ''}`, tone: 'warn' }),
          ui.Stat({ icon: '⏱️', label: 'Đã học', value: U.fmtHours(totalSec) + ' giờ', sub: `Hôm nay ${Math.round(todaySec / 60)}/${profile.dailyMinutes} phút` }),
          ui.Stat({ icon: '🎯', label: 'Điểm hiện tại → mục tiêu B2', value: overallEst == null ? '—' : `${Math.round(overallEst)}/50`, sub: `Mục tiêu ${A.scoring.B2_MIN}/50` + (overallEst != null ? ` · ${A.scoring.cefr(overallEst)}` : '') }),
          ui.Stat({ icon: '⭐', label: 'Cấp độ', value: 'Lv ' + lv.level, sub: `${lv.xp} XP · còn ${lv.next - lv.xp} XP lên cấp`, tone: 'good' }),
        ),
      );

      // --- Hai cột: nhiệm vụ + B2 ---
      const todayCard = ui.Card({ title: `Nhiệm vụ hôm nay (${doneN}/${tasks.length})`, sub: `Tổng ${U.sum(tasks.map((t) => t.minutes))} phút · ${A.labels.modules.vocab.icon} bắt đầu từ việc dễ nhất`, actions: ui.Button({ label: 'Chi tiết ngày', kind: 'ghost', size: 'sm', href: `#/roadmap/day/${day}` }) });
      const prog = h('div', { class: 'mb' }, ui.Progress({ value: tasks.length ? (doneN / tasks.length) * 100 : 0, label: 'Tiến độ hôm nay', tone: 'accent' }));
      todayCard.append(prog, ui.TaskList(day, { onChange: () => ui.router.refresh() }));
      if (dueN) todayCard.append(h('p', { class: 'callout callout-info' }, `📇 Có ${dueN} thẻ từ vựng đến hạn ôn. `, h('a', { href: '#/vocab/cards?mode=due' }, 'Ôn ngay →')));

      const readiness = ui.Card(
        { title: 'Sẵn sàng B2?', sub: lastMock ? `Từ Mock ngày ${U.fmtDate(U.dateKey(new Date(lastMock.at)))}` : 'Chưa có Mock — đang dùng ước tính' },
        h('div', { class: 'readiness' }, ui.Ring({ value: lastMock ? Math.round(lastMock.prob * 100) : 0, size: 96, stroke: 10, label: lastMock ? Math.round(lastMock.prob * 100) + '%' : '—', sub: 'xác suất đạt B2', tone: lastMock && lastMock.prob >= 0.8 ? 'good' : 'primary' }), h('p', { class: 'muted small' }, lastMock ? (lastMock.prob >= 0.8 ? 'Bạn đang ở ngưỡng mục tiêu (≥ 80%). Giữ phong độ!' : 'Mục tiêu: ≥ 80% ở Mock gần nhất.') : 'Làm Mini/Full Mock để có xác suất đạt B2.')),
        ui.SkillBars(est),
        h('div', { class: 'quiz-actions' }, ui.Button({ label: 'Làm Mock Test', kind: 'primary', href: '#/mock' }), ui.Button({ label: 'Phân tích chi tiết', kind: 'ghost', href: '#/analytics' })),
      );
      root.append(h('div', { class: 'grid grid-2' }, todayCard, readiness));

      // --- Lịch + mục tiêu tuần ---
      const goals = A.game.weeklyGoals();
      root.append(
        h(
          'div',
          { class: 'grid grid-2' },
          ui.Card({ title: 'Lịch học 30 ngày', sub: `Bắt đầu ${U.fmtDate(A.plan.startDate())}` }, ui.Calendar()),
          ui.Card(
            { title: 'Mục tiêu tuần này', sub: 'Đặt lại mỗi thứ Hai' },
            goals.map((g) => h('div', { class: 'goal' }, h('div', { class: 'goal-head' }, h('span', null, g.icon + ' ' + g.label), h('span', { class: 'muted small' }, `${Math.min(g.cur, g.target)}/${g.target} ${g.unit}${g.cur >= g.target ? ' ✓' : ''}`)), ui.Progress({ value: (g.cur / g.target) * 100, tone: g.cur >= g.target ? 'good' : 'primary', thin: true, label: g.label }))),
            h('p', { class: 'callout callout-tip' }, '💡 ' + TIPS[(day - 1) % TIPS.length]),
          ),
        ),
      );

      // --- Luyện nhanh ---
      root.append(
        ui.Card(
          { title: 'Luyện nhanh (Practice First)', sub: 'Bấm vào và làm ngay, 5–10 phút.' },
          h(
            'div',
            { class: 'quick' },
            ['vocab', 'grammar', 'reading', 'listening', 'writing', 'speaking'].map((m) => h('a', { class: 'quick-item', href: A.labels.modules[m].route }, h('span', { class: 'quick-icon', 'aria-hidden': 'true' }, A.labels.modules[m].icon), h('strong', null, A.labels.modules[m].name))),
          ),
        ),
      );

      return { title: 'Dashboard', module: 'home', node: root };
    },
    'home',
  );
})();
