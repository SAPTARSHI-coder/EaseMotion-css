# PureBloom — Vegan Beauty Brand Landing Page

A complete, copy-paste-ready e-commerce landing page for a premium clean vegan skincare brand. Designed with a botanical minimal aesthetic inspired by The Ordinary, Herbivore Botanicals, Youth To The People, Biossance, and Cocokind. Built with semantic HTML5 and EaseMotion CSS animation utility classes exclusively.

---

## Screenshot Placeholder

> Open `demo.html` directly in any modern browser — no build tools, server, or dependencies required.

```
┌────────────────────────────────────────────────────────────┐
│  ✿ PureBloom   Shop  Ingredients  Routine  About  Contact  │
├────────────────────────────────────────────────────────────┤
│                        │  🌱 100%   │                      │
│  Skin That Feels       │ ┌─────────┐│  ⭐ 4.9             │
│  as Good as It Looks   │ │Serum    ││  2,400+ Reviews     │
│                        │ │Cream    ││                      │
│  [Shop Collection]     │ │Oil      ││                      │
│  Build Your Routine →  │ └─────────┘│                      │
│  🌿 No Parabens · 🐇 Cruelty Free · ♻️ Eco Packaging       │
├────────────────────────────────────────────────────────────┤
│  Products · Ingredients · Certifications · Reviews · CTA   │
└────────────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
vegan-beauty-brand/
├── demo.html    ← Complete landing page
├── style.css    ← Layout, colour, typography, spacing (no @keyframes)
└── README.md    ← This file
```

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Navigation** | Sticky frosted nav — leaf logo, 5 links, Shop Now CTA |
| 2 | **Hero** | Split layout — CSS product shelf mockup (3 bottles) + floating badges, editorial headline |
| 3 | **Products Grid** | 6 product cards (Cleanser, Vitamin C Serum, Barrier Cream, Face Oil, SPF 50, Clay Mask) |
| 4 | **Ingredient Transparency** | 6 glassmorphism cards with benefits and "Found in" callouts |
| 5 | **Certifications** | 6 animated badge cards (Vegan, Cruelty Free, Derm Tested, Recyclable, Clean, Eco) |
| 6 | **Customer Reviews** | 3 testimonial cards with star ratings and aggregate score |
| 7 | **Routine Builder CTA** | Full-width dark forest section with 3-step visual + pulsing orb decorations |
| 8 | **Footer** | Shop · Ingredients · Sustainability · Help Center + social + legal |

---

## EaseMotion Classes Demonstrated

### Entrance Animations
| Class | Used on |
|---|---|
| `ease-fade-in` | Nav, hero kicker/trust bar/float badges, reviews aggregate, footer |
| `ease-slide-up` | Hero headline, subtitle, CTAs, all section headers, product cards, ingredient cards, routine CTA content |
| `ease-slide-in-right` | Hero product shelf card |
| `ease-zoom-in` | Certification badge cards |

### Hover Effects
| Class | Used on |
|---|---|
| `ease-hover-lift` | Nav Shop Now button, hero CTAs, product cards, ingredient cards, cert badges, review cards, routine step button, social links |
| `ease-hover-grow` | Hero bottle mocks (individual product in the shelf mockup) |
| `ease-hover-glow` | Primary CTA buttons (hero Shop Collection, routine Start button) |
| `ease-hover-underline` | Nav links, footer links |

### Looping / Continuous Animations
| Class | Used on |
|---|---|
| `ease-pulse` | Decorative botanical orbs in Routine CTA section |
| `ease-float` | Decorative ✿ ornament in Routine CTA section |

### Glassmorphism
| Class | Used on |
|---|---|
| `ease-glass-card` | Ingredient transparency cards, customer review cards |

### Delay Staggering
| Class | Used on |
|---|---|
| `ease-delay-100` through `ease-delay-700` | Hero elements, product grid, ingredient grid, certification grid, review cards |
| `ease-delay-150`, `ease-delay-300`, `ease-delay-400`, `ease-delay-500` | Certification badges at finer intervals |

---

## Responsive Support

| Breakpoint | Behaviour |
|---|---|
| **Mobile** (`< 480px`) | Single column, stacked hero copy, vertical CTAs, vertical trust bar, vertical routine steps |
| **Tablet** (`480–860px`) | 2-column grids, mobile nav toggle, 3-column cert grid |
| **Desktop** (`≥ 860px`) | Full layouts — 3-column products, 3-column ingredients, 6-column certs, side-by-side hero |

---

## Design Language

| Token | Value | Purpose |
|---|---|---|
| `--cream` | `#faf8f3` | Base page background |
| `--ivory` | `#f5f2eb` | Alternate section surface |
| `--sage` | `#7a9e7e` | Primary botanical accent |
| `--forest` | `#2d4a35` | Dark CTAs and deep text |
| `--bg-sage` | `#e0ebe1` | Ingredients section background |
| `--bg-dark` | `#1a2e1d` | Routine CTA dark forest background |
| `--charcoal` | `#272520` | Footer background |
| **Headings** | Georgia serif | Elegant, editorial feel |
| **Body** | System sans-serif | Clean, modern readability |

---

## Usage Instructions

1. Copy the `vegan-beauty-brand/` folder anywhere.
2. Open `demo.html` directly in any modern browser.
3. The page links to EaseMotion CSS via `../../easemotion.css` relative to its location inside this repository. To use outside the repo, update:

```html
<!-- Default (inside repo) -->
<link rel="stylesheet" href="../../easemotion.css" />

<!-- External path or CDN -->
<link rel="stylesheet" href="/assets/easemotion.css" />
```

4. Replace CSS bottle mockup markup with real product photography (`<img>` tags).
5. Update product names, prices, descriptions, and ingredient details to match your catalogue.
6. Wire up the "Shop Now" / "Add to Bag" links to your e-commerce platform (Shopify, WooCommerce, etc.).

---

## Technical Notes

- **No `@keyframes`** — zero custom animation definitions in `style.css`. All animation behaviour provided entirely by EaseMotion classes.
- **No JavaScript frameworks** — a single 18-line inline `<script>` uses native `IntersectionObserver` to pause entrance animations off-screen and resume them on scroll, preventing all animations from firing on page load.
- **No build tools** — opens directly as a static HTML file.
- **Semantic HTML5** — `<nav>`, `<header>`, `<section>`, `<article>`, `<footer>`, `<blockquote>`, `<cite>` used throughout.
- **Accessible** — ARIA labels on icon-only navigation links and image placeholder containers, `role="list"` on navigation lists, `aria-label` on star ratings, `role="contentinfo"` on footer.
