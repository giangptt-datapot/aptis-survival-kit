/* Trợ giúp dựng DOM (hyperscript), toast, hộp thoại. Không dùng innerHTML để tránh XSS. */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const ui = (A.ui = A.ui || {});

  const BOOL = new Set(['disabled', 'checked', 'selected', 'hidden', 'open', 'required', 'readOnly', 'multiple', 'autofocus']);
  const SVG_NS = 'http://www.w3.org/2000/svg';

  function append(parent, child) {
    if (child == null || child === false || child === true) return;
    if (Array.isArray(child)) return child.forEach((c) => append(parent, c));
    parent.appendChild(child.nodeType ? child : document.createTextNode(String(child)));
  }

  function applyProps(el, props, isSvg) {
    for (const [k, v] of Object.entries(props || {})) {
      if (v == null || v === false) continue;
      if (k === 'class' || k === 'className') {
        const cls = Array.isArray(v) ? v.filter(Boolean).join(' ') : v;
        if (isSvg) el.setAttribute('class', cls);
        else el.className = cls;
      } else if (k === 'style') {
        if (typeof v === 'string') el.setAttribute('style', v);
        else Object.assign(el.style, v);
      } else if (k === 'dataset') Object.assign(el.dataset, v);
      else if (k === 'ref') v(el);
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (BOOL.has(k) && !isSvg) el[k] = !!v;
      else if (k === 'value' && !isSvg) el.value = v;
      else el.setAttribute(k, v === true ? '' : v);
    }
  }

  /** h('div', {class:'x', onClick}, child, [children]) */
  function h(tag, props, ...children) {
    const el = document.createElement(tag);
    applyProps(el, props, false);
    children.forEach((c) => append(el, c));
    return el;
  }
  function svg(tag, props, ...children) {
    const el = document.createElementNS(SVG_NS, tag);
    applyProps(el, props, true);
    children.forEach((c) => append(el, c));
    return el;
  }

  // Element.append gốc biến undefined/false thành chữ "undefined"/"false" và không làm phẳng mảng.
  // Mã giao diện dùng quen tay `el.append(cond && node, [list])`, nên vá một lần ở đây.
  const nativeAppend = Element.prototype.append;
  Element.prototype.append = function (...args) {
    const f = document.createDocumentFragment();
    args.forEach((c) => append(f, c));
    nativeAppend.call(this, f);
  };

  ui.h = h;
  ui.svg = svg;
  ui.clear = (n) => {
    while (n.firstChild) n.removeChild(n.firstChild);
    return n;
  };
  ui.frag = (...c) => {
    const f = document.createDocumentFragment();
    c.forEach((x) => append(f, x));
    return f;
  };

  /** **đậm**, *nghiêng*, xuống dòng → nút DOM */
  ui.rich = (text) => {
    const out = [];
    String(text == null ? '' : text)
      .split('\n')
      .forEach((line, li) => {
        if (li) out.push(h('br'));
        line.split(/(\*\*[^*]+\*\*)/g).forEach((part) => {
          if (!part) return;
          if (part.startsWith('**') && part.endsWith('**')) out.push(h('strong', null, part.slice(2, -2)));
          else out.push(part);
        });
      });
    return out;
  };

  /** Chỗ trống ___ hiển thị thành ô gạch chân */
  ui.fmtQ = (text) => {
    const parts = String(text).split('___');
    const out = [];
    parts.forEach((p, i) => {
      if (i) out.push(h('span', { class: 'blank', 'aria-label': 'chỗ trống' }, '     '));
      out.push(p);
    });
    return out;
  };

  /** Làm nổi từ khoá (không phân biệt hoa thường) trong văn bản */
  ui.highlight = (text, words) => {
    if (!words || !words.length) return [text];
    const re = new RegExp('(' + words.map((w) => A.util.escapeRegExp(w)).join('|') + ')', 'gi');
    return String(text)
      .split(re)
      .map((p, i) => (i % 2 ? h('mark', null, p) : p));
  };

  /* ---------- Toast ---------- */
  let toastBox = null;
  ui.toast = (msg, { kind = 'info', icon = '', ms = 3200 } = {}) => {
    if (!toastBox) {
      toastBox = h('div', { class: 'toasts', 'aria-live': 'polite', role: 'status' });
      document.body.appendChild(toastBox);
    }
    const t = h('div', { class: 'toast toast-' + kind }, icon && h('span', { class: 'toast-icon', 'aria-hidden': 'true' }, icon), h('span', null, msg));
    toastBox.appendChild(t);
    while (toastBox.children.length > 3) toastBox.firstChild.remove();
    setTimeout(() => {
      t.classList.add('out');
      setTimeout(() => t.remove(), 300);
    }, ms);
  };

  /* ---------- Hộp thoại ---------- */
  ui.modal = ({ title, body, actions = [], onClose } = {}) => {
    const prev = document.activeElement;
    const close = (val) => {
      overlay.remove();
      document.removeEventListener('keydown', onKey);
      prev && prev.focus && prev.focus();
      onClose && onClose(val);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') close(null);
    };
    const box = h(
      'div',
      { class: 'modal', role: 'dialog', 'aria-modal': 'true', 'aria-label': title || 'Hộp thoại', tabindex: '-1' },
      title && h('h2', { class: 'modal-title' }, title),
      h('div', { class: 'modal-body' }, body),
      h(
        'div',
        { class: 'modal-actions' },
        actions.map((a) =>
          h('button', { type: 'button', class: 'btn ' + (a.kind ? 'btn-' + a.kind : 'btn-secondary'), onClick: () => close(a.value !== undefined ? a.value : a.label) }, a.label),
        ),
      ),
    );
    const overlay = h('div', { class: 'overlay', onClick: (e) => e.target === overlay && close(null) }, box);
    document.body.appendChild(overlay);
    document.addEventListener('keydown', onKey);
    setTimeout(() => box.focus(), 0);
    return { close };
  };
  ui.confirm = (message, { ok = 'Đồng ý', cancel = 'Huỷ', danger = false, title = 'Xác nhận' } = {}) =>
    new Promise((resolve) => {
      ui.modal({
        title,
        body: h('p', null, message),
        actions: [
          { label: cancel, value: false },
          { label: ok, value: true, kind: danger ? 'danger' : 'primary' },
        ],
        onClose: (v) => resolve(v === true),
      });
    });
})();
