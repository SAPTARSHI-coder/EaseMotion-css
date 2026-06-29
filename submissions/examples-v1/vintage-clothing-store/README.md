# Retro Revival — Vintage Clothing Store Landing Page

A complete, copy-paste-ready e-commerce landing page for a curated vintage clothing boutique. Designed with a warm Americana editorial aesthetic inspired by 70s/80s fashion, thrift boutiques, and film photography. Built with semantic HTML5 and EaseMotion CSS animation utility classes only.

---

## Screenshot Placeholder

> Open `demo.html` directly in any modern browser — no server, build tools, or dependencies required.

```
┌─────────────────────────────────────────────────────────┐
│  ✿ Retro Revival   Shop  Collections  Journal  About    │
├────────────────────────────────────────────────────────┤
│  1987 · EST. · 1987 · EST. · 1987 · EST. ·             │
│  ┌───────────────────┐  Handpicked · Preloved           │
│  │                   │                                   │
│  │   New Arrivals    │  Dress Like Yesterday            │
│  │       👗          │  Never Looked Better             │
│  │ ┌─────────┐       │                                  │
│  │ │One of a │  247  │  [Shop Collection] [Our Story]   │
│  │ │  Kind   │pieces │                                  │
│  └─┴─────────┴───────┘                                  │
├─────────────────────────────────────────────────────────┤
│  Products · Guide · Story · Journal · Newsletter        │
└─────────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
vintage-clothing-store/
├── demo.html    ← Complete vintage landing page
├── style.css    ← Layout, colour, typography, spacing (no @keyframes)
└── README.md    ← This file
```

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Navigation** | Sticky frosted nav — logo, 5 links, Shop Vintage CTA, mobile toggle |
| 2 | **Hero** | Editorial split layout — stacked images with film-strip accent, headline, two CTAs |
| 3 | **Products Grid** | 6 product cards (Denim Jacket, Leather Boots, Graphic Tee, Overcoat, Cords, Maxi Dress) |
| 4 | **Condition Guide** | 4 glassmorphism cards explaining grading system + measurements |
| 5 | **Sourcing Story** | Dark section — image stack, sourcing badge, 4 source pillars |
| 6 | **Journal / Style Tips** | 3 editorial article cards with category badges and read-time |
| 7 | **Newsletter** | Dark CTA box with email form, subscriber perks, decorative elements |
| 8 | **Footer** | Shop · Collections · Customer Care columns + social links + legal |

---

## EaseMotion Classes Demonstrated

### Entrance Animations
| Class | Used on |
|---|---|
| `ease-fade-in` | Nav, film strip, hero tag, hero eyebrow, sourcing badge, newsletter decoration, footer |
| `ease-slide-up` | Hero headline, subtitle, CTAs, section headers, product cards, journal cards |
| `ease-slide-in-left` | Hero image, sourcing story image column |
| `ease-slide-in-from-bottom-left` | Hero inset accent image |

### Hover Effects
| Class | Used on |
|---|---|
| `ease-hover-lift` | Nav Shop button, hero buttons, product cards, guide cards, source list items, journal cards, social links, footer links, newsletter button |
| `ease-hover-grow` | Sourcing story images |
| `ease-hover-glow` | Primary CTA buttons (hero, newsletter) |
| `ease-hover-underline` | Nav links, journal article links, footer links |

### Looping / Continuous Animations
| Class | Used on |
|---|---|
| `ease-pulse` | Decorative circles in newsletter section |
| `ease-float` | Decorative star in newsletter section |

### Glassmorphism
| Class | Used on |
|---|---|
| `ease-glass-card` | Condition guide cards |

### Delay Staggering
| Class | Used on |
|---|---|
| `ease-delay-100` through `ease-delay-600` | Staggered entrance on hero elements, product grid, guide grid, journal grid |

---

## Responsive Support

| Breakpoint | Behaviour |
|---|---|
| **Mobile** (`< 480px`) | Single column, stacked hero, vertical form, hidden nav links, hidden inset image |
| **Tablet** (`480–860px`) | 2-column product grid, 2-column guide grid, 2-column journal grid, mobile nav toggle |
| **Desktop** (`≥ 860px`) | Full layouts — 3-column products, 4-column guide, side-by-side story and personalisation |

---

## Design Language

| Token | Value | Purpose |
|---|---|---|
| `--cream` | `#faf7f0` | Base page background |
| `--parchment` | `#f2ebe0` | Alternate section background |
| `--charcoal` | `#2c2822` | Primary text & dark backgrounds |
| `--olive` | `#6b7c5c` | Accent colour (eyebrows, CTAs) |
| `--rust` | `#b85c3a` | Hero italic accent, brand warmth |
| `--mustard` | `#c4972a` | Stars, stats, highlight touches |
| **Headings** | Georgia serif | Editorial vintage feel |
| **Body** | System sans-serif | Clean, readable UI text |

---

## Usage Instructions

1. Copy the `vintage-clothing-store/` folder to any location.
2. Open `demo.html` in any modern browser — it links to EaseMotion CSS via relative path `../../easemotion.css` (correct from inside this repository).
3. To use outside this repository, update the link tag:

```html
<!-- Default (inside repo) -->
<link rel="stylesheet" href="../../easemotion.css" />

<!-- Custom path or CDN -->
<link rel="stylesheet" href="/assets/easemotion.css" />
```

4. Replace image placeholder `<div>` elements with real `<img>` tags pointing to your product photography.
5. Wire the newsletter `<form>` to your email service provider (Mailchimp, ConvertKit, etc.).
6. Update product names, prices, and descriptions to reflect your inventory.

---

## Technical Notes

- **No `@keyframes`** — zero custom animation definitions. All animation behaviour is provided by EaseMotion classes.
- **No JavaScript frameworks** — one 18-line inline `<script>` uses the native `IntersectionObserver` API to pause entrance animations until elements scroll into view, preventing all animations from firing on page load.
- **No build tools** — open `demo.html` directly, no npm, webpack, or server required.
- **Semantic HTML5** — `<nav>`, `<header>`, `<section>`, `<article>`, `<footer>`, `<form>`, `<time>`, `<blockquote>` used throughout.
- **Accessible** — ARIA labels on icon-only links and image placeholders, `role="list"` on navigation and product lists, `<label>` associated with the email input via `for`/`id`, `<time>` element with `datetime` on journal dates.
