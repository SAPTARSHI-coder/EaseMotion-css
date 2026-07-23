# Yoga Wellness Store — EaseMotion CSS Demo

A complete, copy-paste-ready full-page e-commerce site for **Sattva Studio**, a premium yoga and wellness brand. Built entirely with `ease-*` classes — no custom keyframes outside the framework, no dependencies, no build step.

## Preview

Open `demo.html` directly in any modern browser.

---

## Sections

| Section | Description |
|---|---|
| **Announce Bar** | Promo strip with discount code |
| **Navbar** | Fixed nav with cart icon, CTA, mobile toggle, scroll-shrink |
| **Hero** | Full-viewport split layout with animated SVG illustration, floating product tags |
| **Brand Values** | 4-column icon trust bar |
| **Products** | 8-card product grid with quick-add, wishlist, badge labels, filter tabs |
| **Yoga Style Guide** | 3 style cards (Hatha, Vinyasa, Yin) + comparison table |
| **Community / Classes** | Dark section with live class schedule cards and CTA |
| **Reviews** | 3 testimonials + star rating breakdown bar chart |
| **Subscription Box** | Split CTA with email signup form and box preview |
| **Footer** | 4-column footer with social links, nav, and contact |

---

## EaseMotion CSS Classes Showcased

### Layout
| Class | Purpose |
|---|---|
| `ease-container` | Centered max-width wrapper |
| `ease-section`, `ease-section-sm` | Vertical padding blocks |
| `ease-section-alt`, `ease-section-warm`, `ease-section-dark` | Background variants |
| `ease-grid-2`, `ease-grid-3`, `ease-grid-4`, `ease-grid-auto` | Responsive grid layouts |
| `ease-flex`, `ease-flex-center`, `ease-flex-between`, `ease-flex-col` | Flex utilities |
| `ease-flex-wrap`, `ease-flex-gap-2` through `ease-flex-gap-8` | Flex gap + wrap |
| `ease-items-start`, `ease-items-center` | Flex alignment |
| `ease-text-center`, `ease-w-full`, `ease-relative`, `ease-overflow-hidden` | Misc layout |

### Typography
| Class | Purpose |
|---|---|
| `ease-heading-display` | Fluid italic display headline |
| `ease-heading-xl`, `ease-heading-lg`, `ease-heading-md`, `ease-heading-sm`, `ease-heading-xs` | Heading scale |
| `ease-text-muted`, `ease-text-light`, `ease-text-primary`, `ease-text-accent`, `ease-text-white` | Colour modifiers |
| `ease-text-lg`, `ease-text-sm`, `ease-text-xs` | Size modifiers |
| `ease-font-sans`, `ease-font-serif`, `ease-font-italic` | Font family/style |
| `ease-font-medium`, `ease-font-semibold`, `ease-font-bold` | Weight utilities |
| `ease-tracking-wide`, `ease-tracking-widest`, `ease-uppercase` | Letter spacing |
| `ease-leading-relaxed` | Line height modifier |

### Animations — Entrance (scroll-triggered via `ease-in-view`)
| Class | Effect |
|---|---|
| `ease-fade-up` | Fade + translate Y upward |
| `ease-fade-in` | Opacity fade in |
| `ease-slide-left` | Slide in from left |
| `ease-slide-right` | Slide in from right |
| `ease-scale-in` | Scale from 0.9 to 1 |
| `ease-delay-1` … `ease-delay-7` | Stagger delay utilities |

### Continuous Animations
| Class | Effect |
|---|---|
| `ease-float` | Gentle vertical float loop |
| `ease-breathe` | Gentle scale pulse loop |
| `ease-spin-slow` | 20s full rotation loop |

