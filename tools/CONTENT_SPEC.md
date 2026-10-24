# Đặc tả dữ liệu nội dung (Content Spec)

Tất cả nội dung học nằm trong `js/data/*.js` dưới dạng **script cổ điển** (không dùng ES module, để mở bằng `file://`).
Mọi file PHẢI dùng đúng khung bọc sau (IIFE, tránh trùng tên biến toàn cục giữa các file):

```js
(function () {
  const D = (globalThis.AptisData = globalThis.AptisData || {});
  // ... gán dữ liệu vào D.<khoá> ...
})();
```

Kiểm tra file của bạn: `node tools/validate-data.js js/data/<file>.js` (chạy từ thư mục gốc dự án). Phải in `OK` và không có lỗi.

Quy ước chung
- Người học: người đi làm Việt Nam, trình độ A2–B1, mục tiêu B2 Aptis ESOL (bản General của British Council, giọng Anh-Anh).
- Tiếng Anh: tự nhiên, đúng chuẩn, dùng chính tả Anh (colour, organise, holiday, flat). Không bịa sự kiện thật/tên người thật nổi tiếng.
- Phần giải thích/dịch/mẹo: **tiếng Việt**, ngắn gọn, đúng chuyên môn.
- Câu trắc nghiệm (MCQ) luôn có dạng `{ q, o:[...], a:<chỉ số đáp án đúng>, e:"giải thích tiếng Việt vì sao đúng và vì sao các đáp án kia sai/bẫy" }`.
  Vị trí đáp án đúng phải **phân bố đều** (không phải lúc nào cũng 0 hoặc 1). Chỉ có MỘT đáp án đúng rõ ràng.
  Chỗ trống trong `q` viết là `___` (3 gạch dưới).
- Không đưa mật khẩu/khoá/URL riêng tư vào nội dung (không có trong loại nội dung này).

---------------------------------------------------------------------
## 1. Từ vựng — `js/data/vocab-<nhom>.js` → `D.vocab.<nhom>`
Nhóm hợp lệ (id): `education, technology, business, environment, travel, health, work, dailylife`.
Mỗi phần tử là MỘT MẢNG 7 chuỗi theo thứ tự:
`[word, pos, ipa, vi, example, collocation, level]`
- `word`: từ/cụm ngắn (chữ thường, trừ tên riêng). Không trùng với bất kỳ từ nào ở nhóm khác (kiểm tra không phân biệt hoa thường).
- `pos`: một trong `n, v, adj, adv, prep, conj, phr`.
- `ipa`: phiên âm IPA Anh-Anh, bao trong `/ /`, có dấu nhấn (ˈ ˌ). Ví dụ `/kəˈrɪkjələm/`.
- `vi`: nghĩa tiếng Việt ngắn (1–6 từ), đúng nghĩa trong chủ đề.
- `example`: 1 câu ví dụ tiếng Anh tự nhiên, 8–18 từ, **chứa chính từ đó** (có thể chia dạng: -s, -ed, -ing).
- `collocation`: 2–3 kết hợp từ phổ biến, ngăn cách bằng `; ` (ví dụ `core curriculum; national curriculum`).
- `level`: `A2`, `B1`, `B2` hoặc `C1` (đa số B1–B2, ít A2/C1).
Số lượng: **tối thiểu 140 từ mỗi nhóm**. Ưu tiên từ thật sự hay gặp trong Aptis/IELTS/đời sống công sở, không lấy từ quá hiếm.

---------------------------------------------------------------------
## 2. Ngữ pháp — `js/data/grammar-*.js` → `D.grammar` (mảng; mỗi file `D.grammar = D.grammar || []; D.grammar.push({...}, ...)`)
Mỗi chủ điểm:
```js
{
  id: "tenses",                 // một trong: tenses, conditionals, passive, relative, reported, modals, articles, prepositions
  title: "Present / Past / Future",   // tiêu đề tiếng Anh
  vi: "Các thì: hiện tại, quá khứ, tương lai",
  icon: "⏰",                    // 1 emoji
  summary: "1–2 câu tiếng Việt: chủ điểm này hay ra gì trong Aptis",
  explain: [                    // 3–5 khối
    { h: "Present Simple vs Present Continuous", body: "Giải thích tiếng Việt, có thể dùng **in đậm**.", ex: [["She works in HR.", "Cô ấy làm ở phòng nhân sự."], ["...", "..."]] }
  ],
  tips: ["3 lỗi hay gặp / mẹo làm bài (tiếng Việt)"],
  b1: [ {q,o,a,e}, ... ],       // tối thiểu 8 câu mức B1
  b2: [ {q,o,a,e}, ... ]        // tối thiểu 8 câu mức B2 (khó hơn: bẫy, cấu trúc nâng cao)
}
```
- `o` có 3 hoặc 4 lựa chọn. Câu hỏi kiểu Aptis: điền từ vào chỗ trống (`___`) hoặc chọn câu đúng.
- Tất cả `q` trong một chủ điểm phải khác nhau.

