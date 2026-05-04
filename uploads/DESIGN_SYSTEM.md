# FULLY LOADED WEBSITES — Design System v2.0
## Final reference for Cursor build — April 2026
## Always load this file as context before building any component.

---

## Brand Identity

**Name:** Fully Loaded Websites (FLW)
**Tagline:** High Performing Digital Marketing for Local Business Owners
**Owner:** Evan | Phone: +1 (828) 818-5140 | Asheville, NC area
**Audience:** Conservative local service contractors — plumbers, roofers, HVAC, electricians, landscapers
**Tone:** Tactical. Direct. No fluff. American. Faith-driven. Results-focused.
**Visual Identity:** Military crosshair/targeting reticle + distressed lettering + industrial textures
**Sign-off:** "All Glory to God ☦" — always in footer, always in #B01C1C red

---

## Site Pages (NO FAQ)

- `/`                        — Home
- `/evan`                    — Meet Evan
- `/portfolio`               — Portfolio
- `/blog`                    — Advice Blog
- `/blog/[slug]`             — Individual post
- `/services`                — Solutions
- `/terms-of-use`            — Terms
- `/privacy-policy`          — Privacy
- `/accessibility-statement` — Accessibility
- `/disclaimer`              — Disclaimer

**NO FAQ PAGE — removed entirely from site, nav, and footer.**

---

## Navigation Links (in order)

Home | Meet Evan | Portfolio | Advice Blog | Solutions (CTA button)

---

## Color Palette

```css
--flw-red:           #B01C1C;
--flw-red-border:    #8A1414;
--flw-red-dark:      #7A1010;
--flw-red-light:     #D42B2B;
--flw-gold:          #DAA520;
--flw-gold-border:   #B08010;
--flw-gold-dark:     #A07810;
--flw-gold-bright:   #C8A840;
--flw-blue:          #4299FF;   /* Phase 02 — Advice Blogging */
--flw-green:         #16A86A;   /* Phase 04 — Newsletter */
--flw-green-dark:    #0A6B40;
--flw-footer-bg:     #0E0602;
--flw-dark:          #1A0C04;   /* Primary bg — warm chocolate dark */
--flw-surface:       #2C1A0E;   /* Section surface — chocolate brown */
--flw-card:          #1E0E06;   /* Card backgrounds */
--flw-white:         #F5F0E8;
--flw-cream:         #F0E8D8;   /* Card titles */
--flw-cream-mid:     #C8B49A;   /* Card excerpts */
--flw-cream-dim:     #C8B89A;   /* Dates, meta */
--flw-muted:         #A8927A;   /* Body copy */
--flw-faint:         #7A6A5A;
--flw-footer-link:   #C8B48A;   /* Footer nav links — warm cream, clearly readable */
--flw-footer-copy:   #8A7050;   /* Footer copyright */
```

---

## Typography

```
Google Fonts import:
Oswald:wght@400;500;600;700
Barlow:ital,wght@0,400;0,500;0,600;1,400
Barlow+Condensed:wght@600;700
Share+Tech+Mono

Roles:
  Display/H1/H2:     Oswald 700, uppercase, tracking 0.04em
  H3/Buttons/Nav:    Barlow Condensed 600-700, uppercase, tracking 0.06-0.1em
  Body:              Barlow 400, line-height 1.7
  Labels/Eyebrows:   Share Tech Mono, 10-11px, uppercase, tracking 0.12-0.14em
                     Format: "// LABEL" or "[ LABEL ]"

border-radius: 2px throughout (sharp/tactical — never pill-shaped buttons)
```

---

## Logo Files → /public/images/

| File | Where used |
|---|---|
| `Fully_Loaded_Websites_Logo.png` | Navbar (48px) + Footer (44px) |
| `Long_Logo_FLW.png` | Full-width banner on Blog page below nav |
| `Full_Loaded_RWB.png` | Light background use |
| `Fully_Loaded_Websites_LogoRed.png` | Light background alternate |
| `Logo_FLW_X.jpg` | Social / alternate |

---

## Navbar

```
bg: #DAA520 | border-bottom: 3px solid #B08010
Logo: <Image src="/images/Fully_Loaded_Websites_Logo.png" width={48} height={48} />
Wordmark: "Fully LOADED Websites" — Oswald 700, "LOADED" = #B01C1C
Sub: "// Common Sense Digital Marketing" — Share Tech Mono 8px #5A3800
Links: Barlow Condensed 700 12px uppercase — default #3A2800, active #B01C1C
CTA: bg #B01C1C, border 2px solid #8A1414, text #F5F0E8
Mobile: hamburger slide-in drawer (Framer Motion)
Scroll: backdrop-filter blur(12px)
```

---

## Phase Color System

| Phase | Service | Color |
|---|---|---|
| 01 | Business Website | #B01C1C red |
| 02 | Advice Blogging | #4299FF dodger blue |
| 03 | Client Success Stories | #DAA520 gold |
| 04 | Expert Newsletter | #16A86A green |

---

## Home Page Section Order

1. Navbar (gold)
2. Hero — #2C1A0E bg, crosshair deco LEFT only, Evan photo RIGHT (no frame, no border)
3. Stats bar — #B01C1C red
4. Video CTA band — #B01C1C red
5. Video embed — dark section, 16:9 placeholder
6. Services — 2×2 card grid, phase colors
7. Crosshair divider
8. Web Matrix — gold banner + interactive SVG
9. Crosshair divider
10. Meet Evan — photo left, bio right (no photo frame)
11. Extra Mile — #DAA520 GOLD bg, 2×2 dark cards
12. Testimonials — 2×2 grid
13. Final CTA — dark, crosshair watermark, phone number
14. Footer

---

## Web Matrix Nodes & Colors

Center: Business Website — #8B1212/#9A1515, stroke #B01C1C
Spokes:
  Advice Blog:       #A07810 / #DAA520 gold
  Success Stories:   #1B2A8A / #4A6ADA navy
  Expert Newsletter: #0A6B40 / #16A86A green
  Painless Posting:  #6A1A8A / #B060E0 purple
  Expert Ebook:      #904010 / #E07020 orange
  Positive Press:    #0A6A8A / #20B8E0 cyan
  Online Reviews:    #8B1212 / #D42B2B red
  Video Commercial:  #1A6A1A / #40C040 bright green

Outer ring: dashed gold resting, solid node-color on hover
Transition: 0.08s ease (fast snap)
Info panel: border-left color shifts to active node color

---

## Footer

```
bg: #0E0602 | border-top: 3px solid #DAA520

Row 1: Logo (44px) + wordmark | Social pills (X, Rumble, Truth Social)
       Social: bg #1A0C04, border rgba(218,165,32,.3), text #C8A840

Row 2 nav links (NO FAQ):
  Home | Meet Evan | Portfolio | Blog | Solutions | Terms | Privacy | Accessibility | Disclaimer
  Font: Barlow Condensed 600 11px uppercase | Color: #C8B48A (warm cream)

Row 3:
  Left:  "© 2026 Fully Loaded Websites | All Rights Reserved" — Barlow 11px #8A7050
  Right: "All Glory to God ☦" — Share Tech Mono #B01C1C
```

---

## Animations

```jsx
// Scroll reveal
whileInView={{ opacity:1, y:0 }}
initial={{ opacity:0, y:24 }}
viewport={{ once:true }}
transition={{ duration:0.5, ease:"easeOut" }}

// Stagger
staggerChildren: 0.12

// Web Matrix: CSS transition 0.08s ease
// Stats counters: useInView + useMotionValue + animate()
```

---

*FLW Design System v2.0 — Finalized April 1, 2026*
