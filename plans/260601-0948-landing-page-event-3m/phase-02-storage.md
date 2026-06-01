# Phase 02: Storage & Setup

Status: ✅ Complete
Dependencies: [Phase 01: Setup Environment](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/phase-01-setup.md)

## Objective

Xây dựng cơ chế lưu trữ dữ liệu đăng ký của khách tham dự sự kiện dưới dạng file JSON nội bộ (`data/registrations.json`) để lưu vết mà không cần cài đặt cơ sở dữ liệu cồng kềnh.

## Requirements

### Functional
- Tạo được thư mục `data/` và tự động khởi tạo file `registrations.json` nếu chưa tồn tại.
- Định nghĩa kiểu dữ liệu TypeScript cho bản ghi khách mời (`Registration`).
- Tạo hàm lưu mới và đọc danh sách khách hàng tham dự.

### Non-Functional
- An toàn luồng dữ liệu (đồng thời ghi không làm hỏng file).
- Không để lộ file dữ liệu ra ngoài môi trường public của web.

## Implementation Steps

1. [x] Tạo thư mục `data` ở thư mục gốc của dự án.
2. [x] Viết kiểu dữ liệu TypeScript `Registration` trong `src/lib/types.ts`:
   - `id`: string (UUID hoặc timestamp)
   - `fullName`: string
   - `phone`: string
   - `email`: string
   - `company`: string
   - `registeredAt`: string (ISO date string)
   - `qrCodeData`: string (Dữ liệu mã hóa cho QR code check-in)
3. [x] Viết helper lưu trữ `src/lib/storage.ts`:
   - Hàm `getRegistrations()` đọc từ `data/registrations.json`.
   - Hàm `saveRegistration(data)` để ghi thêm bản ghi mới.
   - Thêm cơ chế lock hoặc sync đơn giản để tránh xung đột ghi file đồng thời.

## Files to Create/Modify

- [x] `src/lib/types.ts` - Định nghĩa cấu trúc Registration.
- [x] `src/lib/storage.ts` - Hàm đọc/ghi dữ liệu JSON.
- [x] `data/.gitkeep` - Giữ thư mục data trống trên git.

## Test Criteria

- [x] Viết một đoạn test script nhỏ chạy bằng Node (`node scratch/test-storage.js`) kiểm tra việc ghi thêm 1 guest và đọc ra thành công.

---

Next Phase: [Phase 03: Backend API (Registration & QR)](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/phase-03-backend.md)
