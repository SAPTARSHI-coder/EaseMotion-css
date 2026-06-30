# Luxury Watch Brand — Chrono Élégance

A production-quality, copy-paste-ready **Luxury Watch E-commerce Website** built for the GSSoC EaseMotion CSS contribution challenge. Built entirely with semantic HTML5 and custom CSS — no JavaScript, no frameworks, no CSS keyframes. All motion comes from **EaseMotion CSS classes**.

---

## Project Overview

**Chrono Élégance** is a premium Swiss watchmaking maison website — editorial, exclusive, and genuinely luxurious. The design uses a deep charcoal/black aesthetic with champagne gold accents, inspired by Rolex, Patek Philippe, Audemars Piguet, and Vacheron Constantin.

**Brand:** Chrono Élégance SA
**Founded:** 1888 · Geneva, Switzerland
**Persona:** Independent Swiss watch manufacturer — haute horlogerie tier

---

## Features

### Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen dark editorial hero with gold radial orbs, CSS-drawn watch mockup (CE calibre face, lugs, crown, straps), floating detail chips (Calibre CE-9015 · 320 Components, 72h Power Reserve · COSC Certified), 5 trust badges (Swiss Made, Sapphire Crystal, Automatic Movement, Limited Edition, Since 1888), dual CTA |
| **Collections** | 8 collection cards (Classic, Heritage, Diver, Skeleton, Chronograph, Moonphase, Dress, Limited Editions) — each with price from CHF, dark gradient image placeholder, italic serif description, and Discover Collection button |
| **Watchmaking Heritage** | Full timeline editorial layout with story image, founding philosophy card, and 6-milestone timeline (1888→1912→1953→1979→2010→2024) using golden dot markers and vertical guide line |
| **Materials & Craftsmanship** | 8 feature cards: Sapphire Crystal, 18K Gold Alloy, Grade 5 Titanium, Ceramic Bezel, Swiss Automatic Movement, Hand-Finished Dial, Premium Leather Straps, Water Resistance — each with SVG icon |
| **Limited Edition** | Exclusive "Heritage Perpétuel Centennial Reserve" showcase with gold progress stock bar (62/88 pieces), full spec grid (movement/case/dial/production/price), Reserve Now CTA, and CSS-drawn complication watch with sub-dials and moonphase |
| **Customer Reviews** | Satisfaction stats bar (4.97★, 100% verified, 3,200+ clients, 97% recommend) + 3 long-form collector testimonials with Verified Buyer badges and serif italic quotes |
| **Boutique Visit** | Two-column: left with appointment CTA and concierge service panel; right with contact card (14 Rue du Rhône Geneva address, telephone, email, hours) and founder quote blockquote |
| **Footer** | Deep charcoal CTA band ("A Timepiece Worth Passing On"), quarterly newsletter, brand info, Collections / Company / Boutiques & Support nav columns, 4 social icons (Instagram, Facebook, YouTube, Pinterest), copyright, back-to-top |

### Design Highlights

- **Dark luxury editorial aesthetic** — black `#0c0b09`, charcoal `#161410`, champagne gold `#b89a5a`, pale gold `#d4b87a`
- Fully dark theme — visually opposite to the light themes used in the makeup and plastic surgery submissions, while stylistically distinct from the flat-black gaming store
- CSS-drawn watch faces: all indices, hands (hour/minute/second), crown, lugs, straps — pure HTML/CSS, no images needed
- Two unique watch mockups — hero (Classic case) and Limited Edition (complication with sub-dials and moonphase aperture)
- Gold glow `box-shadow` (`rgba(184,154,90,0.3)`) applied to both watch cases and interactive card hovers
- Serif `Georgia` throughout headings, descriptions, quotes, taglines, and timeline entries — projects editorial gravitas
- Heritage timeline with pseudo-element gold dot connector and vertical gradient guide line
- Limited edition stock progress bar driven by CSS custom property `--fill:70%`
- Founder quote blockquote with left gold border in boutique section
- Champagne gold scrollbar and text selection (`rgba(184,154,90,0.22)`)
- Eyebrow treatment: decorative flanking lines via flexbox on the hero eyebrow

