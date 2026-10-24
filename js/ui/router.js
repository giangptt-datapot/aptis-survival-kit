/* Router theo hash (#/duong-dan?tham-so) — chạy được qua file:// */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = (A.ui = A.ui || {});

  const routes = [];
  let cleanups = [];
  let outlet = null;
  let current = null;
  let onChange = null;

  function compile(pattern) {
    const keys = [];
    const re = new RegExp(
      '^' +
        pattern.replace(/\/:([a-zA-Z]+)/g, (_, k) => {
          keys.push(k);
          return '/([^/]+)';
        }) +
        '/?$',
    );
    return { re, keys };
  }

  function parse() {
    const raw = (globalThis.location.hash || '#/').slice(1) || '/';
    const [path, qs] = raw.split('?');
    const query = {};
    new URLSearchParams(qs || '').forEach((v, k) => (query[k] = v));
    return { path: path || '/', query };
  }

  function render() {
    const { path, query } = parse();
    cleanups.forEach((fn) => {
      try {
        fn();
      } catch (e) {
        console.error(e);
      }
    });
    cleanups = [];
    A.tts && A.tts.stop();
    A.recorder && A.recorder.cancel();

    let match = null;
    for (const r of routes) {
      const m = path.match(r.re);
      if (m) {
        const params = {};
        r.keys.forEach((k, i) => (params[k] = decodeURIComponent(m[i + 1])));
        match = { r, params };
        break;
      }
    }
    const ctx = {
      path,
      query,
      params: match ? match.params : {},
      onCleanup: (fn) => cleanups.push(fn),
      navigate: (to, replace) => ui.router.go(to, replace),
    };
    const redirect = ui.router.guard && ui.router.guard(ctx);
    if (redirect) return ui.router.go(redirect, true);
    let res;
    try {
      res = match ? match.r.handler(ctx) : ui.NotFound(ctx);
    } catch (e) {
      console.error(e);
      res = { title: 'Lỗi', module: 'home', node: ui.h('div', { class: 'card' }, ui.h('h1', null, 'Có lỗi khi hiển thị trang'), ui.h('pre', { class: 'errbox' }, String((e && e.stack) || e))) };
    }
    if (res && res.redirect) return ui.router.go(res.redirect, true);
    const node = res && res.node ? res.node : res;
    ui.clear(outlet);
    outlet.appendChild(node);
    current = { path, query, module: (res && res.module) || (match && match.r.module) || 'home', title: (res && res.title) || '' };
    document.title = (current.title ? current.title + ' · ' : '') + 'Aptis B2 Survival Kit';
    A.activity && A.activity.setModule(current.module);
    globalThis.scrollTo(0, 0);
    const h1 = outlet.querySelector('h1');
    if (h1) {
      h1.setAttribute('tabindex', '-1');
      h1.focus({ preventScroll: true });
    }
    onChange && onChange(current);
  }

  ui.router = {
    add(pattern, handler, module) {
      const { re, keys } = compile(pattern);
      routes.push({ re, keys, handler, module });
    },
    start(el, cb) {
      outlet = el;
      onChange = cb;
      globalThis.addEventListener('hashchange', render);
      render();
    },
    go(to, replace) {
      const h = to.startsWith('#') ? to : '#' + to;
      const same = globalThis.location.hash === h; // hash không đổi → không có sự kiện hashchange, tự vẽ lại
      if (replace) globalThis.location.replace(h);
      else globalThis.location.hash = h;
      if (same) render();
    },
    refresh: render,
    current: () => current,
  };

  ui.NotFound = () => ui.h('div', { class: 'card' }, ui.h('h1', null, 'Không tìm thấy trang'), ui.h('p', null, 'Đường dẫn này không tồn tại.'), ui.h('a', { class: 'btn btn-primary', href: '#/' }, 'Về Dashboard'));
})();
