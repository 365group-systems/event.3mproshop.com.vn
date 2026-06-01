'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log lỗi để theo dõi
    console.error('Unhandled app error:', error);
  }, [error]);

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
          fontSize: '1.8rem',
          marginBottom: '1rem'
        }}>
          Đã xảy ra sự cố!
        </h2>
        <p style={{
          color: '#A0A5B5',
          fontSize: '0.95rem',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          Rất tiếc, đã có lỗi phát sinh trong quá trình tải trang. Vui lòng thử tải lại trang hoặc liên hệ Ban tổ chức nếu sự cố tiếp diễn.
        </p>
        <button
          onClick={() => reset()}
          style={{
            backgroundColor: '#E60000',
            color: '#ffffff',
            border: 'none',
            padding: '0.8rem 2rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff1a1a'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E60000'}
        >
          Tải lại trang
        </button>
      </div>
    </main>
  );
}
