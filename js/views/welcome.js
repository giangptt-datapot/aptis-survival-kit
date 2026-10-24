/* Màn chào + thiết lập mục tiêu (lần đầu truy cập) */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;
  const U = A.util;

  ui.router.add(
    '/welcome',
    () => {
      const p = A.store.get('profile');
      const state = { name: p.name || '', dailyMinutes: p.dailyMinutes || 60, examDate: p.examDate || '' };

      const save = (go) => {
        A.store.update('profile', (pr) => {
          pr.name = state.name.trim();
          pr.dailyMinutes = state.dailyMinutes;
          pr.examDate = state.examDate;
          pr.onboarded = true;
        });
        A.plan.ensureStart();
        A.bus.emit('xp', 0);
        ui.router.go(go);
      };

      const mins = [
        [30, '30 phút', 'Tối thiểu để giữ nhịp: từ vựng + 2 kỹ năng mỗi ngày.'],
        [60, '60 phút', 'Khuyến nghị: đủ cả 6 hoạt động mỗi ngày.'],
        [90, '90 phút', 'Tăng tốc: thêm thời gian cho mỗi kỹ năng.'],
      ];
      const radios = mins.map(([v, t, d]) =>
        h('label', { class: ['choice', state.dailyMinutes === v && 'selected'] }, h('input', { type: 'radio', name: 'mins', value: v, checked: state.dailyMinutes === v, onChange: () => ((state.dailyMinutes = v), radios.forEach((r, i) => r.classList.toggle('selected', mins[i][0] === v))) }), h('strong', null, t), h('span', { class: 'muted small' }, d)),
      );

      return {
        title: 'Chào mừng',
        module: 'home',
        node: h(
          'div',
          { class: 'welcome' },
          h('section', { class: 'hero' }, h('p', { class: 'eyebrow' }, 'Aptis ESOL · lộ trình B2 trong 30 ngày'), h('h1', null, 'Aptis B2 Survival Kit'), h('p', { class: 'lead' }, 'Học theo triết lý ', h('strong', null, '“Practice First, Theory Later”'), ': làm bài ngay, đọc lý thuyết khi cần. Mọi dữ liệu nằm trong trình duyệt của bạn — không cần tài khoản, không cần mạng.')),
          h(
            'div',
            { class: 'grid grid-3' },
            [['🧭', 'Biết mình đang ở đâu', 'Diagnostic ~20 phút cho ra trình độ hiện tại, điểm mạnh/yếu và gợi ý kế hoạch.'], ['🗺️', 'Lộ trình từng ngày', '30 ngày × nhiệm vụ rõ ràng: Từ vựng, Ngữ pháp, Reading, Listening, Writing, Speaking.'], ['📝', 'Thi thử & xác suất đạt B2', 'Mock Test mô phỏng bài thi, chấm CEFR ước tính và xác suất đạt B2.']].map(([i, t, d]) => ui.Card({}, h('div', { class: 'big-emoji', 'aria-hidden': 'true' }, i), h('h3', null, t), h('p', { class: 'muted' }, d))),
          ),
          ui.Card(
            { title: 'Thiết lập nhanh (30 giây)', sub: 'Có thể đổi bất cứ lúc nào trong Cài đặt.' },
            h(
              'div',
              { class: 'form' },
              h('label', { class: 'field' }, h('span', null, 'Tên bạn (không bắt buộc)'), h('input', { type: 'text', maxlength: 40, value: state.name, placeholder: 'Ví dụ: Lan', autocomplete: 'given-name', onInput: (e) => (state.name = e.target.value) })),
              h('fieldset', { class: 'field' }, h('legend', null, 'Bạn học được bao nhiêu mỗi ngày?'), h('div', { class: 'choices' }, radios)),
              h('label', { class: 'field' }, h('span', null, 'Ngày thi dự kiến (không bắt buộc)'), h('input', { type: 'date', value: state.examDate, min: U.dateKey(), onInput: (e) => (state.examDate = e.target.value) })),
            ),
            h('div', { class: 'quiz-actions' }, ui.Button({ label: 'Bắt đầu Diagnostic (~20 phút)', kind: 'accent', icon: '🧭', onClick: () => save('#/diagnostic?form=A&first=1') }), ui.Button({ label: 'Bỏ qua, vào Dashboard', kind: 'ghost', onClick: () => save('#/') })),
            h('p', { class: 'muted small' }, 'Gợi ý: làm Diagnostic trước để lộ trình ưu tiên đúng kỹ năng yếu của bạn.'),
          ),
        ),
      };
    },
    'home',
  );
})();
