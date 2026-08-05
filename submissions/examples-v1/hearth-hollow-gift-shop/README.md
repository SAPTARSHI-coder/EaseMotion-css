# Hearth & Hollow — Specialty Gift Shop Page

A complete, copy-paste-ready landing page for a curated gift retail shop, built using only `ease-*` classes — no external animation libraries, no custom keyframes outside this file.

## Structure

```
hearth-hollow-gift-shop/
├── demo.html
├── style.css
└── README.md
```

## Sections Included

1. **Hero** — gift-tag style product imagery with entrance animation
2. **Collections by Occasion** — 4 occasion-based category cards
3. **Personalization** — 4-step process + live engraving preview
4. **Corporate Gifting CTA** — bulk-order quote form
5. **Reviews** — 3 customer testimonials
6. **Loyalty Program** — 3-tier system + points ring
7. **Newsletter Signup** — email capture with perk pills
8. **Footer** — sitemap, social links, business info

## `ease-*` Classes Showcased

### Entrance Animations
| Class | Effect |
|---|---|
| `.ease-fade-up` | Fades in while rising from below |
| `.ease-fade-in` | Simple opacity fade |
| `.ease-scale-in` | Scales up from 92% while fading in |
| `.ease-tag-drop` | Drops in with a slight rotation (gift-tag effect) |
| `.ease-float` | Continuous gentle floating loop |
| `.ease-shimmer` | Animated gradient sweep (used on gold accents) |
| `.ease-delay-1` → `.ease-delay-6` | Staggers entrance timing (0.1s–0.7s) |
| `.ease-reveal` + `.ease-in-view` | Scroll-triggered reveal (toggled via IntersectionObserver) |

### Hover Interactions
| Class | Effect |
|---|---|
| `.ease-hover-lift` | Lifts element with shadow on hover |
| `.ease-hover-tilt` | Subtle rotation correction + scale on hover |
| `.ease-hover-grow` | Scales element up on hover |
| `.ease-hover-underline` | Animated underline sweep on nav links |
| `.ease-btn-pulse` | Pulsing ring animation (used on corporate CTA button) |

### Components & Layout
| Class | Effect |
|---|---|
| `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline` | Button variants with motion on hover |
| `.ease-card` | Base card styling (white, rounded, bordered) |
| `.ease-container` | Max-width centered content wrapper |
| `.ease-section` | Consistent vertical section spacing |
| `.ease-grid`, `.ease-grid-2/3/4` | Responsive grid helpers |
| `.ease-flex-center`, `.ease-flex-between` | Flexbox alignment helpers |
| `.ease-eyebrow` | Small uppercase label above headings |
| `.ease-h2` | Responsive section heading scale |
| `.ease-lede` | Muted intro paragraph styling |

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="ease-card ease-reveal ease-hover-lift">
  <h3>Your content</h3>
</div>
```

Scroll-reveal requires the small inline script in `demo.html` that toggles `.ease-in-view` via `IntersectionObserver` — copy that block along with the CSS if reusing `.ease-reveal` elsewhere.

## Why It Fits EaseMotion CSS

Every interaction — entrance, hover, scroll-reveal — is expressed as a composable, human-readable `ease-*` class rather than inline styles or one-off animations. The page demonstrates the framework's philosophy at full scale: a real, content-rich site assembled entirely from small, reusable motion primitives.

## Responsive Behavior

- **Desktop (>1024px):** 4-column collection grid, side-by-side hero/personalize/corporate layouts
- **Tablet (640–1024px):** 2-column grids, stacked hero
- **Mobile (<640px):** Single/double column grids, stacked nav links hidden behind logo, full-width forms

## Accessibility

- Respects `prefers-reduced-motion` — all animations and transitions disable gracefully
- Visible focus states on form inputs
- Semantic HTML (`nav`, `header`, `section`, `footer`)
- Descriptive `alt` text on all images

## Browser Testing

- Chrome
- Firefox
- Edge