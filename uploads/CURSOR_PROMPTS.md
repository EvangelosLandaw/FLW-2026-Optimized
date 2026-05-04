# FLW CURSOR BUILD GUIDE — v2.0
## fullyloadedwebsites.com | April 2026
## Paste the Master Context Block at the start of EVERY Cursor session.

---

## MASTER CONTEXT BLOCK (copy-paste before every component)

```
CONTEXT: Building fullyloadedwebsites.com — Next.js 14 + Tailwind CSS + Framer Motion.
Web design & digital marketing for conservative local service contractors.
Owner: Evan | Phone: +1 (828) 818-5140 | Asheville, NC

═══ COLORS ═══
Primary bg:      #1A0C04 (warm chocolate dark) / surface: #2C1A0E / card: #1E0E06
Red (CTAs):      #B01C1C  → hover: #D42B2B  → border: #8A1414  → dark: #7A1010
Gold (navbar):   #DAA520  → border: #B08010  → dark: #A07810
Blue (Phase 02): #4299FF  (Dodger Blue — Advice Blogging)
Green (Phase 04):#16A86A
Text:            #F5F0E8  → cream: #F0E8D8  → muted: #A8927A  → faint: #7A6A5A
Card text:       titles #F0E8D8  excerpts #C8B49A  meta #C8B89A
Footer links:    #C8B48A (warm cream — readable)
Footer bg:       #0E0602

═══ FONTS (Google) ═══
Display/H1/H2:     Oswald 700, uppercase, tracking 0.04em
H3/Buttons/Nav:    Barlow Condensed 600-700, uppercase, tracking 0.06-0.1em
Body:              Barlow 400, line-height 1.7
Labels/Eyebrows:   Share Tech Mono 10-11px, uppercase, tracking 0.14em
                   Format: "// LABEL" or "[ LABEL ]"

═══ BORDER RADIUS ═══
2px everywhere — sharp/tactical. Never pill-shaped buttons.

═══ AESTHETIC ═══
Tactical industrial. Crosshair motifs (SVG, not images).
CSS textures: chocolate brown bg with subtle diagonal line overlays.
Scanline overlay: repeating-linear-gradient at 1.8% opacity.
Primary CTAs: always #B01C1C red, Barlow Condensed 700 uppercase.
Stats bar: always #B01C1C red background.
Navbar: always #DAA520 gold background.
Extra Mile section: always #DAA520 gold background.

═══ ANIMATIONS ═══
Framer Motion — whileInView={{ opacity:1, y:0 }} initial={{ opacity:0, y:24 }}
viewport={{ once:true }} transition={{ duration:0.5, ease:"easeOut" }}
Stagger: staggerChildren: 0.12
Web Matrix transitions: CSS 0.08s ease (fast snap)
Counters: useInView + useMotionValue + animate()

═══ PAGES (NO FAQ) ═══
/ | /evan | /portfolio | /blog | /blog/[slug] | /services
/terms-of-use | /privacy-policy | /accessibility-statement | /disclaimer

═══ NAV LINKS (in order, NO FAQ) ═══
Home | Meet Evan | Portfolio | Advice Blog | Solutions (red CTA button)

═══ FOOTER LINKS (NO FAQ) ═══
Home | Meet Evan | Portfolio | Blog | Solutions | Terms | Privacy | Accessibility | Disclaimer
Footer link color: #C8B48A (warm cream — NOT dark, must be readable on #0E0602 bg)

═══ LOGO FILES (/public/images/) ═══
Navbar + Footer:  Fully_Loaded_Websites_Logo.png (48px navbar, 44px footer)
Blog banner:      Long_Logo_FLW.png (full-width below nav on /blog page)
Light bg use:     Full_Loaded_RWB.png or Fully_Loaded_Websites_LogoRed.png

═══ PHASE COLORS ═══
Phase 01 — Business Website:      #B01C1C red
Phase 02 — Advice Blogging:       #4299FF dodger blue
Phase 03 — Client Success Stories:#DAA520 gold
Phase 04 — Expert Newsletter:     #16A86A green

═══ FOOTER SIGN-OFF (always) ═══
"All Glory to God ☦" — Share Tech Mono, color #B01C1C, bottom right

═══ TECH STACK ═══
Framework:  Next.js 14 App Router (TypeScript)
Styling:    Tailwind CSS + globals.css custom properties
Animation:  Framer Motion
Icons:      Lucide React
Blog CMS:   MDX + Contentlayer (or next-mdx-remote)
Forms:      Resend or Formspree
Deploy:     Cloudflare Pages

═══ RULES ═══
- No purple gradients. No rounded pills. No "soft tech" aesthetics.
- No FAQ page, no FAQ links anywhere.
- Contractors read this on phones — mobile-first always.
- Crosshair SVG appears as decorative watermark (opacity 0.04-0.07) in dark sections.
- Never use the crosshair behind Evan's photo — photo sits clean on the bg.
- Photos have NO frame, NO border, NO border-left accent.
- Stats bar is ALWAYS #B01C1C red with #7A1010 top/bottom borders.
- Solutions CTA button: bg #B01C1C, border 2px solid #8A1414.
- Preserve: tel:+18288185140, social links (X, Rumble, Truth Social).
```

