import { NextResponse } from 'next/server';
import { saveRegistration } from '@/lib/storage';
import QRCode from 'qrcode';

// Regex kiểm tra định dạng email đơn giản
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Regex kiểm tra định dạng số điện thoại Việt Nam (84 hoặc 0 + 9, 10 chữ số)
const PHONE_REGEX = /^(0|84)[3|5|7|8|9][0-9]{8}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, company } = body;

    // 1. Kiểm tra trường bắt buộc
    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { success: false, error: 'Họ tên, số điện thoại và email là bắt buộc.' },
        { status: 400 }
      );
    }

    // Trim dữ liệu đầu vào
    const trimmedName = fullName.trim();
    const trimmedPhone = phone.trim();
    const trimmedEmail = email.trim();
    const trimmedCompany = (company || '').trim();

    if (trimmedName === '' || trimmedPhone === '' || trimmedEmail === '') {
      return NextResponse.json(
        { success: false, error: 'Họ tên, số điện thoại và email không được chỉ chứa dấu cách.' },
        { status: 400 }
      );
    }

    // 2. Kiểm tra định dạng Email
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: 'Địa chỉ email không đúng định dạng.' },
        { status: 400 }
      );
    }

    // 3. Kiểm tra định dạng Số điện thoại
    if (!PHONE_REGEX.test(trimmedPhone)) {
      return NextResponse.json(
        { success: false, error: 'Số điện thoại không hợp lệ (ví dụ: 0912345678).' },
        { status: 400 }
      );
    }

    // 4. Thực hiện lưu vào file JSON
    let registration;
    try {
      registration = saveRegistration({
        fullName: trimmedName,
        phone: trimmedPhone,
        email: trimmedEmail,
        company: trimmedCompany,
      });
    } catch (err: any) {
      if (err.message === 'DUPLICATE_ENTRY') {
        return NextResponse.json(
          { success: false, error: 'Email hoặc số điện thoại này đã được đăng ký tham dự.' },
          { status: 409 }
        );
      }
      throw err;
    }

    // 5. Tạo mã QR Code check-in
    // Dùng cấu hình tối ưu để QR rõ đẹp, độ tương phản tốt trên nền tối
    const qrCode = await QRCode.toDataURL(registration.qrCodeData, {
      errorCorrectionLevel: 'H',
      margin: 1,
      width: 300,
      color: {
        dark: '#000000',  // Điểm đen quét dễ
        light: '#FFFFFF', // Nền trắng tương phản tốt
      },
    });

    // 6. Trả về kết quả thành công
    return NextResponse.json(
      {
        success: true,
        message: 'Đăng ký thành công!',
        data: {
          id: registration.id,
          fullName: registration.fullName,
          email: registration.email,
          qrCode,
        },
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('API Register Error:', error);
    return NextResponse.json(
      { success: false, error: 'Có lỗi máy chủ xảy ra. Vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
