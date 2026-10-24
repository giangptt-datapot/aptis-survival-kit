/* Trung tâm luyện tập: 6 mô-đun với thống kê nhanh */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;

  ui.router.add(
    '/practice',
    () => {
      const stats = A.store.get('stats');
      const srs = A.store.get('srs');
      const D = globalThis.AptisData;
      const learned = Object.values(srs).filter((c) => c.reps >= 1).length;
      const due = Object.values(srs).filter((c) => A.srs.isDue(c)).length;
      const acc = (m) => (stats[m] && stats[m].t ? Math.round((stats[m].c / stats[m].t) * 100) + '% đúng' : 'chưa làm');
      const refs = (m) => Object.keys((stats[m] && stats[m].refs) || {}).length;
      const cards = [
        ['vocab', `${learned}/${A.vocabdb.count()} từ đã học`, due ? `${due} thẻ đến hạn ôn` : 'Flashcard · Quiz · SRS · Bookmark'],
        ['grammar', `${(D.grammar || []).length} chủ điểm`, acc('grammar') + ' · B1/B2/Review'],
        ['reading', '4 dạng bài Aptis', acc('reading') + ' · có timer'],
        ['listening', `${(D.listening || []).length} bài nghe`, `${refs('listening')} bài đã làm · ${acc('listening')}`],
        ['writing', '4 task', `${refs('writing')} bài đã nộp`],
        ['speaking', '5 phần', `${refs('speaking')} bài đã nói`],
      ];
      return {
        title: 'Luyện tập',
        module: 'practice',
        node: h(
          'div',
          null,
          ui.PageHeader({ title: 'Luyện tập', sub: 'Chọn một kỹ năng và làm ngay — lý thuyết nằm sẵn bên trong khi bạn cần.' }),
          h(
            'div',
            { class: 'grid grid-3' },
            cards.map(([m, a, b]) => {
              const l = A.labels.modules[m];
              return h('a', { class: 'card card-link', href: l.route }, h('div', { class: 'big-emoji', 'aria-hidden': 'true' }, l.icon), h('h3', null, l.name), h('p', null, a), h('p', { class: 'muted small' }, b));
            }),
          ),
          ui.Card({ title: 'Cần chọn nhanh?' }, h('div', { class: 'quiz-actions' }, ui.Button({ label: 'Phiên từ vựng hôm nay', kind: 'primary', href: '#/vocab/daily' }), ui.Button({ label: 'Quiz ngữ pháp tổng hợp', kind: 'secondary', href: '#/grammar/all/quiz/review' }), ui.Button({ label: 'Làm Mini Mock', kind: 'secondary', href: '#/mock?mode=mini' }))),
        ),
      };
    },
    'practice',
  );
})();
