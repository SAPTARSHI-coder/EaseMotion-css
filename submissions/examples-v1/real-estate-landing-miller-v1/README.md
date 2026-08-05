# Harbor & Stone Realty — Real Estate Agency Landing Page

A complete, ready-to-copy real estate business landing page built entirely with EaseMotion CSS classes (`ease-*`). Self-contained — open `demo.html` directly in any browser, no build step.

## Sections included

1. **Hero** — headline with `ease-text-gradient`, styled property search bar (location, type, budget), live stats
2. **Featured Listings Grid** — 6 property cards with hover lift, price tags, status badges
3. **Why Choose Us** — 4-card value proposition grid
4. **Agent Profiles** — 3 agent cards with bio, sales count, rating
5. **Neighborhood Showcase** — 4 neighborhood cards with hover zoom and gradient overlays
6. **Testimonials** — 3 buyer/seller reviews with avatar and context
7. **Contact CTA** — dark gradient closing section with dual buttons
8. **Footer** — brand, sitemap links, contact info

## EaseMotion classes showcased

| Class | Used for |
|---|---|
| `ease-fade-in` | Section headers, hero entrance, CTA section |
| `ease-slide-up` | Cards, listings, agent profiles, testimonials |
| `ease-delay-100` through `ease-delay-500` | Staggered entrance timing across grids |
| `ease-hover-lift` | Listing cards, agent cards (translateY + shadow) |
| `ease-hover-scale` | All buttons |
| `ease-hover-underline` | Nav links (animated underline draw) |
| `ease-hover-zoom` | Neighborhood cards |
| `ease-tag` + color variants | Badges (New, Open House, section labels) |
| `ease-btn` + `ease-btn-primary` / `ease-btn-outline` / `ease-btn-lg` | All CTAs |
| `ease-text-gradient` | Hero headline accent word |

## Responsive behavior
- **Desktop (>768px):** full multi-column grids, full nav
- **Mobile (≤768px):** nav collapses to logo + CTA button, search bar stacks vertically, grids collapse to single column, footer stacks

## Accessibility
- Respects `prefers-reduced-motion` — all entrance animations and hover transitions disabled
- Semantic HTML (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- All interactive elements keyboard-focusable by default (native `<button>`, `<a>`, `<input>`, `<select>`)

## Notes
- All placeholder property images use CSS gradients (no external image dependencies, loads instantly)
- Copy is realistic, specific placeholder content — no lorem ipsum
- Search bar and buttons are styled but non-functional, as specified
- Single `style.css` file, zero JavaScript
