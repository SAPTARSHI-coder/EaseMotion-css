# Sterling Notary Services — Professional Services Landing Page

A complete, copy-paste ready mobile notary public landing page built entirely with EaseMotion CSS classes (`ease-*`). Self-contained `demo.html` — opens directly in any browser, no build step required.

## Required sections — all included

1. **Hero** — trusted documentation messaging, commissioned/bonded credibility badge, dual CTA
2. **Services** — 6 service cards: real estate closings, power of attorney, affidavits, mobile visits, business documents, senior/care facility visits
3. **Pricing** — 3-tier pricing per document type (single document, POA, real estate closing) with a featured/highlighted middle tier
4. **Service Area** — map placeholder, list of covered towns, weekly hours
5. **Reviews** — 3 client testimonials with star ratings
6. **Online Booking CTA** — full booking form (name, document type, date, time, address)
7. **Footer** — brand, sitemap, contact, commission number

## EaseMotion classes showcased

| Class | Used for |
|---|---|
| `ease-fade-in` | Hero, section headers, booking section |
| `ease-slide-up` | Service cards, pricing cards, area info, reviews, booking form |
| `ease-delay-100` through `ease-delay-500` | Staggered entrance across services, pricing, reviews |
| `ease-hover-lift` | Service cards, pricing cards, review cards |
| `ease-hover-scale` | All buttons |
| `ease-hover-underline` | Nav links |
| `ease-tag` + `ease-tag-trust` / `ease-tag-trust-inverse` | Credibility badges, section labels, pricing "Most Booked" badge |
| `ease-btn` + `ease-btn-primary` / `ease-btn-outline` / `ease-btn-light` / `ease-btn-lg` | All CTAs |
| `ease-text-gradient` | Hero headline accent phrase |

## Aesthetic
Trustworthy, straightforward notary tone as specified — deep teal (`#0f4c5c`) as the primary trust color, clean white backgrounds, minimal ornamentation, credential-forward copy (commissioned, bonded, E&O insured, commission number in footer).

## Responsive behavior
- **Desktop (>900px):** 3-column pricing/services/reviews, 2-column hero/area/booking layouts
- **Tablet (≤900px):** pricing/area/reviews/booking collapse to single column
- **Mobile (≤640px):** nav collapses to logo + booking CTA, form fields stack, services single column

## Accessibility
- Respects `prefers-reduced-motion` — all entrance/hover animations disabled
- Semantic HTML (`<header>`, `<nav>`, `<section>`, `<form>`, `<footer>`)
- Properly labeled form fields, native form controls (date/time pickers) for keyboard accessibility

## Notes
- All placeholder visuals (map) use CSS gradients/patterns — zero external image dependencies
- Realistic, specific placeholder content throughout (real service names, pricing, hours, commission number format) — no lorem ipsum
- Booking form is styled but intentionally non-functional, as specified
- Single `style.css` file, zero JavaScript, zero custom keyframes — only existing EaseMotion utility patterns