---

## BUILD ORDER

### Phase 1 — Project Setup
```bash
npx create-next-app@latest fullyloadedwebsites --typescript --tailwind --app
cd fullyloadedwebsites
npm install framer-motion lucide-react
npm install @next/mdx @mdx-js/loader @mdx-js/react
npm install contentlayer next-contentlayer  # for blog
npm install next-sitemap  # for sitemap

# Copy files into project:
# - tailwind.config.ts (replace generated one)
# - app/globals.css (replace generated one)
# - DESIGN_SYSTEM.md (project root)
# - CURSOR_PROMPTS.md (project root)

# Upload all logo files to /public/images/
# Upload Evan's photo to /public/images/evan-photo.jpg
# Upload any client screenshots to /public/images/portfolio/
```

### Phase 2 — Layout Shell
- [ ] `components/layout/Navbar.tsx`
- [ ] `components/layout/Footer.tsx`
- [ ] `app/layout.tsx` (wrap with Navbar + Footer, add fonts)

### Phase 3 — Shared Components
- [ ] `components/ui/Button.tsx`
- [ ] `components/ui/SectionLabel.tsx` (Share Tech Mono eyebrow)
- [ ] `components/ui/Crosshair.tsx` (reusable SVG)
- [ ] `components/ui/StatsBar.tsx`
- [ ] `components/ui/ServiceCard.tsx`
- [ ] `components/ui/TestimonialCard.tsx`
- [ ] `components/ui/SectionDivider.tsx` (crosshair divider)

### Phase 4 — Home Page Sections
- [ ] `components/sections/Hero.tsx`
- [ ] `components/sections/VideoCTABand.tsx`
- [ ] `components/sections/VideoEmbed.tsx`
- [ ] `components/sections/Services.tsx`
- [ ] `components/sections/WebMatrix.tsx` ← interactive SVG
- [ ] `components/sections/MeetEvan.tsx`
- [ ] `components/sections/ExtraMile.tsx` (gold bg)
- [ ] `components/sections/Testimonials.tsx`
- [ ] `components/sections/FinalCTA.tsx`
- [ ] `app/page.tsx` (assemble all sections)

### Phase 5 — Inner Pages
- [ ] `app/evan/page.tsx`
- [ ] `app/portfolio/page.tsx`
- [ ] `app/services/page.tsx`
- [ ] `app/blog/page.tsx`
- [ ] `app/blog/[slug]/page.tsx`

### Phase 6 — Legal Pages
- [ ] `app/(legal)/terms-of-use/page.tsx`
- [ ] `app/(legal)/privacy-policy/page.tsx`
- [ ] `app/(legal)/accessibility-statement/page.tsx`
- [ ] `app/(legal)/disclaimer/page.tsx`

### Phase 7 — Polish & Deploy
- [ ] `next-sitemap` config + sitemap.xml
- [ ] OG image (`app/opengraph-image.tsx`)
- [ ] Cookie consent banner
- [ ] Lighthouse audit (target 90+ performance)
- [ ] Mobile QA on iOS Safari + Android Chrome
- [ ] Cloudflare Pages setup

---

## COMPONENT PROMPTS

### Navbar.tsx
```
Build Navbar.tsx for FLW. Gold bg #DAA520, border-bottom 3px solid #B08010.
Left: <Image src="/images/Fully_Loaded_Websites_Logo.png" width={48} height={48} />
      + wordmark "Fully LOADED Websites" (Oswald 700, "LOADED" in #B01C1C)
      + sub "// Common Sense Digital Marketing" (Share Tech Mono 8px #5A3800)
Right: nav links in Barlow Condensed 700 12px uppercase #3A2800
       Order: Home | Meet Evan | Portfolio | Advice Blog | Solutions (CTA)
       NO FAQ link.
       Active link: #B01C1C. Solutions CTA: bg #B01C1C, border 2px solid #8A1414.
Position: fixed. On scroll >60px: backdrop-filter blur(12px).
Mobile: hamburger → full-screen dark slide-in drawer (Framer Motion AnimatePresence).
```

