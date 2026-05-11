# 📸 Image Upload Guide — Wikicat Landing Page

Upload your images to the `public/images/` folder.
Each placeholder in the code has a comment like `=== IMAGE PLACEHOLDER ===` telling you exactly which file to upload.

---

## Required Images

### 1. Logo — Header, About section, Footer
- **File:** `public/images/logo.png`
- **Size:** ~300 × 100 px, transparent PNG
- **Used in:**
  - `src/components/landing/LandingHeader.tsx` → replace the dashed div, use: `<img src="/images/logo.png" alt="Wikicat" className="h-10 w-auto" />`
  - `src/components/landing/WhatIsWiki.tsx` → replace the dashed div, use: `<img src="/images/logo.png" alt="Wikicat" className="h-20 w-auto mx-auto mb-8" />`
  - `src/components/landing/LandingFooter.tsx` → replace the dashed div, use: `<img src="/images/logo.png" alt="Wikicat" className="h-12 w-auto" />`

---

### 2. Logo (White/light version) — Mint page header
- **File:** `public/images/logo-white.png`
- **Size:** ~200 × 60 px, transparent PNG, white colored
- **Used in:** `src/components/Header.tsx`
- Replace the logo section with: `<img src="/images/logo-white.png" alt="Wikicat" className="h-10 w-auto" />`

---

### 3. Cat Mascot — Hero section
- **File:** `public/images/cat-hero.png`
- **Size:** 500 × 500 px, transparent PNG
- **Description:** Main Wikicat anime cat character standing, can have coins or decorations
- **Used in:** `src/components/landing/Hero.tsx`
- Replace the dashed placeholder div with: `<img src="/images/cat-hero.png" alt="Wikicat mascot" className="w-72 md:w-96 lg:w-[420px] drop-shadow-2xl animate-float" />`

---

### 4. Coin Stacks — Hero section
- **File:** `public/images/coins.png`
- **Size:** ~200 × 200 px, transparent PNG
- **Description:** Gold WIKI coin stacks, decorative element
- **Used in:** `src/components/landing/Hero.tsx`
- Replace the small dashed coin div with: `<img src="/images/coins.png" alt="WIKI coins" className="absolute -bottom-4 -right-4 w-32 md:w-40 drop-shadow-xl" />`

---

### 5. Cat Ear Decorations (optional) — Features cards
- **Files:** `public/images/cat-ear-pink.png`, `cat-ear-blue.png`, `cat-ear-yellow.png`
- **Size:** ~100 × 80 px each, transparent PNG
- **Description:** Anime cat ear shapes that sit on top of the feature cards (like wikicatcoin.com style)
- **Used in:** `src/components/landing/Features.tsx`
- See the comment `=== IMAGE PLACEHOLDER: Cat ear decoration ===` in that file

---

### 6. Clouds Background (optional) — Hero section
- **File:** `public/images/clouds-bg.png`
- **Size:** 1920 × 400 px
- **Description:** Cloud skyline banner for the sky hero background
- Replace the CSS cloud divs in `src/components/landing/Hero.tsx` with an `<img>` tag

---

## How to Upload

1. Go to your GitHub repo: https://github.com/nothing010101/wikicat
2. Navigate to `public/images/` (or create the folder via "Add file")
3. Click **Add file → Upload files**
4. Upload your images with the exact filenames above
5. Commit to `main` — Vercel auto-deploys within ~1 minute

---

## Social Media Links

Update these `href="#"` links with your real accounts:

| File | Links to update |
|------|----------------|
| `src/components/landing/Hero.tsx` | Telegram, Twitter/X, TikTok |
| `src/components/landing/LandingFooter.tsx` | Telegram, Twitter/X |

Example: `href="https://t.me/wikicatcoin"`, `href="https://twitter.com/wikicatcoin"`
