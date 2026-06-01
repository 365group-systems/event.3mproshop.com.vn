# Phase 04: Frontend UI Components

Status: ✅ Complete
Dependencies: [Phase 01: Setup Environment](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/phase-01-setup.md)

## Objective

Phát triển các component giao diện thuần CSS (Vanilla CSS & CSS Modules) tạo nên giao diện Landing Page tối sang trọng, phản ánh đúng tinh thần của ảnh thiết kế thư mời.

## Requirements

### Functional
- Các section trên trang hiển thị đúng cấu trúc và nội dung:
  - Hero (Banner xe, tiêu đề chính, thời gian địa điểm tóm tắt, nút Đăng ký).
  - Lời mời từ CEO Bùi Hùng Việt (ảnh đại diện, nội dung thư mời trang trọng).
  - Agenda (timeline lịch trình các bước mượt mà).
  - Venue (thông tin tòa nhà, bản đồ nhúng).
  - Form đăng ký (các ô nhập liệu thiết kế kính mờ Glassmorphism, nút submit bắt mắt).
  - Footer (Logo 3M, 365Group).

### Non-Functional
- **Responsive tuyệt đối**: Đẹp trên mọi màn hình di động, máy tính bảng và desktop.
- Thiết kế cao cấp (Premium Aesthetics): Sử dụng phông chữ Outfit/Inter từ Google Fonts, màu đỏ 3M (#FF0000 / #E60000), màu tối sâu (#0A0A0A, #121212) và hiệu ứng chuyển màu (gradients) mượt mà.

## Implementation Steps

1. [x] Cấu hình Google Font (Inter hoặc Outfit) trong `src/app/layout.tsx`.
2. [x] Thiết kế và tạo các CSS Modules:
   - `src/styles/Hero.module.css`
   - `src/styles/Invitation.module.css`
   - `src/styles/Agenda.module.css`
   - `src/styles/Venue.module.css`
   - `src/styles/Form.module.css`
3. [x] Xây dựng các UI Components tương ứng:
   - `src/components/Hero.tsx`
   - `src/components/Invitation.tsx`
   - `src/components/Agenda.tsx`
   - `src/components/Venue.tsx`
   - `src/components/RegistrationForm.tsx`
4. [x] Tạo trang chính `src/app/page.tsx` và import toàn bộ các Section vào theo thứ tự bố cục.

## Files to Create/Modify

- `src/app/layout.tsx` - [Modify] Nạp Google Fonts và global style.
- `src/app/page.tsx` - [Modify] Kết hợp các section lại thành trang đơn hoàn chỉnh.
- [x] Các file CSS Modules và component file trong `src/styles/` và `src/components/`.

## Test Criteria

- [x] Xem trang hiển thị trên trình duyệt và kiểm tra độ responsive bằng Inspect Element (Mobile view).
- [x] Xác nhận không có lỗi layout vỡ hoặc tràn chiều ngang (no horizontal scrollbar).

---

Next Phase: [Phase 05: Integration & Form Submission](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/phase-05-integration.md)
