/* Speaking: Part 1–5, câu hỏi ngẫu nhiên, bấm giờ, ghi âm tuỳ chọn, bài mẫu B2, khung PREP */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;
  const U = A.util;

  const S = () => globalThis.AptisData.speaking;
  const PARTS = ['p1', 'p2', 'p3', 'p4', 'p5'];
  const refStat = (id) => ((A.store.get('stats').speaking || {}).refs || {})[id];
  const titleOf = (p, x) => x.title || x.topic;

  ui.router.add(
    '/speaking',
    () => {
      const L = A.labels.speaking;
      const grid = h('div', { class: 'grid grid-3' });
      PARTS.forEach((p) => {
        const list = S()[p];
        const done = list.filter((x) => refStat(x.id)).length;
        grid.append(h('a', { class: 'card card-link', href: '#/speaking/' + p }, h('div', { class: 'big-emoji', 'aria-hidden': 'true' }, L[p].icon), h('h3', null, `${L[p].name}: ${L[p].vi}`), h('p', { class: 'muted small' }, L[p].desc), h('p', null, ui.Chip(`${done}/${list.length} đã luyện`, 'neutral'))));
      });

      // Câu hỏi ngẫu nhiên: luyện nhanh 1 câu
      const drill = h('div', { class: 'drill' });
      const drawDrill = (part) => {
        ui.clear(drill);
        const pool = part === 'p1' ? S().p1.flatMap((x) => x.qs.map((q) => ({ q, topic: x.topic, sec: 30 }))) : S().p4.flatMap((x) => x.qs.map((q) => ({ q, topic: x.topic, sec: 45 })));
        const pick = U.pick(pool);
        drill.append(
          h('p', { class: 'eyebrow' }, `Câu hỏi ngẫu nhiên · ${pick.topic}`),
          h('p', { class: 'speak-prompt' }, pick.q),
          ui.Countdown({ seconds: pick.sec, label: '🎤 Nói', controls: true, compact: false }),
          ui.RecorderWidget(),
          h('div', { class: 'quiz-actions' }, ui.Button({ label: 'Câu khác', kind: 'secondary', onClick: () => drawDrill(part) }), ui.Button({ label: part === 'p1' ? 'Đổi sang kiểu thảo luận (Part 4)' : 'Đổi sang câu cá nhân (Part 1)', kind: 'ghost', onClick: () => drawDrill(part === 'p1' ? 'p4' : 'p1') })),
        );
      };
      drawDrill('p1');

      return {
        title: 'Speaking',
        module: 'speaking',
        node: h(
          'div',
          null,
          ui.PageHeader({ title: 'Speaking', sub: 'Thi thật ~12 phút, 4 phần ghi âm. Ở đây bạn luyện 5 dạng với bấm giờ, khung trả lời và bài mẫu B2.' }),
          grid,
          ui.Card({ title: 'Luyện nhanh: 1 câu hỏi ngẫu nhiên', sub: 'Bấm Bắt đầu, nói to thành tiếng cho đến hết giờ.' }, drill),
          h('h2', null, 'Khung trả lời (Speaking frameworks)'),
          h('div', { class: 'grid grid-2' }, ['prep', 'ard', 'photo', 'compare', 'opinion'].map((k) => ui.Card({}, ui.FrameworkCard(k)))),
          ui.Card({ title: 'Ví dụ PREP (Part 5)' }, h('p', { class: 'muted small' }, 'Chủ đề: “Is it better to work from home?”'), h('div', { class: 'textbox sample' }, h('strong', null, 'P'), ': I believe working from home is better for most office jobs. ', h('strong', null, 'R'), ': The main reason is that you save a lot of commuting time, so you have more energy for real work. ', h('strong', null, 'E'), ': For example, when I worked from home last year, I finished my reports faster because nobody interrupted me. ', h('strong', null, 'P'), ': So, overall, I think home working gives people a better balance between work and life.')),
        ),
      };
    },
    'speaking',
  );

  ui.router.add(
    '/speaking/:part',
    (ctx) => {
      const p = ctx.params.part;
      if (!PARTS.includes(p)) return { redirect: '#/speaking' };
      const L = A.labels.speaking[p];
      const list = S()[p];
      const rnd = U.pick(list);
      return {
        title: `Speaking ${L.name}`,
        module: 'speaking',
        node: h(
          'div',
          null,
          ui.PageHeader({ title: `${L.name}: ${L.vi}`, sub: L.desc, crumbs: [{ label: 'Speaking', href: '#/speaking' }, { label: L.name }], actions: ui.Button({ label: '🎲 Chọn ngẫu nhiên', kind: 'accent', href: `#/speaking/${p}/${rnd.id}` }) }),
          h(
            'div',
            { class: 'grid grid-2' },
            list.map((x, i) => {
              const st = refStat(x.id);
              return h('a', { class: 'card card-link', href: `#/speaking/${p}/${x.id}` }, h('div', { class: 'row-between' }, h('h3', null, `${x.emoji || x.emojiA || L.icon} ${titleOf(p, x)}`), st && ui.Chip(`tự chấm ${(st.rating || 0).toFixed(1)}`, 'good')), h('p', { class: 'muted small' }, (x.qs && x.qs[0]) || ''));
            }),
          ),
          ui.Card({ title: 'Khung gợi ý cho phần này' }, ui.FrameworkCard({ p1: 'ard', p2: 'photo', p3: 'compare', p4: 'opinion', p5: 'prep' }[p])),
        ),
      };
    },
    'speaking',
  );

  ui.router.add(
    '/speaking/:part/:id',
    (ctx) => {
      const p = ctx.params.part;
      const item = (S()[p] || []).find((x) => x.id === ctx.params.id);
      if (!item) return { redirect: '#/speaking' };
      const L = A.labels.speaking[p];
      const list = S()[p];
      const next = list[(list.indexOf(item) + 1) % list.length];
      const task = ui.SpeakingTask(p, item, {
        mode: 'practice',
        onFinish: (res) => A.session.record({ module: 'speaking', sub: p, ref: item.id, rating: res.rating, seconds: res.seconds }),
        extraActions: () => [ui.Button({ label: 'Đề tiếp theo →', kind: 'accent', href: `#/speaking/${p}/${next.id}` }), ui.Button({ label: 'Nói lại đề này', kind: 'secondary', href: `#/speaking/${p}/${item.id}?r=${Date.now()}` }), ui.Button({ label: 'Danh sách', kind: 'ghost', href: '#/speaking/' + p })],
      });
      return { title: titleOf(p, item), module: 'speaking', node: h('div', null, ui.PageHeader({ title: titleOf(p, item), sub: `${L.name} · ${L.vi}`, crumbs: [{ label: 'Speaking', href: '#/speaking' }, { label: L.name, href: '#/speaking/' + p }, { label: 'Luyện nói' }] }), task) };
    },
    'speaking',
  );
})();
