# Ved Rexine Store — Production Website

**Futuristic, Awwwards-quality Next.js 14 website** for Delhi's premier foam, EVA & mattress supplier since 1967.

Live URL (after deploy): https://vedrexinestore.vercel.app

---

## 🚀 Quick Start (Local)

```bash
# 1. Clone / extract the project
cd ved-rexine-store

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev

# 4. Open browser
open http://localhost:3000
```

---

## ☁️ Deploy to Vercel (2 minutes)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a new GitHub repo
2. Go to https://vercel.com/new
3. Import the repo → Framework: **Next.js** (auto-detected)
4. Click **Deploy**
5. Done! Your site is live.

### Custom Domain
In Vercel dashboard → Settings → Domains → Add:
- `vedrexinestore.vercel.app` (free Vercel subdomain)
- `vrs.vercel.app` (alternate)
- Your own domain (e.g. `vedrexinestore.in`)

---

## 📁 Project Structure

```
ved-rexine-store/
├── public/
│   ├── robots.txt          ← SEO crawl rules
│   ├── sitemap.xml         ← Search engine sitemap
│   ├── manifest.json       ← PWA manifest
│   └── logo.jpg            ← ⚠️ ADD YOUR LOGO HERE
│
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← Root layout + JSON-LD SEO
│   │   ├── globals.css     ← All custom styles, animations
│   │   ├── page.tsx        ← Home page
│   │   ├── about/          ← About page
│   │   ├── products/       ← All 10 products page
│   │   ├── industries/     ← 8 industries page
│   │   ├── gallery/        ← Masonry image gallery
│   │   └── contact/        ← Contact + quote form
│   │
│   └── components/
│       ├── 3d/
│       │   └── HeroScene.tsx     ← Three.js / R3F 3D hero
│       ├── sections/
│       │   ├── Navbar.tsx        ← Floating glass navbar
│       │   ├── Footer.tsx        ← Full footer with marquee
│       │   ├── HeroSection.tsx   ← Animated hero + typewriter
│       │   ├── StatsSection.tsx  ← Animated counters
│       │   ├── ProductsPreview.tsx ← 6-card product grid
│       │   ├── IndustriesSection.tsx ← 6 industry cards
│       │   ├── GalleryPreview.tsx  ← Mosaic gallery
│       │   ├── TestimonialsSection.tsx ← Testimonial slider
│       │   ├── CTASection.tsx    ← Call-to-action section
│       │   └── ContactForm.tsx   ← Quote request form
│       └── ui/
│           ├── CustomCursor.tsx  ← Gold dot cursor
│           └── SmoothScroll.tsx  ← Lenis smooth scroll
│
├── next.config.mjs         ← Image domains, optimization
├── tailwind.config.js      ← Custom colors, animations
├── tsconfig.json
├── vercel.json             ← Vercel headers + caching
└── package.json
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary gold | `#f59e0b` |
| Dark background | `#030305` |
| Display font | Cormorant Garamond |
| Body font | Outfit |
| Mono font | JetBrains Mono |

---

## 🔧 Add Your Logo

Place your `logo.jpg` in the `/public` folder.

Then in `Navbar.tsx`, replace the letter "V" placeholder with:
```tsx
<Image src="/logo.jpg" alt="Ved Rexine Store" width={40} height={40} />
```

---

## 📦 Tech Stack

| Library | Purpose |
|---------|---------|
| Next.js 14 | Framework, SSR, SEO |
| React 18 | UI |
| Tailwind CSS | Styling |
| Three.js + R3F | 3D Hero scene |
| @react-three/drei | 3D helpers |
| Framer Motion | Animations |
| Lenis | Smooth scroll |
| react-intersection-observer | Scroll triggers |
| react-icons | Icons |

---

## 🔍 SEO Features

- ✅ `robots.txt` at `/public/robots.txt`
- ✅ `sitemap.xml` at `/public/sitemap.xml`
- ✅ JSON-LD `LocalBusiness` schema
- ✅ JSON-LD `WebSite` schema
- ✅ Open Graph tags (Facebook/LinkedIn)
- ✅ Twitter Card tags
- ✅ Semantic HTML throughout
- ✅ Canonical URLs
- ✅ Per-page `<title>` and `<description>`
- ✅ `lang="en"` on html tag
- ✅ Image `alt` attributes everywhere
- ✅ Next.js `metadata` API for all pages

---

## ⚡ Performance

- ✅ Dynamic import for Three.js (no SSR weight)
- ✅ `loading="lazy"` on all gallery images
- ✅ Next.js Image with `sizes` and WebP/AVIF
- ✅ Code splitting per route
- ✅ `will-change` + GPU-accelerated CSS
- ✅ Vercel edge CDN (auto with deployment)

---

## 📞 Business Info in Code

To update contact info, search for these strings:
- Phone: `01125720328` and `011-25720328`
- Address: `5888/4 Dev Nagar`
- Location: `Karol Bagh, New Delhi 110005`

---

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, stats, products, industries, gallery, testimonials |
| `/about` | Story, timeline, values |
| `/products` | All 10 products with full specs |
| `/industries` | 8 industries with client counts |
| `/gallery` | Masonry image showcase |
| `/contact` | Quote form + map |

---

Built with ❤️ for **Ved Rexine Store**, Karol Bagh, New Delhi — Est. 1967
