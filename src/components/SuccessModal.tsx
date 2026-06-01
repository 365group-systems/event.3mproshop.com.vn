'use client';

import Image from 'next/image';
import styles from '../styles/SuccessModal.module.css';

interface SuccessModalProps {
  fullName: string;
  qrCodeUrl: string;
  onClose: () => void;
}

export default function SuccessModal({ fullName, qrCodeUrl, onClose }: SuccessModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={`${styles.modal} glass-panel`}>
        {/* Success Icon */}
        <div className={styles.successIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        {/* Header */}
        <h3 className={styles.title}>Đăng ký thành công!</h3>

        {/* Message */}
        <p className={styles.message}>
          Xin chúc mừng <strong>{fullName}</strong>, Ban tổ chức đã nhận được thông tin đăng ký tham dự sự kiện của bạn.
        </p>

        {/* QR Code Container */}
        <div className={styles.qrContainer}>
          <img
            src={qrCodeUrl}
            alt="Mã QR Code Check-in"
            className={styles.qrImage}
          />
        </div>

        {/* Instruction Alert */}
        <div className={styles.instructions}>
          💡 <strong>QUAN TRỌNG:</strong> Hãy <strong>chụp màn hình</strong> mã QR này và xuất trình tại quầy đón khách sự kiện để check-in nhanh chóng.
        </div>

        {/* Close Button */}
        <button onClick={onClose} className={styles.btnClose}>
          Đóng cửa sổ
        </button>
      </div>
    </div>
  );
}
