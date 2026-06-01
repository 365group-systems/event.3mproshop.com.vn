# 🎨 DESIGN: Landing Page Event 3M

Ngày tạo: 2026-06-01
Dựa trên kế hoạch: [plan.md](file:///d:/Manh_Cuong/laragon/www/landing-page-event-3m/plans/260601-0948-landing-page-event-3m/plan.md)

---

## 1. Cách Lưu Thông Tin (Database/Storage)

Dự án lưu dữ liệu khách đăng ký vào file JSON cục bộ (`data/registrations.json`). Dưới đây là cấu trúc chi tiết của mỗi bản ghi đăng ký (`Registration`):

```typescript
interface Registration {
  id: string;            // Định dạng: "reg_" + timestamp + random (VD: "reg_1717206583_a3f")
  fullName: string;      // Họ và tên khách mời
  phone: string;         // Số điện thoại liên hệ
  email: string;         // Địa chỉ email (duy nhất)
  company: string;       // Công ty / Cơ quan (tùy chọn)
  registeredAt: string;  // Thời gian đăng ký (ISO 8601, VD: "2026-06-01T02:49:00.000Z")
  qrCodeData: string;    // Dữ liệu mã hóa trong QR code (VD: "3M-EVENT:[id]")
}
```

File lưu trữ sẽ là một mảng các bản ghi:
```json
[
  {
    "id": "reg_1717206583_a3f",
    "fullName": "Nguyễn Văn A",
    "phone": "0901234567",
    "email": "nguyenvana@gmail.com",
    "company": "Công ty ABC",
    "registeredAt": "2026-06-01T02:49:00.000Z",
    "qrCodeData": "3M-EVENT:reg_1717206583_a3f"
  }
]
```

---

## 2. API Contract (Giao tiếp Frontend - Backend)

### API Endpoint: `POST /api/register`

Gửi dữ liệu đăng ký từ Form lên Server.

**Dữ liệu gửi lên (Request Body - JSON):**
```json
{
  "fullName": "Nguyễn Văn A",
  "phone": "0901234567",
  "email": "nguyenvana@gmail.com",
  "company": "Công ty ABC"
}
```

**Phản hồi thành công (Response 200 OK):**
```json
{
  "success": true,
  "message": "Đăng ký thành công!",
  "data": {
    "id": "reg_1717206583_a3f",
    "fullName": "Nguyễn Văn A",
    "email": "nguyenvana@gmail.com",
    "qrCode": "data:image/png;base64,iVBORw0KGgoAAAANS..." // Chuỗi Base64 ảnh QR
  }
}
```

**Phản hồi lỗi dữ liệu trống (Response 400 Bad Request):**
```json
{
  "success": false,
  "error": "Họ tên, email và số điện thoại không được để trống."
}
```

**Phản hồi lỗi trùng lặp (Response 409 Conflict):**
```json
{
  "success": false,
  "error": "Email hoặc số điện thoại này đã được đăng ký tham dự."
}
```

---

## 3. Cấu Trúc Giao Diện & Component

Landing Page được thiết kế dưới dạng Single-page App (SPA) với các component chính sau:

```
src/
├── app/
│   ├── layout.tsx                # Chứa HTML bao quanh, Google Fonts
│   ├── page.tsx                  # Trang chủ, chứa toàn bộ các section
│   └── api/
│       └── register/
│           └── route.tsx         # Backend API xử lý đăng ký
├── components/
│   ├── Hero.tsx                  # Banner chính, Tiêu đề sự kiện, CTA button
│   ├── Invitation.tsx            # Lời chào, hình ảnh CEO Bùi Hùng Việt
│   ├── Agenda.tsx                # Timeline các bước sự kiện khai trương
│   ├── Venue.tsx                 # Địa chỉ, bản đồ Google Maps
│   ├── RegistrationForm.tsx      # Form nhập liệu
│   └── SuccessModal.tsx          # Popup hiển thị QR Code check-in
└── styles/
    ├── globals.css               # Reset CSS, các CSS variables chủ đạo
    ├── Hero.module.css
    ├── Invitation.module.css
    ├── Agenda.module.css
    ├── Venue.module.css
    ├── Form.module.css
    └── SuccessModal.module.css
```

---

## 4. Luồng Hoạt Động (User Journey)

### Kịch bản chính: Đăng ký nhận vé QR Code
1. Khách truy cập vào trang landing page.
2. Đọc thông tin sự kiện (thời gian, địa điểm, agenda khai trương).
3. Click nút **"Đăng ký ngay"** ở Hero section -> Tự động trượt mượt (scroll) xuống Form đăng ký.
4. Điền đầy đủ thông tin: Họ tên, Email, SĐT, Công ty.
5. Click **"Gửi thông tin"**:
   - Hiện trạng thái đang gửi (loading spinner trên nút).
   - API trả về thành công kèm chuỗi QR Code Base64.
6. Hiển thị Popup thành công (`SuccessModal`) chặn màn hình chính:
   - Hiển thị QR Code rõ ràng.
   - Hướng dẫn khách chụp màn hình để check-in tại sự kiện.

---

## 5. Kịch Bản Kiểm Thử (Test Cases)

### TC-01: Đăng ký thành công (Happy Path)
- **Given**: Khách mở trang Landing Page, cuộn xuống Form.
- **When**: Nhập đầy đủ thông tin hợp lệ (tên, SĐT chưa đăng ký, email chưa đăng ký) và bấm "Gửi thông tin".
- **Then**: 
  - Hệ thống phản hồi thành công.
  - Hiện popup cám ơn kèm mã QR hiển thị rõ nét.
  - File `data/registrations.json` xuất hiện thêm dòng thông tin đăng ký của khách.

### TC-02: Bỏ trống thông tin bắt buộc (Validation Error)
- **Given**: Khách mở form đăng ký.
- **When**: Để trống ô Họ tên hoặc Email, bấm "Gửi thông tin".
- **Then**:
  - Hệ thống không gửi request hoặc API trả về lỗi `400`.
  - Hiển thị thông báo lỗi màu đỏ ngay dưới ô nhập liệu hoặc báo alert: "Vui lòng nhập đầy đủ thông tin".

### TC-03: Nhập sai định dạng Email / Số điện thoại
- **Given**: Khách nhập form.
- **When**: Nhập email không hợp lệ (VD: "nguyenvana") hoặc SĐT không phải số (VD: "abc12345"), bấm gửi.
- **Then**:
  - Hiện lỗi báo sai định dạng dữ liệu, không cho phép submit lên server.

### TC-04: Đăng ký trùng lặp (Duplicate Entry)
- **Given**: Khách mời đã đăng ký trước đó với email `test@test.com`.
- **When**: Khách khác (hoặc chính khách đó) dùng lại email `test@test.com` để đăng ký lại.
- **Then**:
  - Nút submit báo lỗi hoặc hiện thông báo: "Email hoặc số điện thoại này đã được đăng ký tham dự".
  - Không hiện popup QR Code mới.
