/* Các "bài tập" hoàn chỉnh dùng chung cho Luyện tập, Diagnostic và Mock Test:
   ReadingTask, ListeningTask, WritingTask, SpeakingTask.
   Mỗi hàm trả về một Node; onFinish(result) được gọi đúng một lần khi hoàn thành. */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = (A.ui = A.ui || {});
  const U = A.util;
  const { h } = ui;

  /* ================= Khung tư duy Speaking ================= */
  ui.frameworks = {
    ard: { name: 'ARD — Answer · Reason · Detail', use: 'Part 1', steps: [['A', 'Answer', 'Trả lời thẳng vào câu hỏi trong câu đầu tiên.'], ['R', 'Reason', 'Thêm lý do: “mainly because…”.'], ['D', 'Detail', 'Thêm một chi tiết/ví dụ ngắn của riêng bạn.']], phrases: ['Yes, I do. Mainly because…', 'To be honest, …', 'For instance, last week I…'] },
    photo: { name: 'Mô tả ảnh: Overview → Details → Guess → Feeling', use: 'Part 2', steps: [['O', 'Overview', 'Tổng quan: ai, ở đâu, đang làm gì.'], ['D', 'Details', 'Chi tiết: vị trí (on the left, in the background), đồ vật, quần áo.'], ['G', 'Guess', 'Suy đoán: “It looks as if…”, “They seem to be…”.'], ['F', 'Feeling', 'Cảm nhận/liên hệ bản thân.']], phrases: ['In this picture I can see…', 'In the background there is…', 'It looks as if…', 'It reminds me of…'] },
    compare: { name: 'So sánh: Both → Difference → Preference', use: 'Part 3', steps: [['B', 'Both', 'Điểm chung: “Both pictures show…”.'], ['D', 'Difference', 'Khác biệt: “In the first… whereas in the second…”.'], ['P', 'Preference', 'Ý kiến cá nhân + lý do: “I would prefer… because…”.']], phrases: ['Both pictures show…', 'Unlike the first one, the second…', 'On the one hand… on the other hand…', 'I would rather… because…'] },
    opinion: { name: 'Thảo luận: Opinion → Because → Example → However', use: 'Part 4', steps: [['O', 'Opinion', 'Nêu quan điểm rõ ràng.'], ['B', 'Because', 'Lý do chính.'], ['E', 'Example', 'Ví dụ cụ thể.'], ['H', 'However', 'Nhìn mặt trái để thể hiện tư duy B2.']], phrases: ['In my opinion…', 'The main reason is that…', 'For example…', 'Having said that, …'] },
    prep: { name: 'PREP — Point · Reason · Example · Point', use: 'Part 5 (2 phút)', steps: [['P', 'Point', 'Nêu ý chính ngay câu đầu.'], ['R', 'Reason', 'Giải thích vì sao.'], ['E', 'Example', 'Cho ví dụ cụ thể (của bản thân càng tốt).'], ['P', 'Point', 'Nhắc lại ý chính để kết.']], phrases: ['I strongly believe that…', 'This is because…', 'A good example is…', 'So, to sum up, …'] },
  };
  const FW_OF = { p1: 'ard', p2: 'photo', p3: 'compare', p4: 'opinion', p5: 'prep' };
  ui.FrameworkCard = (key) => {
    const f = ui.frameworks[key];
    return h(
      'div',
      { class: 'framework' },
      h('h4', null, f.name),
      h('ol', { class: 'fw-steps' }, f.steps.map(([k, n, d]) => h('li', null, h('span', { class: 'fw-key', 'aria-hidden': 'true' }, k), h('div', null, h('strong', null, n), ' — ', d)))),
      h('p', { class: 'small muted' }, 'Cụm hữu ích: ', f.phrases.join(' · ')),
    );
  };

  /* ================= Reading ================= */
  const practiceTimer = (minutes) => ui.Countdown({ seconds: minutes * 60, label: '⏱ Giờ gợi ý', controls: false, compact: true, autoStart: true, onEnd: () => ui.toast('Hết giờ gợi ý — làm nốt rồi xem lại bạn mất thời gian ở đâu.', { kind: 'warn', icon: '⏰' }) });

  const mkResult = (items, t0, tag) => {
    const correct = items.filter((i) => i.ok).length;
    return { correct, total: items.length, pct: items.length ? Math.round((correct / items.length) * 100) : 0, seconds: Math.round((Date.now() - t0) / 1000), items: items.map((i) => ({ tag, ...i })) };
  };

  function OrderTask(set, { exam, onFinish, extraActions }) {
    const t0 = Date.now();
    const root = h('div', { class: 'task task-order' });
    let pool = U.shuffle(set.order.map((s, i) => ({ s, i })));
    if (pool.every((x, k) => x.i === k)) pool = pool.reverse();
    let picked = [];
    let checked = false;
    const timer = exam ? null : practiceTimer(A.labels.reading.ordering.minutes);

    const move = (k, d) => {
      const j = k + d;
      if (j < 0 || j >= picked.length) return;
      [picked[k], picked[j]] = [picked[j], picked[k]];
      render();
    };
    function check() {
      checked = true;
      timer && timer.stop();
      const items = picked.map((p, k) => ({ q: p.s, ok: p.i === k, pickedText: p.s, correctText: set.order[k] }));
      const res = mkResult(items, t0, 'ordering');
      onFinish && onFinish(res);
      root.result = res;
      render(res);
    }
    function render(res) {
      ui.clear(root);
      root.append(
        timer,
        h('p', { class: 'muted' }, 'Câu đầu tiên đã cố định. Bấm vào các câu bên dưới theo đúng thứ tự để đặt chúng vào đoạn văn.'),
        h('ol', { class: 'order-list', start: 1 }, h('li', { class: 'order-item fixed' }, h('span', { class: 'order-text' }, set.first), h('span', { class: 'chip chip-neutral' }, 'Cố định')), picked.map((p, k) => {
          const ok = checked && p.i === k;
          const bad = checked && p.i !== k;
          return h(
            'li',
            { class: ['order-item', 'placed', ok && 'ok', bad && 'bad'] },
            h('span', { class: 'order-text' }, p.s),
            !checked &&
              h(
                'span',
                { class: 'order-ctl' },
                h('button', { type: 'button', class: 'btn btn-ghost btn-sm', 'aria-label': 'Đưa lên', disabled: k === 0, onClick: () => move(k, -1) }, '↑'),
                h('button', { type: 'button', class: 'btn btn-ghost btn-sm', 'aria-label': 'Đưa xuống', disabled: k === picked.length - 1, onClick: () => move(k, 1) }, '↓'),
                h('button', { type: 'button', class: 'btn btn-ghost btn-sm', 'aria-label': 'Bỏ chọn', onClick: () => ((pool.push(p), (picked = picked.filter((x) => x !== p))), render()) }, '✕'),
              ),
            checked && h('span', { class: 'small' }, ok ? '✓' : '✗ vị trí đúng là câu ' + (set.order.indexOf(p.s) + 2)),
          );
        })),
        !checked && pool.length
          ? h('div', { class: 'pool' }, h('h4', null, 'Các câu còn lại — chọn câu tiếp theo:'), pool.map((p) => h('button', { type: 'button', class: 'pool-item', onClick: () => ((picked.push(p), (pool = pool.filter((x) => x !== p))), render()) }, p.s)))
          : null,
      );
      if (!checked) root.append(h('div', { class: 'quiz-actions' }, h('button', { type: 'button', class: 'btn btn-accent', disabled: picked.length < set.order.length, onClick: check }, exam ? 'Nộp bài' : 'Kiểm tra')));
      else if (!exam) {
        root.append(
          h('div', { class: ['feedback', res.correct === res.total ? 'fb-ok' : 'fb-bad'], role: 'status' }, h('strong', null, `${res.correct}/${res.total} câu đúng vị trí`), h('p', null, ui.rich(set.e)), h('p', { class: 'small muted' }, 'Thứ tự đúng: ', set.first, ' → ', set.order.join(' → '))),
          h('div', { class: 'quiz-actions' }, extraActions && extraActions(res)),
        );
      }
    }
    render();
    root.finish = () => {
      if (!checked) check();
    };
    return root;
  }

  function MatchTask(set, { exam, onFinish, extraActions }) {
    const t0 = Date.now();
    const root = h('div', { class: 'task task-match' });
    const ans = set.qs.map(() => null);
    let checked = false;
    const timer = exam ? null : practiceTimer(A.labels.reading.shortMatch.minutes);
    const checkBtn = h('button', { type: 'button', class: 'btn btn-accent', disabled: true, onClick: check }, exam ? 'Nộp bài' : 'Kiểm tra');
    const qBox = h('div', { class: 'match-qs' });

    function check() {
      checked = true;
      timer && timer.stop();
      const items = set.qs.map((q, i) => ({ q: q.q, ok: ans[i] === q.a, pickedText: ans[i] != null ? set.people[ans[i]].n : '(chưa chọn)', correctText: set.people[q.a].n, e: q.e }));
      const res = mkResult(items, t0, 'shortMatch');
      onFinish && onFinish(res);
      root.result = res;
      drawQs();
      checkBtn.remove();
      if (!exam) root.append(h('div', { class: ['feedback', res.pct >= 70 ? 'fb-ok' : 'fb-bad'], role: 'status' }, h('strong', null, `${res.correct}/${res.total} đúng`)), h('div', { class: 'quiz-actions' }, extraActions && extraActions(res)));
    }
    function drawQs() {
      ui.clear(qBox);
      set.qs.forEach((q, i) => {
        const ok = checked && ans[i] === q.a;
        const bad = checked && ans[i] !== q.a;
        qBox.append(
          h(
            'fieldset',
            { class: ['match-q', ok && 'ok', bad && 'bad'] },
            h('legend', null, `${i + 1}. ${q.q}`),
            h(
              'div',
              { class: 'match-opts' },
              set.people.map((p, pi) => {
                const id = `mq${i}-${pi}`;
                return h(
                  'span',
                  null,
                  h('input', { type: 'radio', name: 'mq' + i, id, checked: ans[i] === pi, disabled: checked, onChange: () => ((ans[i] = pi), (checkBtn.disabled = ans.some((x) => x == null))) }),
                  h('label', { for: id, class: ['pill', checked && pi === q.a && 'is-correct'] }, p.n),
                );
              }),
            ),
            checked && !exam && h('p', { class: 'small muted' }, (ok ? '✓ ' : `✗ Đáp án: ${set.people[q.a].n}. `) + q.e),
          ),
        );
      });
    }
    root.append(
      timer,
      h('p', { class: 'muted' }, set.intro),
      h('div', { class: 'people' }, set.people.map((p) => h('article', { class: 'person' }, h('h3', null, p.n), h('p', null, p.t)))),
      h('h3', null, 'Ai nói điều này?'),
      qBox,
      h('div', { class: 'quiz-actions' }, checkBtn),
    );
    drawQs();
    root.finish = () => !checked && check();
    return root;
  }

  function HeadingTask(set, { exam, onFinish, extraActions }) {
    const t0 = Date.now();
    const root = h('div', { class: 'task task-heading' });
    const sel = set.paras.map(() => -1);
    let checked = false;
    const timer = exam ? null : practiceTimer(A.labels.reading.longMatch.minutes);
    const msg = h('p', { class: 'bad small', role: 'alert' });
    const checkBtn = h('button', { type: 'button', class: 'btn btn-accent', onClick: check }, exam ? 'Nộp bài' : 'Kiểm tra');
    const selects = [];

    function check() {
      if (sel.some((x) => x < 0)) {
        if (!exam || !root.forced) return (msg.textContent = 'Hãy chọn tiêu đề cho mọi đoạn trước khi kiểm tra.');
      }
      const used = sel.filter((x) => x >= 0);
      if (!exam && new Set(used).size !== used.length) return (msg.textContent = 'Mỗi tiêu đề chỉ dùng một lần — có tiêu đề bị chọn trùng.');
      checked = true;
      timer && timer.stop();
      const items = set.paras.map((p, i) => ({ q: 'Đoạn ' + (i + 1), ok: sel[i] === set.a[i], pickedText: sel[i] >= 0 ? set.headings[sel[i]] : '(chưa chọn)', correctText: set.headings[set.a[i]], e: set.e[i] }));
      const res = mkResult(items, t0, 'longMatch');
      onFinish && onFinish(res);
      root.result = res;
      selects.forEach((s) => (s.disabled = true));
      checkBtn.remove();
      msg.textContent = '';
      if (!exam) {
        root.querySelectorAll('.para').forEach((el, i) => {
          el.classList.add(items[i].ok ? 'ok' : 'bad');
          el.append(h('p', { class: 'small muted' }, (items[i].ok ? '✓ ' : `✗ Tiêu đề đúng: “${items[i].correctText}”. `) + set.e[i]));
        });
        root.append(h('div', { class: ['feedback', res.pct >= 70 ? 'fb-ok' : 'fb-bad'], role: 'status' }, h('strong', null, `${res.correct}/${res.total} đúng`)), h('div', { class: 'quiz-actions' }, extraActions && extraActions(res)));
      }
    }
    root.append(
      timer,
      h('div', { class: 'headings' }, h('h3', null, 'Danh sách tiêu đề (1 tiêu đề thừa)'), h('ol', null, set.headings.map((x) => h('li', null, x)))),
      set.paras.map((p, i) => {
        const s = h(
          'select',
          { 'aria-label': `Tiêu đề cho đoạn ${i + 1}`, onChange: (e) => ((sel[i] = Number(e.target.value)), (msg.textContent = '')) },
          h('option', { value: -1 }, '— chọn tiêu đề —'),
          set.headings.map((x, k) => h('option', { value: k }, `${k + 1}. ${x}`)),
        );
        selects.push(s);
        return h('article', { class: 'para' }, h('h4', null, 'Đoạn ' + (i + 1)), h('p', null, p.t), h('label', { class: 'para-pick' }, 'Tiêu đề: ', s));
      }),
      msg,
      h('div', { class: 'quiz-actions' }, checkBtn),
    );
    root.finish = () => {
      if (!checked) {
        root.forced = true;
        check();
      }
    };
    return root;
  }

  ui.ReadingTask = (type, set, { mode = 'practice', onFinish, extraActions } = {}) => {
    const exam = mode === 'exam';
    if (type === 'sentence') {
      return ui.Quiz({
        questions: set.items.map((q) => ({ ...q, tag: 'sentence' })),
        mode,
        title: set.title,
        summary: !exam,
        timerSec: exam ? null : A.labels.reading.sentence.minutes * 60,
        onFinish,
        extraActions,
      });
    }
    const o = { exam, onFinish, extraActions };
    return type === 'ordering' ? OrderTask(set, o) : type === 'shortMatch' ? MatchTask(set, o) : HeadingTask(set, o);
  };

  /* ================= Listening ================= */
  ui.ListeningTask = (item, { mode = 'practice', onFinish, extraActions } = {}) => {
    const exam = mode === 'exam';
    const root = h('div', { class: 'task task-listen' });
    const player = ui.AudioPlayer({ script: item.script, speakers: item.speakers, maxPlays: exam ? 2 : Infinity });
    const tBox = h('div', { class: 'hidden-transcript' });
    const showT = h('button', { type: 'button', class: 'btn btn-ghost btn-sm', onClick: () => (tBox.hasChildNodes() ? ui.clear(tBox) : tBox.append(ui.Transcript(item.script, item.keywords))) }, 'Không nghe được? Xem transcript');
    const quiz = ui.Quiz({
      questions: item.qs.map((q) => ({ ...q, tag: item.type })),
      mode,
      title: item.title,
      summary: !exam,
      onFinish: (res) => {
        player.stop();
        onFinish && onFinish({ ...res, plays: player.plays() });
      },
      extraActions,
      summaryExtra: () =>
        h(
          'div',
          { class: 'listen-after' },
          h('h3', null, 'Transcript'),
          ui.Transcript(item.script, item.keywords),
          h('h3', null, 'Từ khoá cần nghe'),
          h('p', null, item.keywords.map((k) => ui.Chip(k, 'primary'))),
          h('h3', null, 'Bẫy thường gặp (Common traps)'),
          h('ul', null, item.traps.map((t) => h('li', null, ui.rich(t)))),
        ),
    });
    root.append(
      ui.Callout('info', exam ? 'Bạn được nghe tối đa 2 lần, như bài thi thật.' : 'Nghe trước, trả lời sau. Transcript, từ khoá và bẫy sẽ hiện sau khi bạn làm xong.'),
      !exam && item.setting && h('p', { class: 'muted small' }, 'Bối cảnh: ' + item.setting),
      player,
      !exam && showT,
      tBox,
      quiz,
    );
    root.finish = () => quiz.finish();
    root.stop = () => player.stop();
    return root;
  };

  /* ================= Writing ================= */
  const CONNECTORS = ['however', 'although', 'even though', 'because of', 'therefore', 'moreover', 'furthermore', 'in addition', 'for example', 'for instance', 'as a result', 'on the other hand', 'firstly', 'secondly', 'finally', 'unfortunately', 'besides', 'whereas', 'despite', 'in conclusion', 'as well as', 'otherwise', 'apart from', 'in spite of', 'what is more', 'that is why', 'so that', 'unless', 'while', 'in my opinion', 'to be honest', 'as soon as'];
  const connectorsIn = (t) => CONNECTORS.filter((c) => new RegExp('\\b' + c + '\\b', 'i').test(t));

  /** Kiểm tra tự động bằng luật đơn giản (không phải chấm điểm thật) */
  ui.autoCheckWriting = (task, text, part) => {
    const n = U.countWords(text);
    const out = [];
    const inRange = n >= part.min && n <= part.max;
    out.push({ ok: inRange, label: `Độ dài ${n} từ (yêu cầu ${part.min}–${part.max})`, tip: n < part.min ? `Thiếu ${part.min - n} từ — thêm một lý do hoặc ví dụ.` : n > part.max ? `Thừa ${n - part.max} từ — lược bớt chi tiết phụ.` : '' });
    if (task >= 3) {
      out.push({ ok: /^\s*(dear|hi|hello|hey)\b/i.test(text), label: 'Có lời chào đầu thư', tip: 'Bắt đầu bằng “Dear …,” (trang trọng) hoặc “Hi …,” (thân mật).' });
      out.push({ ok: /(regards|sincerely|best wishes|cheers|yours|see you|speak soon|take care|all the best|looking forward)/i.test(text), label: 'Có lời kết thư', tip: 'Kết bằng “Kind regards,” / “Yours sincerely,” hoặc “Cheers,” / “Take care,”.' });
    }
    if (task >= 2 && part.max > 25) {
      const need = task === 4 ? 3 : task === 3 ? 2 : 1;
      const used = connectorsIn(text);
      out.push({ ok: used.length >= need, label: `Từ nối B2 dùng ${used.length}/${need} (${used.slice(0, 4).join(', ') || 'chưa có'})`, tip: 'Thêm however, although, as a result, for example…' });
    }
    if (task === 4) {
      const sentences = (text.match(/[.!?](\s|$)/g) || []).length;
      out.push({ ok: sentences >= 6, label: `Số câu: ${sentences} (nên ≥ 6)`, tip: 'Chia 3–4 đoạn ngắn: mở đầu – ý chính – đề nghị – kết.' });
    }
    if (part.max > 25) {
      out.push({ ok: !/(^|[\s"(])i(\s|')/.test(text), label: 'Viết hoa chữ “I”', tip: 'Đại từ “I” luôn viết hoa.' });
      const weak = (text.match(/\b(very|really|good|nice|thing|things|a lot of)\b/gi) || []).length;
      out.push({ ok: weak <= 2, label: `Từ chung chung (very, good, nice, thing…): ${weak}`, tip: 'Thay bằng từ cụ thể hơn: extremely, excellent, delightful…' });
    }
    return out;
  };

  const lengthScore = (n, p) => (n >= p.min && n <= p.max ? 5 : n >= p.min * 0.8 && n <= p.max * 1.2 ? 3 : n > 0 ? 1 : 0);

  ui.WritingTask = (ex, { mode = 'practice', onFinish, extraActions } = {}) => {
    const exam = mode === 'exam';
    const root = h('div', { class: 'task task-write' });
    const drafts = A.store.get('drafts');
    const saved = !exam && drafts[ex.id] ? drafts[ex.id].texts || [] : [];
    const texts = ex.parts.map((_, i) => saved[i] || '');
    const boxes = [];
    let submitted = false;
    const t0 = Date.now();
    let saveH = null;
    const saveDraft = () => {
      if (exam) return;
      clearTimeout(saveH);
      saveH = setTimeout(() => {
        drafts[ex.id] = { texts: boxes.map((b) => b.get()), at: Date.now() };
        A.store.save('drafts');
      }, 600);
    };

    const write = () => {
      ui.clear(root);
      root.append(h('div', { class: 'task-context' }, h('h3', null, ex.title), h('p', null, ui.rich(ex.context))));
      if (!exam) {
        root.append(
          ui.Accordion({ title: '💡 Mẹo & cụm B2 hữu ích (mở nếu cần)' }, h('ul', null, ex.tips.map((t) => h('li', null, ui.rich(t)))), h('p', null, ex.phrases.map((p) => h('span', { class: 'chip chip-primary' }, p)))),
        );
      }
      boxes.length = 0;
      ex.parts.forEach((p, i) => {
        const box = ui.WritingBox({ min: p.min, max: p.max, value: texts[i], rows: p.max > 60 ? 10 : p.max > 25 ? 5 : 2, label: `Phần ${i + 1}`, onChange: (v) => ((texts[i] = v), saveDraft()) });
        boxes.push(box);
        root.append(h('div', { class: 'wpart' }, ex.parts.length > 1 && h('h4', null, `Phần ${i + 1}/${ex.parts.length}`), h('p', { class: 'wprompt' }, ui.rich(p.prompt)), !exam && p.hint && h('p', { class: 'muted small' }, 'Gợi ý: ' + p.hint), box));
      });
      root.append(
        h('div', { class: 'quiz-actions' }, h('button', { type: 'button', class: 'btn btn-accent', onClick: submit }, 'Nộp & so sánh với bài mẫu')),
        !exam && h('p', { class: 'muted small' }, 'Bản nháp tự lưu trong trình duyệt. Bài mẫu chỉ hiện sau khi bạn nộp để tránh chép.'),
      );
    };

    function submit() {
      const finalTexts = boxes.map((b) => b.get());
      if (finalTexts.every((t) => !t.trim())) return ui.toast('Hãy viết ít nhất một phần trước khi nộp.', { kind: 'warn' });
      submitted = true;
      ui.clear(root);
      root.append(h('div', { class: 'task-context' }, h('h3', null, ex.title), h('p', { class: 'muted' }, 'So sánh bài của bạn với bài mẫu B2 và kiểm tra tự động. Sau đó tự chấm điểm thật nghiêm khắc.')));
      const lens = [];
      ex.parts.forEach((p, i) => {
        const checks = ui.autoCheckWriting(ex.task, finalTexts[i], p);
        lens.push(lengthScore(U.countWords(finalTexts[i]), p));
        root.append(
          h(
            'div',
            { class: 'wcompare' },
            ex.parts.length > 1 && h('h4', null, `Phần ${i + 1}`),
            h('p', { class: 'wprompt' }, ui.rich(p.prompt)),
            h('div', { class: 'cols' }, h('div', null, h('h5', null, 'Bài của bạn'), h('div', { class: 'textbox' }, finalTexts[i] || '(trống)')), h('div', null, h('h5', null, 'Bài mẫu B2'), h('div', { class: 'textbox sample' }, p.sample))),
            h('ul', { class: 'checks' }, checks.map((c) => h('li', { class: c.ok ? 'ok' : 'bad' }, h('span', { 'aria-hidden': 'true' }, c.ok ? '✓ ' : '✗ '), c.label, !c.ok && c.tip ? h('span', { class: 'muted small' }, ' — ' + c.tip) : null))),
          ),
        );
      });
      const lenAvg = U.avg(lens);
      root.append(
        ui.SelfRating({
          criteria: [
            { id: 'task', label: 'Hoàn thành yêu cầu & đúng văn phong', help: '5 = trả lời đủ mọi ý, giọng điệu phù hợp (thân mật/trang trọng).' },
            { id: 'grammar', label: 'Ngữ pháp & chính tả', help: '5 = hầu như không lỗi; 3 = vài lỗi nhưng vẫn rõ nghĩa.' },
            { id: 'vocab', label: 'Từ vựng đa dạng, chính xác', help: '5 = dùng nhiều cụm B2; 3 = dùng từ cơ bản lặp lại.' },
            { id: 'cohesion', label: 'Bố cục & từ nối', help: '5 = chào – ý chính – kết có từ nối; 3 = thiếu từ nối.' },
          ],
          onSubmit: (avg4) => {
            const rating = (avg4 * 4 + lenAvg) / 5;
            drafts[ex.id] && delete drafts[ex.id];
            A.store.save('drafts');
            const words = finalTexts.map((t) => U.countWords(t));
            const res = { rating, words, seconds: Math.round((Date.now() - t0) / 1000), lengthScore: lenAvg };
            onFinish && onFinish(res);
            root.result = res;
            if (!exam) {
              ui.clear(root);
              root.append(
                h('div', { class: 'quiz-summary' }, h('div', { class: 'big-emoji', 'aria-hidden': 'true' }, '✍️'), h('h2', null, `Tự chấm: ${rating.toFixed(1)}/5`), h('p', { class: 'muted' }, 'Điểm gồm 4 tiêu chí bạn chấm và 1 tiêu chí độ dài tính tự động.'), h('div', { class: 'quiz-actions' }, extraActions && extraActions(res))),
              );
            }
          },
        }),
      );
      globalThis.scrollTo(0, 0);
    }
    write();
    root.finish = () => {
      if (!submitted) {
        submit();
        return null;
      }
    };
    root.stop = () => saveH && clearTimeout(saveH);
    return root;
  };

  /* ================= Speaking ================= */
  function speakingSteps(key, item) {
    if (key === 'p1') return item.qs.map((q, i) => ({ label: `Câu ${i + 1}/3`, prompt: q, speak: 30 }));
    if (key === 'p2') return [{ label: 'Mô tả bức ảnh', prompt: 'Describe the picture. What can you see? What are the people doing?', speak: 45 }, ...item.qs.map((q, i) => ({ label: `Câu hỏi ${i + 1}/2`, prompt: q, speak: 45 }))];
    if (key === 'p3') return [{ label: 'So sánh hai bức ảnh', prompt: 'Compare the two pictures. What are the similarities and differences?', speak: 45 }, ...item.qs.map((q, i) => ({ label: `Câu hỏi ${i + 1}/2`, prompt: q, speak: 45 }))];
    if (key === 'p4') return item.qs.map((q, i) => ({ label: `Câu ${i + 1}/3`, prompt: q, prep: 10, speak: 45 }));
    return [{ label: 'Chủ đề nói dài', prompt: item.topic, extra: item.qs, prep: 60, speak: 120 }];
  }

  ui.SpeakingTask = (key, item, { mode = 'practice', onFinish, extraActions } = {}) => {
    const exam = mode === 'exam';
    const steps = speakingSteps(key, item);
    const root = h('div', { class: 'task task-speak' });
    let i = 0;
    const t0 = Date.now();

    const sceneCard = () => {
      if (key === 'p2') return h('div', { class: 'scene' }, h('div', { class: 'scene-emoji', 'aria-hidden': 'true' }, item.emoji), h('div', null, h('strong', null, item.title), h('p', null, item.scene), h('p', { class: 'muted small' }, 'Ứng dụng không có ảnh thật: hãy hình dung bức ảnh theo mô tả này.')));
      if (key === 'p3')
        return h(
          'div',
          { class: 'scene-pair' },
          [['A', item.emojiA, item.sceneA], ['B', item.emojiB, item.sceneB]].map(([k, e, s]) => h('div', { class: 'scene' }, h('div', { class: 'scene-emoji', 'aria-hidden': 'true' }, e), h('div', null, h('strong', null, 'Ảnh ' + k), h('p', null, s)))),
        );
      return null;
    };

    function renderStep() {
      ui.clear(root);
      const s = steps[i];
      let phase = 'ready';
      const area = h('div', { class: 'speak-area' });
      const hint = h('p', { class: 'muted small', 'aria-live': 'polite' });
      const nextBtn = h('button', { type: 'button', class: 'btn btn-primary', onClick: () => (i < steps.length - 1 ? (i++, renderStep()) : renderReview()) }, i < steps.length - 1 ? 'Tiếp theo →' : 'Xong — xem bài mẫu');
      function startSpeak() {
        phase = 'speak';
        ui.clear(area);
        hint.textContent = 'Đang nói — hãy nói liên tục đến khi hết giờ.';
        area.append(ui.Countdown({ seconds: s.speak, label: '🎤 Nói', controls: false, autoStart: true, onEnd: () => (hint.textContent = 'Hết giờ. Bạn có thể bấm “Tiếp theo”.') }), ui.RecorderWidget());
      }
      function startPrep() {
        phase = 'prep';
        ui.clear(area);
        hint.textContent = 'Chuẩn bị: ghi nhanh 3 ý theo khung bên dưới. Hết giờ chuẩn bị sẽ tự chuyển sang phần nói.';
        area.append(ui.Countdown({ seconds: s.prep, label: '📝 Chuẩn bị', controls: false, autoStart: true, onEnd: startSpeak }), h('button', { type: 'button', class: 'btn btn-ghost btn-sm', onClick: startSpeak }, 'Bỏ qua, nói luôn'));
      }
      area.append(h('button', { type: 'button', class: 'btn btn-accent', onClick: () => (s.prep ? startPrep() : startSpeak()) }, s.prep ? `▶ Bắt đầu (chuẩn bị ${s.prep}s, nói ${s.speak}s)` : `▶ Bắt đầu nói (${s.speak}s)`));
      root.append(
        h('div', { class: 'quiz-top' }, h('div', { class: 'quiz-meta' }, h('strong', null, item.title || item.topic), ' · ', s.label, ` (${i + 1}/${steps.length})`)),
        ui.Progress({ value: (i / steps.length) * 100, thin: true, label: 'Tiến độ Speaking' }),
        sceneCard(),
        h('p', { class: 'speak-prompt' }, s.prompt),
        s.extra && h('ul', { class: 'muted' }, s.extra.map((q) => h('li', null, q))),
        area,
        hint,
        !exam && ui.Accordion({ title: '🧭 Khung gợi ý cho phần này' }, ui.FrameworkCard(FW_OF[key])),
        h('div', { class: 'quiz-actions' }, nextBtn),
      );
    }

    function renderReview() {
      ui.clear(root);
      const sample = item.sample;
      root.append(
        h('h3', null, 'Bài mẫu mức B2 — nghe lại bằng giọng đọc và so với câu trả lời của bạn'),
        ...(Array.isArray(sample) ? item.qs.map((q, k) => h('div', { class: 'sample-block' }, h('p', { class: 'wprompt' }, q), h('div', { class: 'textbox sample' }, sample[k]), speakBtn(sample[k]))) : [h('div', { class: 'sample-block' }, h('div', { class: 'textbox sample' }, sample), speakBtn(sample))]),
        item.vocab && h('p', null, h('strong', null, 'Từ/cụm hữu ích: '), item.vocab.map((v) => ui.Chip(v, 'primary'))),
        item.points && h('p', null, h('strong', null, 'Ý nên triển khai: '), item.points.join(' · ')),
        ui.FrameworkCard(FW_OF[key]),
        ui.SelfRating({
          title: 'Tự đánh giá phần nói của bạn (nghe lại bản ghi nếu có)',
          criteria: [
            { id: 'fluency', label: 'Trôi chảy', help: '5 = nói liền mạch, ít ngập ngừng dài; 3 = ngập ngừng vài lần.' },
            { id: 'vocab', label: 'Từ vựng', help: '5 = đa dạng, chính xác; 3 = lặp từ cơ bản.' },
            { id: 'grammar', label: 'Ngữ pháp', help: '5 = ít lỗi, có cấu trúc phức; 3 = lỗi nhưng vẫn hiểu được.' },
            { id: 'content', label: 'Nội dung & thời lượng', help: '5 = trả lời đúng ý, nói đủ thời gian; 3 = đúng ý nhưng ngắn.' },
          ],
          onSubmit: (rating) => {
            const res = { rating, seconds: Math.round((Date.now() - t0) / 1000) };
            onFinish && onFinish(res);
            root.result = res;
            if (!exam) {
              ui.clear(root);
              root.append(h('div', { class: 'quiz-summary' }, h('div', { class: 'big-emoji', 'aria-hidden': 'true' }, '🎤'), h('h2', null, `Tự chấm: ${rating.toFixed(1)}/5`), h('div', { class: 'quiz-actions' }, extraActions && extraActions(res))));
            }
          },
        }),
      );
      globalThis.scrollTo(0, 0);
    }
    const speakBtn = (text) => h('button', { type: 'button', class: 'btn btn-ghost btn-sm', disabled: !A.tts.supported, onClick: () => A.tts.speak(text, { gender: 'f' }) }, '🔊 Nghe bài mẫu');

    renderStep();
    root.finish = () => renderReview();
    return root;
  };
})();
