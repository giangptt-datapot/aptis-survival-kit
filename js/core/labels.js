/* Nhãn hiển thị dùng chung (module, dạng bài, phần thi) */
(function () {
  const A = (globalThis.Aptis = globalThis.Aptis || {});

  A.labels = {
    modules: {
      vocab: { name: 'Từ vựng', en: 'Vocabulary', icon: '🔤', route: '#/vocab' },
      grammar: { name: 'Ngữ pháp', en: 'Grammar', icon: '🧩', route: '#/grammar' },
      reading: { name: 'Reading', en: 'Reading', icon: '📖', route: '#/reading' },
      listening: { name: 'Listening', en: 'Listening', icon: '🎧', route: '#/listening' },
      writing: { name: 'Writing', en: 'Writing', icon: '✍️', route: '#/writing' },
      speaking: { name: 'Speaking', en: 'Speaking', icon: '🎤', route: '#/speaking' },
      mock: { name: 'Mock Test', en: 'Mock Test', icon: '📝', route: '#/mock' },
      diagnostic: { name: 'Diagnostic', en: 'Diagnostic', icon: '🧭', route: '#/diagnostic' },
    },
    diagSection: { vocab: 'Vocabulary', grammar: 'Grammar', reading: 'Reading', listening: 'Listening' },
    reading: {
      sentence: { name: 'Sentence Completion', vi: 'Điền từ vào câu', part: 'Part 1', minutes: 4, desc: 'Chọn từ đúng nhất để hoàn thành câu/tin nhắn ngắn.' },
      ordering: { name: 'Paragraph Ordering', vi: 'Sắp xếp đoạn văn', part: 'Part 2', minutes: 5, desc: 'Sắp xếp các câu thành một đoạn mạch lạc (câu đầu cố định).' },
      shortMatch: { name: 'Short Text Match', vi: 'Ghép ý kiến ngắn', part: 'Part 3', minutes: 8, desc: 'Đọc ý kiến của 4 người rồi xác định ai nói gì.' },
      longMatch: { name: 'Long Text Match', vi: 'Ghép tiêu đề đoạn dài', part: 'Part 4', minutes: 8, desc: 'Chọn tiêu đề phù hợp cho từng đoạn văn.' },
    },
    listening: {
      conversation: { name: 'Conversation', vi: 'Hội thoại', icon: '💬' },
      announcement: { name: 'Announcement', vi: 'Thông báo', icon: '📢' },
      interview: { name: 'Interview', vi: 'Phỏng vấn', icon: '🎙️' },
      discussion: { name: 'Discussion', vi: 'Thảo luận', icon: '👥' },
    },
    writing: {
      1: { name: 'Task 1', vi: 'Trả lời ngắn', icon: '📝', desc: 'Điền form: 5 câu 1–5 từ + 1 câu 20–30 từ.' },
      2: { name: 'Task 2', vi: 'Trả lời mạng xã hội', icon: '💬', desc: '3 tin nhắn nhóm chat, mỗi câu 30–40 từ.' },
      3: { name: 'Task 3', vi: 'Email thân mật', icon: '📧', desc: 'Email cho bạn, 40–50 từ.' },
      4: { name: 'Task 4', vi: 'Email trang trọng / bài viết', icon: '🏛️', desc: 'Email trang trọng, 120–150 từ.' },
    },
    speaking: {
      p1: { name: 'Part 1', vi: 'Thông tin cá nhân', icon: '🙋', desc: '3 câu hỏi quen thuộc, mỗi câu ~30 giây.' },
      p2: { name: 'Part 2', vi: 'Mô tả ảnh', icon: '🖼️', desc: 'Mô tả một cảnh rồi trả lời 2 câu hỏi (~45 giây mỗi phần).' },
      p3: { name: 'Part 3', vi: 'So sánh hai ảnh', icon: '🔀', desc: 'So sánh hai cảnh và nêu ý kiến (~45 giây mỗi phần).' },
      p4: { name: 'Part 4', vi: 'Thảo luận', icon: '🗣️', desc: '3 câu hỏi quan điểm, mỗi câu ~45 giây.' },
      p5: { name: 'Part 5', vi: 'Nói kéo dài', icon: '⏱️', desc: 'Chuẩn bị 1 phút, nói liên tục 2 phút về một chủ đề.' },
    },
    grammarLevel: { b1: 'Mức B1', b2: 'Mức B2', review: 'Review Quiz' },
    badgeKinds: { streak: '🔥', skill: '🎯', time: '⏳', mock: '📝', misc: '⭐' },
  };
})();
