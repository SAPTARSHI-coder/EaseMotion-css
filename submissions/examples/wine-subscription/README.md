# Wine Subscription — EaseMotion CSS Demo

Resolves #22786 — Advanced: E-commerce — Subscription Box — Wine

A complete, copy-paste-ready full-page site for **Terroiriste**, a sommelier-curated wine discovery subscription. Built entirely with `ease-*` classes — no custom keyframes outside the framework, no dependencies, no build step.

## Preview

Open `demo.html` directly in any modern browser.

---

## Sections

| Section | Description |
|---|---|
| **Announce Bar** | Promo strip with discount code |
| **Navbar** | Fixed dark nav with gold logo, links, CTA, mobile hamburger, scroll-shrink |
| **Hero** | Full-viewport split with SVG wine bottle, floating price/rating tags, ambient orbs |
| **Stats Bar** | 4-column dark grid: members, wines, regions, satisfaction |
| **Curation Approach** | 4 process steps + sommelier team card with avatars |
| **Past Wine Reveals** | 3 wine cards with varietal, tasting notes, ratings, filter pills |
| **Pricing Plans** | 3 tier cards (Explorer / Connoisseur / Sommelier) with featured highlight |
| **Member Reviews** | 3 testimonials + 4.9★ aggregate rating breakdown |
| **Subscribe CTA** | Dark hero with email signup form and trust indicators |
| **FAQ Accordion** | 6 questions with animated open/close, single-open logic |
| **Footer** | 4-column dark footer with social buttons, nav, and contact |

---

## EaseMotion CSS Classes Showcased

### Layout
| Class | Purpose |
|---|---|
| `ease-container` | Centered max-width wrapper |
| `ease-section`, `ease-section-sm` | Vertical padding blocks |
| `ease-section-alt`, `ease-section-cream`, `ease-section-dark`, `ease-section-wine`, `ease-section-parchment` | Background variants |
| `ease-grid-2`, `ease-grid-3`, `ease-grid-4` | Responsive grid systems |
| `ease-flex`, `ease-flex-center`, `ease-flex-between`, `ease-flex-col` | Flex layout utilities |
| `ease-flex-wrap`, `ease-flex-gap-2` through `ease-flex-gap-8` | Flex gap + wrap |
| `ease-items-center`, `ease-items-start` | Flex alignment |
| `ease-text-center`, `ease-w-full`, `ease-relative`, `ease-overflow-hidden` | Misc layout |

### Typography
| Class | Purpose |
|---|---|
| `ease-heading-display` | Fluid italic display headline |
| `ease-heading-xl`, `ease-heading-lg`, `ease-heading-md`, `ease-heading-sm`, `ease-heading-xs` | Heading scale |
| `ease-text-muted`, `ease-text-light`, `ease-text-wine`, `ease-text-gold`, `ease-text-white`, `ease-text-cream` | Colour modifiers |
| `ease-text-lg`, `ease-text-sm`, `ease-text-xs` | Size utilities |
| `ease-font-sans`, `ease-font-serif`, `ease-font-italic` | Font family/style |
| `ease-font-medium`, `ease-font-semibold`, `ease-font-bold` | Weight utilities |
| `ease-tracking-wide`, `ease-tracking-widest`, `ease-uppercase` | Letter spacing |
| `ease-leading-relaxed` | Line-height modifier |

### Entrance Animations (scroll-triggered via `ease-in-view`)
| Class | Effect |
|---|---|
| `ease-fade-up` | Fade + translate Y upward |
| `ease-fade-in` | Opacity fade |
| `ease-slide-left` | Slide in from left |
| `ease-slide-right` | Slide in from right |
| `ease-scale-in` | Scale from 0.9 to 1 |
| `ease-pop-in` | Bounce pop with slight rotation |
| `ease-delay-1` … `ease-delay-7` | Stagger delays (.1s–.7s) |

### Continuous Animations
| Class | Effect |
|---|---|
| `ease-float` | Gentle vertical float loop |
| `ease-glimmer` | Slow opacity pulse loop |