---------------------------------------------------------------------
## 3. Reading — `js/data/reading.js` → `D.reading = { sentence, ordering, shortMatch, longMatch }`
- `sentence` (Aptis Part 1 – Sentence comprehension), **≥ 5 bộ**:
  `{ id:"rs1", title:"...", level:"B1"|"B2", items:[ {q,o(3 lựa chọn),a,e} × 5 ] }` — mỗi `q` là một câu/đoạn ngắn có chỗ trống `___` (ngữ cảnh đời thường/công sở, có biển báo, tin nhắn, email ngắn).
- `ordering` (Part 2 – Text cohesion), **≥ 5 bộ**:
  `{ id:"ro1", title, level, first:"Câu mở đầu cố định", order:["câu 2","câu 3","câu 4","câu 5"], e:"giải thích tiếng Việt các manh mối liên kết: đại từ, từ nối, mốc thời gian" }`
  `order` đã ở **đúng thứ tự** (ứng dụng sẽ tự xáo trộn). Mỗi câu 8–22 từ; có manh mối liên kết rõ (however, then, this, after that, finally, they…).
- `shortMatch` (Part 3 – Opinion matching), **≥ 4 bộ**:
  `{ id:"rm1", title, topic, intro:"1 câu giới thiệu", people:[{n:"Anna", t:"ý kiến 45–70 từ"} × 4], qs:[ {q:"Who thinks ...?", a:<chỉ số người 0–3>, e} × 7 ] }`
  Mỗi người được chọn ít nhất 1 lần; câu hỏi diễn đạt lại (paraphrase), không copy nguyên văn từ trong ý kiến.
- `longMatch` (Part 4 – Long text/heading matching), **≥ 4 bộ**:
  `{ id:"rl1", title, level, paras:[ {t:"đoạn 45–75 từ"} × 5 ], headings:["6 tiêu đề, trong đó 1 tiêu đề thừa (gây nhiễu)"], a:[<chỉ số tiêu đề đúng cho từng đoạn, độ dài 5>], e:["giải thích tiếng Việt cho từng đoạn (5 mục)"] }`
- id phải duy nhất trong từng loại.

---------------------------------------------------------------------
## 4. Listening — `js/data/listening.js` → `D.listening` (mảng, **≥ 16 bài**, mỗi loại ≥ 4: `conversation, announcement, interview, discussion`)
```js
{
  id: "l-conv-1",
  type: "conversation",                    // conversation | announcement | interview | discussion
  title: "Booking a meeting room",
  level: "B1",                             // B1 hoặc B2
  setting: "Mô tả ngắn bối cảnh (tiếng Việt)",
  speakers: { "Anna": "f", "Tom": "m" },   // f hoặc m; announcement có 1 người (ví dụ "Announcer")
  script: [ { s:"Anna", t:"Câu nói..." }, { s:"Tom", t:"..." } ],   // 120–220 từ tổng, ngôn ngữ nói tự nhiên (ngập ngừng, "Actually", "Well")
  qs: [ {q,o(3),a,e} × 3 ],                // 3 câu hỏi; câu hỏi đi theo thứ tự trong bài nghe
  keywords: ["5–7 từ/cụm khoá cần nghe"],
  traps: ["2–3 bẫy thường gặp (tiếng Việt): người nói đổi ý, đính chính số liệu, từ gần âm, thông tin gây nhiễu..."]
}
```
- Bài nghe sẽ được đọc bằng text-to-speech, nên: viết số/ngày/giờ bằng chữ dễ đọc (ví dụ "half past three", "twenty-five pounds"), hạn chế ký hiệu lạ, dấu chấm câu rõ ràng.
- Mỗi `s` trong `script` phải có trong `speakers`. Interview/discussion: 2–3 người.
- Đáp án sai phải là bẫy hợp lý (thông tin có xuất hiện trong bài nhưng không phải đáp án).

