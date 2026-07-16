# RoadGuard Pro — Roadside Assistance Website

## What does this do?

This is a complete, production-ready, full-page website for **RoadGuard Pro**, a professional 24/7 roadside assistance business. The page serves as a marketing and informational landing page that showcases the company's services, fleet, coverage areas, customer testimonials, and emergency contact details — all wrapped in a premium, trustworthy, emergency-focused visual design.

Built exclusively using **EaseMotion CSS** utility and component classes, this demo demonstrates how the framework can be used to create complex, real-world business websites without writing custom animations or keyframes.

---

## How is it used?

1. **Open directly in a browser** — The demo works by simply opening `demo.html` in any modern web browser.
2. **Customize for your business** — Replace placeholder content (phone numbers, addresses, service descriptions, reviewer names) with your own business information.
3. **Adapt the color scheme** — Modify the CSS variables in `style.css` under the `:root` selector to match your brand colors.
4. **Extend sections** — The modular HTML structure makes it easy to add, remove, or reorder sections.

### File Structure

```
submissions/examples/roadside-assistance-page-nb/
├── demo.html          # Complete HTML page
├── style.css          # Custom styles (complements EaseMotion)
└── README.md          # This documentation
```

---

## Why is it useful?

- **Demonstrates EaseMotion CSS capabilities** — Showcases how the framework's animation, card, button, grid, flex, and utility classes compose into a real-world site.
- **Copy-paste ready** — Businesses can immediately adapt this template for their own roadside assistance or emergency service company.
- **Production-quality code** — Semantic HTML5, accessible markup, responsive design, and professional visual hierarchy.
- **No custom keyframes** — 100% of animations use existing EaseMotion CSS classes, proving the framework's expressiveness.

---

## Complete Section Overview

| # | Section | Description | Key EaseMotion Classes Used |
|---|---|---|---|
| 1 | **Navigation** | Fixed-position glass navbar with logo, links, and emergency CTA button. Mobile hamburger toggle with full-screen overlay. | `ease-hover-grow` |
| 2 | **Emergency Strip** | Animated top banner with emergency phone number and pulsing alert icon. | `ease-slide-down`, `ease-pulse`, `ease-hover-grow` |
| 3 | **Hero** | Full-viewport hero with emergency headline, description, dual CTA buttons, and floating vehicle image placeholder. | `ease-slide-in-left`, `ease-slide-in-right`, `ease-slide-up`, `ease-fade-in`, `ease-delay-*`, `ease-float`, `ease-pulse`, `ease-btn`, `ease-btn-danger`, `ease-btn-xl`, `ease-btn-hover`, `ease-btn-pill`, `ease-hover-pulse-glow`, `ease-hover-glow` |
| 4 | **Services** | Six service cards (Towing, Jump Start, Flat Tire, Fuel Delivery, Lockout, Battery) with icons, descriptions, and Learn More links. | `ease-card`, `ease-card-hover`, `ease-card-shadow`, `ease-slide-up`, `ease-delay-*`, `ease-grid`, `ease-grid-auto`, `ease-gap-6`, `ease-hover-underline` |
| 5 | **Response Time** | Three glass-morphism stat cards showing 15 Min Dispatch, 24/7 Availability, and 98% Satisfaction with bounce-in animations. | `ease-card-stat`, `ease-card-glass`, `ease-card-hover`, `ease-slide-up`, `ease-delay-*`, `ease-bounce-in`, `ease-grid-cols-3` |
| 6 | **Service Area** | Interactive-looking map placeholder with animated pins, cities served list, and 24/7 coverage badge. | `ease-slide-in-left`, `ease-slide-in-right`, `ease-delay-*`, `ease-reveal`, `ease-reveal-left`, `ease-card-glass`, `ease-card-hover`, `ease-card-accent`, `ease-hover-lift`, `ease-hover-grow`, `ease-grid-cols-2`, `ease-flex`, `ease-items-center` |
| 7 | **Fleet Showcase** | Four vehicle cards (Tow Truck, Flatbed, Service Van, Response Vehicle) with capacity specs and availability badges. | `ease-card`, `ease-card-hover`, `ease-card-shadow`, `ease-slide-up`, `ease-delay-*`, `ease-grid-auto`, `ease-flex`, `ease-items-center`, `ease-justify-between`, `ease-gap-4` |
| 8 | **Customer Reviews** | Four testimonial cards with 5-star ratings, authentic review text, customer avatars, and service details. | `ease-card`, `ease-card-hover`, `ease-card-shadow`, `ease-slide-up`, `ease-delay-*`, `ease-grid-auto` |
| 9 | **Emergency CTA** | Bold red emergency callout with large phone number, primary call button, and trust-building checkmarks. | `ease-slide-up`, `ease-hover-grow`, `ease-hover-pulse-glow`, `ease-btn`, `ease-btn-xl`, `ease-btn-pill`, `ease-btn-hover`, `ease-flex`, `ease-justify-center`, `ease-gap-6`, `ease-items-center`, `ease-gap-2` |
| 10 | **Footer** | Four-column footer with company info, quick links, services list, contact details, and social media icons. | `ease-slide-up`, `ease-delay-*`, `ease-flex`, `ease-items-center`, `ease-gap-3`, `ease-hover-grow`, `ease-gap-4` |

