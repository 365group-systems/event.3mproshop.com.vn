import styles from '../styles/Venue.module.css';

export default function Venue() {
  const mapQuery = encodeURIComponent('365Group Building, Đường số 3, Hiệp Bình, Thủ Đức, Hồ Chí Minh');
  const googleMapsUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <section className={styles.venueSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Địa điểm <span>& Chỉ đường</span>
        </h2>

        <div className={styles.content}>
          {/* Information Card */}
          <div className={`${styles.infoBox} glass-panel`}>
            <h3 className={styles.locationTitle}>Tòa nhà 365Group Building</h3>
            
            <div className={styles.addressDetails}>
              <div className={styles.infoItem}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div className={styles.infoText}>
                  <span className={styles.label}>Địa chỉ</span>
                  <span className={styles.value}>Tòa nhà 365Group, Đường số 3, Phường Hiệp Bình, TP. Thủ Đức, TP. Hồ Chí Minh, Việt Nam</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <div className={styles.infoText}>
                  <span className={styles.label}>Email liên hệ</span>
                  <span className={styles.value}>info@365group.vn</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div className={styles.infoText}>
                  <span className={styles.label}>Hotline</span>
                  <span className={styles.value}>1900 365 365</span>
                </div>
              </div>
            </div>

            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className={styles.btnDirections}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
              Chỉ đường trên Google Maps
            </a>
          </div>

          {/* Embedded Google Maps */}
          <div className={styles.mapBox}>
            <iframe
              src={googleMapsUrl}
              className={styles.iframeMap}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="365Group Building Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
