"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import styles from "../styles/EventGate.module.css";

const LAUNCH_DATE = "2026-06-20T00:00:00+07:00";
const launchTime = new Date(LAUNCH_DATE).getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const distance = Math.max(launchTime - Date.now(), 0);

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

function isLaunched() {
  return Date.now() >= launchTime;
}

function CountdownUnit({
  value,
  label,
  accent = false,
}: {
  value: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className={styles.countdownUnit}>
      <span className={accent ? styles.accentValue : styles.value}>
        {String(value).padStart(2, "0")}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function EventGate({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => ({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }));

  useEffect(() => {
    const updateCountdown = () => {
      setOpen(isLaunched());
      setTimeLeft(getTimeLeft());
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  if (open) {
    return children;
  }

  return (
    <main className={styles.page}>
      <div className={styles.background}>
        <Image
          src="/images/showroom-banner.png"
          alt="3M Pro Shop & Training Center"
          fill
          priority
          className={styles.backgroundImage}
        />
      </div>

      <section className={styles.content} aria-labelledby="coming-soon-title">
        <div className={styles.brand}>
          <span className={styles.brand3m}>3M</span>
          <span className={styles.brandDivider}></span>
          <span className={styles.brandProshop}>PROSHOP</span>
        </div>

        <p className={styles.eyebrow}>Grand Opening</p>
        <h1 id="coming-soon-title" className={styles.title}>
          Coming Soon
        </h1>
        <p className={styles.date}>20.06.2026</p>

        <div className={styles.countdown} aria-label="Đồng hồ đếm ngược đến ngày mở trang">
          <CountdownUnit value={timeLeft.days} label="Ngày" />
          <CountdownUnit value={timeLeft.hours} label="Giờ" accent />
          <CountdownUnit value={timeLeft.minutes} label="Phút" />
          <CountdownUnit value={timeLeft.seconds} label="Giây" accent />
        </div>
      </section>
    </main>
  );
}
