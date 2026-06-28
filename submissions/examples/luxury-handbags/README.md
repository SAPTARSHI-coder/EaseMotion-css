# MAISON ÉLARA — Luxury Handbags Landing Page

A complete, copy-paste-ready luxury e-commerce landing page for a premium handbag brand, inspired by the aesthetic and editorial presentation of Louis Vuitton, Hermès, Dior, Gucci, Prada, and Bottega Veneta. Built with semantic HTML5 and EaseMotion CSS animation utilities exclusively.

---

## Screenshot Placeholder

> Open `demo.html` directly in any browser — no build tools, server, or dependencies required.

```
┌──────────────────────────────────────────────────────┐
│  ✦ MAISON ÉLARA   Collections  Story  Craftsmanship  │
├───────────────────────────────┬──────────────────────┤
│                               │  Atelier · Paris     │
│   ┌───────────────────┐       │                      │
│   │                   │       │  Crafted             │
│   │   Signature Élara │       │  for the             │
│   │        👜         │       │  Extraordinary       │
│   │                   │       │                      │
│   │   [ New Season ]  │       │  [Shop Collection]   │
│   └───────────────────┘       │  Discover →          │
├──────────────────────────────────────────────────────┤
│  Collections · Craftsmanship · Materials · Reviews   │
└──────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
luxury-handbags/
├── demo.html    ← Complete luxury landing page
├── style.css    ← Layout, colour, typography, spacing (no @keyframes)
└── README.md    ← This file
```

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Navigation** | Sticky nav — logo, links, Shop CTA, mobile toggle |
| 2 | **Hero** | Editorial split layout — image + headline, two CTAs |
| 3 | **Collections Grid** | 6-card grid (Signature, Evening, Totes, Crossbody, Limited, Travel) |
| 4 | **Craftsmanship Story** | Dark section, stacked images, 4 pillar list, stat bar |
| 5 | **Materials** | 6-card glassmorphism grid (leather, suede, gold, silk, sustainable, stitching) |
| 6 | **Personalisation CTA** | Two-column with 3 service items, founder quote, consultation CTA |
| 7 | **Reviews** | 3 testimonial cards with star ratings and verified purchase badges |
| 8 | **White-Glove Service** | Dark section, 4 service pillars (shipping, care, concierge, returns) |
| 9 | **Footer** | Shop · About · Customer Care columns + social links + legal |

---

## EaseMotion Classes Demonstrated

### Entrance Animations
| Class | Where used |
|---|---|
| `ease-fade-in` | Nav, hero eyebrow/trust/accent tag, story stats, footer |
| `ease-slide-up` | Hero headline, subtitle, CTAs; section headers; feature cards; pricing; pillar grid |
| `ease-slide-in-left` | Hero image, story image column, personalisation copy |
| `ease-slide-in-right` | Personalisation image column |

### Hover Effects
| Class | Where used |
|---|---|
| `ease-hover-lift` | Collection cards, material cards, review cards, service items, nav logo, pillar list items, social links |
| `ease-hover-grow` | Story image stack, white-glove service icons |
| `ease-hover-glow` | Primary CTA buttons |
| `ease-hover-underline` | Nav links, footer links, `btn-text` links |

### Glassmorphism
| Class | Where used |
|---|---|
| `ease-glass-card` | Material cards, review cards |

### Delay Staggering
| Class | Where used |
|---|---|
| `ease-delay-100` through `ease-delay-700` | Staggered entrance on all grid items and hero elements |

### Layout Utilities (EaseMotion)
These are not used directly in markup (layout is CSS-custom), but the following EaseMotion utilities are available and compatible: `ease-container`, `ease-flex`, `ease-grid`, `ease-gap-*`, `ease-text-center`.

---

## Responsive Support

| Breakpoint | Behaviour |
|---|---|
| **Mobile** (< 480px) | Single column, stacked hero, vertical CTAs, condensed footer |
| **Tablet** (481–820px) | 2-column grids, hidden nav links, mobile menu toggle visible |
| **Desktop** (≥ 821px) | Full layouts — 3-column collections, side-by-side story and personalisation |

---

## Design Language

- **Palette:** Ivory `#faf8f4`, Charcoal `#1c1917`, Muted Gold `#b8965a`, Taupe `#7a6f64`
- **Typography:** Georgia serif for headings (editorial feel), system sans-serif for body/labels
- **Cards:** Glassmorphism on material/review cards; `box-shadow` lift on collection cards
- **Dark sections:** Craftsmanship Story and White-Glove Service use a near-black surface with gold accents
- **Spacing:** Generous `clamp()` spacing that scales from mobile to wide desktop

---

## Usage Instructions

1. Copy the `luxury-handbags/` folder anywhere on your machine.
2. Open `demo.html` in any modern browser — it links to `../../easemotion.css` relative to its location inside this repository.
3. To use outside the repo, update the stylesheet path:

```html
<!-- Inside this repo (default) -->
<link rel="stylesheet" href="../../easemotion.css" />

<!-- External / CDN -->
<link rel="stylesheet" href="/path/to/easemotion.css" />
```

4. Replace image placeholder `<div>`s with real `<img>` tags for production use.
5. Update copy, pricing, and links to match your brand.

---

## Technical Notes

- **No `@keyframes`** defined anywhere — all animation behaviour is delegated to EaseMotion classes.
- **No JavaScript frameworks** — one small inline `<script>` (18 lines) uses the native `IntersectionObserver` API to pause entrance animations until elements scroll into view, preventing everything from firing on page load.
- **No build tools** — a single HTML file with two CSS `<link>` tags, opens directly.
- **Semantic HTML5** — `<nav>`, `<header>`, `<section>`, `<article>`, `<footer>`, `<blockquote>`, `<cite>`, `<strong>`, `<figure>` used appropriately throughout.
- **Accessibility** — ARIA labels on icon-only links, `aria-label` on decorative placeholders, `role="list"` on navigation lists, `role="contentinfo"` on footer.