### Footer.tsx
```
Build Footer.tsx for FLW. bg #0E0602, border-top 3px solid #DAA520.
Row 1: Left = Logo (44px) + wordmark + tagline "// Common Sense Web Design..."
       Right = Social pills: X, Rumble, Truth Social
               Pills: bg #1A0C04, border rgba(218,165,32,.3), text #C8A840
Row 2: Nav links — NO FAQ — in Barlow Condensed 600 11px uppercase
       Links: Home | Meet Evan | Portfolio | Blog | Solutions | Terms | Privacy | Accessibility | Disclaimer
       Color: #C8B48A (warm cream — must be clearly readable on dark bg)
Row 3: Left = "© 2026 Fully Loaded Websites | All Rights Reserved" (Barlow 11px #8A7050)
       Right = "All Glory to God ☦" (Share Tech Mono #B01C1C)
```

### Hero.tsx (Home page)
```
Build Hero.tsx. bg #2C1A0E with scanlines + diagonal texture overlay.
NO crosshair behind the photo. NO photo frame or border.
Layout: 2-col desktop (text left, Evan photo right), 1-col mobile.
Left col:
  Eyebrow: Share Tech Mono "// DIGITAL MARKETING FOR LOCAL BUSINESS"
  H1: Oswald 700, clamp(28px,4vw,40px), uppercase, #F5F0E8
      Highlight "LOCAL BUSINESS OWNERS" in #B01C1C
  Sub: Barlow 400 #A8927A, max 2 lines
  Bullets: 4 items, gold dot (6px circle #DAA520), Barlow 12px #C8AA88
  CTAs: [CALL EVAN NOW — red filled] [SEE PORTFOLIO — ghost]
Right col:
  <Image src="/images/evan-photo.jpg" — no border, no frame, just clean>
  Small "[ AI Optimized ]" badge bottom center: Share Tech Mono 8px #DAA520
Framer Motion: stagger children on mount.
```

### WebMatrix.tsx
```
Build WebMatrix.tsx — interactive hub-and-spoke SVG.
Section: bg #2C1A0E with texture overlay.
Title banner: bg #DAA520, border 3px solid #B08010, border-radius 4px.
              FLW mini crosshair SVG + "YOUR WEB MATRIX" Oswald 700 black.

Center node: "BUSINESS WEBSITE / MOTHERSHIP"
  Outer circle: fill #8B1212, stroke #B01C1C 2px
  Inner circle: fill #9A1515

8 spoke nodes with unique colors:
  Advice Blog:       fill #A07810, stroke #DAA520
  Success Stories:   fill #1B2A8A, stroke #4A6ADA
  Expert Newsletter: fill #0A6B40, stroke #16A86A
  Painless Posting:  fill #6A1A8A, stroke #B060E0
  Expert Ebook:      fill #904010, stroke #E07020
  Positive Press:    fill #0A6A8A, stroke #20B8E0
  Online Reviews:    fill #8B1212, stroke #D42B2B
  Video Commercial:  fill #1A6A1A, stroke #40C040

Outer dashed ring: rgba(218,165,32,.28) resting, shifts to node color on hover.
Spoke lines: match node color at .45 opacity resting, brighten on hover.
CSS transition: 0.08s ease on all hover states (fast snap).
Info panel below SVG: border-left shifts to active node color.
Text: Barlow Condensed 700 in node, tinted text color per node fill.
```

### StatsBar.tsx
```
Build StatsBar.tsx. bg #B01C1C, border-top/bottom 3px solid #7A1010.
4 stats in CSS grid (equal columns), dividers rgba(255,255,255,.2).
Numbers: Oswald 700 22-26px white, suffixes in #DAA520.
Labels: Barlow Condensed 600 10px uppercase rgba(255,255,255,.55).
Animate numbers up with Framer Motion useInView + useMotionValue on scroll enter.

Home page stats:   50+ Sites Built | #1 Local Rankings | <1wk Turnaround | 100% U.S. Based
Portfolio stats:   400+ Sites Launched | #1 Rankings | 100% U.S. Based | <14d to Launch
Solutions stats:   400+ Sites Built | #1 Rankings | <14d to Launch | 100% Conservative Values
Blog stats:        100+ Articles | #1 Local SEO | Free. Always | New↑ Posted Weekly
```

### ExtraMile.tsx (Gold section)
```
Build ExtraMile.tsx. bg #DAA520 with scanline overlay.
Ghost FLW crosshair watermark centered, opacity 0.07, dark ink color.
Header: Share Tech Mono eyebrow (dark ink) + Oswald 700 "EVERY BUILD INCLUDES THESE EXTRAS"
2×2 grid of dark cards: bg rgba(0,0,0,.15), border rgba(0,0,0,.2), border-radius 2px.
Each card: icon (36px, bg rgba(0,0,0,.2)) + title (Barlow Condensed 700 uppercase #111)
           + desc (Barlow 12px rgba(0,0,0,.6)).
Items:
  ✝ 3 Bible Quotes in Your Code
  📖 Your Own Expert Ebook
  📰 Local Press Release
  🎬 Promotional Video
Bottom: red CTA button centered "CALL EVAN NOW — (828) 818-5140"
```

