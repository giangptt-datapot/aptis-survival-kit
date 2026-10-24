/* Tiện ích dùng chung (chạy được cả trong trình duyệt lẫn Node để test) */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});
  const U = (A.util = {});

  const pad2 = (n) => String(n).padStart(2, '0');
  U.pad2 = pad2;

  /** Khoá ngày theo giờ địa phương: "2026-10-23" */
  U.dateKey = (d = new Date()) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  U.parseKey = (k) => {
    const [y, m, d] = k.split('-').map(Number);
    return new Date(y, m - 1, d);
  };
  U.addDays = (key, n) => {
    const d = U.parseKey(key);
    d.setDate(d.getDate() + n);
    return U.dateKey(d);
  };
  /** Số ngày từ a đến b (b - a), theo ngày dương lịch địa phương */
  U.daysBetween = (a, b) => {
    const da = U.parseKey(a);
    const db = U.parseKey(b);
    return Math.round((Date.UTC(db.getFullYear(), db.getMonth(), db.getDate()) - Date.UTC(da.getFullYear(), da.getMonth(), da.getDate())) / 86400000);
  };
  /** Khoá tuần (thứ Hai đầu tuần) */
  U.weekKey = (key = U.dateKey()) => {
    const d = U.parseKey(key);
    const dow = (d.getDay() + 6) % 7; // Mon=0
    return U.addDays(key, -dow);
  };

  U.clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));
  U.sum = (a) => a.reduce((s, x) => s + x, 0);
  U.avg = (a) => (a.length ? U.sum(a) / a.length : 0);
  U.pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
  U.uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  U.escapeRegExp = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  /** RNG có hạt giống (mulberry32) để chọn đề lặp lại được */
  U.rng = (seed = Date.now()) => {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  };
  U.shuffle = (arr, rnd = Math.random) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  U.sample = (arr, n, rnd = Math.random) => U.shuffle(arr, rnd).slice(0, n);
  U.pick = (arr, rnd = Math.random) => arr[Math.floor(rnd() * arr.length)];
  U.groupBy = (arr, fn) => arr.reduce((m, x) => ((m[fn(x)] = m[fn(x)] || []).push(x), m), {});

  U.countWords = (text) => (String(text || '').trim().match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || []).length;

  /** "75 phút" / "1 giờ 15 phút" */
  U.fmtMinutes = (sec) => {
    const m = Math.round(sec / 60);
    if (m < 60) return `${m} phút`;
    const h = Math.floor(m / 60);
    const r = m % 60;
    return r ? `${h} giờ ${r} phút` : `${h} giờ`;
  };
  U.fmtHours = (sec) => (sec / 3600).toFixed(1).replace(/\.0$/, '');
  U.fmtClock = (sec) => {
    sec = Math.max(0, Math.round(sec));
    return `${pad2(Math.floor(sec / 60))}:${pad2(sec % 60)}`;
  };
  U.fmtDate = (key) => {
    const d = U.parseKey(key);
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}`;
  };
  U.fmtDateTime = (ts) => {
    const d = new Date(ts);
    return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
  };

  U.deepClone = (x) => JSON.parse(JSON.stringify(x));
  U.cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  /** Hàm phân phối chuẩn tích luỹ (xấp xỉ Abramowitz–Stegun) */
  U.normCdf = (z) => {
    const t = 1 / (1 + 0.2316419 * Math.abs(z));
    const d = 0.3989423 * Math.exp((-z * z) / 2);
    const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return z > 0 ? 1 - p : p;
  };
})();