---------------------------------------------------------------------
## 5. Writing — `js/data/writing.js` → `D.writing` (mảng, **≥ 4 đề mỗi task**, task 1–4)
```js
{
  id: "w1-1", task: 1,   // 1 | 2 | 3 | 4
  title: "Join a language club",
  context: "Tình huống tiếng Anh ngắn (đúng văn phong đề Aptis) + (nếu cần) 1 dòng tiếng Việt giải thích",
  parts: [ { prompt:"Câu hỏi/đề", min:20, max:30, sample:"Bài mẫu mức B2 trong khoảng min–max từ", hint:"gợi ý tiếng Việt (tuỳ chọn)" } ],
  phrases: ["5–8 cụm/cấu trúc B2 hữu ích cho đề này"],
  tips: ["2–3 mẹo tiếng Việt cho đề này"]
}
```
Quy định theo task (đếm từ của `sample` phải nằm trong [min, max]):
- Task 1 (short answers): 6 `parts`: 5 phần `min:1,max:5` (điền form: tên, nghề, sở thích… dạng cụm ngắn) + 1 phần `min:20,max:30` (viết 1–2 câu).
- Task 2 (social media / chat): 3 `parts`, mỗi phần `min:30,max:40` (trả lời 3 tin nhắn trong nhóm chat/diễn đàn).
- Task 3 (informal email to a friend): 1 `part`, `min:40,max:50`.
- Task 4 (formal email / article): 1 `part`, `min:120,max:150`. Mẫu nên có: lời chào, nêu mục đích, 2–3 ý chính có từ nối, lời kết trang trọng.
- Bài mẫu phải đạt B2: đa dạng cấu trúc, từ nối, từ vựng chính xác, không lỗi ngữ pháp.

---------------------------------------------------------------------
## 6. Speaking — `js/data/speaking.js` → `D.speaking = { p1, p2, p3, p4, p5 }`
- `p1` (thông tin cá nhân), **≥ 8 bộ**: `{ id:"s1-1", topic:"Daily routine", qs:["3 câu hỏi"], sample:["3 câu trả lời mẫu B2, mỗi câu 25–40 từ"] }`
- `p2` (mô tả ảnh), **≥ 6 bộ**: `{ id:"s2-1", title:"People working in a café", emoji:"☕🧑‍💻", scene:"Mô tả chi tiết bức ảnh bằng tiếng Anh (60–90 từ) — vì ứng dụng không có ảnh thật, người học đọc mô tả này rồi nói", qs:["2 câu hỏi liên quan ảnh/bản thân"], sample:"Bài nói mẫu B2 ~ 90–120 từ (mô tả + suy đoán + ý kiến cá nhân)", vocab:["6–8 từ/cụm hữu ích"] }`
- `p3` (so sánh 2 ảnh), **≥ 5 bộ**: `{ id:"s3-1", title, emojiA:"🚆", emojiB:"🚗", sceneA:"mô tả ảnh A (35–55 từ)", sceneB:"mô tả ảnh B (35–55 từ)", qs:["2 câu hỏi so sánh/ý kiến"], sample:"Bài nói mẫu ~ 100–130 từ, có cấu trúc so sánh (whereas, both, unlike...)", vocab:[...] }`
- `p4` (thảo luận), **≥ 6 bộ**: `{ id:"s4-1", topic:"Technology at work", qs:["3 câu hỏi quan điểm"], sample:["3 câu trả lời mẫu B2, mỗi câu 40–60 từ"] }`
- `p5` (nói kéo dài ~2 phút, chuẩn bị 1–2 phút), **≥ 6 bộ**: `{ id:"s5-1", topic:"Learning new skills as an adult", qs:["3 câu hỏi gợi ý nội dung"], points:["3–4 ý nên triển khai (tiếng Anh ngắn)"], sample:"Bài nói mẫu ~ 220–280 từ theo khung PREP, nhiều từ nối" }`
- Giọng điệu mẫu: tự nhiên, nói được (không văn viết quá), có discourse markers (Well, Actually, What I mean is...).

---------------------------------------------------------------------
## 7. Diagnostic — `js/data/diagnostic.js` → `D.diagnostic = { A:{...}, B:{...} }` (hai đề song song cùng độ khó, KHÔNG trùng câu)
Mỗi đề (`A`, `B`):
```js
{
  vocab:    [ {lvl:"A2"|"B1"|"B2", q, o, a, e} × 12 ],   // 4 câu A2, 4 câu B1, 4 câu B2 (nghĩa, từ đồng nghĩa, collocation, điền từ)
  grammar:  [ {lvl, q, o, a, e} × 12 ],                 // 4 / 4 / 4
  reading:  [ { passage:"đoạn văn 80–130 từ", qs:[ {lvl,q,o,a,e} × 3 ] }, ... ],   // 2 đoạn = 6 câu; đoạn 1 mức A2–B1, đoạn 2 mức B1–B2; mỗi đoạn có câu gắn lvl đúng độ khó
  listening:[ { speakers:{...}, script:[{s,t}...], qs:[ {lvl,q,o,a,e} × 3 ] }, ... ]    // 2 bài = 6 câu; bài 1 ~ A2–B1 (80–110 từ), bài 2 ~ B1–B2 (130–170 từ)
}
```
- `o` có 3–4 lựa chọn. Độ khó phải đúng thang: A2 = rất cơ bản, B1 = cần kiến thức trung cấp, B2 = cần phân biệt tinh tế/ít gặp.
- Listening: cùng quy tắc viết số/ngày/giờ như mục 4.
