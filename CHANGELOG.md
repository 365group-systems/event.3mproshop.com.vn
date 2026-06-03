# Changelog

All notable changes to this project will be documented in this file.

## [2026-06-02]

### Added
- Upgraded the styling setup to **Tailwind CSS v4** alongside existing Vanilla CSS.
- Configured `@tailwindcss/postcss` and added root-relative `@source` scanner directives for app and components folders in `globals.css`.
- Extracted and optimized high-resolution 3D showroom layout assets from the proposal PDF to `public/images/extracted/` via custom Python script.
- Placed real, context-accurate 3D assets in corresponding event timeline components.

### Changed
- Converted countdown timer inside `<Hero />` to utilize client-side mounting state to resolve Next.js SSR hydration errors.
- Adjusted Next.js dev server script to force Webpack configuration (`--webpack`), resolving EPERM filesystem locking crashes under Windows Laragon environments.

## [2026-06-01]

### Added
- Created a premium dark-themed event landing page for the Grand Opening of 3M Pro Shop & 3M Training Center using Next.js App Router (TypeScript + Vanilla CSS).
- Implemented core layout and section components:
  - **Hero**: Premium visual showroom banner, event details, and CTA button.
  - **Agenda**: Sleek vertical timeline detailing step-by-step event activities.
  - **Venue**: Location information and responsive Google Maps embed.
  - **Footer**: Unified branding with official 3M & 365Group logos.
- Generated high-quality visual assets using AI:
  - Showroom hero banner (`public/images/showroom-banner.png`).
  - CEO portrait (`public/images/ceo-viet-bui.png`).
- Generated high-resolution QR Code pointing to the custom subdomain `https://event.3mproshop.com.vn` (`public/images/qr-code-landing-page.png`).
- Initialized local Git repository and pushed codebase to public GitHub repository (`365group-systems/event.3mproshop.com.vn`).
- Configured deployment to Vercel (Hobby plan) and successfully mapped the custom subdomain `event.3mproshop.com.vn` via Cloudflare CNAME.
