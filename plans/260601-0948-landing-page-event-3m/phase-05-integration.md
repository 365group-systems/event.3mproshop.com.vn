# Phase 05: Integration & Form Submission

Status: ✅ Complete
Dependencies: [Phase 03: Backend API (Registration & QR)](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/phase-03-backend.md), [Phase 04: Frontend UI Components](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/phase-04-frontend.md)

## Objective

Kết nối Form đăng ký ở Frontend với API Route Backend. Xử lý các trạng thái tải (Loading), báo lỗi (Error) và hiển thị Popup/Modal thành công hiển thị QR Code để khách mời chụp màn hình lưu lại làm vé check-in.

## Requirements

### Functional
- Gửi yêu cầu đăng ký qua fetch API `/api/register` dạng POST.
- Xử lý trạng thái Loading (vô hiệu hóa nút Submit khi đang gửi dữ liệu).
- Hiển thị thông báo lỗi thân thiện nếu email/SĐT đã tồn tại hoặc dữ liệu không hợp lệ.
- Hiển thị Modal/Popup thành công với giao diện đẹp mắt chứa:
  - Lời cảm ơn trang trọng từ Ban tổ chức.
  - Hình ảnh QR Code Base64 được tạo từ Backend.
  - Hướng dẫn chụp màn hình để check-in tại quầy sự kiện.

### Non-Functional
- Trải nghiệm mượt mà, không giật lag.
- Animation xuất hiện của Modal/Popup nhẹ nhàng và sang trọng.

## Implementation Steps

1. [x] Cấu hình Client-side logic trong `src/components/RegistrationForm.tsx`:
   - State quản lý form input (fullName, phone, email, company).
   - State quản lý trạng thái API (loading, error, successData).
2. [x] Viết hàm `handleSubmit` thực hiện gửi dữ liệu bằng `fetch()`.
3. [x] Xây dựng Modal thành công `src/components/SuccessModal.tsx` nhận data và hiển thị QR Code cùng nút đóng.
4. [x] Nhúng Modal vào trang chính `src/app/page.tsx` và kích hoạt hiển thị khi đăng ký thành công.

## Files to Create/Modify

- `src/components/RegistrationForm.tsx` - [Modify] Kết hợp API và State.
- [x] `src/components/SuccessModal.tsx` - Thiết kế Popup hiển thị QR Code và lời chúc mừng.
- `src/app/page.tsx` - [Modify] Tích hợp modal.

## Test Criteria

- [x] Thực hiện quy trình đăng ký thực tế trên giao diện web.
- [x] Xác nhận popup thành công hiện ra đúng và hiển thị mã QR.
- [x] Kiểm tra xem file `data/registrations.json` có xuất hiện bản ghi mới vừa đăng ký hay không.

---

Next Phase: [Phase 06: Testing & Optimization](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/phase-06-testing.md)