---

## Folder Structure

```text
submissions/
└── examples/
    └── luxury-watch-brand/
        ├── demo.html     — Complete single-page watch brand website (all 8 sections)
        ├── style.css     — Full luxury editorial design system stylesheet
        └── README.md     — This file
```

---

## Responsive Design

| Breakpoint | Behaviour |
|---|---|
| **Desktop** (> 1200px) | Two-column hero, four-column collections and craftsmanship grids, full footer |
| **Laptop** (≤ 1200px) | Three-column collections, two-column craftsmanship, three-column footer |
| **Tablet** (≤ 900px) | Two-column collections, stacked heritage and reviews, hidden detail chips |
| **Small Tablet** (≤ 1000px) | Stacked hero, stacked heritage, stacked boutique, stacked limited edition |
| **Mobile** (≤ 640px) | Single-column all grids, stacked footer, simplified CTA band |

All headings use `clamp()` for smooth fluid scaling.

---

## EaseMotion CSS Classes Showcased

All animations use EaseMotion classes exclusively. No `@keyframes`, `animation`, or motion-CSS rules exist in `style.css`.

### Navigation — Hover Effects
| Class | Element |
|---|---|
| `ease-hover-grow` | Chrono Élégance logo in navbar and footer |
| `ease-hover-underline` | All nav links and all footer nav links |
| `ease-hover-lift` | "Visit Boutique" CTA in navbar, all buttons |
| `ease-hover-glow` | Primary gold CTA buttons, social icon hovers |

### Entrance Animations
| Class | Usage |
|---|---|
| `ease-fade-right` | Hero text content, boutique left CTA |
| `ease-fade-left` | Hero watch visual, boutique right info |
| `ease-fade-up` | Section headers, collection cards, craft cards, timeline items, review cards |
| `ease-pop` | Hero eyebrow badge, floating detail chips, heritage story card, limited edition badge, stock bar, num plate, concierge panel, satisfaction stats |
| `ease-stagger` | Trust badges cloud, timeline items (6 steps), collection cards, craft cards, reviews |

### Continuous Animations
| Class | Usage |
|---|---|
| `ease-float` | Hero watch frame (gentle gravitational float), limited edition watch wrap |
| `ease-bounce` | Hero scroll-cue arrow |

### Interactive Hover Effects
| Class | Element |
|---|---|
| `ease-hover-lift` | All collection cards, craft cards, review cards, all buttons |
| `ease-hover-shadow` | Collection cards, craft cards, testimonial cards |
| `ease-hover-glow` | Gold CTA buttons (boutique, footer), "Visit Boutique" nav |
| `ease-hover-scale` | "Discover Collection" outline buttons on collection cards |
| `ease-hover-rotate` | Footer social icon buttons (Instagram, Facebook, YouTube, Pinterest) |

---

## Browser Compatibility

| Browser | Support |
|---|---|
| Chrome 100+ | ✅ Full |
| Firefox 100+ | ✅ Full |
| Safari 15.4+ | ✅ Full (`backdrop-filter` supported) |
| Edge 100+ | ✅ Full |
| Opera 85+ | ✅ Full |
| Safari < 15.4 | ⚠️ Glassmorphism degrades gracefully (no blur, opaque card) |
| IE 11 | ❌ Not supported (CSS Grid, custom properties, `clamp()`) |

---

## Credits

- **Website design & content:** Chrono Élégance persona / GSSoC EaseMotion CSS submission
- **Animation library:** [EaseMotion CSS](https://github.com/GSSoC/easemotion-css)
- **Typography:** Inter (sans-serif) + Georgia (serif) via system fonts
- **Watch artwork:** Pure CSS — no images used
- **Icons:** Inline SVG only — no external icon library
- **Design inspiration:** Rolex, Patek Philippe, Audemars Piguet, Omega, Cartier, Vacheron Constantin
