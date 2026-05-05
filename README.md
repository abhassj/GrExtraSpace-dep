<div align="center">
  <img src="./public/Favicon.png" alt="GR Extra Space Logo" width="120" />

  # GR Extra Space

  **Building Beyond Boundaries**
  
  <p>
    Fourth-generation builders delivering turnkey construction, container solutions, and bespoke architecture across the United Kingdom and South Africa.
  </p>

  <div>
    <img src="https://img.shields.io/badge/React-18.0-blue?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-11.0-black?style=flat-square&logo=framer" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/SEO-Optimized-success?style=flat-square" alt="SEO Optimized" />
    <img src="https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=flat-square" alt="Status" />
  </div>
</div>

---

## 🌟 Overview

GR Extra Space is a premium, high-performance web application built to showcase an international construction and architectural legacy. The platform features a glassmorphic design language, smooth cinematic animations, and a bespoke interactive world map highlighting the company's global presence.

## ✨ Key Features

- **Premium UI/UX:** High-end aesthetic with custom glassmorphism, brand-aligned color palettes (Navy, Red, Mist, Gold), and micro-interactions.
- **Cinematic Animations:** Powered by Framer Motion for smooth scroll reveals, majestic hero typography, and dynamic component transitions.
- **Interactive Global Map:** A data-driven TopoJSON world map (`react-simple-maps`) showcasing operations in the UK and South Africa with interactive hover states.
- **Bespoke Preloader:** A visually stunning, session-aware splash screen featuring orbital animations and a dynamic progress bar for a premium first impression.
- **Technical Excellence:**
  - ⚡ **Performance:** Route-based code splitting, lazy loading, and intelligent data memoization.
  - 🛡️ **Security:** Hardened with comprehensive `vercel.json` security headers, strict Content-Security-Policy, and XSS protection.
  - 🔍 **SEO:** Full schema markup (JSON-LD), Open Graph integration, dynamic meta tags via `react-helmet-async`, canonical URLs, auto-generated sitemap, and robots.txt.

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Core** | React 18, Vite 5 |
| **Styling** | Tailwind CSS 3 (Vanilla CSS utilities) |
| **Animations** | Framer Motion |
| **Components** | Embla Carousel, Lucide React, React Simple Maps |
| **Routing & SEO** | React Router DOM, React Helmet Async |

## 🚀 Getting Started

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
src/
├── assets/        # Static imagery, brand logos, and media
├── components/    # Reusable UI primitives (Navbar, Footer, ContactCTA)
├── data/          # Centralized content stores (homeContent.js)
├── hooks/         # Custom React hooks (e.g., useGeoData)
├── pages/         # Top-level route components (HomePage, AboutPage)
├── sections/      # Large page segments (HeroSection, MapHeroSection, etc.)
├── App.jsx        # Root component, routing, and preloader dismissal
├── main.jsx       # React entry point with providers
└── index.css      # Global styles and Tailwind directives
```

## 🌐 Deployment & Documentation

The application is configured for seamless deployment on Vercel with Cloudflare integration.

For detailed instructions on connecting custom domains, setting up Google Search Console, configuring Google Analytics 4, and maintaining SEO, refer to the included guide:

📖 **[Deployment & SEO Guide](./docs/DEPLOYMENT_SEO_GUIDE.md)**

---

<div align="center">
  <sub>Made with obsession by <a href="http://www.astraweb.co.in">Astraweb</a></sub>
</div>
