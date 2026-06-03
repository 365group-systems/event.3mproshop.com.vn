import Hero from "@/components/Hero";
import Venue from "@/components/Venue";

export default function Home() {
  return (
    <main className="bg-[#0F0F0F] text-white font-sans min-h-screen">
      <Hero />

      {/* Timeline Section */}
      <section id="agenda" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest inline-block border-b-2 border-[#FF0000] pb-2">
              Kịch Bản Chương Trình
            </h2>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#333333] md:-translate-x-1/2"></div>

            {/* Event 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-28 w-full group">
              <div className="order-1 md:order-1 md:w-5/12 w-full pl-16 md:pl-0 pr-0 md:pr-12 text-left md:text-right">
                <div className="text-[#FF0000] text-xl md:text-2xl font-bold mb-2 tracking-wide">16:00 - 18:00</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Check-in & Trải Nghiệm</h3>
                <ul className="text-gray-400 space-y-3 md:inline-block text-left md:text-right text-[15px] md:text-base leading-relaxed">
                  <li>Đón khách, PG hỗ trợ check-in Photobooth</li>
                  <li>Khách mời giao lưu và dùng Teabreak</li>
                  <li><span className="text-white font-semibold">Zone 1:</span> Chuẩn trải nghiệm (Test PPF, Phim cách nhiệt)</li>
                  <li><span className="text-white font-semibold">Zone 2:</span> Chuẩn thi công (Dán Wrap 2080 & PPF 200 Gloss trên xe thật)</li>
                  <li>Host 3M chia sẻ điểm nổi bật của sản phẩm</li>
                </ul>
              </div>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-5 h-5 bg-[#FF0000] rounded-full shadow-[0_0_15px_rgba(255,0,0,0.8)] border-[4px] border-[#0F0F0F] z-10 transition-transform duration-300 group-hover:scale-125"></div>
              {/* Premium Gradient Card */}
              <div className="order-2 md:order-3 md:w-5/12 w-full pl-16 md:pl-12 mt-6 md:mt-0">
                <div className="rounded-2xl overflow-hidden border border-[#333333] bg-[#1A1A1A] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)] group-hover:border-[#FF0000]/50 transition-colors duration-500">
                  <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#2a0000]/80 to-[#0d0d0d]/90 flex flex-col justify-between p-6 border border-[#FF0000]/20">
                    <img 
                      src="/images/extracted/page_5_img_1.jpeg" 
                      alt="Check-in Area 3D" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 pointer-events-none" 
                    />
                    <div className="flex justify-between items-start z-10">
                      <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-full border border-[#FF0000]/20 font-semibold">Zone 1 & 2</span>
                      <span className="text-[#D4AF37] font-bold text-[10px] md:text-xs">3M EXPERIENCE</span>
                    </div>
                    <div className="space-y-2 z-10">
                      <h4 className="text-lg md:text-xl font-extrabold text-white tracking-wide uppercase">Khu Vực Trải Nghiệm</h4>
                      <p className="text-xs text-gray-400">Trực tiếp test các dòng phim cách nhiệt & PPF cao cấp của 3M</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 2 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 md:mb-28 w-full group">
              <div className="order-1 md:order-3 md:w-5/12 w-full pl-16 md:pl-12 text-left">
                <div className="text-[#FF0000] text-xl md:text-2xl font-bold mb-2 tracking-wide">18:00 - 19:00</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Lễ Khai Trương</h3>
                <ul className="text-gray-400 space-y-3 text-[15px] md:text-base leading-relaxed">
                  <li>Biểu diễn tiết mục khai mạc: Múa &quot;Hello Việt Nam&quot;</li>
                  <li>Đại diện 365Group & 3M Global phát biểu</li>
                  <li>Trống hội & Múa lân khai trương</li>
                  <li>Nghi thức <span className="text-white font-semibold">Cắt băng khai trương</span></li>
                  <li>Trao giấy chứng nhận 3M Pro Shop & VPĐD</li>
                  <li>Chia sẻ dòng Film cách nhiệt Ceramic NR mới</li>
                </ul>
              </div>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-5 h-5 bg-[#FF0000] rounded-full shadow-[0_0_15px_rgba(255,0,0,0.8)] border-[4px] border-[#0F0F0F] z-10 transition-transform duration-300 group-hover:scale-125"></div>
              {/* Premium Gradient Card */}
              <div className="order-2 md:order-1 md:w-5/12 w-full pl-16 md:pl-0 pr-0 md:pr-12 mt-6 md:mt-0">
                <div className="rounded-2xl overflow-hidden border border-[#333333] bg-[#1A1A1A] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)] group-hover:border-[#FF0000]/50 transition-colors duration-500">
                  <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden bg-gradient-to-bl from-[#2a0000]/80 to-[#0d0d0d]/90 flex flex-col justify-between p-6 border border-[#FF0000]/20">
                    <img 
                      src="/images/extracted/page_7_img_1.jpeg" 
                      alt="Main Stage 3D" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 pointer-events-none" 
                    />
                    <div className="flex justify-between items-start z-10">
                      <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-full border border-[#FF0000]/20 font-semibold">Chính thức</span>
                      <span className="text-[#D4AF37] font-bold text-[10px] md:text-xs">GRAND CEREMONY</span>
                    </div>
                    <div className="space-y-2 z-10">
                      <h4 className="text-lg md:text-xl font-extrabold text-white tracking-wide uppercase">Nghi Thức Khai Trương</h4>
                      <p className="text-xs text-gray-400">Cắt băng khánh thành & trao chứng nhận chính thức từ 3M Global</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
              <div className="order-1 md:order-1 md:w-5/12 w-full pl-16 md:pl-0 pr-0 md:pr-12 text-left md:text-right">
                <div className="text-[#FF0000] text-xl md:text-2xl font-bold mb-2 tracking-wide">19:00 - 20:00</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Tiệc & Bốc Thăm</h3>
                <ul className="text-gray-400 space-y-3 md:inline-block text-left md:text-right text-[15px] md:text-base leading-relaxed">
                  <li>Khai tiệc & Giao lưu</li>
                  <li>Tiết mục Band nhạc (Violon, Saxophone, Guitar)</li>
                  <li>Bốc thăm trúng thưởng tài trợ từ 3M:</li>
                  <li><span className="text-[#FF0000] font-bold border border-[#FF0000]/30 bg-[#FF0000]/10 px-3 py-1 rounded-full inline-block mt-1">1 Cuộn Film Cách Nhiệt BLK 15</span></li>
                  <li><span className="text-[#FF0000] font-bold border border-[#FF0000]/30 bg-[#FF0000]/10 px-3 py-1 rounded-full inline-block mt-1">1 Cuộn Film Cách Nhiệt BLK 40</span></li>
                  <li className="pt-2"><span className="text-white font-semibold">20:00:</span> Bế mạc chương trình</li>
                </ul>
              </div>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 top-1 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-5 h-5 bg-[#FF0000] rounded-full shadow-[0_0_15px_rgba(255,0,0,0.8)] border-[4px] border-[#0F0F0F] z-10 transition-transform duration-300 group-hover:scale-125"></div>
              {/* Premium Gradient Card */}
              <div className="order-2 md:order-3 md:w-5/12 w-full pl-16 md:pl-12 mt-6 md:mt-0">
                <div className="rounded-2xl overflow-hidden border border-[#333333] bg-[#1A1A1A] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.5)] group-hover:border-[#FF0000]/50 transition-colors duration-500">
                  <div className="relative aspect-[3/2] w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#2a0000]/80 to-[#0d0d0d]/90 flex flex-col justify-between p-6 border border-[#FF0000]/20">
                    <img 
                      src="/images/extracted/page_8_img_1.jpeg" 
                      alt="Gala Dining Area 3D" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 pointer-events-none" 
                    />
                    <div className="flex justify-between items-start z-10">
                      <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#FF0000] bg-[#FF0000]/10 px-2.5 py-1 rounded-full border border-[#FF0000]/20 font-semibold">Gala Dinner</span>
                      <span className="text-[#D4AF37] font-bold text-[10px] md:text-xs">LUCKY DRAW</span>
                    </div>
                    <div className="space-y-2 z-10">
                      <h4 className="text-lg md:text-xl font-extrabold text-white tracking-wide uppercase">Tiệc Tối & Quà Tặng VIP</h4>
                      <p className="text-xs text-gray-400">Giao lưu tiệc mặn cùng chương trình bốc thăm may mắn trúng cuộn phim 3M</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

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
          <span style={{ fontWeight: 800, fontSize: '1rem', color: '#FFF', letterSpacing: '1.5px' }}>PROSHOP</span>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} 3M Pro Shop. Bảo lưu mọi quyền.
        </p>
      </footer>
    </main>
  );
}
