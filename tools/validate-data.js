#!/usr/bin/env node
/**
 * Kiểm tra dữ liệu nội dung theo tools/CONTENT_SPEC.md
 * Dùng:  node tools/validate-data.js [file.js ...]   (không đối số = tất cả js/data/*.js)
 * Thoát mã 1 nếu có lỗi.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const files = args.length
  ? args.map((f) => path.resolve(process.cwd(), f))
  : fs
      .readdirSync(path.join(root, 'js/data'))
      .filter((f) => f.endsWith('.js'))
      .map((f) => path.join(root, 'js/data', f));

const errors = [];
const warns = [];
const err = (m) => errors.push(m);
const warn = (m) => warns.push(m);

// Nạp từng file vào một global dùng chung (giống trình duyệt)
const sandbox = { console };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const f of files) {
  try {
    vm.runInContext(fs.readFileSync(f, 'utf8'), sandbox, { filename: f });
  } catch (e) {
    err(`${path.basename(f)}: lỗi cú pháp/chạy: ${e.message}`);
  }
}
const D = sandbox.AptisData || {};

const words = (s) => (String(s).trim().match(/[\p{L}\p{N}'’-]+/gu) || []).length;
const isStr = (x) => typeof x === 'string' && x.trim().length > 0;

function checkMCQ(item, where, { lvl = false, opts = [3, 4] } = {}) {
  if (!item || typeof item !== 'object') return err(`${where}: không phải object`);
  if (!isStr(item.q)) err(`${where}: thiếu q`);
  if (!Array.isArray(item.o) || !opts.includes(item.o.length)) err(`${where}: o phải có ${opts.join('/')} lựa chọn`);
  else {
    if (item.o.some((x) => !isStr(x))) err(`${where}: có lựa chọn rỗng`);
    if (new Set(item.o.map((x) => String(x).trim().toLowerCase())).size !== item.o.length) err(`${where}: lựa chọn trùng nhau`);
  }
  if (!Number.isInteger(item.a) || !item.o || item.a < 0 || item.a >= item.o.length) err(`${where}: a không hợp lệ`);
  if (!isStr(item.e)) err(`${where}: thiếu e (giải thích)`);
  if (lvl && !['A2', 'B1', 'B2'].includes(item.lvl)) err(`${where}: lvl phải là A2/B1/B2`);
}
function answerSpread(list, where) {
  if (list.length < 6) return;
  const c = {};
  list.forEach((x) => (c[x.a] = (c[x.a] || 0) + 1));
  const max = Math.max(...Object.values(c));
  if (max / list.length > 0.6) warn(`${where}: đáp án đúng dồn vào một vị trí (${JSON.stringify(c)})`);
}
function uniqueIds(list, where) {
  const s = new Set();
  list.forEach((x) => {
    if (!isStr(x.id)) err(`${where}: thiếu id`);
    else if (s.has(x.id)) err(`${where}: id trùng ${x.id}`);
    s.add(x.id);
  });
}

// ---------- Vocab ----------
const CATS = ['education', 'technology', 'business', 'environment', 'travel', 'health', 'work', 'dailylife'];
const POS = ['n', 'v', 'adj', 'adv', 'prep', 'conj', 'phr'];
if (D.vocab) {
  const seen = new Map();
  for (const cat of Object.keys(D.vocab)) {
    if (!CATS.includes(cat)) err(`vocab: nhóm lạ "${cat}"`);
    const list = D.vocab[cat];
    if (!Array.isArray(list)) { err(`vocab.${cat}: phải là mảng`); continue; }
    if (list.length < 140) err(`vocab.${cat}: chỉ có ${list.length} từ (cần ≥ 140)`);
    list.forEach((r, i) => {
      const where = `vocab.${cat}[${i}]${Array.isArray(r) ? ' ' + r[0] : ''}`;
      if (!Array.isArray(r) || r.length !== 7 || r.some((x) => !isStr(x))) return err(`${where}: phải là mảng 7 chuỗi không rỗng`);
      const [w, pos, ipa, vi, ex, col, lv] = r;
      if (!POS.includes(pos)) err(`${where}: pos "${pos}" không hợp lệ`);
      if (!/^\/.+\/$/.test(ipa)) err(`${where}: ipa phải bao trong / /`);
      if (!['A2', 'B1', 'B2', 'C1'].includes(lv)) err(`${where}: level "${lv}" không hợp lệ`);
      const wc = words(ex);
      if (wc < 6 || wc > 24) warn(`${where}: ví dụ ${wc} từ`);
      const first = w.toLowerCase().split(/\s+/)[0].replace(/[^a-z-]/g, '');
      const stem = first.slice(0, Math.max(3, first.length - 3));
      if (!ex.toLowerCase().includes(stem)) warn(`${where}: ví dụ có thể không chứa từ "${w}"`);
      if (!col.includes(';') && col.split(';').length < 1) warn(`${where}: collocation trống`);
      const key = w.toLowerCase().trim();
      if (seen.has(key)) err(`vocab: từ trùng "${w}" ở ${seen.get(key)} và ${cat}`);
      else seen.set(key, cat);
    });
  }
}

// ---------- Grammar ----------
const GTOPICS = ['tenses', 'conditionals', 'passive', 'relative', 'reported', 'modals', 'articles', 'prepositions'];
if (D.grammar) {
  uniqueIds(D.grammar, 'grammar');
  for (const t of D.grammar) {
    const w = `grammar.${t.id}`;
    if (!GTOPICS.includes(t.id)) err(`${w}: id lạ`);
    ['title', 'vi', 'icon', 'summary'].forEach((k) => !isStr(t[k]) && err(`${w}: thiếu ${k}`));
    if (!Array.isArray(t.explain) || t.explain.length < 3) err(`${w}: explain cần ≥ 3 khối`);
    else t.explain.forEach((b, i) => {
      if (!isStr(b.h) || !isStr(b.body)) err(`${w}.explain[${i}]: thiếu h/body`);
      if (!Array.isArray(b.ex) || b.ex.length < 2 || b.ex.some((p) => !Array.isArray(p) || p.length !== 2 || !isStr(p[0]) || !isStr(p[1]))) err(`${w}.explain[${i}]: ex phải là ≥2 cặp [EN, VI]`);
    });
    if (!Array.isArray(t.tips) || t.tips.length < 3) err(`${w}: tips cần ≥ 3`);
    for (const lv of ['b1', 'b2']) {
      if (!Array.isArray(t[lv]) || t[lv].length < 8) { err(`${w}.${lv}: cần ≥ 8 câu`); continue; }
      t[lv].forEach((q, i) => checkMCQ(q, `${w}.${lv}[${i}]`));
      answerSpread(t[lv], `${w}.${lv}`);
    }
    const qs = [...(t.b1 || []), ...(t.b2 || [])].map((q) => q.q);
    if (new Set(qs).size !== qs.length) err(`${w}: có câu hỏi trùng`);
  }
}

// ---------- Reading ----------
if (D.reading) {
  const R = D.reading;
  const need = { sentence: 5, ordering: 5, shortMatch: 4, longMatch: 4 };
  for (const k of Object.keys(need)) {
    if (!Array.isArray(R[k]) || R[k].length < need[k]) err(`reading.${k}: cần ≥ ${need[k]} bộ`);
    else uniqueIds(R[k], `reading.${k}`);
  }
  (R.sentence || []).forEach((s) => {
    const w = `reading.sentence.${s.id}`;
    if (!isStr(s.title) || !['B1', 'B2'].includes(s.level)) err(`${w}: thiếu title/level`);
    if (!Array.isArray(s.items) || s.items.length !== 5) err(`${w}: cần 5 items`);
    else s.items.forEach((q, i) => { checkMCQ(q, `${w}[${i}]`, { opts: [3] }); if (q.q && !q.q.includes('___')) warn(`${w}[${i}]: q không có ___`); });
  });
  (R.ordering || []).forEach((s) => {
    const w = `reading.ordering.${s.id}`;
    if (!isStr(s.title) || !['B1', 'B2'].includes(s.level) || !isStr(s.first) || !isStr(s.e)) err(`${w}: thiếu title/level/first/e`);
    if (!Array.isArray(s.order) || s.order.length !== 4 || s.order.some((x) => !isStr(x))) err(`${w}: order phải có 4 câu`);
  });
  (R.shortMatch || []).forEach((s) => {
    const w = `reading.shortMatch.${s.id}`;
    if (!isStr(s.title) || !isStr(s.topic) || !isStr(s.intro)) err(`${w}: thiếu title/topic/intro`);
    if (!Array.isArray(s.people) || s.people.length !== 4 || s.people.some((p) => !isStr(p.n) || !isStr(p.t))) err(`${w}: cần 4 people {n,t}`);
    if (!Array.isArray(s.qs) || s.qs.length !== 7) err(`${w}: cần 7 qs`);
    else {
      s.qs.forEach((q, i) => {
        if (!isStr(q.q) || !Number.isInteger(q.a) || q.a < 0 || q.a > 3 || !isStr(q.e)) err(`${w}.qs[${i}]: thiếu q/a(0–3)/e`);
      });
      const used = new Set(s.qs.map((q) => q.a));
      if (used.size < 4) warn(`${w}: có người không được chọn lần nào`);
    }
    (s.people || []).forEach((p, i) => { const n = words(p.t); if (n < 35 || n > 90) warn(`${w}.people[${i}]: ${n} từ`); });
  });
  (R.longMatch || []).forEach((s) => {
    const w = `reading.longMatch.${s.id}`;
    if (!isStr(s.title) || !['B1', 'B2'].includes(s.level)) err(`${w}: thiếu title/level`);
    if (!Array.isArray(s.paras) || s.paras.length !== 5 || s.paras.some((p) => !isStr(p.t))) err(`${w}: cần 5 paras {t}`);
    if (!Array.isArray(s.headings) || s.headings.length !== 6) err(`${w}: cần 6 headings`);
    if (!Array.isArray(s.a) || s.a.length !== 5 || s.a.some((x) => !Number.isInteger(x) || x < 0 || x > 5)) err(`${w}: a phải có 5 chỉ số 0–5`);
    else if (new Set(s.a).size !== 5) err(`${w}: a trùng tiêu đề`);
    if (!Array.isArray(s.e) || s.e.length !== 5) err(`${w}: e cần 5 mục`);
  });
}

// ---------- Listening ----------
if (D.listening) {
  const L = D.listening;
  uniqueIds(L, 'listening');
  const byType = {};
  L.forEach((x) => {
    const w = `listening.${x.id}`;
    byType[x.type] = (byType[x.type] || 0) + 1;
    if (!['conversation', 'announcement', 'interview', 'discussion'].includes(x.type)) err(`${w}: type lạ`);
    if (!isStr(x.title) || !['B1', 'B2'].includes(x.level) || !isStr(x.setting)) err(`${w}: thiếu title/level/setting`);
    if (!x.speakers || !Object.keys(x.speakers).length || Object.values(x.speakers).some((g) => !['f', 'm'].includes(g))) err(`${w}: speakers {tên:"f"|"m"}`);
    if (!Array.isArray(x.script) || x.script.length < 1) err(`${w}: script trống`);
    else {
      x.script.forEach((l, i) => { if (!isStr(l.t) || !x.speakers || !(l.s in x.speakers)) err(`${w}.script[${i}]: s không có trong speakers hoặc t rỗng`); });
      const n = words(x.script.map((l) => l.t).join(' '));
      if (n < 90 || n > 260) warn(`${w}: script ${n} từ`);
    }
    if (!Array.isArray(x.qs) || x.qs.length !== 3) err(`${w}: cần 3 qs`);
    else x.qs.forEach((q, i) => checkMCQ(q, `${w}.qs[${i}]`, { opts: [3] }));
    if (!Array.isArray(x.keywords) || x.keywords.length < 4) err(`${w}: keywords cần ≥ 4`);
    if (!Array.isArray(x.traps) || x.traps.length < 2) err(`${w}: traps cần ≥ 2`);
  });
  if (L.length < 16) err(`listening: chỉ ${L.length} bài (cần ≥ 16)`);
  for (const t of ['conversation', 'announcement', 'interview', 'discussion']) if ((byType[t] || 0) < 4) err(`listening: loại ${t} chỉ có ${byType[t] || 0} (cần ≥ 4)`);
}

// ---------- Writing ----------
if (D.writing) {
  uniqueIds(D.writing, 'writing');
  const cnt = {};
  D.writing.forEach((x) => {
    const w = `writing.${x.id}`;
    cnt[x.task] = (cnt[x.task] || 0) + 1;
    if (![1, 2, 3, 4].includes(x.task)) err(`${w}: task phải 1–4`);
    if (!isStr(x.title) || !isStr(x.context)) err(`${w}: thiếu title/context`);
    const expectedParts = { 1: 6, 2: 3, 3: 1, 4: 1 }[x.task];
    if (!Array.isArray(x.parts) || x.parts.length !== expectedParts) err(`${w}: task ${x.task} cần ${expectedParts} parts`);
    else x.parts.forEach((p, i) => {
      const pw = `${w}.parts[${i}]`;
      if (!isStr(p.prompt) || !isStr(p.sample) || !Number.isInteger(p.min) || !Number.isInteger(p.max)) return err(`${pw}: thiếu prompt/sample/min/max`);
      const n = words(p.sample);
      if (n < p.min || n > p.max) err(`${pw}: sample ${n} từ, ngoài [${p.min}, ${p.max}]`);
    });
    if (!Array.isArray(x.phrases) || x.phrases.length < 5) err(`${w}: phrases cần ≥ 5`);
    if (!Array.isArray(x.tips) || x.tips.length < 2) err(`${w}: tips cần ≥ 2`);
  });
  for (const t of [1, 2, 3, 4]) if ((cnt[t] || 0) < 4) err(`writing: task ${t} chỉ có ${cnt[t] || 0} đề (cần ≥ 4)`);
}

// ---------- Speaking ----------
if (D.speaking) {
  const S = D.speaking;
  const need = { p1: 8, p2: 6, p3: 5, p4: 6, p5: 6 };
  for (const k of Object.keys(need)) {
    if (!Array.isArray(S[k]) || S[k].length < need[k]) { err(`speaking.${k}: cần ≥ ${need[k]} bộ`); continue; }
    uniqueIds(S[k], `speaking.${k}`);
  }
  (S.p1 || []).forEach((x) => {
    const w = `speaking.p1.${x.id}`;
    if (!isStr(x.topic) || !Array.isArray(x.qs) || x.qs.length !== 3 || !Array.isArray(x.sample) || x.sample.length !== 3) err(`${w}: cần topic, 3 qs, 3 sample`);
    else x.sample.forEach((s, i) => { const n = words(s); if (n < 18 || n > 55) warn(`${w}.sample[${i}]: ${n} từ`); });
  });
  (S.p2 || []).forEach((x) => {
    const w = `speaking.p2.${x.id}`;
    if (!isStr(x.title) || !isStr(x.emoji) || !isStr(x.scene) || !isStr(x.sample) || !Array.isArray(x.qs) || x.qs.length !== 2 || !Array.isArray(x.vocab) || x.vocab.length < 5) err(`${w}: thiếu trường (title, emoji, scene, qs×2, sample, vocab≥5)`);
    else { const n = words(x.sample); if (n < 70 || n > 150) warn(`${w}: sample ${n} từ`); }
  });
  (S.p3 || []).forEach((x) => {
    const w = `speaking.p3.${x.id}`;
    if (!isStr(x.title) || !isStr(x.emojiA) || !isStr(x.emojiB) || !isStr(x.sceneA) || !isStr(x.sceneB) || !isStr(x.sample) || !Array.isArray(x.qs) || x.qs.length !== 2 || !Array.isArray(x.vocab) || x.vocab.length < 5) err(`${w}: thiếu trường (title, emojiA/B, sceneA/B, qs×2, sample, vocab≥5)`);
    else { const n = words(x.sample); if (n < 80 || n > 170) warn(`${w}: sample ${n} từ`); }
  });
  (S.p4 || []).forEach((x) => {
    const w = `speaking.p4.${x.id}`;
    if (!isStr(x.topic) || !Array.isArray(x.qs) || x.qs.length !== 3 || !Array.isArray(x.sample) || x.sample.length !== 3) err(`${w}: cần topic, 3 qs, 3 sample`);
  });
  (S.p5 || []).forEach((x) => {
    const w = `speaking.p5.${x.id}`;
    if (!isStr(x.topic) || !Array.isArray(x.qs) || x.qs.length !== 3 || !Array.isArray(x.points) || x.points.length < 3 || !isStr(x.sample)) err(`${w}: cần topic, 3 qs, points≥3, sample`);
    else { const n = words(x.sample); if (n < 180 || n > 330) warn(`${w}: sample ${n} từ`); }
  });
}

// ---------- Diagnostic ----------
if (D.diagnostic) {
  for (const f of ['A', 'B']) {
    const F = D.diagnostic[f];
    if (!F) { err(`diagnostic.${f}: thiếu`); continue; }
    for (const sec of ['vocab', 'grammar']) {
      const list = F[sec];
      if (!Array.isArray(list) || list.length !== 12) { err(`diagnostic.${f}.${sec}: cần 12 câu`); continue; }
      list.forEach((q, i) => checkMCQ(q, `diagnostic.${f}.${sec}[${i}]`, { lvl: true }));
      ['A2', 'B1', 'B2'].forEach((lv) => list.filter((q) => q.lvl === lv).length !== 4 && err(`diagnostic.${f}.${sec}: cần 4 câu ${lv}`));
    }
    if (!Array.isArray(F.reading) || F.reading.length !== 2) err(`diagnostic.${f}.reading: cần 2 đoạn`);
    else F.reading.forEach((p, i) => {
      if (!isStr(p.passage) || !Array.isArray(p.qs) || p.qs.length !== 3) return err(`diagnostic.${f}.reading[${i}]: cần passage + 3 qs`);
      p.qs.forEach((q, j) => checkMCQ(q, `diagnostic.${f}.reading[${i}].qs[${j}]`, { lvl: true }));
    });
    if (!Array.isArray(F.listening) || F.listening.length !== 2) err(`diagnostic.${f}.listening: cần 2 bài`);
    else F.listening.forEach((p, i) => {
      if (!p.speakers || !Array.isArray(p.script) || !Array.isArray(p.qs) || p.qs.length !== 3) return err(`diagnostic.${f}.listening[${i}]: cần speakers, script, 3 qs`);
      p.script.forEach((l, k) => { if (!isStr(l.t) || !(l.s in p.speakers)) err(`diagnostic.${f}.listening[${i}].script[${k}]: s/t không hợp lệ`); });
      p.qs.forEach((q, j) => checkMCQ(q, `diagnostic.${f}.listening[${i}].qs[${j}]`, { lvl: true }));
    });
  }
  // không trùng câu giữa A và B
  const texts = (F) => [...F.vocab, ...F.grammar, ...F.reading.flatMap((p) => p.qs), ...F.listening.flatMap((p) => p.qs)].map((q) => q.q);
  if (D.diagnostic.A && D.diagnostic.B) {
    const a = new Set(texts(D.diagnostic.A));
    texts(D.diagnostic.B).forEach((q) => a.has(q) && err(`diagnostic: câu trùng giữa A và B: ${q}`));
  }
}

// ---------- Tổng kết ----------
const total = D.vocab ? Object.values(D.vocab).reduce((n, l) => n + l.length, 0) : 0;
if (D.vocab) console.log(`Từ vựng: ${total} từ (${Object.keys(D.vocab).map((k) => k + ':' + D.vocab[k].length).join(', ')})`);
warns.slice(0, 40).forEach((m) => console.log('  cảnh báo: ' + m));
if (warns.length > 40) console.log(`  ... và ${warns.length - 40} cảnh báo khác`);
if (errors.length) {
  errors.slice(0, 80).forEach((m) => console.log('  LỖI: ' + m));
  if (errors.length > 80) console.log(`  ... và ${errors.length - 80} lỗi khác`);
  console.log(`THẤT BẠI: ${errors.length} lỗi, ${warns.length} cảnh báo`);
  process.exit(1);
}
console.log(`OK (${files.length} file, ${warns.length} cảnh báo)`);
