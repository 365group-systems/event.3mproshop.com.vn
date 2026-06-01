# Phase 06: Testing & Optimization

Status: ✅ Complete
Dependencies: [Phase 05: Integration & Form Submission](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/phase-05-integration.md)

## Objective

Kiểm thử toàn diện ứng dụng về mặt chức năng, giao diện, tối ưu hóa SEO và chạy audit để đảm bảo tốc độ tải trang cực nhanh và điểm Lighthouse cao.

## Requirements

### Functional
- Toàn bộ trang hoạt động trơn tru không lỗi JS.
- Form đăng ký hoạt động đầy đủ trên Chrome, Safari, Firefox.

### Non-Functional
- **Lighthouse Performance Score >= 90**.
- Cấu hình meta tags chuẩn SEO đầy đủ (Tiêu đề, mô tả, open graph images).
- Dung lượng bundle tối ưu.

## Implementation Steps

1. [x] Cấu hình SEO Metadata trong `src/app/page.tsx` hoặc `src/app/layout.tsx` sử dụng Next.js Metadata API.
2. [x] Kiểm tra khả năng responsive trên các kích thước màn hình phổ biến bằng Chrome DevTools.
3. [x] Chạy lệnh `npm run build` để kiểm tra build production và kiểm tra kích thước bundle.
4. [x] Chạy công cụ Lighthouse Audit nội bộ để đo điểm chất lượng trang web.
5. [x] Tối ưu hóa dung lượng hình ảnh (sử dụng Next.js `next/image` hoặc tối ưu hình ảnh tĩnh dạng WebP/AVIF).

## Files to Create/Modify

- `src/app/layout.tsx` - [Modify] Tối ưu hóa SEO Metadata, Thêm Favicon.
- `src/app/page.tsx` - [Modify] Cấu hình Metadata chi tiết.

## Test Criteria

- [x] Kết quả chạy `npm run build` thành công, không có lỗi cảnh báo.
- [x] Chạy thành công Lighthouse Audit đạt kết quả cao ở các mục Performance, Accessibility, Best Practices, SEO.

---

Next Step: [Plan Overview](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/plan.md)