### Hover Interactions
| Class | Effect |
|---|---|
| `ease-hover-lift` | translateY(−8px) + deeper shadow |
| `ease-hover-lift-sm` | translateY(−4px) + medium shadow |
| `ease-hover-scale` | scale(1.04) |
| `ease-hover-glow-wine` | Wine-toned ring glow |
| `ease-hover-glow-gold` | Gold ring glow |
| `ease-hover-border-gold` | Border turns gold on hover |
| `ease-hover-gold` | Text turns gold on hover |
| `ease-hover-wine` | Text turns wine on hover |
| `ease-hover-bg-wine` | Background fills wine on hover |
| `ease-hover-opacity` | Fades to 80% opacity |

### Components
| Class | Description |
|---|---|
| `ease-btn`, `ease-btn-wine`, `ease-btn-gold`, `ease-btn-outline-wine`, `ease-btn-outline-gold`, `ease-btn-outline-white` | Button variants |
| `ease-btn-lg`, `ease-btn-sm` | Button sizes |
| `ease-badge`, `ease-badge-gold`, `ease-badge-wine`, `ease-badge-dark`, `ease-badge-cream`, `ease-badge-sold` | Badge variants |
| `ease-navbar`, `ease-navbar-scrolled` | Fixed navigation |
| `ease-wine-card`, `ease-wine-card-image`, `ease-wine-card-body` | Wine product card |
| `ease-wine-meta`, `ease-wine-meta-sep`, `ease-wine-type-dot` | Card metadata row |
| `ease-tasting-notes`, `ease-tasting-note` | Flavour tag pills |
| `ease-rating-stars` | Star rating display |
| `ease-pricing-card`, `ease-pricing-card-featured` | Pricing tier cards |
| `ease-pricing-header`, `ease-pricing-header-gold` | Card header variants |
| `ease-pricing-price`, `ease-pricing-list`, `ease-list-muted` | Pricing content |
| `ease-review-card`, `ease-review-quote-mark`, `ease-review-text`, `ease-review-author` | Testimonial card |
| `ease-avatar`, `ease-member-since` | Author display |
| `ease-process-step`, `ease-process-num` | Curation process steps |
| `ease-sommelier-card` | Dark featured content card |
| `ease-cta-box`, `ease-email-row`, `ease-email-input` | Subscribe CTA section |
| `ease-faq-item`, `ease-faq-trigger`, `ease-faq-icon`, `ease-faq-body`, `ease-faq-answer` | Accordion FAQ |
| `ease-stat-row`, `ease-stat-cell`, `ease-stat-number`, `ease-stat-label` | Stats bar |
| `ease-bottle-card`, `ease-float-tag` | Hero wine bottle frame |
| `ease-label`, `ease-label-wine`, `ease-label-white`, `ease-label-muted` | Section eyebrow labels |
| `ease-divider`, `ease-divider-center`, `ease-divider-wine`, `ease-divider-white` | Decorative dividers |
| `ease-tag-pill` | Filter / category pills |
| `ease-social-btn` | Social icon buttons |
| `ease-card`, `ease-card-body` | Generic card |
| `ease-announce-bar` | Promo strip |

---

## File Structure

```
submissions/examples/wine-subscription/
├── demo.html     ← Full page, opens directly in browser
├── style.css     ← All ease-* classes defined here
└── README.md     ← This file
```

## Checklist

- ✅ Single `demo.html` — no build step, no npm, zero dependencies
- ✅ Only `ease-*` classes throughout
- ✅ Fully responsive: 320px mobile → 1400px+ desktop
- ✅ Scroll-triggered entrance animations via `IntersectionObserver`
- ✅ Continuous animations: `ease-float`, `ease-glimmer`
- ✅ Hover interactions on every interactive element
- ✅ Realistic content — no lorem ipsum
- ✅ FAQ accordion with JS open/close and single-open logic
- ✅ Filter pills with active state
- ✅ Subscribe form with validation feedback
- ✅ `@media (prefers-reduced-motion)` respected
- ✅ Sophisticated dark wine-discovery aesthetic

## Resolves

Issue [#22786](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22786) — Advanced: E-commerce — Subscription Box — Wine