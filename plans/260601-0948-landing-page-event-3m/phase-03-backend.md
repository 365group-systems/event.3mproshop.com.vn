# Phase 03: Backend API (Registration & QR)

Status: ✅ Complete
Dependencies: [Phase 02: Storage & Setup](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/phase-02-storage.md)

## Objective

Xây dựng Next.js API Route `/api/register` nhận thông tin từ Form đăng ký, kiểm tra tính hợp lệ (validation), lưu vào file JSON, và trả về mã QR Code định dạng Base64 chứa thông tin check-in của khách.

## Requirements

### Functional
- Kiểm tra tính hợp lệ dữ liệu gửi lên (Họ tên, SĐT, Email không được để trống và đúng định dạng).
- Tránh đăng ký trùng lặp (trùng Email hoặc SĐT sẽ báo lỗi).
- Tạo mã QR chứa ID đăng ký dạng URL hoặc chuỗi JSON mã hóa.
- Trả về mã QR dạng Base64 Data URL để frontend hiển thị trực tiếp.

### Non-Functional
- API phản hồi nhanh (latency < 200ms).
- Trả về mã lỗi HTTP phù hợp (400 cho bad request, 409 cho conflict, 200 cho success).

## Implementation Steps

1. [x] Tạo file route API `src/app/api/register/route.ts`.
2. [x] Viết logic validation đầu vào (sử dụng biểu thức regex đơn giản hoặc schema validation cơ bản).
3. [x] Viết logic kiểm tra trùng lặp email/SĐT thông qua helper `getRegistrations()`.
4. [x] Viết hàm generate QR Code base64 bằng thư viện `qrcode`:
   - Dữ liệu mã hóa: `{ id: string, name: string, email: string }` hoặc link check-in.
5. [x] Lưu dữ liệu và trả về kết quả thành công kèm thông tin QR.

## Files to Create/Modify

- [x] `src/app/api/register/route.ts` - Đầu nhận đăng ký và trả về Base64 QR code.

## Test Criteria

- [x] Sử dụng công cụ gọi API hoặc test curl để gửi request POST tới `/api/register` với dữ liệu mẫu.
- [x] Xác nhận API phản hồi thành công và trả về chuỗi `qrCode` hợp lệ.
- [x] Gửi dữ liệu trùng lặp và xác nhận API trả về mã lỗi `409 Conflict`.

---

Next Phase: [Phase 04: Frontend UI Components](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/phase-04-frontend.md)
