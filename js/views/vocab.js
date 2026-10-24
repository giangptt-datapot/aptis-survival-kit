/* Từ vựng: flashcard + lặp lại ngắt quãng (SRS), quiz, duyệt từ, bookmark */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;
  const U = A.util;

  const srs = () => A.store.get('srs');
  const marks = () => A.store.get('bookmarks');
  const toggleMark = (id) => {
    A.store.update('bookmarks', (b) => {
      if (b[id]) delete b[id];
      else b[id] = 1;
    });
    return !!marks()[id];
  };
  const speakWord = (w) => A.tts.speak(w, { gender: 'f' });

  function catStats(cat) {
    const words = A.vocabdb.byCat(cat);
    const s = srs();
    const learned = words.filter((w) => s[w.id] && s[w.id].reps >= 1).length;
    const mastered = words.filter((w) => s[w.id] && s[w.id].iv >= A.srs.MASTERED_DAYS).length;
    return { total: words.length, learned, mastered };
  }

  /** Từ mới chưa từng học: theo nhóm, hoặc xen kẽ mọi nhóm khi cat === 'all' */
  function newWords(cat, n) {
    const s = srs();
    const unseen = (c) => A.vocabdb.byCat(c).filter((w) => !s[w.id]);
    let out = [];
    if (cat && cat !== 'all') out = unseen(cat).slice(0, n);
    else {
      const lists = A.vocabdb.cats.map((c) => unseen(c.id));
      for (let i = 0; out.length < n && lists.some((l) => l[i]); i++) lists.forEach((l) => l[i] && out.length < n && out.push(l[i]));
    }
    if (out.length < n) {
      // thiếu thì bổ sung từ nhóm khác
      const have = new Set(out.map((w) => w.id));
      for (const c of A.vocabdb.cats) for (const w of unseen(c.id)) if (out.length < n && !have.has(w.id)) (out.push(w), have.add(w.id));
    }
    return out;
  }
  const dueWords = (cap = 30) => {
    const s = srs();
    return Object.keys(s)
      .filter((id) => A.srs.isDue(s[id]) && A.vocabdb.get(id))
      .sort((a, b) => s[a].due.localeCompare(s[b].due))
      .slice(0, cap)
      .map((id) => A.vocabdb.get(id));
  };

  /* ---------- Phiên flashcard ---------- */
  function FlashSession({ words, title, sub, onDone, ctx }) {
    const root = h('div', { class: 'flash' });
    const s = srs();
    const queue = words.map((w) => ({ w, isNew: !s[w.id] }));
    const total = queue.length;
    const attempted = new Set();
    let good = 0;
    let reviews = 0;
    let flipped = false;
    const t0 = Date.now();

    function grade(g) {
      const it = queue.shift();
      const card = srs()[it.w.id];
      A.store.update('srs', (all) => {
        all[it.w.id] = A.srs.grade(card, g);
      });
      A.session.recordWords(1);
      reviews++;
      if (!attempted.has(it.w.id)) {
        attempted.add(it.w.id);
        if (g >= 2) good++;
      }
      if (g === 0) queue.splice(Math.min(3, queue.length), 0, it);
      flipped = false;
      draw();
    }

    function draw() {
      ui.clear(root);
      if (!queue.length) return done();
      const it = queue[0];
      const w = it.w;
      const card = srs()[w.id];
      const marked = !!marks()[w.id];
      const prev = A.srs.preview(card);
      root.append(
        h('div', { class: 'quiz-top' }, h('div', { class: 'quiz-meta' }, title && h('strong', null, title + ' · '), h('span', { 'aria-live': 'polite' }, `Còn ${queue.length} thẻ`)), h('span', { class: 'chip ' + (it.isNew ? 'chip-primary' : 'chip-neutral') }, it.isNew ? 'Từ mới' : 'Ôn lại')),
        ui.Progress({ value: ((total - new Set(queue.map((q) => q.w.id)).size) / total) * 100, thin: true, label: 'Tiến độ phiên', tone: 'accent' }),
      );
      const front = h('div', { class: 'fc-front' }, h('div', { class: 'fc-word' }, w.w), h('div', { class: 'fc-meta' }, h('span', { class: 'chip chip-neutral' }, w.pos), h('span', { class: 'ipa' }, w.ipa), h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Nghe phát âm', onClick: (e) => (e.stopPropagation(), speakWord(w.w)) }, '🔊')));
      const back = flipped
        ? h(
            'div',
            { class: 'fc-back', 'aria-live': 'polite' },
            h('div', { class: 'fc-vi' }, w.vi),
            h('p', { class: 'fc-ex' }, '“', w.ex, '” ', h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Nghe câu ví dụ', onClick: () => A.tts.speak(w.ex, { gender: 'm' }) }, '🔊')),
            h('p', { class: 'fc-col' }, h('strong', null, 'Collocation: '), w.col),
            h('p', null, h('span', { class: 'chip chip-neutral' }, 'Mức ' + w.lv), ' ', h('span', { class: 'chip chip-neutral' }, A.vocabdb.cat(w.cat).en)),
          )
        : null;
      root.append(
        h(
          'div',
          { class: ['flashcard', flipped && 'flipped'], tabindex: '0', role: 'button', 'aria-label': flipped ? 'Thẻ đã lật' : 'Bấm để lật thẻ xem nghĩa', onClick: () => !flipped && ((flipped = true), draw()) },
          front,
          back,
          h('button', { type: 'button', class: ['bm', marked && 'on'], 'aria-pressed': marked ? 'true' : 'false', 'aria-label': marked ? 'Bỏ đánh dấu' : 'Đánh dấu từ này', onClick: (e) => (e.stopPropagation(), toggleMark(w.id), draw()) }, marked ? '★' : '☆'),
        ),
      );
      if (!flipped) root.append(h('div', { class: 'quiz-actions' }, h('button', { type: 'button', class: 'btn btn-primary', onClick: () => ((flipped = true), draw()) }, 'Lật thẻ (Space)')), h('p', { class: 'muted small' }, 'Tự nhẩm nghĩa trước khi lật. Phím tắt: Space lật · 1–4 chấm · B đánh dấu · S nghe.'));
      else
        root.append(
          h(
            'div',
            { class: 'grades', role: 'group', 'aria-label': 'Bạn nhớ từ này thế nào?' },
            [['Quên', 'again'], ['Khó', 'hard'], ['Được', 'good'], ['Dễ', 'easy']].map(([t, k], g) => h('button', { type: 'button', class: 'grade grade-' + k, onClick: () => grade(g) }, h('strong', null, `${g + 1}. ${t}`), h('span', { class: 'small' }, prev[g]))),
          ),
        );
    }

    function done() {
      const secs = Math.round((Date.now() - t0) / 1000);
      const seen = attempted.size;
      const r = A.session.record({ module: 'vocab', sub: ctx && ctx.sub ? ctx.sub : 'cards', correct: good, total: seen, seconds: secs });
      onDone && onDone({ good, seen });
      const mastered = Object.values(srs()).filter((c) => c.iv >= A.srs.MASTERED_DAYS).length;
      root.append(
        h(
          'div',
          { class: 'quiz-summary' },
          h('div', { class: 'big-emoji', 'aria-hidden': 'true' }, '🎉'),
          h('h2', null, 'Hoàn thành phiên!'),
          h('p', { class: 'muted' }, `${seen} từ · ${reviews} lượt chấm · ${good} từ nhớ ngay lần đầu · ${U.fmtMinutes(secs)} · +${r.xp} XP`),
          h('p', null, `Tổng từ “thuộc” (khoảng nghỉ ≥ ${A.srs.MASTERED_DAYS} ngày): ${mastered}.`),
          h('div', { class: 'quiz-actions' }, ui.Button({ label: 'Quiz kiểm tra nhanh', kind: 'primary', href: '#/vocab/quiz' }), ui.Button({ label: 'Về Từ vựng', kind: 'secondary', href: '#/vocab' })),
        ),
      );
    }

    const onKey = (e) => {
      if (!root.isConnected) return document.removeEventListener('keydown', onKey);
      if (!queue.length || e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if ((e.key === ' ' || e.key === 'Enter') && !flipped && tag !== 'button') {
        e.preventDefault();
        flipped = true;
        draw();
      } else if (flipped && /^[1-4]$/.test(e.key)) grade(Number(e.key) - 1);
      else if (e.key.toLowerCase() === 'b') (toggleMark(queue[0].w.id), draw());
      else if (e.key.toLowerCase() === 's') speakWord(queue[0].w.w);
    };
    document.addEventListener('keydown', onKey);
    draw();
    return root;
  }

  const emptyState = (text) => ui.Empty({ icon: '✅', title: 'Không có thẻ nào cần học lúc này', text, action: ui.Button({ label: 'Về Từ vựng', href: '#/vocab', kind: 'primary' }) });

  /* ---------- Trang tổng quan ---------- */
  ui.router.add(
    '/vocab',
    () => {
      const s = srs();
      const learned = Object.values(s).filter((c) => c.reps >= 1).length;
      const mastered = Object.values(s).filter((c) => c.iv >= A.srs.MASTERED_DAYS).length;
      const due = dueWords(9999).length;
      const bm = Object.keys(marks()).length;
      const day = A.plan.day(A.plan.currentDay());
      const root = h('div', null, ui.PageHeader({ title: 'Từ vựng', sub: `${A.vocabdb.count()} từ · 8 chủ đề · flashcard, quiz, lặp lại ngắt quãng` }));
      root.append(
        h(
          'div',
          { class: 'grid grid-stats' },
          ui.Stat({ icon: '📇', label: 'Đến hạn ôn hôm nay', value: due, tone: due ? 'warn' : 'good' }),
          ui.Stat({ icon: '🌱', label: 'Đã học', value: learned + '/' + A.vocabdb.count() }),
          ui.Stat({ icon: '🧠', label: 'Đã thuộc', value: mastered, sub: `khoảng nghỉ ≥ ${A.srs.MASTERED_DAYS} ngày` }),
          ui.Stat({ icon: '★', label: 'Đã đánh dấu', value: bm }),
        ),
        ui.Card(
          { title: 'Bắt đầu ngay', sub: `Phiên hôm nay: ôn thẻ đến hạn + ${A.plan.newWordsPerDay()} từ mới (${day.cat === 'all' ? 'tổng hợp' : A.vocabdb.cat(day.cat).vi})` },
          h('div', { class: 'quiz-actions' }, ui.Button({ label: 'Phiên từ vựng hôm nay', kind: 'accent', icon: '▶', href: '#/vocab/daily' }), ui.Button({ label: `Ôn thẻ đến hạn (${due})`, kind: 'secondary', href: '#/vocab/cards?mode=due' }), ui.Button({ label: 'Quiz nhanh', kind: 'secondary', href: '#/vocab/quiz' }), ui.Button({ label: 'Từ đã đánh dấu', kind: 'ghost', href: '#/vocab/cards?mode=bookmarks' })),
        ),
      );
      const grid = h('div', { class: 'grid grid-4' });
      A.vocabdb.cats.forEach((c) => {
        const st = catStats(c.id);
        grid.append(
          h(
            'div',
            { class: 'card cat-card' },
            h('div', { class: 'big-emoji', 'aria-hidden': 'true' }, c.icon),
            h('h3', null, c.vi, h('span', { class: 'muted small' }, ' · ' + c.en)),
            h('p', { class: 'muted small' }, `${st.learned}/${st.total} đã học · ${st.mastered} thuộc`),
            ui.Progress({ value: (st.learned / st.total) * 100, thin: true, label: c.en }),
            h('div', { class: 'cat-actions' }, ui.Button({ label: 'Học', kind: 'primary', size: 'sm', href: `#/vocab/cards?cat=${c.id}&mode=new` }), ui.Button({ label: 'Quiz', kind: 'secondary', size: 'sm', href: `#/vocab/quiz?cat=${c.id}` }), ui.Button({ label: 'Danh sách', kind: 'ghost', size: 'sm', href: `#/vocab/list?cat=${c.id}` })),
          ),
        );
      });
      root.append(h('h2', null, 'Chủ đề'), grid);
      return { title: 'Từ vựng', module: 'vocab', node: root };
    },
    'vocab',
  );

  /* ---------- Phiên hằng ngày ---------- */
  ui.router.add(
    '/vocab/daily',
    (ctx) => {
      const cat = ctx.query.cat || A.plan.day(A.plan.currentDay()).cat;
      const due = dueWords(30);
      const fresh = newWords(cat, A.plan.newWordsPerDay());
      const words = [...due, ...fresh];
      const label = cat === 'all' ? 'tổng hợp' : A.vocabdb.cat(cat).vi;
      const node = words.length
        ? h('div', null, ui.PageHeader({ title: 'Phiên từ vựng hôm nay', sub: `${due.length} thẻ ôn + ${fresh.length} từ mới (${label})`, crumbs: [{ label: 'Từ vựng', href: '#/vocab' }, { label: 'Hôm nay' }] }), FlashSession({ words, title: 'Hôm nay', ctx: { sub: 'daily' } }))
        : h('div', null, ui.PageHeader({ title: 'Phiên từ vựng hôm nay' }), emptyState('Bạn đã học hết từ trong kho và không có thẻ nào đến hạn. Hãy làm quiz để củng cố.'));
      return { title: 'Từ vựng hôm nay', module: 'vocab', node };
    },
    'vocab',
  );

  /* ---------- Flashcard theo chế độ ---------- */
  ui.router.add(
    '/vocab/cards',
    (ctx) => {
      const mode = ctx.query.mode || 'new';
      const cat = ctx.query.cat;
      let words = [];
      let ttl = 'Flashcard';
      if (mode === 'due') (words = dueWords(50)), (ttl = 'Ôn thẻ đến hạn');
      else if (mode === 'bookmarks') (words = Object.keys(marks()).map((id) => A.vocabdb.get(id)).filter(Boolean)), (ttl = 'Từ đã đánh dấu');
      else if (mode === 'all') (words = U.sample(cat ? A.vocabdb.byCat(cat) : A.vocabdb.all(), 20)), (ttl = 'Ôn ngẫu nhiên');
      else (words = newWords(cat || 'all', 20)), (ttl = cat ? 'Học từ mới: ' + A.vocabdb.cat(cat).vi : 'Học từ mới');
      if (!words.length && mode === 'new' && cat) words = U.sample(A.vocabdb.byCat(cat), 20); // đã học hết nhóm → ôn ngẫu nhiên
      const node = words.length ? h('div', null, ui.PageHeader({ title: ttl, sub: `${words.length} thẻ`, crumbs: [{ label: 'Từ vựng', href: '#/vocab' }, { label: ttl }] }), FlashSession({ words, title: ttl, ctx: { sub: mode } })) : h('div', null, ui.PageHeader({ title: ttl }), emptyState(mode === 'bookmarks' ? 'Hãy đánh dấu ★ vài từ khó khi học flashcard.' : 'Hiện chưa có thẻ nào cần học theo chế độ này.'));
      return { title: ttl, module: 'vocab', node };
    },
    'vocab',
  );

  /* ---------- Quiz ---------- */
  ui.router.add(
    '/vocab/quiz',
    (ctx) => {
      const cat = ctx.query.cat;
      const n = Number(ctx.query.n) || 10;
      const pool = cat ? A.vocabdb.byCat(cat) : A.vocabdb.all();
      const s = srs();
      const known = pool.filter((w) => s[w.id]);
      const pick = U.sample(known, Math.min(n, known.length));
      const rest = U.sample(pool.filter((w) => !s[w.id]), n - pick.length);
      const words = U.shuffle([...pick, ...rest]);
      const qs = A.vocabdb.makeQuestions(words);
      const ttl = 'Quiz từ vựng' + (cat ? ': ' + A.vocabdb.cat(cat).vi : '');
      const quiz = ui.Quiz({
        questions: qs,
        mode: 'practice',
        title: ttl,
        shuffle: false,
        onFinish: (res) => {
          // từ trả lời sai → đến hạn ôn ngay hôm nay
          res.items.filter((i) => !i.ok && i.wordId).forEach((i) => A.store.update('srs', (all) => (all[i.wordId] = A.srs.grade(all[i.wordId], 0))));
          A.session.recordWords(res.total);
          A.session.record({ module: 'vocab', sub: 'quiz', correct: res.correct, total: res.total, seconds: res.seconds });
        },
        extraActions: () => [ui.Button({ label: 'Quiz mới', kind: 'accent', href: `#/vocab/quiz?${cat ? 'cat=' + cat + '&' : ''}n=${n}&r=${Date.now()}` }), ui.Button({ label: 'Về Từ vựng', kind: 'ghost', href: '#/vocab' })],
      });
      return { title: ttl, module: 'vocab', node: h('div', null, ui.PageHeader({ title: ttl, sub: 'Nghĩa, từ tiếng Anh theo nghĩa và điền từ vào câu. Từ sai sẽ quay lại ôn hôm nay.', crumbs: [{ label: 'Từ vựng', href: '#/vocab' }, { label: 'Quiz' }] }), quiz) };
    },
    'vocab',
  );

  /* ---------- Danh sách ---------- */
  ui.router.add(
    '/vocab/list',
    (ctx) => {
      const state = { cat: ctx.query.cat || '', q: '', bm: false, shown: 40 };
      const list = h('div', { class: 'wordlist' });
      const more = h('button', { type: 'button', class: 'btn btn-secondary', onClick: () => ((state.shown += 40), draw()) }, 'Hiển thị thêm');
      const count = h('p', { class: 'muted small', 'aria-live': 'polite' });
      const filtered = () => {
        const q = state.q.trim().toLowerCase();
        const bm = marks();
        return A.vocabdb.all().filter((w) => (!state.cat || w.cat === state.cat) && (!state.bm || bm[w.id]) && (!q || w.w.toLowerCase().includes(q) || w.vi.toLowerCase().includes(q)));
      };
      function draw() {
        const f = filtered();
        ui.clear(list);
        const s = srs();
        const bm = marks();
        f.slice(0, state.shown).forEach((w) => {
          const st = A.srs.status(s[w.id]);
          list.append(
            h(
              'article',
              { class: 'word' },
              h('div', { class: 'word-main' }, h('strong', { class: 'word-w' }, w.w), h('span', { class: 'chip chip-neutral' }, w.pos), h('span', { class: 'ipa' }, w.ipa), h('span', { class: 'chip ' + (st === 'mastered' ? 'chip-good' : st === 'learning' ? 'chip-primary' : 'chip-neutral') }, st === 'mastered' ? 'đã thuộc' : st === 'learning' ? 'đang học' : 'mới')),
              h('div', { class: 'word-vi' }, w.vi, ' ', h('span', { class: 'muted small' }, '· ' + w.lv)),
              h('div', { class: 'muted small' }, '“' + w.ex + '”'),
              h('div', { class: 'muted small' }, 'Collocation: ' + w.col),
              h('div', { class: 'word-act' }, h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Nghe ' + w.w, onClick: () => speakWord(w.w) }, '🔊'), h('button', { type: 'button', class: ['icon-btn', bm[w.id] && 'on'], 'aria-pressed': bm[w.id] ? 'true' : 'false', 'aria-label': (bm[w.id] ? 'Bỏ đánh dấu ' : 'Đánh dấu ') + w.w, onClick: () => (toggleMark(w.id), draw()) }, bm[w.id] ? '★' : '☆')),
            ),
          );
        });
        count.textContent = `${f.length} từ phù hợp`;
        more.hidden = f.length <= state.shown;
        if (!f.length) list.append(ui.Empty({ icon: '🔎', title: 'Không tìm thấy từ nào' }));
      }
      const chips = h('div', { class: 'chips', role: 'group', 'aria-label': 'Lọc chủ đề' });
      const drawChips = () => {
        ui.clear(chips);
        [{ id: '', vi: 'Tất cả', icon: '📚' }, ...A.vocabdb.cats].forEach((c) => chips.append(h('button', { type: 'button', class: ['chipbtn', state.cat === c.id && 'active'], 'aria-pressed': state.cat === c.id ? 'true' : 'false', onClick: () => ((state.cat = c.id), (state.shown = 40), drawChips(), draw()) }, c.icon + ' ' + c.vi)));
      };
      drawChips();
      draw();
      return {
        title: 'Danh sách từ vựng',
        module: 'vocab',
        node: h(
          'div',
          null,
          ui.PageHeader({ title: 'Danh sách từ vựng', crumbs: [{ label: 'Từ vựng', href: '#/vocab' }, { label: 'Danh sách' }] }),
          h('div', { class: 'toolbar' }, h('label', { class: 'field grow' }, h('span', { class: 'sr-only' }, 'Tìm từ'), h('input', { type: 'search', placeholder: 'Tìm từ hoặc nghĩa…', onInput: (e) => ((state.q = e.target.value), (state.shown = 40), draw()) })), h('label', { class: 'inline-label' }, h('input', { type: 'checkbox', onChange: (e) => ((state.bm = e.target.checked), draw()) }), ' Chỉ từ đã đánh dấu')),
          chips,
          count,
          list,
          h('div', { class: 'center' }, more),
        ),
      };
    },
    'vocab',
  );
})();
