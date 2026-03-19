# Convert Static HTML/CSS/JS Website → Next.js

Convert the static website at `C:\Users\arjun\Downloads\Let Him Fly` into a Next.js project at `c:\Users\arjun\Downloads\let-him-fly-nextjs`.

## Source Structure

| Source File | Purpose |
|---|---|
| `index.html` | Main page: hero, about, journey, mission, gallery, news, footer |
| `fund.html` | Donation page with inline CSS & JS (Milaap integration) |
| `css/style.css` | Global styles (1654 lines) |
| `js/script.js` | Loading screen, hamburger menu, intersection observers, video player, Milaap fetch, parallax |
| `images/` | 12 image files |
| `videos/` | 4 video files (`hero-bg.mp4`, `featured.mp4`, `project.mp4`, `loading.mp4`) |


## Proposed Changes

### 1. Project Initialization

#### [NEW] Next.js App (scaffolded via `create-next-app`)

- Initialize a fresh Next.js project inside `let-him-fly-nextjs/` using `npx -y create-next-app@latest ./` with App Router, no Tailwind, JavaScript (no TypeScript), ESLint enabled
- Remove the default boilerplate files (`page.js`, `page.module.css`, `globals.css` content)

---

### 2. Static Assets

#### [NEW] `public/images/` and `public/videos/`

- Copy all files from source `images/` → `public/images/`
- Copy all files from source `videos/` → `public/videos/`
- Fix filenames with spaces (e.g. `handstand .jpg` → `handstand.jpg`) so Next.js can serve them cleanly

---

### 3. Global Styles & Layout

#### [MODIFY] `src/app/globals.css`

- Paste the entire `css/style.css` content
- Append the inline styles from `fund.html` (under a section comment)
- Update font imports from `<link>` tags to `@import` or use `next/font/google`

#### [MODIFY] `src/app/layout.js`

- Set up `<html>`, metadata (title, description), Google Fonts via `next/font/google` (Bricolage Grotesque, Poppins, Covered By Your Grace)
- Import `globals.css`

---

### 4. Homepage

#### [MODIFY] `src/app/page.js`

- Convert `index.html` body content into a React component
- Replace `fund.html` links with Next.js `<Link href="/fund">`
- Replace `<img>` with Next.js `<Image>` where appropriate (external URLs remain as `<img>`)
- Video elements stay as `<video>` tags

#### [NEW] `src/components/Loader.js`

- Loading screen component with the loading animation (client component with `"use client"`)

#### [NEW] `src/components/Navbar.js`

- Navigation bar (client component for hamburger toggle, scroll behavior)
- Uses `<Link>` for internal navigation

#### [NEW] `src/components/HeroSection.js`

- Hero section with video background, progress pill, content

#### [NEW] `src/components/WitnessSection.js`

- About/witness section with Kerala SVG, stats, photo

#### [NEW] `src/components/VideoSection.js`

- Video grid + video modal (client component)

#### [NEW] `src/components/FeaturedVideo.js`

- Featured video with play/pause toggle (client component)

#### [NEW] `src/components/ProjectsSection.js`

- Projects section with video card

#### [NEW] `src/components/TimelineSection.js`

- Timeline cards section

#### [NEW] `src/components/GallerySection.js`

- Gallery section

#### [NEW] `src/components/MissionSection.js`

- Mission phases section

#### [NEW] `src/components/FundCTA.js`

- Fund call-to-action section

#### [NEW] `src/components/NewsSection.js`

- News section

#### [NEW] `src/components/Footer.js`

- Footer component

#### [NEW] `src/components/VideoModal.js`

- Video modal overlay (client component)

---

### 5. Fund Page

#### [NEW] `src/app/fund/page.js`

- Convert `fund.html` into a React page component
- Milaap fetch logic + preset buttons + donate redirect as client-side logic (`"use client"`)

---

### 6. Client-Side Interactivity

#### [NEW] `src/hooks/useMilaapFetch.js`

- Custom hook for fetching live Milaap fundraiser data (used by both homepage & fund page)

#### [NEW] `src/hooks/useScrollAnimations.js`

- Custom hook for intersection observer fade-in animations

---

## Verification Plan

### Automated (Dev Server)
1. Run `npm run dev` and verify the dev server starts without errors
2. Run `npm run build` to confirm the project builds without errors

### Manual / Browser Verification
1. Open `http://localhost:3000` in the browser and verify:
   - Loading screen animation appears and dismisses
   - Hero section with video background plays
   - Navigation works (scroll to sections, hamburger on mobile)
   - All sections render correctly (about, journey, mission, gallery, news, footer)
   - Scroll animations (fade-in) work
2. Navigate to `http://localhost:3000/fund` and verify:
   - Fund page renders with progress bar, preset buttons, amount input
   - Preset buttons populate the input field
   - Donate button redirects to Milaap URL
3. Check responsive design at mobile viewport (≤640px)
