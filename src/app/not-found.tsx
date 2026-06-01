import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#0B0C10',
      color: '#ffffff',
      padding: '2rem',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        backgroundColor: 'rgba(22, 24, 30, 0.75)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '3rem 2rem',
        maxWidth: '480px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }}>
        <h2 style={{
          color: '#E60000',
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          lineHeight: 1
        }}>
          404
        </h2>
        <h3 style={{
          fontSize: '1.4rem',
          marginBottom: '1rem'
        }}>
          Không tìm thấy trang
        </h3>
        <p style={{
          color: '#A0A5B5',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          Đường dẫn bạn truy cập không tồn tại hoặc đã được thay đổi. Vui lòng quay lại Trang chủ sự kiện.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            backgroundColor: '#E60000',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '0.8rem 2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          Quay lại Trang chủ
        </Link>
      </div>
    </main>
  );
}
