/* Listening: Conversation, Announcement, Interview, Discussion — nghe bằng giọng đọc của trình duyệt */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;

  const items = () => globalThis.AptisData.listening || [];
  const refStat = (id) => ((A.store.get('stats').listening || {}).refs || {})[id];
  const TYPES = ['conversation', 'announcement', 'interview', 'discussion'];

  ui.router.add(
    '/listening',
    (ctx) => {
      const L = A.labels.listening;
      const state = { type: ctx.query.type || '' };
      const m = A.store.get('stats').listening;
      const list = h('div', { class: 'grid grid-2' });
      const chips = h('div', { class: 'chips', role: 'group', 'aria-label': 'Lọc loại bài nghe' });
      function draw() {
        ui.clear(chips);
        [{ id: '', vi: 'Tất cả', icon: '🎧', name: 'All' }, ...TYPES.map((t) => ({ id: t, ...L[t] }))].forEach((c) => chips.append(h('button', { type: 'button', class: ['chipbtn', state.type === c.id && 'active'], 'aria-pressed': state.type === c.id ? 'true' : 'false', onClick: () => ((state.type = c.id), draw()) }, `${c.icon} ${c.name || c.vi}`)));
        ui.clear(list);
        items()
          .filter((x) => !state.type || x.type === state.type)
          .forEach((x) => {
            const st = refStat(x.id);
            list.append(h('a', { class: 'card card-link', href: '#/listening/' + x.id }, h('div', { class: 'row-between' }, h('h3', null, L[x.type].icon + ' ' + x.title), ui.Chip(x.level, 'neutral')), h('p', { class: 'muted small' }, `${L[x.type].name} · ${L[x.type].vi}`), h('p', { class: 'small' }, st ? ui.Chip(`Cao nhất ${Math.round((st.best || 0) * 100)}% · ${st.n} lần`, st.best >= 0.67 ? 'good' : 'warn') : ui.Chip('Chưa nghe', 'neutral'))));
          });
      }
      draw();
      const next = (state.type && A.plan.nextRef('listening', state.type)) || null;
      return {
        title: 'Listening',
        module: 'listening',
        node: h(
          'div',
          null,
          ui.PageHeader({ title: 'Listening', sub: `${items().length} bài nghe, mỗi bài 3 câu hỏi. Giọng đọc do trình duyệt tạo (text-to-speech) nên chạy offline.`, actions: ui.Button({ label: 'Bài tiếp theo gợi ý', kind: 'accent', href: '#/listening/' + (A.plan.nextRef('listening', TYPES[(A.plan.currentDay() - 1 + 1) % 4]) || items()[0].id) }) }),
          h('div', { class: 'grid grid-stats' }, ui.Stat({ icon: '🎧', label: 'Bài đã nghe', value: Object.keys((m && m.refs) || {}).length + '/' + items().length }), ui.Stat({ icon: '🎯', label: 'Độ chính xác', value: m && m.t ? Math.round((m.c / m.t) * 100) + '%' : '—' })),
          !A.tts.supported && ui.Callout('warn', 'Trình duyệt không hỗ trợ đọc văn bản. Bạn vẫn luyện được bằng cách đọc transcript.'),
          chips,
          list,
          ui.Card({ title: 'Mẹo Listening Aptis' }, h('ul', null, ['Đọc câu hỏi và đáp án trước khi nghe; gạch từ khoá.', 'Người nói thường đổi ý hoặc đính chính — đáp án là thông tin CUỐI CÙNG.', 'Cẩn thận số và giờ: thirteen/thirty, fifteen/fifty.', 'Đáp án thường diễn đạt lại (paraphrase), hiếm khi lặp nguyên từ trong bài.'].map((x) => h('li', null, x)))),
        ),
      };
    },
    'listening',
  );

  ui.router.add(
    '/listening/:id',
    (ctx) => {
      const it = items().find((x) => x.id === ctx.params.id);
      if (!it) return { redirect: '#/listening' };
      const L = A.labels.listening[it.type];
      const siblings = items().filter((x) => x.type === it.type);
      const nextItem = siblings[(siblings.indexOf(it) + 1) % siblings.length];
      const task = ui.ListeningTask(it, {
        mode: 'practice',
        onFinish: (res) => A.session.record({ module: 'listening', sub: it.type, ref: it.id, correct: res.correct, total: res.total, seconds: res.seconds }),
        extraActions: () => [ui.Button({ label: 'Bài tiếp theo →', kind: 'accent', href: '#/listening/' + nextItem.id }), ui.Button({ label: 'Nghe lại bài này', kind: 'secondary', href: `#/listening/${it.id}?r=${Date.now()}` }), ui.Button({ label: 'Danh sách', kind: 'ghost', href: '#/listening' })],
      });
      ctx.onCleanup(() => task.stop && task.stop());
      return { title: it.title, module: 'listening', node: h('div', null, ui.PageHeader({ title: `${L.icon} ${it.title}`, sub: `${L.name} · ${L.vi} · ${it.level}`, crumbs: [{ label: 'Listening', href: '#/listening' }, { label: it.title }] }), task) };
    },
    'listening',
  );
})();
