# 9. Development Roadmap

Trạng thái: ✅ đã giao (v1.0) · 🟡 làm một phần/giản lược · ⬜ chưa làm.

## Giai đoạn 0 — Nền móng ✅
- Chốt ràng buộc `file://`, không build, không ES module; chọn hash router, LocalStorage, SVG tự vẽ.
- Đặc tả định dạng nội dung (`CONTENT_SPEC.md`) và trình kiểm tra (`validate-data.js`) **trước** khi soạn nội dung.
- Lõi: `util`, `store`, `srs`, `scoring`, `plan`, `game`, `session`.

## Giai đoạn 1 — Nội dung ✅
- 1.374 từ vựng/8 chủ đề · 152 câu ngữ pháp/8 chủ điểm · 21 bộ Reading · 16 bài Listening · 16 đề Writing · 31 bộ Speaking · 2 đề Diagnostic · lộ trình 30 ngày.
- Soạn song song theo nhóm nội dung, kiểm bằng validator; loại 9 từ trùng giữa các nhóm; rà mẫu đáp án.

## Giai đoạn 2 — Trải nghiệm luyện tập ✅
- Bộ chạy Quiz dùng chung; Flashcard + SRS; 4 dạng Reading; Listening bằng TTS; Writing có tự kiểm tra; Speaking có bấm giờ/ghi âm.

## Giai đoạn 3 — Kế hoạch và đo lường ✅
- Diagnostic A/B, lộ trình tự co giãn, Dashboard, Mock Mini/Full có lưu tiến độ, kết quả CEFR + xác suất B2.
- Gamification, Analytics, tiêu chí thành công.

## Giai đoạn 4 — Chất lượng ✅
- Test dữ liệu · 30 test đơn vị · 97 kiểm tra E2E; sửa các lỗi tìm được (xem 9.2).
- Responsive + trợ năng (tương phản đã tính, bàn phím, ARIA, giảm chuyển động).

## 9.1 Việc tiếp theo (đề xuất theo thứ tự)
| Ưu tiên | Việc | Lý do |
|---|---|---|
| 1 | **Rà soát nội dung bởi giáo viên Aptis/IELTS** (IPA, đáp án gây tranh cãi, độ khó B2 thật) | Nội dung do AI soạn; là rủi ro chất lượng lớn nhất |
| 2 | **Dùng thử với 3–5 người học thật trong vài ngày**, đo C1–C5 | Xác nhận thang xác suất B2 và độ dài nhiệm vụ |
| 3 | Kiểm trên Safari/Firefox/Android/iOS (TTS, ghi âm, LocalStorage) | Chỉ mới kiểm Chromium |
| 4 | Hiệu chỉnh ngưỡng CEFR, σ, hệ số tự chấm 0,9 theo dữ liệu thật | Hiện là giả định |
| 5 | Mở rộng ngân hàng: Reading 10+ bộ/dạng, Listening 30+ bài, Writing 8+ đề/task | Tránh lặp đề khi làm 3 Mock |
| 6 | Thêm audio người thật cho Listening (file cục bộ) | Sát đề thật hơn TTS |

## 9.2 Lỗi tìm thấy khi kiểm thử và đã sửa (bài học)
| Lỗi | Phát hiện bởi | Sửa |
|---|---|---|
| `Element.append(undefined)` in chữ "undefined" lên giao diện | Ảnh chụp E2E | Vá tập trung ở `h.js` |
| `store.update` thay cả khối khi callback trả về giá trị (làm hỏng SRS) | Rà mã khi viết quiz từ vựng, có test | `update` bỏ qua giá trị trả về |
| `router.go` vẽ trang hai lần khi hash đổi | Rà mã | Chỉ tự vẽ khi hash không đổi |
| Trang cuộn ngang trên điện thoại ở /mock, /analytics | E2E mobile | `minmax(0,1fr)` cho lưới + bảng cuộn trong khung |
| Nút "Thoát chế độ tập trung" luôn hiện | Ảnh chụp | Tăng độ ưu tiên selector |
| 9 từ vựng trùng giữa các nhóm | Validator | Giữ ở nhóm hợp nhất, xoá ở nhóm kia |
| Enter ở câu cuối chế độ thi tự nộp bài | Rà mã | Chỉ chuyển câu, nộp phải bấm nút |

## 9.3 Ước tính công cho phần còn lại
Rà nội dung (1–2 tuần giáo viên) · dùng thử + hiệu chỉnh (1 tuần) · kiểm trình duyệt/thiết bị (2–3 ngày) · mở rộng ngân hàng (tuỳ nguồn lực soạn đề).