### VideoEmbed.tsx
```
Build VideoEmbed.tsx. bg #1A0C04, border-bottom 1px solid rgba(218,165,32,.15).
Section eyebrow: "// FLW — YOUR MARKETING MATRIX"
16:9 aspect ratio wrapper: bg #0E0602, border 2px dashed rgba(218,165,32,.25), border-radius 4px.
Placeholder: centered play icon + Share Tech Mono label "VIDEO EMBED PLACEHOLDER"
             hint text: "Paste your Rumble or YouTube embed URL in Cursor"
In Cursor, replace placeholder div with:
  <iframe src="YOUR_VIDEO_URL" width="100%" height="100%" allowFullScreen />
```

---

## BLOG PAGE SPECIAL NOTE

The `/blog` page gets the `Long_Logo_FLW.png` banner image directly below the navbar:

```tsx
// In app/blog/page.tsx — right after <Navbar />:
<div className="w-full border-b-4 border-flw-red">
  <Image
    src="/images/Long_Logo_FLW.png"
    alt="Fully Loaded Websites"
    width={1920}
    height={240}
    className="w-full h-auto object-cover"
    priority
  />
</div>
```

---

## CLOUDFLARE PAGES DEPLOY

```bash
# 1. Install Cloudflare adapter
npm install @cloudflare/next-on-pages

# 2. Add to package.json scripts:
"pages:build": "npx @cloudflare/next-on-pages",
"preview":     "npx wrangler pages dev .vercel/output/static",
"deploy":      "npm run pages:build && npx wrangler pages deploy .vercel/output/static"

# 3. Cloudflare Pages Dashboard settings:
#    Build command:    npx @cloudflare/next-on-pages
#    Output directory: .vercel/output/static
#    Node.js version:  20

# 4. DNS: Point fullyloadedwebsites.com nameservers to Cloudflare
#    Add CNAME record → your Pages project URL
#    Enable Full SSL/TLS (free with Cloudflare)
```

---

## FILE STRUCTURE

```
fullyloadedwebsites/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                          ← Home
│   ├── evan/page.tsx                     ← Meet Evan
│   ├── portfolio/page.tsx                ← Portfolio
│   ├── services/page.tsx                 ← Solutions
│   ├── blog/
│   │   ├── page.tsx                      ← Blog index
│   │   └── [slug]/page.tsx               ← Individual posts
│   ├── (legal)/
│   │   ├── terms-of-use/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── accessibility-statement/page.tsx
│   │   └── disclaimer/page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── Crosshair.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── SectionDivider.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── VideoCTABand.tsx
│       ├── VideoEmbed.tsx
│       ├── Services.tsx
│       ├── WebMatrix.tsx
│       ├── MeetEvan.tsx
│       ├── ExtraMile.tsx
│       ├── Testimonials.tsx
│       └── FinalCTA.tsx
├── content/
│   └── blog/               ← MDX blog posts
├── public/
│   └── images/
│       ├── Fully_Loaded_Websites_Logo.png   ← navbar + footer
│       ├── Long_Logo_FLW.png                ← blog page banner
│       ├── Full_Loaded_RWB.png
│       ├── Fully_Loaded_Websites_LogoRed.png
│       ├── Logo_FLW_X.jpg
│       ├── evan-photo.jpg                   ← upload Evan's photo
│       └── portfolio/                       ← client screenshots
├── DESIGN_SYSTEM.md         ← always load in Cursor
├── CURSOR_PROMPTS.md        ← this file
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## PRE-LAUNCH CHECKLIST

- [ ] tel:+18288185140 works on mobile (click-to-call)
- [ ] Social links correct: X, Rumble, Truth Social
- [ ] "All Glory to God ☦" in footer, red
- [ ] NO FAQ page or FAQ links anywhere
- [ ] All legal pages ported
- [ ] Google Analytics or Cloudflare Web Analytics added
- [ ] next-sitemap configured, sitemap.xml generated
- [ ] robots.txt configured
- [ ] OG image set (1200×630)
- [ ] Cookie consent banner
- [ ] Lighthouse: 90+ Performance target
- [ ] Test: iOS Safari, Android Chrome, Firefox
- [ ] Test: all CTAs and phone links work
- [ ] Cloudflare SSL: Full mode enabled
- [ ] Cloudflare Speed: Auto Minify + Brotli on

---

*FLW Cursor Build Guide v2.0 — April 1, 2026*
