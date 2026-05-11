# 📸 Image Upload Guide — Wikicat Landing Page

Upload your images to the `public/images/` folder in this repo.
Each placeholder in the code has a comment like `=== IMAGE PLACEHOLDER ===` telling you exactly which file to upload.

---

## Required Images

### 1. Logo — Used in: Header, About section, Footer
- **File path:** `public/images/logo.png`
- **Recommended size:** 300 × 100 px
- **Format:** PNG with transparent background
- **Used in components:**
  - `src/components/landing/LandingHeader.tsx` (top-left nav)
  - `src/components/landing/WhatIsWiki.tsx` (centered in About section)
  - `src/components/landing/LandingFooter.tsx` (footer left)

After uploading, replace the placeholder `<div>` in each component with:
```jsx
<img src="/images/logo.png" alt="Wikicat" className="h-10 w-auto" />
```

---

### 2. Logo (White version) — Used in: Mint page header
- **File path:** `public/images/logo-white.png`
- **Recommended size:** 200 × 60 px
- **Format:** PNG with transparent background (white/light colored logo for dark header)
- **Used in component:** `src/components/Header.tsx`

After uploading, replace in `src/components/Header.tsx`:
```jsx
<img src="/images/logo-white.png" alt="Wikicat" className="h-10 w-auto" />
```

---

### 3. Cat Mascot Hero — Used in: Hero section
- **File path:** `public/images/cat-hero.png`
- **Recommended size:** 500 × 500 px
- **Format:** PNG with transparent background
- **Description:** Main Wikicat anime cat character, standing, with coins or decorations
- **Used in component:** `src/components/landing/Hero.tsx`

After uploading, replace the placeholder `<div>` in Hero.tsx with:
```jsx
<img
  src="/images/cat-hero.png"
  alt="Wikicat mascot"
  className="w-72 md:w-96 lg:w-[420px] drop-shadow-2xl animate-float"
/>
```

---

### 4. Coin Stacks — Used in: Hero section
- **File path:** `public/images/coins.png`
- **Recommended size:** 200 × 200 px
- **Format:** PNG with transparent background
- **Description:** Gold WIKI coin stacks, decorative element beside the cat
- **Used in component:** `src/components/landing/Hero.tsx`

After uploading, replace the placeholder `<div>` near bottom-right of the hero mascot area with:
```jsx
<img
  src="/images/coins.png"
  alt="WIKI coins"
  className="absolute -bottom-4 -right-4 w-32 md:w-40 drop-shadow-xl"
/>
```

---

### 5. Cat Ear Decorations (optional) — Used in: Features section
- **File paths:**
  - `public/images/cat-ear-pink.png` — for Fair Launch card
  - `public/images/cat-ear-blue.png` — for Locked Liquidity card
  - `public/images/cat-ear-yellow.png` — for Base Network card
- **Recommended size:** 100 × 80 px each
- **Format:** PNG with transparent background
- **Description:** Anime cat ear decorations that sit on top of feature cards (like wikicatcoin.com)
- **Used in component:** `src/components/landing/Features.tsx`

After uploading, replace the emoji badge div at the top of each card. See comment in `Features.tsx`.

---

### 6. Background Clouds (optional) — Used in: Hero section
- **File path:** `public/images/clouds-bg.png`
- **Recommended size:** 1920 × 400 px
- **Format:** PNG (can have transparent bottom)
- **Description:** Cloud skyline banner for the sky background
- **Used in component:** `src/components/landing/Hero.tsx`

If you have this image, replace the CSS cloud divs in Hero.tsx with:
```jsx
<img src="/images/clouds-bg.png" alt="" className="absolute top-0 left-0 right-0 w-full object-cover opacity-90 pointer-events-none" />
```

---

## How to upload

1. Go to your GitHub repo: https://github.com/nothing010101/wikicat
2. Navigate to the `public/images/` folder (create it if it doesn't exist)
3. Click **Add file → Upload files**
4. Upload your images
5. Commit directly to `main`
6. Vercel will auto-deploy — your images will appear live within ~1 minute

---

## Social Media Links

Update the social media links (`href="#"`) in these files:
- `src/components/landing/Hero.tsx` — Telegram, Twitter/X, TikTok icons
- `src/components/landing/LandingFooter.tsx` — Telegram, Twitter/X icons

Replace `href="#"` with your actual links, e.g.:
- Telegram: `https://t.me/yourgroupname`
- Twitter: `https://twitter.com/wikicatcoin`
- TikTok: `https://tiktok.com/@wikicatcoin`
