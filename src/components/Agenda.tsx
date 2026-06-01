import styles from '../styles/Agenda.module.css';

export default function Agenda() {
  const steps = [
    {
      time: '16:00 - 17:00',
      title: 'Đón tiếp Khách mời (Guest Reception)',
      desc: 'Đón tiếp đại biểu, đối tác, khách hàng và báo chí truyền thông. Check-in nhận vé QR Code và chụp hình lưu niệm tại backdrop.',
      tag: null,
    },
    {
      time: '17:00 - 18:00',
      title: 'Trải Nghiệm Giải Pháp Bán Hàng 3M & Quy Trình Lắp Đặt Tiêu Chuẩn',
      desc: 'Tham quan showroom dịch vụ chăm sóc xe, tìm hiểu các giải pháp vật liệu tiên tiến từ chuyên gia tập đoàn 3M. Trực tiếp theo dõi quy trình phủ phim cách nhiệt và bảo vệ sơn PPF đạt chuẩn quốc tế.',
      tag: 'Step 1',
    },
    {
      time: '18:00 - 21:00',
      title: 'Lễ Khai Trương Chính Thức 3M Pro Shop & 3M Training Center',
      desc: 'Cắt băng khánh thành trung tâm đào tạo tay nghề kỹ thuật viên 3M. Phát biểu định hướng hợp tác chiến lược, vinh danh đối tác, tiệc tối giao lưu và nhận quà tặng đặc biệt từ ban tổ chức.',
      tag: 'Step 2',
    },
  ];

  return (
    <section id="agenda" className={styles.agendaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Lịch trình <span>Sự kiện</span>
        </h2>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <div key={index} className={styles.timelineItem}>
              {/* Dot marker */}
              <div className={styles.marker}></div>

              {/* Event Card */}
              <div className={`${styles.contentCard} glass-panel`}>
                <div className={styles.time}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  {step.time}
                </div>

                <div className={styles.details}>
                  {step.tag && <span className={styles.stepTag}>{step.tag}</span>}
                  <h3 className={styles.itemTitle}>{step.title}</h3>
                  <p className={styles.itemDesc}>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
