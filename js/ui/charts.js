/* Biểu đồ SVG tự viết (không phụ thuộc thư viện ngoài, chạy offline).
   Màu lấy từ biến CSS --c1..--c5 nên tự đổi theo chế độ sáng/tối. Mỗi biểu đồ có bảng dữ liệu ẩn cho trình đọc màn hình. */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = (A.ui = A.ui || {});
  const { h, svg } = ui;
  const U = A.util;

  const srTable = (caption, headers, rows) =>
    h(
      'table',
      { class: 'sr-only' },
      h('caption', null, caption),
      h('thead', null, h('tr', null, headers.map((x) => h('th', { scope: 'col' }, x)))),
      h('tbody', null, rows.map((r) => h('tr', null, r.map((c, i) => h(i ? 'td' : 'th', i ? null : { scope: 'row' }, String(c)))))),
    );

  const niceMax = (v) => {
    if (v <= 0) return 1;
    const p = Math.pow(10, Math.floor(Math.log10(v)));
    const n = v / p;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * p;
  };

  const charts = (ui.charts = {
    /** data: [{label, value, tone?}] */
    bars({ data, max, height = 180, fmt = (v) => v, title = 'Biểu đồ cột', unit = '' }) {
      const W = Math.max(280, data.length * 44);
      const pad = { l: 34, r: 8, t: 14, b: 26 };
      const m = max || niceMax(Math.max(...data.map((d) => d.value), 0));
      const iw = W - pad.l - pad.r;
      const ih = height - pad.t - pad.b;
      const bw = Math.min(30, (iw / data.length) * 0.65);
      const g = svg('g');
      [0, 0.5, 1].forEach((f) => {
        const y = pad.t + ih * (1 - f);
        g.append(svg('line', { x1: pad.l, x2: W - pad.r, y1: y, y2: y, class: 'ch-grid' }), svg('text', { x: pad.l - 5, y: y + 4, class: 'ch-axis', 'text-anchor': 'end' }, fmt(+(m * f).toFixed(1))));
      });
      data.forEach((d, i) => {
        const x = pad.l + (iw / data.length) * (i + 0.5);
        const bh = ih * U.clamp(d.value / m, 0, 1);
        g.append(
          svg('rect', { x: x - bw / 2, y: pad.t + ih - bh, width: bw, height: Math.max(bh, d.value > 0 ? 2 : 0), rx: 4, class: 'ch-bar ch-' + (d.tone || 1) }, svg('title', null, `${d.label}: ${fmt(d.value)}${unit}`)),
          svg('text', { x, y: height - 8, class: 'ch-axis', 'text-anchor': 'middle' }, d.label),
        );
        if (d.value > 0 && data.length <= 10) g.append(svg('text', { x, y: pad.t + ih - bh - 4, class: 'ch-val', 'text-anchor': 'middle' }, fmt(d.value)));
      });
      return h('figure', { class: 'chart' }, svg('svg', { viewBox: `0 0 ${W} ${height}`, role: 'img', 'aria-label': title, class: 'chart-svg', preserveAspectRatio: 'xMidYMid meet' }, g), srTable(title, ['Mục', 'Giá trị'], data.map((d) => [d.label, fmt(d.value) + unit])));
    },

    /** series: [{name, tone, points:[{x:label, y:number|null}]}] */
    line({ series, height = 190, yMin = 0, yMax, fmt = (v) => v, title = 'Biểu đồ đường', refLine }) {
      const labels = series[0] ? series[0].points.map((p) => p.x) : [];
      const W = Math.max(300, labels.length * 46);
      const pad = { l: 36, r: 12, t: 14, b: 28 };
      const all = series.flatMap((s) => s.points.map((p) => p.y)).filter((v) => v != null);
      const top = yMax != null ? yMax : niceMax(Math.max(...all, 1));
      const iw = W - pad.l - pad.r;
      const ih = height - pad.t - pad.b;
      const X = (i) => pad.l + (labels.length > 1 ? (iw * i) / (labels.length - 1) : iw / 2);
      const Y = (v) => pad.t + ih * (1 - (v - yMin) / (top - yMin));
      const g = svg('g');
      [0, 0.5, 1].forEach((f) => {
        const v = yMin + (top - yMin) * f;
        g.append(svg('line', { x1: pad.l, x2: W - pad.r, y1: Y(v), y2: Y(v), class: 'ch-grid' }), svg('text', { x: pad.l - 5, y: Y(v) + 4, class: 'ch-axis', 'text-anchor': 'end' }, fmt(Math.round(v))));
      });
      if (refLine != null) g.append(svg('line', { x1: pad.l, x2: W - pad.r, y1: Y(refLine.y), y2: Y(refLine.y), class: 'ch-ref' }), svg('text', { x: W - pad.r, y: Y(refLine.y) - 4, class: 'ch-axis', 'text-anchor': 'end' }, refLine.label));
      const step = Math.ceil(labels.length / 8);
      labels.forEach((l, i) => i % step === 0 && g.append(svg('text', { x: X(i), y: height - 8, class: 'ch-axis', 'text-anchor': 'middle' }, l)));
      series.forEach((s, si) => {
        let d = '';
        s.points.forEach((p, i) => {
          if (p.y == null) return;
          d += (d && s.points[i - 1] && s.points[i - 1].y != null ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(p.y).toFixed(1) + ' ';
        });
        g.append(svg('path', { d, class: 'ch-line ch-s' + (s.tone || si + 1), fill: 'none' }));
        s.points.forEach((p, i) => p.y != null && g.append(svg('circle', { cx: X(i), cy: Y(p.y), r: 3.5, class: 'ch-dot ch-f' + (s.tone || si + 1) }, svg('title', null, `${s.name} · ${p.x}: ${fmt(p.y)}`))));
      });
      const legend = series.length > 1 ? h('div', { class: 'legend' }, series.map((s, si) => h('span', null, h('i', { class: 'swatch ch-f' + (s.tone || si + 1) }), s.name))) : null;
      return h(
        'figure',
        { class: 'chart' },
        svg('svg', { viewBox: `0 0 ${W} ${height}`, role: 'img', 'aria-label': title, class: 'chart-svg', preserveAspectRatio: 'xMidYMid meet' }, g),
        legend,
        srTable(title, ['Mốc', ...series.map((s) => s.name)], labels.map((l, i) => [l, ...series.map((s) => (s.points[i].y == null ? '—' : fmt(s.points[i].y)))])),
      );
    },

    /** Radar: labels[], series:[{name, values:[0..1], tone}] */
    radar({ labels, series, size = 260, title = 'Biểu đồ radar', target }) {
      const c = size / 2;
      const R = size / 2 - 38;
      const n = labels.length;
      const pt = (i, f) => [c + R * f * Math.sin((2 * Math.PI * i) / n), c - R * f * Math.cos((2 * Math.PI * i) / n)];
      const g = svg('g');
      [0.25, 0.5, 0.75, 1].forEach((f) => g.append(svg('polygon', { points: labels.map((_, i) => pt(i, f).join(',')).join(' '), class: 'ch-grid', fill: 'none' })));
      labels.forEach((l, i) => {
        const [x, y] = pt(i, 1);
        const [lx, ly] = pt(i, 1.2);
        g.append(svg('line', { x1: c, y1: c, x2: x, y2: y, class: 'ch-grid' }), svg('text', { x: lx, y: ly + 4, class: 'ch-axis', 'text-anchor': Math.abs(lx - c) < 6 ? 'middle' : lx > c ? 'start' : 'end' }, l));
      });
      if (target != null) g.append(svg('polygon', { points: labels.map((_, i) => pt(i, target).join(',')).join(' '), class: 'ch-ref', fill: 'none' }));
      series.forEach((s, si) => {
        g.append(svg('polygon', { points: s.values.map((v, i) => pt(i, U.clamp(v || 0, 0, 1)).join(',')).join(' '), class: 'ch-area ch-f' + (s.tone || si + 1) + ' ch-s' + (s.tone || si + 1) }));
        s.values.forEach((v, i) => {
          const [x, y] = pt(i, U.clamp(v || 0, 0, 1));
          g.append(svg('circle', { cx: x, cy: y, r: 3.5, class: 'ch-dot ch-f' + (s.tone || si + 1) }, svg('title', null, `${labels[i]}: ${Math.round((v || 0) * 100)}%`)));
        });
      });
      return h(
        'figure',
        { class: 'chart chart-radar' },
        svg('svg', { viewBox: `0 0 ${size + 40} ${size}`, role: 'img', 'aria-label': title, class: 'chart-svg' }, svg('g', { transform: 'translate(20 0)' }, g)),
        srTable(title, ['Kỹ năng', ...series.map((s) => s.name)], labels.map((l, i) => [l, ...series.map((s) => Math.round((s.values[i] || 0) * 100) + '%')])),
      );
    },
  });
})();
