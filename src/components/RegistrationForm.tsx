'use client';

import { useState } from 'react';
import styles from '../styles/Form.module.css';

interface RegistrationFormProps {
  onSuccess: (data: { fullName: string; qrCode: string }) => void;
}

export default function RegistrationForm({ onSuccess }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    company: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState(false);

  // Xử lý thay đổi input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error khi gõ lại
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
    setGeneralError('');
  };

  // Kiểm tra tính hợp lệ ở client trước khi gửi lên API
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PHONE_REGEX = /^(0|84)[3|5|7|8|9][0-9]{8}$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Họ và tên là bắt buộc.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Số điện thoại là bắt buộc.';
    } else if (!PHONE_REGEX.test(formData.phone.trim())) {
      newErrors.phone = 'Số điện thoại không hợp lệ (ví dụ: 0912345678).';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email là bắt buộc.';
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = 'Địa chỉ email không đúng định dạng.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gửi Form đăng ký
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGeneralError('');

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const resBody = await response.json();

      if (!response.ok) {
        setGeneralError(resBody.error || 'Có lỗi xảy ra, vui lòng thử lại.');
        setLoading(false);
        return;
      }

      // Thành công -> Trả kết quả về trang chủ để mở Modal
      onSuccess({
        fullName: resBody.data.fullName,
        qrCode: resBody.data.qrCode,
      });

      // Clear form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        company: '',
      });
      
    } catch (err) {
      console.error(err);
      setGeneralError('Không thể kết nối đến máy chủ. Vui lòng kiểm tra mạng.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register-form" className={styles.formSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Đăng ký <span>Tham dự</span>
        </h2>
        <p className={styles.subtitle}>
          Vui lòng cung cấp đầy đủ thông tin bên dưới để Ban tổ chức gửi mã QR xác nhận.
        </p>

        <div className={`${styles.card} glass-panel`}>
          <form onSubmit={handleSubmit}>
            {/* Lỗi chung từ API */}
            {generalError && <div className={styles.generalError}>{generalError}</div>}

            {/* Họ tên */}
            <div className={styles.formGroup}>
              <label htmlFor="fullName" className={styles.label}>
                Họ và tên <span>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Nguyễn Văn A"
                value={formData.fullName}
                onChange={handleChange}
                disabled={loading}
                className={styles.input}
              />
              {errors.fullName && <span className={styles.errorMessage}>{errors.fullName}</span>}
            </div>

            {/* Số điện thoại */}
            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>
                Số điện thoại <span>*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="0912345678"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
                className={styles.input}
              />
              {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Địa chỉ Email <span>*</span>
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="nguyenvana@gmail.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                className={styles.input}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
            </div>

            {/* Tên công ty */}
            <div className={styles.formGroup}>
              <label htmlFor="company" className={styles.label}>
                Đơn vị / Công ty tác nghiệp
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Công ty ABC"
                value={formData.company}
                onChange={handleChange}
                disabled={loading}
                className={styles.input}
              />
            </div>

            {/* Nút gửi */}
            <button type="submit" disabled={loading} className={styles.submitBtn}>
              {loading ? (
                <>
                  <div className={styles.spinner}></div>
                  Đang xử lý thông tin...
                </>
              ) : (
                'Gửi thông tin đăng ký'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
