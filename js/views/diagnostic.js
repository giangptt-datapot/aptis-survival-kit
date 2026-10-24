/* Diagnostic Test: Vocabulary → Grammar → Reading → Listening, rồi báo cáo trình độ */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;
  const U = A.util;

  const SECTION_INFO = {
    vocab: ['Vocabulary', 'Chọn từ/nghĩa/kết hợp từ đúng. Làm nhanh, không tra từ điển.'],
    grammar: ['Grammar', 'Chọn dạng ngữ pháp đúng cho chỗ trống.'],
    reading: ['Reading', 'Đọc đoạn văn rồi trả lời câu hỏi.'],
    listening: ['Listening', 'Mỗi bài nghe được phát tối đa 2 lần. Cần bật loa.'],
  };
  const LEVEL_TEXT = {
    A2: 'Bạn nắm được câu đơn giản và tình huống quen thuộc. Cần củng cố nền tảng ngữ pháp và vốn từ trước khi luyện chiến thuật thi.',
    B1: 'Bạn giao tiếp được trong hầu hết tình huống quen thuộc. Để lên B2 cần tăng độ chính xác ngữ pháp, vốn từ học thuật và tốc độ đọc/nghe.',
    B2: 'Bạn đang ở hoặc rất gần mức mục tiêu. Hãy tập trung vào chiến thuật làm bài, bẫy thường gặp và giữ độ ổn định bằng Mock Test.',
  };
  const reviews = {}; // id → các câu sai (chỉ giữ trong phiên hiện tại)

  /** Gom câu hỏi từng phần của một đề */
  function buildSections(form) {
    const F = globalThis.AptisData.diagnostic[form];
    return [
      { key: 'vocab', qs: F.vocab.map((q) => ({ ...q, tag: 'vocab' })) },
      { key: 'grammar', qs: F.grammar.map((q) => ({ ...q, tag: 'grammar' })) },
      { key: 'reading', qs: F.reading.flatMap((p) => p.qs.map((q) => ({ ...q, tag: 'reading', ctx: p.passage }))) },
      {
        key: 'listening',
        qs: F.listening.flatMap((p) => {
          const player = ui.AudioPlayer({ script: p.script, speakers: p.speakers, maxPlays: 2 });
          return p.qs.map((q) => ({ ...q, tag: 'listening', ctx: player }));
        }),
      },
    ];
  }

  function runDiagnostic(form, ctx) {
    const root = h('div', { class: 'diag-run' });
    const sections = buildSections(form);
    const collected = {};
    const t0 = Date.now();
    let idx = 0;

    function stage() {
      ui.clear(root);
      const s = sections[idx];
      const [name, hint] = SECTION_INFO[s.key];
      const quiz = ui.Quiz({
        questions: s.qs,
        mode: 'exam',
        title: name,
        summary: false,
        shuffle: true,
        onFinish: (res) => {
          collected[s.key] = res.items.map((i) => ({ lvl: i.lvl, ok: i.ok, q: i.q, pickedText: i.pickedText, correctText: i.correctText, e: i.e, section: s.key }));
          idx++;
          if (idx < sections.length) stage();
          else finish();
        },
      });
      ctx.onCleanup(() => A.tts.stop());
      root.append(
        h('div', { class: 'diag-head' }, h('p', { class: 'eyebrow' }, `Phần ${idx + 1}/${sections.length}`), h('h2', null, name), h('p', { class: 'muted' }, hint)),
        ui.Progress({ value: (idx / sections.length) * 100, label: 'Tiến độ Diagnostic', tone: 'accent' }),
        quiz,
      );
      globalThis.scrollTo(0, 0);
    }

    function finish() {
      const ev = A.scoring.diagEvaluate(collected);
      const id = U.uid();
      const attempt = { id, form, at: Date.now(), seconds: Math.round((Date.now() - t0) / 1000), sections: ev.sections, pct: ev.pct, score100: ev.score100, level: ev.level, weakest: ev.weakest, strengths: ev.strengths, score50: ev.score50 };
      A.store.update('diag', (d) => d.attempts.push(attempt));
      reviews[id] = Object.values(collected).flat().filter((i) => !i.ok);
      const total = Object.values(collected).flat();
      A.session.record({ module: 'diagnostic', sub: form, ref: id, correct: total.filter((i) => i.ok).length, total: total.length, seconds: attempt.seconds });
      A.plan.ensureStart();
      ui.router.go('#/diagnostic/result/' + id, true);
    }
    stage();
    return root;
  }

  ui.router.add(
    '/diagnostic',
    (ctx) => {
      const attempts = A.store.get('diag').attempts;
      const form = ctx.query.form;
      if (form === 'A' || form === 'B') {
        if (ctx.query.run) return { title: 'Diagnostic', module: 'diagnostic', node: runDiagnostic(form, ctx) };
        return {
          title: 'Diagnostic Test',
          module: 'diagnostic',
          node: h(
            'div',
            null,
            ui.PageHeader({ title: `Diagnostic Test — đề ${form}`, sub: 'Đo trình độ hiện tại qua 4 phần: Vocabulary, Grammar, Reading, Listening (36 câu).' }),
            ui.Card(
              {},
              h('ul', { class: 'checklist' }, [['⏱️', 'Khoảng 20 phút, nên làm một mạch.'], ['🔇', 'Tìm nơi yên tĩnh, bật loa/tai nghe (Listening dùng giọng đọc của trình duyệt).'], ['🚫', 'Không tra từ điển, không dịch — kết quả chỉ hữu ích khi trung thực.'], ['🎯', 'Không có phản hồi từng câu; bạn sẽ xem đáp án và giải thích sau khi nộp.'], ['🔁', form === 'A' ? 'Đề B dùng để đo tiến bộ ở Ngày 30 — cùng độ khó, câu hỏi khác.' : 'Đề B cùng độ khó với đề A nhưng câu hỏi khác, để so sánh công bằng.']].map(([i, t]) => h('li', null, h('span', { 'aria-hidden': 'true' }, i + ' '), t))),
              h('div', { class: 'quiz-actions' }, ui.Button({ label: 'Bắt đầu làm bài', kind: 'accent', icon: '▶', href: `#/diagnostic?form=${form}&run=1` }), ui.Button({ label: 'Để sau', kind: 'ghost', href: '#/' })),
            ),
          ),
        };
      }
      const hasA = attempts.some((a) => a.form === 'A');
      const hasB = attempts.some((a) => a.form === 'B');
      const imp = A.game.diagImprovement();
      return {
        title: 'Diagnostic',
        module: 'diagnostic',
        node: h(
          'div',
          null,
          ui.PageHeader({ title: 'Diagnostic Test', sub: 'Đo điểm xuất phát (Ngày 1) và đo lại ở Ngày 30 để thấy tiến bộ.' }),
          h(
            'div',
            { class: 'grid grid-2' },
            ui.Card({ title: 'Đề A — đầu vào', sub: hasA ? 'Đã làm' : 'Khuyến nghị làm ngay hôm nay' }, h('p', { class: 'muted' }, '36 câu · ~20 phút · Vocabulary, Grammar, Reading, Listening.'), ui.Button({ label: hasA ? 'Làm lại đề A' : 'Làm đề A', kind: hasA ? 'secondary' : 'accent', href: '#/diagnostic?form=A' })),
            ui.Card({ title: 'Đề B — đo tiến bộ', sub: hasB ? 'Đã làm' : 'Làm vào Ngày 30' }, h('p', { class: 'muted' }, 'Cùng độ khó đề A, câu hỏi khác.'), ui.Button({ label: hasB ? 'Làm lại đề B' : 'Làm đề B', kind: 'secondary', href: '#/diagnostic?form=B' })),
          ),
          imp.last != null && ui.Card({ title: 'Tiến bộ so với lần đầu' }, h('p', null, `Điểm ${imp.first} → ${imp.last} (${imp.abs >= 0 ? '+' : ''}${imp.abs} điểm, ${imp.relative >= 0 ? '+' : ''}${Math.round(imp.relative * 100)}%). `, imp.ok ? ui.Chip('Đạt tiêu chí ≥ +20%', 'good') : ui.Chip('Chưa đạt +20%', 'warn'))),
          attempts.length
            ? ui.Card({ title: 'Lịch sử' }, h('table', { class: 'table' }, h('thead', null, h('tr', null, ['Ngày', 'Đề', 'Điểm', 'Trình độ', ''].map((x) => h('th', { scope: 'col' }, x)))), h('tbody', null, attempts.slice().reverse().map((a) => h('tr', null, h('td', null, U.fmtDateTime(a.at)), h('td', null, a.form), h('td', null, a.score100 + '/100'), h('td', null, a.level), h('td', null, h('a', { href: '#/diagnostic/result/' + a.id }, 'Xem báo cáo →')))))))
            : null,
        ),
      };
    },
    'diagnostic',
  );

  ui.router.add(
    '/diagnostic/result/:id',
    (ctx) => {
      const attempts = A.store.get('diag').attempts;
      const a = attempts.find((x) => x.id === ctx.params.id);
      if (!a) return { redirect: '#/diagnostic' };
      const idx = attempts.indexOf(a);
      const first = attempts[0];
      const gap = Math.max(0, A.scoring.B2_MIN - a.score50);
      const rev = reviews[a.id] || [];
      const labs = A.labels.diagSection;
      const weakNames = a.weakest.map((k) => labs[k]).join(', ');
      const root = h('div', { class: 'diag-result' });
      root.append(
        ui.PageHeader({ title: 'Kết quả Diagnostic', sub: `Đề ${a.form} · ${U.fmtDateTime(a.at)} · ${U.fmtMinutes(a.seconds)}` }),
        h(
          'section',
          { class: 'hero hero-dash' },
          h('div', { class: 'hero-main' }, h('p', { class: 'eyebrow' }, 'Current Level'), h('h2', { class: 'level-big' }, a.level), h('p', { class: 'lead' }, LEVEL_TEXT[a.level]), h('p', null, ui.Chip(`Điểm ${a.score100}/100`, 'primary'), ' ', ui.Chip(`≈ ${a.score50}/50 theo thang Aptis (ước tính)`, 'neutral'), ' ', a.level !== 'B2' && ui.Chip(`Còn khoảng ${gap} điểm tới ngưỡng B2`, 'warn'))),
          h('div', { class: 'hero-side' }, ui.Ring({ value: a.score100, size: 120, stroke: 12, label: a.score100 + '', sub: '/100' })),
        ),
        h(
          'div',
          { class: 'grid grid-2' },
          ui.Card(
            { title: 'Điểm theo phần' },
            Object.entries(a.sections).map(([k, s]) => h('div', { class: 'goal' }, h('div', { class: 'goal-head' }, h('span', null, labs[k]), h('span', { class: 'muted small' }, `${Math.round(s.pct * 100)}% (${s.correct}/${s.total} đúng)`)), ui.Progress({ value: s.pct * 100, tone: s.pct >= 0.75 ? 'good' : s.pct >= 0.45 ? 'primary' : 'warn', thin: true, label: labs[k] }))),
          ),
          ui.Card(
            { title: 'Điểm mạnh & điểm yếu' },
            h('p', null, h('strong', null, 'Weakest skills: '), a.weakest.map((k) => ui.Chip(labs[k], 'warn'))),
            h('p', null, h('strong', null, 'Strengths: '), a.strengths.map((k) => ui.Chip(labs[k], 'good'))),
            h('p', { class: 'muted' }, `Lộ trình sẽ dành thêm thời gian cho: ${weakNames}.`),
          ),
        ),
        ui.Card(
          { title: 'Suggested Plan: lộ trình B2 cường độ cao 30 ngày' },
          h('ol', { class: 'steps' }, [
            ['Tuần 1 — Foundation', 'Ngữ pháp nền (thì, mạo từ, giới từ, modal) + 150 từ đầu tiên. Làm quen cả 4 dạng Reading.'],
            ['Tuần 2 — Skill Building', 'Điều kiện, bị động, mệnh đề quan hệ. Viết email, nói theo PREP. Mini Mock #1 (ngày 14).'],
            ['Tuần 3 — Exam Strategy', 'Câu tường thuật, modal nâng cao, bẫy Listening, luyện bấm giờ. Mini Mock #2 (ngày 21).'],
            ['Tuần 4 — Mock & Review', '3 Full Mock, phân tích lỗi, vá điểm yếu, Diagnostic cuối (ngày 30).'],
          ].map(([t, d]) => h('li', null, h('strong', null, t), h('span', { class: 'muted' }, ' — ' + d)))),
          h('div', { class: 'quiz-actions' }, ui.Button({ label: 'Về Dashboard & bắt đầu hôm nay', kind: 'accent', href: '#/' }), ui.Button({ label: 'Xem lộ trình', kind: 'secondary', href: '#/roadmap' })),
        ),
      );
      if (idx > 0 && first && first.id !== a.id) {
        const abs = a.score100 - first.score100;
        const rel = first.score100 ? abs / first.score100 : 1;
        root.append(ui.Card({ title: 'Tiến bộ so với Diagnostic đầu tiên' }, h('p', { class: 'lead' }, `${first.score100} → ${a.score100} điểm (${abs >= 0 ? '+' : ''}${abs}; ${rel >= 0 ? '+' : ''}${Math.round(rel * 100)}%)`), h('p', null, rel >= 0.2 || a.score100 >= 90 ? ui.Chip('Đạt tiêu chí thành công: tăng ≥ 20%', 'good') : ui.Chip('Chưa đạt +20% — xem lại điểm yếu và làm thêm Mock', 'warn'))));
      }
      if (rev.length) {
        root.append(
          ui.Card(
            { title: `Xem lại ${rev.length} câu chưa đúng`, sub: 'Chỉ hiển thị ngay sau khi làm bài.' },
            rev.map((w) => h('div', { class: 'review-item' }, h('p', { class: 'quiz-q' }, h('span', { class: 'chip chip-neutral' }, labs[w.section] + ' · ' + w.lvl), ' ', ui.fmtQ(w.q)), h('p', { class: 'small' }, h('span', { class: 'bad' }, 'Bạn chọn: ' + w.pickedText), ' · ', h('span', { class: 'good' }, 'Đúng: ' + w.correctText)), w.e && h('p', { class: 'muted small' }, ui.rich(w.e)))),
          ),
        );
      }
      return { title: 'Kết quả Diagnostic', module: 'diagnostic', node: root };
    },
    'diagnostic',
  );
})();
