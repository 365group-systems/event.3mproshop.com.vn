# Design Specifications - Landing Page Event 3M

Ngày tạo: 2026-06-01
Mục tiêu: Đảm bảo giao diện Landing Page đạt chất lượng thẩm mỹ cao (Premium Dark Theme), đồng nhất về màu sắc, kiểu chữ và bố cục tương thích mọi thiết bị (Responsive).

---

## 🎨 Color Palette (Bảng màu)

| Name | Hex Code | Usage |
|------|----------|-------|
| **Background (Main)** | `#0B0C10` | Nền tối chủ đạo của toàn bộ trang |
| **Surface Dark (Card)** | `rgba(22, 24, 30, 0.75)` | Nền kính mờ (Glassmorphism) cho Agenda, Form, Modal |
| **Accent Red (3M)** | `#E60000` | Màu đỏ chủ đạo của 3M, dùng cho Highlights, Buttons, Icons, Borders |
| **Accent Gold (VIP)** | `#D4AF37` | Màu vàng Gold quý phái cho tên diễn giả VIP / CEO Bùi Hùng Việt |
| **Text Primary** | `#FFFFFF` | Chữ chính màu trắng tinh khiết |
| **Text Secondary** | `#A0A5B5` | Chữ phụ, mô tả, chú thích màu xám nhạt |
| **Border Transparent** | `rgba(255, 255, 255, 0.08)` | Viền thẻ kính mờ siêu nhẹ |

---

## 📝 Typography (Kiểu chữ)

- **Font Family chính:** `'Outfit', sans-serif` (cho các Headings tạo cảm giác hiện đại, công nghệ, sắc sảo)
- **Font Family phụ:** `'Inter', sans-serif` (cho phần body text giúp dễ đọc và mượt mà)

| Element | Font Family | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|-------------|----------------|---------------|--------|-------------|
| **Hero Title** | Outfit | 56px | 32px | 800 (Bold) | 1.1 |
| **Section H2** | Outfit | 36px | 26px | 700 (Bold) | 1.2 |
| **Card Title (H3)** | Outfit | 24px | 20px | 600 (Semi-Bold) | 1.3 |
| **Body text** | Inter | 16px | 15px | 400 (Regular) | 1.6 |
| **Small/Muted** | Inter | 14px | 13px | 400 (Regular) | 1.5 |

---

## 📐 Spacing System (Hệ thống khoảng cách)

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px | Khoảng cách cực nhỏ (như icon và text ngắn) |
| `sm` | 8px | Khoảng cách nhỏ (padding nút, margin dòng) |
| `md` | 16px | Padding mặc định của card, khoảng cách giữa các khối text |
| `lg` | 24px | Padding lớn, khoảng cách giữa các phần trong card |
| `xl` | 48px | Khoảng cách giữa các Section trên Mobile |
| `xxl` | 80px | Khoảng cách giữa các Section trên Desktop |

---

## 🔲 Border Radius & Shadows (Bo góc & Đổ bóng)

- **Bo góc (Border Radius):**
  - Khối/Thẻ kính mờ: `16px`
  - Ô nhập liệu (Inputs) & Nút (Buttons): `8px`
  - Hình ảnh: `12px`
- **Đổ bóng (Shadows):**
  - Glass Card Shadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`
  - Glow Red: `0 0 15px rgba(230, 0, 0, 0.4)` (dùng khi hover nút bấm hoặc viền highlight)

---

## 📱 Responsive & Breakpoints

- **Mobile View (Tiêu chuẩn):** `< 768px` (bố cục dọc 1 cột, menu dọc, padding nhỏ hơn).
- **Tablet View:** `768px` đến `1024px` (bố cục trung gian).
- **Desktop View:** `>= 1025px` (bố cục ngang, lưới nhiều cột, padding rộng rãi).

---

## ✨ Hiệu ứng Chuyển Động (Micro-animations)

1. **Hover Button:**
   ```css
   transition: all 0.3s ease;
   transform: translateY(-2px);
   box-shadow: 0 0 20px rgba(230, 0, 0, 0.6);
   ```
2. **Glass Card Hover:**
   ```css
   transition: transform 0.3s ease, border-color 0.3s ease;
   border-color: rgba(230, 0, 0, 0.3);
   transform: translateY(-4px);
   ```
3. **Smooth Scroll:**
   - Kích hoạt thuộc tính `html { scroll-behavior: smooth; }` để cuộn trang êm ái khi nhấn nút CTA.

---

## 🖼️ Chi tiết Tài sản Hình ảnh (Images)

1. **Showroom Hero Banner (`/images/showroom-banner.png`):**
   - Ảnh chụp showroom 3M Pro Shop & Training Center góc rộng với 4 xe sang đỗ bên dưới. Đã lưu trữ trong thư mục dự án.
2. **CEO Avatar (`/images/ceo-viet-bui.png`):**
   - Ảnh chân dung phong cách chuyên nghiệp của Ông Bùi Hùng Việt. Đã lưu trữ trong thư mục dự án.
