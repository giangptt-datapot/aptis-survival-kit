/* Lộ trình 30 ngày: dữ liệu khai báo. Logic dựng nhiệm vụ nằm ở js/core/plan.js */
(function () {
  const D = (globalThis.AptisData = globalThis.AptisData || {});

  const weeks = [
    { n: 1, title: 'Foundation', vi: 'Nền tảng', range: [1, 7], goal: 'Biết điểm xuất phát, làm quen 5 phần thi, nắm các chủ điểm ngữ pháp nền và 150+ từ vựng đầu tiên.' },
    { n: 2, title: 'Skill Building', vi: 'Xây kỹ năng', range: [8, 14], goal: 'Học các cấu trúc B2 (điều kiện, bị động, mệnh đề quan hệ), luyện đủ 4 dạng Reading, viết email, nói theo khung PREP. Kết thúc bằng Mini Mock.' },
    { n: 3, title: 'Exam Strategy', vi: 'Chiến thuật thi', range: [15, 21], goal: 'Học mẹo làm bài, bẫy thường gặp, luyện có bấm giờ. Câu tường thuật, modal nâng cao. Kết thúc bằng Mini Mock.' },
    { n: 4, title: 'Mock Tests & Review', vi: 'Thi thử & ôn tập', range: [22, 30], goal: '3 bài Mock đầy đủ, phân tích lỗi, vá điểm yếu, làm lại Diagnostic để đo tiến bộ.' },
  ];

  // [ngày, tiêu đề, trọng tâm]
  const T = [
    [1, 'Khởi động & chẩn đoán', 'Làm Diagnostic (~20 phút) để biết điểm xuất phát, sau đó luyện nhẹ mọi kỹ năng để làm quen giao diện.'],
    [2, 'Thì động từ ở mức B2', 'Present / Past / Future: phân biệt thì hoàn thành và đơn. Reading dạng điền từ.'],
    [3, 'Mạo từ & từ vựng đời sống', 'a / an / the / không mạo từ. Shadowing hội thoại ngắn.'],
    [4, 'Giới từ & đọc ghép tiêu đề', 'in / on / at và giới từ đi kèm. Nối tiêu đề với đoạn văn.'],
    [5, 'Modal verbs & nghe hội thoại', 'can / must / should / might have. Bắt thông tin chính khi nghe.'],
    [6, 'Tổng ôn nền tảng', 'Quiz tổng hợp thì – mạo từ – giới từ – modal; sửa lỗi hay mắc.'],
    [7, 'Ôn tập cuối tuần 1', 'Ôn từ vựng đến hạn, quiz tổng hợp; xem lại điểm yếu trong Analytics.'],
    [8, 'Câu điều kiện (1)', 'Điều kiện loại 0–1–2. Viết email thân mật có điều kiện.'],
    [9, 'Câu điều kiện (2) & nghe thông báo', 'Loại 3 và hỗn hợp. Thông báo: số liệu, giờ giấc.'],
    [10, 'Bị động', 'Bị động các thì, have something done.'],
    [11, 'Bị động nâng cao & so sánh ảnh', 'It is said that…; luyện so sánh hai bức ảnh.'],
    [12, 'Mệnh đề quan hệ', 'who / which / that / whose; defining vs non-defining.'],
    [13, 'Mệnh đề quan hệ nâng cao & nghe phỏng vấn', 'Giới từ + whom/which; nghe phỏng vấn tìm ý chính.'],
    [14, 'Mini Mock #1', 'Bài thi thử rút gọn (~60 phút) để đo mốc giữa lộ trình.'],
    [15, 'Câu tường thuật (1)', 'Lùi thì, đổi đại từ và trạng từ. Email trang trọng đầu tiên.'],
    [16, 'Câu tường thuật (2)', 'Reporting verbs, câu hỏi tường thuật. Nói kéo dài PREP.'],
    [17, 'Modal nâng cao', 'must have / can’t have / might have; mẹo đoán trong bài nghe.'],
    [18, 'Mạo từ & lượng từ nâng cao', 'Bẫy mạo từ trong Part 1 Reading; thảo luận có lập luận.'],
    [19, 'Thì động từ: bẫy B2', 'Các cặp thì dễ nhầm; chiến thuật loại trừ đáp án.'],
    [20, 'Giới từ nâng cao', 'Giới từ đi kèm tính từ/động từ; bài nghe thảo luận.'],
    [21, 'Mini Mock #2', 'Thi thử rút gọn có bấm giờ; ghi lại 3 lỗi lặp lại nhiều nhất.'],
    [22, 'Luyện bấm giờ từng phần', 'Làm từng phần đúng thời gian thi, không dừng giữa chừng.'],
    [23, 'Full Mock #1', 'Thi thử đầy đủ 5 phần. Có thể chia 2 lần trong ngày (tiến độ được lưu).'],
    [24, 'Phân tích lỗi Mock #1', 'Xem kỹ phần yếu nhất; làm lại các câu sai ở mục luyện tập tương ứng.'],
    [25, 'Vá điểm yếu', 'Tập trung đúng 2 kỹ năng yếu nhất theo kết quả Mock.'],
    [26, 'Full Mock #2', 'Thi thử đầy đủ lần 2; so sánh với lần 1.'],
    [27, 'Vá điểm yếu (2)', 'Sửa các lỗi lặp lại; luyện Writing/Speaking có tự chấm nghiêm.'],
    [28, 'Full Mock #3', 'Thi thử đầy đủ lần 3 — mục tiêu xác suất đạt B2 ≥ 80%.'],
    [29, 'Ôn tổng lực nhẹ', 'Ôn từ vựng, bẫy thường gặp; ngủ đủ, không học dồn.'],
    [30, 'Diagnostic cuối & kế hoạch tiếp', 'Làm lại Diagnostic (đề B) để đo tiến bộ; xem báo cáo B2 Readiness.'],
  ];

  // Từ vựng: nhóm chủ đề nguồn của từ mới trong ngày ('all' = trộn)
  const CAT = [];
  const blocks = [['dailylife', 3], ['work', 4], ['education', 3], ['technology', 3], ['business', 3], ['travel', 3], ['health', 3], ['environment', 3], ['all', 5]];
  blocks.forEach(([c, n]) => { for (let i = 0; i < n; i++) CAT.push(c); });

  // Ngữ pháp: [chủ điểm, mức] — chủ điểm 'all' = trộn, 'weak' = chủ điểm có % thấp nhất; mức b1|b2|review
  const GR = [
    ['tenses', 'b1'], ['tenses', 'b2'], ['articles', 'b1'], ['prepositions', 'b1'], ['modals', 'b1'], ['all', 'review'], ['all', 'review'],
    ['conditionals', 'b1'], ['conditionals', 'b2'], ['passive', 'b1'], ['passive', 'b2'], ['relative', 'b1'], ['relative', 'b2'], ['all', 'review'],
    ['reported', 'b1'], ['reported', 'b2'], ['modals', 'b2'], ['articles', 'b2'], ['tenses', 'b2'], ['prepositions', 'b2'], ['all', 'review'],
    ['weak', 'b2'], ['all', 'review'], ['weak', 'b2'], ['weak', 'b2'], ['all', 'review'], ['weak', 'b2'], ['all', 'review'], ['weak', 'b2'], ['all', 'review'],
  ];
  const RD = ['sentence', 'ordering', 'shortMatch', 'longMatch'];
  const LS = ['conversation', 'announcement', 'interview', 'discussion'];
  const WR = [1, 2, 1, 3, 2, 3, 4, 1, 2, 3, 4, 3, 4, 2, 3, 4, 3, 4, 2, 4, 3, 4, 3, 2, 4, 3, 4, 2, 3, 4];
  const SP = [1, 1, 2, 2, 3, 4, 5, 1, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 5, 3, 2, 4, 5, 3, 4, 5, 2, 1];
  const SPECIAL = { 1: 'diagnostic', 14: 'mock-mini', 21: 'mock-mini', 23: 'mock-full', 26: 'mock-full', 28: 'mock-full', 30: 'diagnostic-final' };

  const days = T.map(([d, title, focus]) => ({
    d,
    w: d <= 7 ? 1 : d <= 14 ? 2 : d <= 21 ? 3 : 4,
    title,
    focus,
    cat: CAT[d - 1],
    grammar: GR[d - 1],
    reading: RD[(d - 1) % 4],
    listening: LS[d % 4],
    writing: WR[d - 1],
    speaking: SP[d - 1],
    special: SPECIAL[d] || null,
  }));

  D.roadmap = { weeks, days };
})();
