export interface Registration {
  id: string;            // Định dạng: "reg_" + timestamp + random (VD: "reg_1717206583_a3f")
  fullName: string;      // Họ và tên khách mời
  phone: string;         // Số điện thoại liên hệ
  email: string;         // Địa chỉ email (duy nhất)
  company: string;       // Công ty / Cơ quan (tùy chọn)
  registeredAt: string;  // Thời gian đăng ký (ISO 8601, VD: "2026-06-01T02:49:00.000Z")
  qrCodeData: string;    // Dữ liệu mã hóa trong QR code (VD: "3M-EVENT:[id]")
}
