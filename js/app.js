/* Khởi động ứng dụng: khung giao diện (header, sidebar, bottom nav), chủ đề, toast sự kiện, router */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = A.ui;
  const { h } = ui;
  const U = A.util;
  const store = A.store;

  const NAV = [
    { href: '#/', icon: '🏠', label: 'Dashboard', match: (p) => p === '/' },
    { href: '#/roadmap', icon: '🗺️', label: 'Lộ trình 30 ngày', match: (p) => p.startsWith('/roadmap') },
    { href: '#/practice', icon: '🎯', label: 'Luyện tập', match: (p) => /^\/(practice|vocab|grammar|reading|listening|writing|speaking)/.test(p), children: ['vocab', 'grammar', 'reading', 'listening', 'writing', 'speaking'] },
    { href: '#/mock', icon: '📝', label: 'Mock Test', match: (p) => p.startsWith('/mock') },
    { href: '#/diagnostic', icon: '🧭', label: 'Diagnostic', match: (p) => p.startsWith('/diagnostic') },
    { href: '#/analytics', icon: '📊', label: 'Phân tích', match: (p) => p.startsWith('/analytics') },
    { href: '#/achievements', icon: '🏅', label: 'Thành tích', match: (p) => p.startsWith('/achievements') },
    { href: '#/aptis', icon: '📘', label: 'Cấu trúc Aptis', match: (p) => p.startsWith('/aptis') },
    { href: '#/settings', icon: '⚙️', label: 'Cài đặt', match: (p) => p.startsWith('/settings') },
  ];
  const BOTTOM = ['#/', '#/roadmap', '#/practice', '#/mock', '#/analytics'];

  /** Áp dụng tuỳ chọn hiển thị (chủ đề, cỡ chữ, giảm chuyển động, chế độ tập trung) */
  function applyPrefs() {
    const p = store.get('profile');
    const root = document.documentElement;
    if (p.theme === 'light' || p.theme === 'dark') root.setAttribute('data-theme', p.theme);
    else root.removeAttribute('data-theme');
    root.style.fontSize = (p.fontScale || 100) + '%';
    document.body.classList.toggle('reduce-motion', !!p.reduceMotion);
    document.body.classList.toggle('focus-mode', !!p.focusMode);
  }
  A.applyPrefs = applyPrefs;

  function build() {
    const day = h('span', { class: 'pill', id: 'hd-day' });
    const streak = h('span', { class: 'pill', id: 'hd-streak', title: 'Chuỗi ngày học liên tiếp' });
    const xp = h('span', { class: 'pill', id: 'hd-xp', title: 'Điểm kinh nghiệm' });

    const focusBtn = h('button', { type: 'button', class: 'icon-btn', id: 'btn-focus', 'aria-label': 'Bật/tắt chế độ tập trung', title: 'Chế độ tập trung (ẩn menu)', onClick: toggleFocus }, '🎯');
    const themeBtn = h('button', { type: 'button', class: 'icon-btn', id: 'btn-theme', 'aria-label': 'Đổi giao diện sáng/tối', title: 'Sáng / Tối', onClick: toggleTheme }, '🌓');

    const header = h(
      'header',
      { class: 'topbar' },
      h('a', { class: 'brand', href: '#/', 'aria-label': 'Aptis B2 Survival Kit — về Dashboard' }, h('span', { class: 'brand-mark', 'aria-hidden': 'true' }, 'A'), h('span', { class: 'brand-text' }, 'Aptis B2 ', h('b', null, 'Survival Kit'))),
      h('div', { class: 'topbar-right' }, day, streak, xp, focusBtn, themeBtn),
    );

    const side = h(
      'nav',
      { class: 'sidebar', 'aria-label': 'Điều hướng chính' },
      NAV.map((n) => [
        h('a', { class: 'nav-item', href: n.href, dataset: { nav: n.href } }, h('span', { class: 'nav-icon', 'aria-hidden': 'true' }, n.icon), h('span', null, n.label)),
        n.children &&
          h(
            'div',
            { class: 'nav-sub' },
            n.children.map((m) => h('a', { class: 'nav-item nav-child', href: A.labels.modules[m].route, dataset: { nav: A.labels.modules[m].route } }, h('span', { class: 'nav-icon', 'aria-hidden': 'true' }, A.labels.modules[m].icon), h('span', null, A.labels.modules[m].name))),
          ),
      ]),
    );

    const bottom = h(
      'nav',
      { class: 'bottomnav', 'aria-label': 'Điều hướng nhanh' },
      BOTTOM.map((href) => {
        const n = NAV.find((x) => x.href === href);
        return h('a', { class: 'bn-item', href, dataset: { navb: href } }, h('span', { 'aria-hidden': 'true' }, n.icon), h('span', null, n.label.replace(' 30 ngày', '').replace('Dashboard', 'Trang chủ')));
      }),
      h('a', { class: 'bn-item', href: '#/settings', dataset: { navb: '#/settings' } }, h('span', { 'aria-hidden': 'true' }, '⚙️'), h('span', null, 'Khác')),
    );

    const main = h('main', { id: 'main', class: 'main', tabindex: '-1' });
    const exitFocus = h('button', { type: 'button', class: 'btn btn-secondary btn-sm exit-focus', onClick: toggleFocus }, '↩ Thoát chế độ tập trung');
    const app = document.getElementById('app');
    ui.clear(app);
    app.append(h('a', { class: 'skip-link', href: '#main', onClick: (e) => (e.preventDefault(), main.focus()) }, 'Bỏ qua điều hướng, tới nội dung'), header, h('div', { class: 'layout' }, side, main), bottom, exitFocus);
    return { main, side, bottom };
  }

  function toggleFocus() {
    store.update('profile', (p) => {
      p.focusMode = !p.focusMode;
    });
    applyPrefs();
    ui.toast(store.get('profile').focusMode ? 'Chế độ tập trung: đã ẩn menu.' : 'Đã thoát chế độ tập trung.', { icon: '🎯', ms: 1800 });
  }
  function toggleTheme() {
    store.update('profile', (p) => {
      const dark = p.theme === 'dark' || (p.theme === 'auto' && globalThis.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
      p.theme = dark ? 'light' : 'dark';
    });
    applyPrefs();
  }

  function refreshHeader() {
    const d = document.getElementById('hd-day');
    if (!d) return;
    const p = store.get('profile');
    const raw = A.plan.rawDay();
    d.textContent = p.onboarded ? (raw > A.plan.DAYS ? `Ngày ${raw} (đã qua 30)` : `Ngày ${A.plan.currentDay()}/${A.plan.DAYS}`) : 'Chưa bắt đầu';
    const st = A.game.streaks();
    document.getElementById('hd-streak').textContent = `🔥 ${st.current}`;
    const lv = A.game.level();
    document.getElementById('hd-xp').textContent = `⭐ Lv ${lv.level} · ${lv.xp} XP`;
  }

  function markActive(cur) {
    const path = (cur && cur.path) || '/';
    document.querySelectorAll('[data-nav],[data-navb]').forEach((a) => {
      let on;
      if (a.dataset.navb) {
        // thanh dưới: gom nhóm theo NAV (Luyện tập bao gồm các mô-đun)
        const item = NAV.find((n) => n.href === a.dataset.navb);
        on = item.match(path);
      } else {
        const route = a.dataset.nav.slice(1);
        on = route === '/' ? path === '/' : path === route || path.startsWith(route + '/');
      }
      a.classList.toggle('active', !!on);
      if (on) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function boot() {
    applyPrefs();
    const { main } = build();
    refreshHeader();

    // Toast sự kiện từ lõi
    A.bus.on('session', ({ xp, task, badges }) => {
      ui.toast(`+${xp} XP${task ? ' · Hoàn thành nhiệm vụ: ' + task.label : ''}`, { kind: 'good', icon: '⭐' });
      refreshHeader();
    });
    A.bus.on('badge', (b) => ui.toast(`Huy hiệu mới: ${b.name} — ${b.vi}`, { kind: 'good', icon: b.icon, ms: 5000 }));
    A.bus.on('xp', refreshHeader);
    A.bus.on('tick', refreshHeader);
    store.subscribe((k) => (k === '*' || k === 'profile') && refreshHeader());

    // Lần đầu: dẫn tới màn chào + Diagnostic
    ui.router.guard = (ctx) => {
      const p = store.get('profile');
      if (!p.onboarded && !['/welcome', '/aptis', '/settings'].includes(ctx.path)) return '#/welcome';
      return null;
    };
    A.activity.start();
    ui.router.start(main, (cur) => {
      markActive(cur);
      refreshHeader();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
