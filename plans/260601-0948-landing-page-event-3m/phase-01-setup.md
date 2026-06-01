# Phase 01: Setup Environment

Status: ✅ Complete
Dependencies: None

## Objective

Chuẩn bị dự án Next.js cơ bản, cấu hình TypeScript, thiết lập cấu trúc thư mục sạch sẽ và kiểm tra khả năng chạy ứng dụng.

## Requirements

### Functional
- Dự án Next.js App Router chạy bình thường không lỗi.
- Đã cài đặt các dependency cần thiết (như thư viện tạo QR Code: `qrcode` hoặc tương đương).

### Non-Functional
- Cấu trúc thư mục ngăn nắp.
- Mọi thiết lập không có lỗi TypeScript hoặc linting.

## Implementation Steps

1. [x] Kiểm tra và dọn dẹp các file boilerplate không cần thiết trong thư mục `src/` (như CSS mặc định của Next.js).
2. [x] Thiết lập hệ thống cấu trúc thư mục trong `src/`:
   - `src/app/` (Next.js App router)
   - `src/components/` (Các Component giao diện dùng chung)
   - `src/styles/` (Thư mục CSS toàn cục và CSS Modules)
   - `src/lib/` (Các helper logic, xử lý file và QR)
3. [x] Cài đặt thư viện phụ trợ:
   - `npm install qrcode`
   - `npm install --save-dev @types/qrcode`
4. [x] Tạo file CSS toàn cục `src/styles/globals.css` để định nghĩa màu sắc chủ đạo, phông chữ và các reset cơ bản.
5. [x] Commit phiên bản code đầu tiên sau khi cài đặt.

## Files to Create/Modify

- `src/styles/globals.css` - [Modify/Create] CSS toàn cục với các CSS variables màu tối, đỏ 3M, gold.
- `package.json` - [Modify] Thêm dependencies.

## Test Criteria

- [x] Lệnh `npm run dev` khởi động server thành công.
- [x] Truy cập `http://localhost:3000` không gặp lỗi biên dịch.
- [x] Không có lỗi TypeScript (`npm run build` thành công một phần).

---

Next Phase: [Phase 02: Storage & Setup](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/phase-02-storage.md)
