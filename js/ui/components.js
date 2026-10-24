/* Thành phần giao diện dùng chung */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = (A.ui = A.ui || {});
  const U = A.util;
  const { h, svg } = ui;

  /* ---------- Cơ bản ---------- */
  ui.Button = ({ label, kind = 'primary', onClick, href, icon, size, disabled, title, block, type = 'button', ...rest }) => {
    const cls = ['btn', 'btn-' + kind, size && 'btn-' + size, block && 'btn-block'];
    const kids = [icon && h('span', { class: 'btn-icon', 'aria-hidden': 'true' }, icon), h('span', null, label)];
    if (href) return h('a', { class: cls, href, title, ...rest }, kids);
    return h('button', { class: cls, type, onClick, disabled, title, ...rest }, kids);
  };
  ui.Card = ({ title, sub, class: cls, actions, id } = {}, ...children) =>
    h(
      'section',
      { class: ['card', cls], id },
      (title || actions) && h('div', { class: 'card-head' }, h('div', null, title && h('h2', { class: 'card-title' }, title), sub && h('p', { class: 'muted small' }, sub)), actions && h('div', { class: 'card-actions' }, actions)),
      children,
    );
  ui.Chip = (text, kind = 'neutral') => h('span', { class: 'chip chip-' + kind }, text);
  ui.Progress = ({ value = 0, label, tone = 'primary', thin } = {}) =>
    h(
      'div',
      { class: ['progress', thin && 'progress-thin'], role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': Math.round(value), 'aria-label': label || 'Tiến độ' },
      h('div', { class: 'progress-bar tone-' + tone, style: { width: U.clamp(value, 0, 100) + '%' } }),
    );
  ui.Stat = ({ icon, label, value, sub, tone }) =>
    h('div', { class: ['stat', tone && 'tone-' + tone] }, icon && h('div', { class: 'stat-icon', 'aria-hidden': 'true' }, icon), h('div', null, h('div', { class: 'stat-value' }, value), h('div', { class: 'stat-label' }, label), sub && h('div', { class: 'stat-sub' }, sub)));
  ui.PageHeader = ({ title, sub, crumbs, actions }) =>
    h(
      'header',
      { class: 'page-header' },
      crumbs && h('nav', { class: 'crumbs', 'aria-label': 'Điều hướng' }, crumbs.map((c, i) => [i ? h('span', { 'aria-hidden': 'true' }, ' / ') : null, c.href ? h('a', { href: c.href }, c.label) : h('span', null, c.label)])),
      h('div', { class: 'page-header-row' }, h('div', null, h('h1', null, title), sub && h('p', { class: 'muted' }, sub)), actions && h('div', { class: 'page-actions' }, actions)),
    );
  ui.Empty = ({ icon = '📭', title, text, action }) => h('div', { class: 'empty' }, h('div', { class: 'empty-icon', 'aria-hidden': 'true' }, icon), h('h3', null, title), text && h('p', { class: 'muted' }, text), action);
  ui.Accordion = ({ title, open, class: cls }, ...children) => h('details', { class: ['accordion', cls], open }, h('summary', null, title), h('div', { class: 'accordion-body' }, children));

  ui.Ring = ({ value = 0, size = 96, stroke = 10, label, sub, tone = 'primary' }) => {
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    const v = U.clamp(value, 0, 100);
    return h(
      'div',
      { class: 'ring', style: { width: size + 'px', height: size + 'px' }, role: 'img', 'aria-label': `${label || ''} ${Math.round(v)}%` },
      svg(
        'svg',
        { width: size, height: size, viewBox: `0 0 ${size} ${size}` },
        svg('circle', { cx: size / 2, cy: size / 2, r, class: 'ring-track', 'stroke-width': stroke, fill: 'none' }),
        svg('circle', { cx: size / 2, cy: size / 2, r, class: 'ring-bar tone-' + tone, 'stroke-width': stroke, fill: 'none', 'stroke-dasharray': c, 'stroke-dashoffset': c * (1 - v / 100), 'stroke-linecap': 'round', transform: `rotate(-90 ${size / 2} ${size / 2})` }),
      ),
      h('div', { class: 'ring-text' }, h('strong', null, label != null ? label : Math.round(v) + '%'), sub && h('span', null, sub)),
    );
  };

  /* ---------- Đồng hồ đếm ---------- */
  ui.Countdown = ({ seconds = 60, label, autoStart = false, controls = true, onEnd, onTick, countUp = false, compact = false } = {}) => {
    const clock = h('span', { class: 'clock', role: 'timer', 'aria-live': 'off' }, U.fmtClock(countUp ? 0 : seconds));
    const bar = ui.Progress({ value: 0, thin: true, label: label || 'Thời gian' });
    const root = h('div', { class: ['countdown', compact && 'countdown-compact'] });
    let ended = false;
    const timer = A.createTimer({
      seconds,
      countUp,
      onTick: (v, el) => {
        if (!root.isConnected && timer.running) return timer.stop();
        clock.textContent = U.fmtClock(v);
        const left = countUp ? seconds - el : v;
        clock.classList.toggle('warn', !countUp && left <= 10 && left > 0);
        bar.firstChild.style.width = U.clamp((el / seconds) * 100, 0, 100) + '%';
        A.activity && A.activity.hold(4);
        onTick && onTick(v, el);
      },
      onEnd: () => {
        ended = true;
        clock.classList.add('warn');
        A.beep(660, 350);
        onEnd && onEnd();
      },
    });
    const btn = h('button', { type: 'button', class: 'btn btn-secondary btn-sm', onClick: () => (timer.running ? api.pause() : api.start()) }, 'Bắt đầu');
    const api = {
      timer,
      start() {
        if (ended) return;
        timer.start();
        btn.textContent = 'Tạm dừng';
      },
      pause() {
        timer.pause();
        btn.textContent = 'Tiếp tục';
      },
      reset(s) {
        ended = false;
        timer.reset(s);
        clock.classList.remove('warn');
        bar.firstChild.style.width = '0%';
        btn.textContent = 'Bắt đầu';
      },
      stop: () => timer.stop(),
      elapsed: () => timer.elapsed(),
    };
    root.append(
      h('div', { class: 'countdown-row' }, label && h('span', { class: 'muted small' }, label), clock, controls && btn, controls && h('button', { type: 'button', class: 'btn btn-ghost btn-sm', onClick: () => api.reset() }, 'Đặt lại')),
      bar,
    );
    Object.assign(root, api);
    if (autoStart) setTimeout(() => api.start(), 0);
    return root;
  };

  /* ---------- Quiz (trắc nghiệm một câu một lượt) ---------- */
  /**
   * ui.Quiz({ questions:[{q,o,a,e,tag,ctx,hint}], mode:'practice'|'exam', title, timerSec,
   *           onFinish(result), summary:true, extraActions(result)->Node, shuffle:true })
   * result = { correct,total,pct,seconds,items:[{q,ok,pickedText,correctText,e,tag,wordId}] }
   */
  ui.Quiz = (opts) => {
    const o = Object.assign({ mode: 'practice', title: '', shuffle: true, summary: true, finishLabel: 'Xem kết quả' }, opts);
    const exam = o.mode === 'exam';
    const root = h('div', { class: 'quiz' });
    let list = [];
    let st;
    let timer = null;
    let finished = false;
    let isRetry = false;
    let t0 = Date.now();

    const prep = (qs) =>
      qs.map((q) => {
        const order = o.shuffle && !q.fixed ? U.shuffle(q.o.map((_, i) => i)) : q.o.map((_, i) => i);
        return { src: q, order, opts: order.map((i) => q.o[i]), a: order.indexOf(q.a) };
      });
    const reset = (qs) => {
      list = prep(qs);
      st = { i: 0, picked: list.map(() => null), checked: list.map(() => false) };
      finished = false;
      t0 = Date.now();
    };
    reset(o.questions);

    const result = () => {
      const items = list.map((x, i) => {
        const p = st.picked[i];
        return { q: x.src.q, ok: p === x.a, answered: p != null, pickedText: p != null ? x.opts[p] : '(chưa trả lời)', correctText: x.opts[x.a], e: x.src.e, tag: x.src.tag, lvl: x.src.lvl, wordId: x.src.wordId, ctx: x.src.ctx };
      });
      const correct = items.filter((i) => i.ok).length;
      return { correct, total: items.length, pct: items.length ? Math.round((correct / items.length) * 100) : 0, seconds: Math.round((Date.now() - t0) / 1000), items };
    };

    function finish() {
      if (finished) return;
      finished = true;
      timer && timer.stop();
      const res = result();
      if (!isRetry) o.onFinish && o.onFinish(res);
      if (o.summary) renderSummary(res);
      root.result = res;
      return res;
    }

    function pick(i) {
      if (finished) return;
      if (!exam && st.checked[st.i]) return;
      st.picked[st.i] = i;
      renderQ(false);
    }
    function check() {
      if (st.picked[st.i] == null) return;
      st.checked[st.i] = true;
      renderQ(true);
    }
    function next() {
      if (st.i < list.length - 1) {
        st.i++;
        renderQ(false);
      } else finish();
    }
    function prev() {
      if (st.i > 0) {
        st.i--;
        renderQ(false);
      }
    }

    function renderQ(focusFeedback) {
      ui.clear(root);
      const x = list[st.i];
      const checked = st.checked[st.i];
      const picked = st.picked[st.i];
      const last = st.i === list.length - 1;
      root.append(
        h(
          'div',
          { class: 'quiz-top' },
          h('div', { class: 'quiz-meta' }, o.title && h('strong', null, o.title + ' · '), h('span', { 'aria-live': 'polite' }, `Câu ${st.i + 1}/${list.length}`)),
          timer && timerEl,
        ),
        ui.Progress({ value: ((st.i + (checked ? 1 : 0)) / list.length) * 100, thin: true, label: 'Tiến độ quiz' }),
      );
      if (x.src.ctx) root.append(h('div', { class: 'quiz-ctx' }, typeof x.src.ctx === 'string' ? ui.rich(x.src.ctx) : x.src.ctx));
      root.append(h('p', { class: 'quiz-q', id: 'qq' }, ui.fmtQ(x.src.q)), x.src.hint && h('p', { class: 'muted small' }, x.src.hint));
      root.append(
        h(
          'div',
          { class: 'options', role: 'radiogroup', 'aria-labelledby': 'qq' },
          x.opts.map((t, i) => {
            const cls = ['opt', picked === i && 'picked', checked && i === x.a && 'correct', checked && picked === i && i !== x.a && 'wrong'];
            return h(
              'button',
              { type: 'button', class: cls, role: 'radio', 'aria-checked': picked === i ? 'true' : 'false', disabled: checked, onClick: () => pick(i), dataset: { i } },
              h('span', { class: 'opt-key', 'aria-hidden': 'true' }, i + 1),
              h('span', { class: 'opt-text' }, t),
              checked && i === x.a && h('span', { class: 'sr-only' }, ' (đáp án đúng)'),
              checked && picked === i && i !== x.a && h('span', { class: 'sr-only' }, ' (bạn chọn, chưa đúng)'),
            );
          }),
        ),
      );
      if (!exam && checked) {
        const ok = picked === x.a;
        root.append(
          h(
            'div',
            { class: ['feedback', ok ? 'fb-ok' : 'fb-bad'], role: 'status', tabindex: '-1', ref: (el) => focusFeedback && setTimeout(() => el.focus({ preventScroll: true }), 0) },
            h('strong', null, ok ? '✓ Chính xác!' : '✗ Chưa đúng — đáp án: ' + x.opts[x.a]),
            x.src.e && h('p', null, ui.rich(x.src.e)),
          ),
        );
      }
      const row = h('div', { class: 'quiz-actions' });
      if (exam) {
        row.append(h('button', { type: 'button', class: 'btn btn-ghost', disabled: st.i === 0, onClick: prev }, '← Trước'));
        row.append(
          last
            ? h('button', { type: 'button', class: 'btn btn-accent', onClick: () => finish() }, 'Nộp bài')
            : h('button', { type: 'button', class: 'btn btn-primary', onClick: next }, 'Câu tiếp →'),
        );
      } else if (!checked) {
        row.append(h('button', { type: 'button', class: 'btn btn-primary', disabled: picked == null, onClick: check }, 'Kiểm tra'));
      } else {
        row.append(h('button', { type: 'button', class: 'btn btn-accent', onClick: next }, last ? o.finishLabel : 'Câu tiếp →'));
      }
      root.append(row);
      if (exam && list.length > 1) {
        root.append(
          h(
            'div',
            { class: 'qdots', 'aria-label': 'Chuyển câu' },
            list.map((_, i) => h('button', { type: 'button', class: ['qdot', i === st.i && 'cur', st.picked[i] != null && 'done'], onClick: () => ((st.i = i), renderQ(false)), 'aria-label': `Câu ${i + 1}${st.picked[i] != null ? ' đã trả lời' : ''}` }, i + 1)),
          ),
        );
      }
    }

    function renderSummary(res) {
      ui.clear(root);
      const emoji = res.pct >= 90 ? '🏆' : res.pct >= 70 ? '🎉' : res.pct >= 50 ? '👍' : '💪';
      const msg = res.pct >= 90 ? 'Xuất sắc!' : res.pct >= 70 ? 'Tốt lắm!' : res.pct >= 50 ? 'Khá ổn, luyện thêm nhé.' : 'Đừng nản — xem lại các câu sai bên dưới.';
      const wrong = res.items.filter((i) => !i.ok);
      root.append(
        h(
          'div',
          { class: 'quiz-summary' },
          h('div', { class: 'big-emoji', 'aria-hidden': 'true' }, emoji),
          h('h2', null, `${res.correct}/${res.total} đúng (${res.pct}%)`),
          h('p', { class: 'muted' }, msg + ' · ' + U.fmtClock(res.seconds) + ' phút'),
          o.summaryExtra && o.summaryExtra(res),
          wrong.length
            ? h(
                'div',
                { class: 'review' },
                h('h3', null, `Xem lại ${wrong.length} câu chưa đúng`),
                wrong.map((w) =>
                  h(
                    'div',
                    { class: 'review-item' },
                    h('p', { class: 'quiz-q' }, ui.fmtQ(w.q)),
                    h('p', { class: 'small' }, h('span', { class: 'bad' }, 'Bạn chọn: ' + w.pickedText), ' · ', h('span', { class: 'good' }, 'Đúng: ' + w.correctText)),
                    w.e && h('p', { class: 'muted small' }, ui.rich(w.e)),
                  ),
                ),
              )
            : h('p', { class: 'good' }, 'Không sai câu nào 🎯'),
          h(
            'div',
            { class: 'quiz-actions' },
            wrong.length && h('button', { type: 'button', class: 'btn btn-primary', onClick: () => retry(wrong.map((w) => list.find((x) => x.src.q === w.q).src)) }, `Làm lại ${wrong.length} câu sai`),
            h('button', { type: 'button', class: 'btn btn-secondary', onClick: () => ((isRetry = false), startTimer(), reset(o.questions), renderQ(false)) }, 'Làm lại từ đầu'),
            o.extraActions && o.extraActions(res),
          ),
        ),
      );
    }
    function retry(srcQs) {
      isRetry = true;
      reset(srcQs);
      renderQ(false);
    }

    // Đồng hồ (tuỳ chọn)
    let timerEl = null;
    function startTimer() {
      if (!o.timerSec) return;
      timer && timer.stop();
      timerEl = ui.Countdown({
        seconds: o.timerSec,
        controls: false,
        compact: true,
        autoStart: true,
        label: '⏱',
        onEnd: () => {
          if (exam) finish();
          else ui.toast('Hết thời gian gợi ý — bạn vẫn có thể làm tiếp.', { kind: 'warn', icon: '⏰' });
        },
      });
      timer = timerEl.timer;
    }
    startTimer();

    // Phím tắt: 1–4 chọn đáp án, Enter kiểm tra/tiếp
    const onKey = (e) => {
      if (!root.isConnected) return document.removeEventListener('keydown', onKey);
      if (finished || e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      const x = list[st.i];
      if (/^[1-9]$/.test(e.key) && Number(e.key) <= x.opts.length) {
        pick(Number(e.key) - 1);
        const b = root.querySelector(`.opt[data-i="${Number(e.key) - 1}"]`);
        b && b.focus({ preventScroll: true });
      } else if (e.key === 'Enter' && tag !== 'button' && tag !== 'a') {
        if (exam) {
          if (st.i < list.length - 1) next(); // không tự nộp bài bằng Enter
        } else if (!st.checked[st.i]) check();
        else next();
      }
    };
    document.addEventListener('keydown', onKey);

    renderQ(false);
    root.finish = finish;
    root.getResult = result;
    return root;
  };

  /* ---------- Trình phát nghe (TTS) + transcript ---------- */
  ui.Transcript = (script, keywords) =>
    h(
      'div',
      { class: 'transcript' },
      script.map((l) => h('p', null, h('strong', null, l.s + ': '), ui.highlight(l.t, keywords))),
    );

  ui.AudioPlayer = ({ script, speakers, maxPlays = Infinity, onPlay } = {}) => {
    const root = h('div', { class: 'player' });
    let plays = 0;
    let playing = false;
    let rate = A.store.get('profile').ttsRate;
    const status = h('span', { class: 'muted small', 'aria-live': 'polite' }, '');
    const speedSel = h(
      'select',
      { 'aria-label': 'Tốc độ đọc', onChange: (e) => (rate = Number(e.target.value)) },
      [[0.8, 'Chậm'], [0.95, 'Thường'], [1.1, 'Nhanh']].map(([v, t]) => h('option', { value: v, selected: Math.abs(v - rate) < 0.08 }, t)),
    );
    const btn = h('button', { type: 'button', class: 'btn btn-primary', onClick: toggle }, '▶ Nghe');
    const counter = h('span', { class: 'chip chip-neutral' }, '');
    const lineBox = h('div', { class: 'player-line muted', 'aria-hidden': 'true' }, '');
    let hold = null;

    function refresh() {
      btn.textContent = playing ? '■ Dừng' : plays ? '↻ Nghe lại' : '▶ Nghe';
      btn.disabled = !playing && plays >= maxPlays;
      counter.textContent = maxPlays === Infinity ? `Đã nghe ${plays} lần` : `Lượt nghe: ${plays}/${maxPlays}`;
    }
    async function toggle() {
      if (playing) {
        A.tts.stop();
        playing = false;
        clearInterval(hold);
        status.textContent = 'Đã dừng.';
        return refresh();
      }
      if (plays >= maxPlays) return;
      plays++;
      playing = true;
      status.textContent = 'Đang phát…';
      refresh();
      onPlay && onPlay(plays);
      hold = setInterval(() => A.activity && A.activity.hold(5), 2000);
      await A.tts.playScript(script, speakers, { rate, onLine: (i) => (lineBox.textContent = i >= 0 ? `🔊 ${script[i].s} đang nói…` : '') });
      clearInterval(hold);
      playing = false;
      status.textContent = 'Kết thúc bài nghe.';
      lineBox.textContent = '';
      refresh();
    }
    if (!A.tts.supported) {
      root.append(h('div', { class: 'callout callout-warn' }, 'Trình duyệt của bạn không hỗ trợ đọc văn bản thành giọng nói. Hãy dùng Chrome/Edge/Safari bản mới, hoặc đọc transcript thay cho nghe.'));
    }
    root.append(h('div', { class: 'player-row' }, btn, h('label', { class: 'inline-label' }, 'Tốc độ ', speedSel), counter), lineBox, status);
    root.stop = () => {
      A.tts.stop();
      clearInterval(hold);
    };
    root.plays = () => plays;
    refresh();
    return root;
  };

  /* ---------- Hộp đếm từ cho Writing ---------- */
  ui.WritingBox = ({ min, max, value = '', onChange, rows = 5, label }) => {
    const ta = h('textarea', { class: 'writing-box', rows, 'aria-label': label || 'Bài viết', spellcheck: 'true', lang: 'en', placeholder: 'Viết câu trả lời bằng tiếng Anh…' });
    ta.value = value;
    const count = h('span', { class: 'wc', 'aria-live': 'polite' });
    const upd = () => {
      const n = U.countWords(ta.value);
      const tone = n === 0 ? 'neutral' : n < min ? 'warn' : n > max ? 'bad' : 'good';
      count.className = 'wc wc-' + tone;
      count.textContent = `${n} từ · yêu cầu ${min === max ? min : min + '–' + max}` + (n && n < min ? ` (thiếu ${min - n})` : n > max ? ` (thừa ${n - max})` : n ? ' ✓' : '');
      onChange && onChange(ta.value, n);
    };
    ta.addEventListener('input', upd);
    const root = h('div', { class: 'wbox' }, ta, count);
    root.get = () => ta.value;
    root.words = () => U.countWords(ta.value);
    upd();
    return root;
  };

  /* ---------- Tự chấm điểm theo tiêu chí 0–5 ---------- */
  ui.SelfRating = ({ title = 'Tự chấm điểm (hãy chấm nghiêm khắc)', criteria, onSubmit, submitLabel = 'Lưu điểm tự chấm' }) => {
    const vals = {};
    const form = h('form', { class: 'rating', onSubmit: (e) => e.preventDefault() }, h('h3', null, title));
    const submit = h('button', { type: 'button', class: 'btn btn-accent', disabled: true, onClick: () => onSubmit(U.avg(Object.values(vals)), { ...vals }) }, submitLabel);
    criteria.forEach((c) => {
      form.append(
        h(
          'fieldset',
          { class: 'rating-row' },
          h('legend', null, c.label),
          c.help && h('p', { class: 'muted small' }, c.help),
          h(
            'div',
            { class: 'rating-scale' },
            [1, 2, 3, 4, 5].map((n) => {
              const id = `r-${c.id}-${n}`;
              return [
                h('input', { type: 'radio', name: 'r-' + c.id, id, value: n, onChange: () => ((vals[c.id] = n), (submit.disabled = Object.keys(vals).length < criteria.length)) }),
                h('label', { for: id, title: ['', 'Yếu', 'Hơi yếu', 'Đạt', 'Tốt', 'Rất tốt'][n] }, n),
              ];
            }),
          ),
        ),
      );
    });
    form.append(submit);
    return form;
  };

  /* ---------- Ghi âm ---------- */
  ui.RecorderWidget = () => {
    const audio = h('audio', { controls: true, class: 'rec-audio', hidden: true });
    const msg = h('span', { class: 'muted small', 'aria-live': 'polite' });
    let rec = false;
    const btn = h('button', { type: 'button', class: 'btn btn-secondary btn-sm' }, '🎙 Ghi âm');
    btn.addEventListener('click', async () => {
      if (!rec) {
        try {
          await A.recorder.start();
          rec = true;
          btn.textContent = '■ Dừng ghi';
          btn.classList.add('recording');
          msg.textContent = 'Đang ghi… (bản ghi chỉ nằm trong trình duyệt, không được lưu).';
        } catch (e) {
          msg.textContent = 'Không ghi âm được: ' + (e.message || 'bị từ chối quyền micro') + '. Bạn vẫn có thể nói thành tiếng và tự đánh giá.';
        }
      } else {
        const r = await A.recorder.stop();
        rec = false;
        btn.textContent = '🎙 Ghi lại';
        btn.classList.remove('recording');
        if (r) {
          audio.src = r.url;
          audio.hidden = false;
          msg.textContent = `Đã ghi ${r.seconds}s — nghe lại để tự nhận xét.`;
        }
      }
    });
    if (!A.recorder.supported) {
      btn.disabled = true;
      msg.textContent = 'Trình duyệt không hỗ trợ ghi âm — hãy nói thành tiếng.';
    }
    return h('div', { class: 'recorder' }, btn, msg, audio);
  };

  /* ---------- Tab đơn giản ---------- */
  ui.Tabs = ({ tabs, active, onChange }) =>
    h(
      'div',
      { class: 'tabs', role: 'tablist' },
      tabs.map((t) => h('button', { type: 'button', role: 'tab', class: ['tab', t.id === active && 'active'], 'aria-selected': t.id === active ? 'true' : 'false', onClick: () => onChange(t.id) }, t.label)),
    );

  /** Khung "gợi ý có thể mở": dùng cho mẹo, từ vựng hữu ích */
  ui.Callout = (kind, ...children) => h('div', { class: 'callout callout-' + kind }, children);
})();
