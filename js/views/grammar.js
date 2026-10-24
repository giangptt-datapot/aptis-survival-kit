/* Ngữ pháp: 8 chủ điểm × (Giải thích, Ví dụ, Câu B1, Câu B2, Review Quiz) */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;
  const U = A.util;

  const topics = () => globalThis.AptisData.grammar || [];
  const order = ['tenses', 'articles', 'prepositions', 'modals', 'conditionals', 'passive', 'relative', 'reported'];
  const sorted = () => topics().slice().sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  const sub = (t, lv) => ((A.store.get('stats').grammar || {}).subs || {})[t + ':' + lv];
  const pctOf = (s) => (s && s.best != null ? Math.round(s.best * 100) : null);
  const LV = A.labels.grammarLevel;

  function pool(topic, level) {
    const all = topic === 'all' ? topics() : topics().filter((t) => t.id === topic);
    const b1 = all.flatMap((t) => t.b1.map((q) => ({ ...q, tag: t.id })));
    const b2 = all.flatMap((t) => t.b2.map((q) => ({ ...q, tag: t.id })));
    const src = level === 'b1' ? b1 : level === 'b2' ? b2 : [...b1, ...b2];
    return U.sample(src, Math.min(10, src.length));
  }

  ui.router.add(
    '/grammar',
    () => {
      const grid = h('div', { class: 'grid grid-3' });
      sorted().forEach((t) => {
        const s = ['b1', 'b2', 'review'].map((lv) => pctOf(sub(t.id, lv)));
        const best = Math.max(...s.map((x) => (x == null ? -1 : x)));
        grid.append(
          h(
            'a',
            { class: 'card card-link', href: '#/grammar/' + t.id },
            h('div', { class: 'big-emoji', 'aria-hidden': 'true' }, t.icon),
            h('h3', null, t.title),
            h('p', { class: 'muted small' }, t.vi),
            h('p', { class: 'small' }, ['B1', 'B2', 'Review'].map((l, i) => h('span', { class: 'chip ' + (s[i] == null ? 'chip-neutral' : s[i] >= 80 ? 'chip-good' : 'chip-warn') }, `${l} ${s[i] == null ? '—' : s[i] + '%'}`))),
            ui.Progress({ value: Math.max(0, best), thin: true, tone: best >= 80 ? 'good' : 'primary', label: t.title }),
          ),
        );
      });
      return {
        title: 'Ngữ pháp',
        module: 'grammar',
        node: h(
          'div',
          null,
          ui.PageHeader({ title: 'Ngữ pháp', sub: `${topics().length} chủ điểm hay gặp nhất trong Aptis. Làm quiz trước, đọc giải thích khi sai.`, actions: ui.Button({ label: 'Quiz tổng hợp', kind: 'accent', href: '#/grammar/all/quiz/review' }) }),
          grid,
        ),
      };
    },
    'grammar',
  );

  ui.router.add(
    '/grammar/:topic',
    (ctx) => {
      const t = topics().find((x) => x.id === ctx.params.topic);
      if (!t) return { redirect: ctx.params.topic === 'all' ? '#/grammar/all/quiz/review' : '#/grammar' };
      const btn = (lv, n) => {
        const p = pctOf(sub(t.id, lv));
        return h('a', { class: 'card card-link quizcta', href: `#/grammar/${t.id}/quiz/${lv}` }, h('h3', null, LV[lv]), h('p', { class: 'muted small' }, `${Math.min(10, n)} câu`), h('p', null, p == null ? ui.Chip('chưa làm', 'neutral') : ui.Chip('Cao nhất ' + p + '%', p >= 80 ? 'good' : 'warn')));
      };
      const theory = ui.Card(
        { title: 'Lý thuyết nhanh', sub: t.summary },
        t.explain.map((b) => h('div', { class: 'theory' }, h('h3', null, b.h), h('p', null, ui.rich(b.body)), h('table', { class: 'table ex-table' }, h('tbody', null, b.ex.map(([en, vi]) => h('tr', null, h('td', { lang: 'en' }, en), h('td', { class: 'muted' }, vi))))))),
        h('div', { class: 'callout callout-tip' }, h('h3', null, '⚠️ Lỗi hay gặp & mẹo thi'), h('ul', null, t.tips.map((x) => h('li', null, ui.rich(x))))),
      );
      return {
        title: t.title,
        module: 'grammar',
        node: h(
          'div',
          null,
          ui.PageHeader({ title: `${t.icon} ${t.title}`, sub: t.vi, crumbs: [{ label: 'Ngữ pháp', href: '#/grammar' }, { label: t.title }] }),
          h('h2', null, 'Làm ngay'),
          h('div', { class: 'grid grid-3' }, btn('b1', t.b1.length), btn('b2', t.b2.length), btn('review', t.b1.length + t.b2.length)),
          theory,
        ),
      };
    },
    'grammar',
  );

  ui.router.add(
    '/grammar/:topic/quiz/:level',
    (ctx) => {
      const topic = ctx.params.topic;
      const level = ctx.params.level;
      const t = topics().find((x) => x.id === topic);
      if ((topic !== 'all' && !t) || !['b1', 'b2', 'review'].includes(level)) return { redirect: '#/grammar' };
      const qs = pool(topic, level);
      const name = topic === 'all' ? 'Tổng hợp' : t.title;
      const next = level === 'b1' ? 'b2' : 'review';
      const quiz = ui.Quiz({
        questions: qs,
        mode: 'practice',
        title: `${name} · ${LV[level]}`,
        onFinish: (res) => {
          A.session.record({ module: 'grammar', sub: `${topic}:${level}`, correct: res.correct, total: res.total, seconds: res.seconds });
          // thống kê theo từng chủ điểm khi làm bài tổng hợp
          if (topic === 'all') {
            const by = U.groupBy(res.items, (i) => i.tag);
            Object.entries(by).forEach(([tg, items]) => A.store.update('stats', (s) => {
              const m = (s.grammar = s.grammar || { c: 0, t: 0, n: 0, sec: 0, subs: {}, refs: {} });
              const r = (m.subs[tg + ':review'] = m.subs[tg + ':review'] || { c: 0, t: 0, n: 0, best: null, last: null, at: 0 });
              const c = items.filter((i) => i.ok).length;
              r.c += c;
              r.t += items.length;
              r.last = c / items.length;
              r.best = r.best == null ? r.last : Math.max(r.best, r.last);
            }));
          }
        },
        extraActions: () => [topic !== 'all' && level !== 'review' && ui.Button({ label: `Tiếp: ${LV[next]}`, kind: 'accent', href: `#/grammar/${topic}/quiz/${next}` }), ui.Button({ label: 'Bộ câu mới', kind: 'secondary', href: `#/grammar/${topic}/quiz/${level}?r=${Date.now()}` }), ui.Button({ label: topic === 'all' ? 'Về Ngữ pháp' : 'Đọc lý thuyết', kind: 'ghost', href: topic === 'all' ? '#/grammar' : '#/grammar/' + topic })],
      });
      return { title: `Quiz ${name}`, module: 'grammar', node: h('div', null, ui.PageHeader({ title: `Quiz: ${name} — ${LV[level]}`, crumbs: [{ label: 'Ngữ pháp', href: '#/grammar' }, topic !== 'all' && { label: t.title, href: '#/grammar/' + topic }, { label: 'Quiz' }].filter(Boolean) }), quiz) };
    },
    'grammar',
  );
})();
