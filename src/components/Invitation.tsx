import Image from 'next/image';
import styles from '../styles/Invitation.module.css';

export default function Invitation() {
  return (
    <section className={styles.invitationSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Lời chào từ <span>Ban Tổ Chức</span>
        </h2>

        <div className={`${styles.card} glass-panel`}>
          {/* Portrait Image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/ceo-viet-bui.png"
              alt="Ông Bùi Hùng Việt - CEO & Founder 365Group"
              fill
              sizes="(max-width: 900px) 280px, 320px"
              className={styles.avatar}
            />
          </div>

          {/* Letter Content */}
          <div className={styles.messageContent}>
            <h3 className={styles.salutation}>Kính gửi Quý Đối tác & Quý Khách hàng,</h3>
            
            <div className={styles.letterBody}>
              <p>
                Lời đầu tiên, thay mặt Ban lãnh đạo <strong>365Group</strong> và toàn thể đội ngũ, tôi xin gửi lời chúc sức khỏe và lời chào trân trọng nhất đến Quý vị.
              </p>
              <p>
                Sự ra đời của <strong>3M Pro Shop & 3M Training Center</strong> đánh dấu một cột mốc quan trọng trong sự hợp tác chiến lược giữa 365Group và tập đoàn 3M toàn cầu. Đây không chỉ là nơi giới thiệu các giải pháp chăm sóc xe cao cấp nhất, mà còn là trung tâm đào tạo tay nghề tiêu chuẩn quốc tế cho đội ngũ kỹ thuật viên tại Việt Nam.
              </p>
              <p>
                Sự hiện diện của Quý vị tại Lễ Khai Trương chính là niềm vinh hạnh lớn lao và là nguồn động viên to lớn để chúng tôi vững bước phát triển trên chặng đường sắp tới.
              </p>
              <p>
                Rất hân hạnh được đón tiếp Quý vị!
              </p>
            </div>

            {/* Signature */}
            <div className={styles.signatureArea}>
              <div className={styles.name}>Ông Bùi Hùng Việt</div>
              <div className={styles.role}>CEO & Founder 365Group</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