### Hover Interactions
| Class | Effect |
|---|---|
| `ease-hover-lift` | translateY(−8px) + larger shadow |
| `ease-hover-lift-sm` | translateY(−4px) + medium shadow |
| `ease-hover-scale` | scale(1.05) |
| `ease-hover-scale-sm` | scale(1.02) |
| `ease-hover-glow` | Green ring glow |
| `ease-hover-glow-accent` | Amber ring glow |
| `ease-hover-border` | Border turns primary on hover |
| `ease-hover-accent` | Text turns accent on hover |
| `ease-hover-primary` | Text turns primary on hover |
| `ease-hover-bg-primary` | Fill background with primary |
| `ease-hover-opacity` | Fade to 80% opacity |
| `ease-hover-underline` | Underline on hover |

### Components
| Class | Description |
|---|---|
| `ease-btn`, `ease-btn-primary`, `ease-btn-accent`, `ease-btn-outline`, `ease-btn-outline-white`, `ease-btn-ghost` | Button variants |
| `ease-btn-lg`, `ease-btn-sm`, `ease-btn-icon` | Button sizes |
| `ease-badge`, `ease-badge-sage`, `ease-badge-accent`, `ease-badge-primary`, `ease-badge-new`, `ease-badge-sale` | Badge variants |
| `ease-navbar`, `ease-navbar-scrolled` | Navigation bar |
| `ease-product-card`, `ease-product-image`, `ease-product-body`, `ease-product-quick-add` | Product card |
| `ease-style-card`, `ease-style-card-bg`, `ease-style-card-overlay`, `ease-style-card-content` | Style guide cards |
| `ease-class-card`, `ease-class-level`, `ease-level-beginner`, `ease-level-all`, `ease-level-advanced` | Class schedule cards |
| `ease-review-card`, `ease-review-stars`, `ease-review-quote`, `ease-review-author` | Testimonial cards |
| `ease-sub-box`, `ease-sub-form`, `ease-sub-input`, `ease-sub-perk` | Subscription section |
| `ease-icon-circle`, `ease-icon-circle-primary`, `ease-icon-circle-accent`, `ease-icon-circle-sage` | Icon containers |
| `ease-avatar-circle` | Author avatar |
| `ease-tag-pill` | Filter / category pills |
| `ease-progress-bar`, `ease-progress-fill` | Rating bar |
| `ease-social-btn` | Social media icon button |
| `ease-divider`, `ease-divider-center`, `ease-divider-primary` | Section dividers |
| `ease-label`, `ease-label-primary`, `ease-label-white` | Section eyebrow labels |
| `ease-card`, `ease-card-body` | Generic card |
| `ease-form-control` | Form input field |

### Design Tokens Used
```css
--ease-color-primary / primary-dark / primary-light
--ease-color-accent / accent-light
--ease-color-warm, --ease-color-sage, --ease-color-lavender, --ease-color-gold
--ease-color-surface / surface-alt / surface-warm / surface-dark
--ease-color-text / text-muted / text-light
--ease-color-border / border-light
--ease-radius-sm / md / lg / xl / full
--ease-shadow-sm / md / lg / xl / warm
--ease-transition-fast / base / slow / breath
--ease-text-xs through --ease-text-6xl
```

---

## File Structure

```
submissions/examples/yoga-wellness-store/
├── demo.html     ← Full page, open directly in browser
├── style.css     ← All ease-* classes defined here
└── README.md     ← This file
```

## Checklist

- ✅ Single `demo.html` — no build step, no npm, zero dependencies
- ✅ Only `ease-*` classes throughout
- ✅ Fully responsive: 320px mobile → 1400px desktop
- ✅ Scroll-triggered entrance animations via `IntersectionObserver`
- ✅ Continuous animations: float, breathe
- ✅ Hover interactions on every interactive element
- ✅ Realistic content — no lorem ipsum
- ✅ Interactive JS: wishlist toggle, quick-add feedback, subscribe form, mobile menu
- ✅ Calm wellness aesthetic with earthy greens and warm terracottas

## Resolves

Issue [#22756](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22756) — Advanced: E-commerce — Yoga Wellness Products