/* Reading: 4 dạng bài Aptis, timer, giải thích đáp án, thống kê */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;
  const U = A.util;

  const R = () => globalThis.AptisData.reading;
  const TYPES = ['sentence', 'ordering', 'shortMatch', 'longMatch'];
  const refStat = (id) => ((A.store.get('stats').reading || {}).refs || {})[id];
  const typeStat = (t) => ((A.store.get('stats').reading || {}).subs || {})[t];

  ui.router.add(
    '/reading',
    () => {
      const L = A.labels.reading;
      const m = A.store.get('stats').reading;
      const bars = TYPES.map((t) => {
        const s = typeStat(t);
        return { label: L[t].part, value: s && s.t ? Math.round((s.c / s.t) * 100) : 0, tone: 1 };
      });
      const grid = h('div', { class: 'grid grid-2' });
      TYPES.forEach((t) => {
        const sets = R()[t];
        const done = sets.filter((s) => refStat(s.id)).length;
        const s = typeStat(t);
        grid.append(
          h(
            'a',
            { class: 'card card-link', href: '#/reading/' + t },
            h('p', { class: 'eyebrow' }, L[t].part),
            h('h3', null, L[t].name, h('span', { class: 'muted small' }, ' · ' + L[t].vi)),
            h('p', { class: 'muted' }, L[t].desc),
            h('p', { class: 'small' }, ui.Chip(`${done}/${sets.length} bộ đã làm`, 'neutral'), ' ', s && s.t ? ui.Chip(Math.round((s.c / s.t) * 100) + '% đúng', 'primary') : null, ' ', ui.Chip(`⏱ gợi ý ${L[t].minutes} phút`, 'neutral')),
          ),
        );
      });
      const avgSec = m && m.n ? m.sec / m.n : 0;
      return {
        title: 'Reading',
        module: 'reading',
        node: h(
          'div',
          null,
          ui.PageHeader({ title: 'Reading', sub: 'Mô phỏng 4 phần Reading của Aptis. Thi thật: 35 phút cho cả 4 phần.' }),
          h('div', { class: 'grid grid-stats' }, ui.Stat({ icon: '📖', label: 'Lượt làm', value: m ? m.n : 0 }), ui.Stat({ icon: '🎯', label: 'Độ chính xác', value: m && m.t ? Math.round((m.c / m.t) * 100) + '%' : '—' }), ui.Stat({ icon: '⏱️', label: 'Thời gian TB / bộ', value: avgSec ? U.fmtClock(avgSec) : '—' }), ui.Stat({ icon: '🧩', label: 'Số bộ đề', value: TYPES.reduce((n, t) => n + R()[t].length, 0) })),
          grid,
          ui.Card({ title: 'Thống kê theo dạng bài (% đúng)' }, ui.charts.bars({ data: bars, max: 100, fmt: (v) => v + '%', title: 'Độ chính xác Reading theo dạng bài' })),
          ui.Card({ title: 'Chiến thuật nhanh' }, h('ul', null, ['Part 1: đọc cả câu, loại đáp án sai ngữ pháp trước.', 'Part 2: tìm đại từ (this, they), từ nối (however, then) và mốc thời gian để xếp câu.', 'Part 3: gạch từ khoá của câu hỏi rồi tìm paraphrase trong ý kiến từng người.', 'Part 4: đọc câu đầu và câu cuối của mỗi đoạn để đoán ý chính; loại tiêu đề thừa sau cùng.'].map((x) => h('li', null, x)))),
        ),
      };
    },
    'reading',
  );

  ui.router.add(
    '/reading/:type',
    (ctx) => {
      const t = ctx.params.type;
      if (!TYPES.includes(t)) return { redirect: '#/reading' };
      const L = A.labels.reading[t];
      const next = A.plan.nextRef('reading', t);
      const list = h(
        'div',
        { class: 'grid grid-2' },
        R()[t].map((s, i) => {
          const st = refStat(s.id);
          return h('a', { class: 'card card-link', href: `#/reading/${t}/${s.id}` }, h('div', { class: 'row-between' }, h('h3', null, `Bộ ${i + 1}: ${s.title || s.topic}`), ui.Chip(s.level || 'B1–B2', 'neutral')), h('p', { class: 'muted small' }, st ? `Làm ${st.n} lần · cao nhất ${Math.round((st.best || 0) * 100)}%` : 'Chưa làm'));
        }),
      );
      return {
        title: L.name,
        module: 'reading',
        node: h('div', null, ui.PageHeader({ title: `${L.part}: ${L.name}`, sub: L.desc, crumbs: [{ label: 'Reading', href: '#/reading' }, { label: L.name }], actions: next && ui.Button({ label: 'Làm bộ tiếp theo', kind: 'accent', href: `#/reading/${t}/${next}` }) }), list),
      };
    },
    'reading',
  );

  ui.router.add(
    '/reading/:type/:id',
    (ctx) => {
      const t = ctx.params.type;
      const set = (R()[t] || []).find((s) => s.id === ctx.params.id);
      if (!set) return { redirect: '#/reading' };
      const L = A.labels.reading[t];
      const nextId = () => {
        const ids = R()[t].map((s) => s.id);
        return ids[(ids.indexOf(set.id) + 1) % ids.length];
      };
      const task = ui.ReadingTask(t, set, {
        mode: 'practice',
        onFinish: (res) => A.session.record({ module: 'reading', sub: t, ref: set.id, correct: res.correct, total: res.total, seconds: res.seconds }),
        extraActions: () => [ui.Button({ label: 'Bộ tiếp theo →', kind: 'accent', href: `#/reading/${t}/${nextId()}` }), ui.Button({ label: 'Làm lại bộ này', kind: 'secondary', href: `#/reading/${t}/${set.id}?r=${Date.now()}` }), ui.Button({ label: 'Danh sách', kind: 'ghost', href: '#/reading/' + t })],
      });
      return { title: `${L.name}`, module: 'reading', node: h('div', null, ui.PageHeader({ title: `${set.title || set.topic}`, sub: `${L.part} · ${L.name}`, crumbs: [{ label: 'Reading', href: '#/reading' }, { label: L.name, href: '#/reading/' + t }, { label: 'Làm bài' }] }), task) };
    },
    'reading',
  );
})();
