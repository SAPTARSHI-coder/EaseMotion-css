# Ember & Vine — Restaurant Landing Page

A complete, ready-to-copy restaurant/dining business landing page built entirely with EaseMotion CSS classes (`ease-*`). Self-contained — open `demo.html` directly in any browser, no build step.

## Sections included

1. **Hero** — headline with `ease-text-gradient`, dual CTA (reserve/view menu), hours + location strip, food-image placeholder
2. **Animated Menu** — 3 staggered columns (Starters, Mains, Desserts) with prices
3. **Chef/Story Section** — founder bio with image + signature
4. **Gallery** — 6-item dish gallery with hover zoom
5. **Reservation Form** — name, phone, date (styled date picker), time, party size, special requests
6. **Location & Hours** — map placeholder + full weekly hours breakdown
7. **Reviews Carousel** — 3 customer reviews with star ratings
8. **Footer** — brand, sitemap, contact

## EaseMotion classes showcased

| Class | Used for |
|---|---|
| `ease-fade-in` | Hero, section headers, hours strip |
| `ease-slide-up` | Menu columns, story, gallery items, reviews, form |
| `ease-delay-100` through `ease-delay-500` | Staggered entrance across menu, gallery, reviews |
| `ease-hover-lift` | (available for review/menu cards) |
| `ease-hover-scale` | All buttons |
| `ease-hover-underline` | Nav links |
| `ease-hover-zoom` | Gallery dish images |
| `ease-tag` + `ease-tag-warm` | Section labels |
| `ease-btn` + `ease-btn-primary` / `ease-btn-outline` / `ease-btn-lg` | All CTAs |
| `ease-text-gradient` | Hero headline accent word ("fire") |
| `ease-date-input` | Styled date picker icon with hover scale |

## Color palette
Warm, food-forward: terracotta (`#c2410c`), amber (`#f59e0b`), cream background (`#fffaf3`), deep brown text (`#2d1b0e`) — matching the wood-fired restaurant brief.

## Responsive behavior
- **Desktop (>900px):** two-column hero, 3-column menu/gallery/reviews
- **Tablet/Mobile (≤900px):** hero stacks, menu/story/gallery/location/reviews collapse to single or 2-column
- **Mobile (≤640px):** nav collapses to logo + reserve button, form fields stack, gallery single column

## Accessibility
- Respects `prefers-reduced-motion` — all animations and hover transitions disabled
- Semantic HTML (`<header>`, `<nav>`, `<section>`, `<form>`, `<footer>`)
- Form labels properly associated, native form controls for keyboard accessibility

## Notes
- All food/dish images use CSS gradients (warm tones: orange, amber, red) — no external image dependencies
- Realistic restaurant copy throughout — specific dish names, prices, hours (no lorem ipsum)
- Reservation form is styled but intentionally non-functional, as specified
- Single `style.css` file, zero JavaScript
