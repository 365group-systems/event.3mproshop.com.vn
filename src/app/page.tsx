import Hero from '../components/Hero';
import Agenda from '../components/Agenda';
import Venue from '../components/Venue';

export default function Home() {
  return (
    <main>
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Lịch trình sự kiện */}
      <Agenda />

      {/* 3. Địa điểm & Bản đồ */}
      <Venue />

      {/* 4. Footer thương hiệu */}
      <footer style={{
        padding: '3rem 2rem',
        backgroundColor: '#07080a',
        textAlign: 'center',
        borderTop: '1px solid var(--color-border)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <span style={{ color: 'var(--color-primary)', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1.5px' }}>3M</span>
          <span style={{ color: 'var(--color-border)', fontSize: '1.2rem' }}>|</span>
          <span style={{ fontWeight: 800, fontSize: '1rem', color: '#FFF', letterSpacing: '1.5px' }}>365GROUP</span>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} 365Group. Bảo lưu mọi quyền.
        </p>
      </footer>
    </main>
  );
}
