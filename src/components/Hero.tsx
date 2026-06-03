"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.css";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    
    const targetDate = new Date("2026-06-20T16:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Image Container */}
      <div className={styles.bgImageContainer}>
        <Image
          src="/images/showroom-banner.png"
          alt="3M Pro Shop & Training Center Showroom Facade"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

      <div className={styles.content}>
        {/* Brand Logos */}
        <div className={styles.brandLogos}>
          <h2 style={{ color: "var(--color-primary)", fontWeight: 900, fontSize: "1.8rem", letterSpacing: "-1px" }}>3M</h2>
          <div className={styles.divider}></div>
          <h2 style={{ fontWeight: 800, fontSize: "1.2rem", color: "#FFF", letterSpacing: "1px" }}>PROSHOP</h2>
        </div>

        {/* Titles */}
        <div className={styles.titleContainer}>
          <span className={styles.subtitle}>Sự kiện khai trương</span>
          <h1 className={styles.mainTitle}>
            Grand Opening <br />
            <span>3M Pro Shop & Training Center</span>
          </h1>
        </div>

        <p className={styles.description}>
          Trân trọng kính mời Quý khách hàng & Đối tác tham dự Lễ Khai Trương chính thức Trung Tâm Đào Tạo và Showroom Dịch Vụ Chăm Sóc Xe Tiêu Chuẩn 3M đầu tiên tại TP. Hồ Chí Minh.
        </p>

        {/* Quick Details Box */}
        <div className={`${styles.eventDetailsBox} glass-panel`}>
          <div className={styles.detailItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <span className={styles.detailLabel}>Thời gian</span>
            <span className={styles.detailValue}>Thứ Bảy, 20.06.2026</span>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <span className={styles.detailLabel}>Khung giờ</span>
            <span className={styles.detailValue}>16:00 - 21:00</span>
          </div>

          <div className={styles.detailItem}>
            <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <span className={styles.detailLabel}>Địa điểm</span>
            <span className={styles.detailValue}>365Group Building, Thủ Đức</span>
          </div>
        </div>

        {/* Countdown Timer */}
        {mounted && (
          <div className="grid grid-cols-4 gap-2 md:gap-3 max-w-sm mx-auto my-6 bg-black/40 backdrop-blur-md p-3 md:p-4 rounded-xl border border-white/5 shadow-[0_0_20px_rgba(255,0,0,0.1)]">
            <div className="flex flex-col items-center p-1.5 md:p-2 rounded-lg bg-gradient-to-b from-white/5 to-transparent border border-white/5">
              <span className="text-xl md:text-2xl font-extrabold text-white font-mono tracking-tight">{String(timeLeft.days).padStart(2, "0")}</span>
              <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-0.5">Ngày</span>
            </div>
            <div className="flex flex-col items-center p-1.5 md:p-2 rounded-lg bg-gradient-to-b from-white/5 to-transparent border border-white/5">
              <span className="text-xl md:text-2xl font-extrabold text-[#FF0000] font-mono tracking-tight">{String(timeLeft.hours).padStart(2, "0")}</span>
              <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-0.5">Giờ</span>
            </div>
            <div className="flex flex-col items-center p-1.5 md:p-2 rounded-lg bg-gradient-to-b from-white/5 to-transparent border border-white/5">
              <span className="text-xl md:text-2xl font-extrabold text-white font-mono tracking-tight">{String(timeLeft.minutes).padStart(2, "0")}</span>
              <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-0.5">Phút</span>
            </div>
            <div className="flex flex-col items-center p-1.5 md:p-2 rounded-lg bg-gradient-to-b from-[#FF0000]/10 to-transparent border border-[#FF0000]/10">
              <span className="text-xl md:text-2xl font-extrabold text-[#FF0000] font-mono tracking-tight">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-0.5">Giây</span>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <a href="#agenda" className={styles.ctaButton}>
          Xem lịch trình sự kiện
        </a>
      </div>
    </section>
  );
}