---

## Responsive Design Notes

- **Mobile (480px and below)**: Single-column layout, stacked hero content, reduced font sizes, compact spacing, full-width buttons.
- **Tablet (768px)**: Two-column grids where appropriate, hamburger navigation visible, adjusted typography scale.
- **Desktop (1024px+)**: Full multi-column layouts, glass navbar with inline links, spacious padding and gaps.
- Breakpoints follow the EaseMotion CSS framework conventions and are implemented using standard media queries in `style.css`.

---

## Accessibility Considerations

- **Semantic HTML5**: Uses `<nav>`, `<section>`, `<article>`, `<footer>`, `<h1>`–`<h3>` with proper document outline.
- **ARIA attributes**: `role="navigation"`, `role="menubar"`, `role="menuitem"`, `role="alert"`, `aria-label`, `aria-expanded` on interactive elements.
- **Focus management**: Navigation links and buttons are keyboard-focusable with visible focus indicators.
- **Color contrast**: Dark text on light backgrounds (`#0f172a` on `#ffffff`) and white text on dark/colored backgrounds provide WCAG AA-compliant contrast.
- **Reduced motion**: EaseMotion's built-in `prefers-reduced-motion` media query disables all animations for users who prefer reduced motion.
- **Skip navigation**: The semantic structure and clear heading hierarchy help screen reader users navigate effectively.
- **Images**: All decorative icons use `aria-hidden="true"` and meaningful icons have descriptive `aria-label` attributes.

---

## Roadside Assistance Design Goals

1. **Trust & Reliability**: Dark navy backgrounds, amber accent colors, and clean typography convey professionalism and dependability.
2. **Emergency Urgency**: Red CTAs, bold typography, and pulsing animations create a sense of immediate action without being overwhelming.
3. **Speed & Efficiency**: Stat cards with bounce-in animations emphasize fast 15-minute response times.
4. **Comprehensive Coverage**: Six service cards and eight coverage cities demonstrate full-service capability.
5. **Social Proof**: Four detailed customer testimonials with 5-star ratings build credibility and trust.
6. **Clear Call to Action**: The emergency phone number is prominently displayed in the navigation, emergency strip, hero, and final CTA section.

---

## List of EaseMotion CSS Classes Showcased

### Entrance Animations
- `ease-fade-in`
- `ease-slide-up`
- `ease-slide-down`
- `ease-slide-in-left`
- `ease-slide-in-right`
- `ease-bounce-in`
- `ease-delay-100`, `ease-delay-200`, `ease-delay-300`, `ease-delay-400`
- `ease-reveal`, `ease-reveal-left`

### Looping Animations
- `ease-pulse`
- `ease-float`

### Hover Interactions
- `ease-hover-grow`
- `ease-hover-glow`
- `ease-hover-lift`
- `ease-hover-lift-shadow`
- `ease-hover-underline`
- `ease-hover-pulse-glow`

### Card Components
- `ease-card`
- `ease-card-hover`
- `ease-card-shadow`
- `ease-card-glass`
- `ease-card-stat`
- `ease-card-accent`
- `ease-card-body`
- `ease-card-title`
- `ease-card-subtitle`

### Button Components
- `ease-btn`
- `ease-btn-danger`
- `ease-btn-outline`
- `ease-btn-xl`
- `ease-btn-pill`
- `ease-btn-hover`
- `ease-btn-hover`

### Grid & Layout
- `ease-grid`
- `ease-grid-auto`
- `ease-grid-cols-2`
- `ease-grid-cols-3`
- `ease-gap-6`
- `ease-gap-8`
- `ease-gap-4`
- `ease-gap-3`
- `ease-gap-2`

### Flex Utilities
- `ease-flex`
- `ease-items-center`
- `ease-justify-center`
- `ease-justify-between`
- `ease-grow`

### Spacing
- `ease-padding-12`
- `ease-margin-4`

### Container
- `ease-container`

---