# Boldface Signs — Signage Business Landing Page

A complete, copy-paste ready signage business landing page built entirely with EaseMotion CSS classes (`ease-*`). Self-contained `demo.html` — opens directly in any browser, no build step required.

## Required sections — all included

1. **Hero** — signage examples (floating tilted sign mockups: OPEN, SALE, 24/7), bold headline, dual CTA, stats
2. **Products Grid** — 4 categories: outdoor, indoor, vehicle wraps, digital displays
3. **Design Service** — 4-step process (consultation → mockup → fabrication → install) with mockup visual
4. **Industries Served** — 6 industry cards (restaurants, healthcare, corporate, retail, real estate, events)
5. **Portfolio Gallery** — 6-item recent installs gallery with hover zoom
6. **Testimonials** — 3 client reviews with star ratings
7. **Free Quote Form** — business name, phone, sign type, project details
8. **Footer** — brand, sitemap, contact

## EaseMotion classes showcased

| Class | Used for |
|---|---|
| `ease-fade-in` | Hero, section headers, quote section |
| `ease-slide-up` | Product cards, design section, industries, portfolio, reviews, form |
| `ease-delay-100` through `ease-delay-500` | Staggered entrance across products, industries, portfolio |
| `ease-hover-lift` | Showcase signs, industry cards (lift + slight rotate for bold feel) |
| `ease-hover-scale` | All buttons |
| `ease-hover-underline` | Nav links (yellow underline draw) |
| `ease-hover-zoom` | Portfolio gallery items |
| `ease-tag` + `ease-tag-bold` / `ease-tag-bold-inverse` | Section labels, hero badge |
| `ease-btn` + `ease-btn-primary` / `ease-btn-outline` / `ease-btn-light` / `ease-btn-lg` | All CTAs |
| `ease-text-gradient` | Hero headline accent phrase |

## Aesthetic
Bold visual signage business tone as specified — black (`#0a0a0a`) and signal yellow (`#facc15`) as primary brand colors, uppercase bold typography throughout, tilted "floating sign" hero visuals to evoke physical signage, high-contrast product/portfolio tiles.

## Responsive behavior
- **Desktop (>900px):** 2-column hero, 2x2 products grid, 3-column industries/portfolio/reviews
- **Tablet (≤900px):** hero stacks, design section stacks, industries/portfolio go 2-column
- **Mobile (≤640px):** nav collapses to logo + quote CTA, form fields stack, industries/portfolio single column

## Accessibility
- Respects `prefers-reduced-motion` — all entrance/hover animations disabled
- Semantic HTML (`<header>`, `<nav>`, `<section>`, `<form>`, `<footer>`)
- Properly labeled form fields, native form controls for keyboard accessibility

## Notes
- All product/portfolio images use bold CSS gradients (yellow/orange/red/blue/green/purple) — zero external image dependencies
- Realistic signage-business copy throughout (product categories, install stats, client names) — no lorem ipsum
- Quote form is styled but intentionally non-functional, as specified
- Single `style.css` file, zero JavaScript, zero custom keyframes — only existing EaseMotion utility patterns
