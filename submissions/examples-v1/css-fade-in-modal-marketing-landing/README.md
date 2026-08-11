# CSS Fade-In Modal — Marketing Landing Page

## Overview

A production-ready, pure CSS-only fade-in modal system designed for
marketing and SaaS landing pages — newsletter signups, free trial
registrations, product launch announcements, and limited-time offers.

The modal is driven entirely by the native `:target` pseudo-class, so it
requires **zero JavaScript**. Each trigger is a semantic `<a href="#modal-id">`
anchor, and closing is handled by linking back to `#`.

## Folder Structure

```
css-fade-in-modal-marketing-landing/
├── demo.html   # Full showcase: hero, live demo, 4 modal variations, docs
├── style.css   # Modal component styles + EaseMotion utility subset
└── README.md   # This file
```

## Features

- **Hero section** introducing the component with CTA buttons
- **Interactive demo** trigger to open the flagship modal
- **Four modal variations** with realistic marketing copy:
  - Newsletter Signup
  - Free Trial Registration
  - Product Launch Announcement
  - Limited Time Offer
- **Fade-in + scale-up entrance** animation, with a matching smooth exit
- **Glassmorphism overlay** with backdrop blur
- **Blue/purple gradient** marketing aesthetic with rounded corners and soft shadows
- **Fully responsive** across desktop, tablet, and mobile
- No JavaScript, no Bootstrap, no Tailwind, no frameworks

## Accessibility

- **Keyboard accessible** — every trigger and close control is a real anchor element operable with `Tab` + `Enter`
- **Visible focus states** — a high-contrast outline appears via `:focus-visible` on all interactive elements
- **Semantic HTML** — `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` on every modal
- **High color contrast** — text and CTA colors meet WCAG AA contrast ratios
- **Responsive touch targets** — buttons and close icons meet a 44px minimum hit area
- **Reduced motion support** — `@media (prefers-reduced-motion: reduce)` disables scale/fade transitions instantly

## EaseMotion Classes Demonstrated

Only existing EaseMotion CSS utility classes are used — no new animation
utilities were introduced. A local, standalone subset matching the core
EaseMotion definitions ships inside `style.css` so this folder works
independently:

| Class | Used for |
|---|---|
| `ease-fade-in` | Hero content entrance |
| `ease-slide-up` | Section headers, cards, and accessibility tiles |
| `ease-hover-lift` | CTA buttons and trigger cards |
| `ease-hover-grow` | (available for card hover emphasis) |
| `ease-hover-glow` | Primary CTA buttons for extra emphasis |
| `ease-delay-100` … `ease-delay-500` | Staggering entrance of grid items |

All component-specific fade and modal styling (`.modal-overlay`,
`.modal-backdrop`, `.modal-card`, etc.) lives exclusively in `style.css`.

## Customization

The modal exposes five CSS custom properties, overridable globally on
`:root` or per-modal via `#modal-id { ... }`:

| Variable | Purpose |
|---|---|
| `--modal-duration` | Speed of the fade/scale transition (e.g. `0.4s`) |
| `--modal-radius` | Corner rounding of the modal card |
| `--modal-overlay` | Background color of the blurred overlay backdrop |
| `--modal-shadow` | Elevation shadow applied to the modal card |
| `--modal-scale` | Starting scale value the card animates up from (e.g. `0.92`) |

Example override:

```css
#custom-modal {
  --modal-duration: 0.4s;
  --modal-radius: 20px;
  --modal-overlay: rgba(30, 27, 75, 0.55);
  --modal-shadow: 0 30px 60px rgba(76, 29, 149, 0.35);
  --modal-scale: 0.92;
}
```

Each of the four showcase modals (`#newsletter-modal`, `#trial-modal`,
`#launch-modal`, `#offer-modal`) demonstrates a distinct override of these
same five variables — see the `Variant Customizations` section of `style.css`.

## Responsive Support

- **Desktop** — centered modal card, max-width 480–560px depending on variant
- **Tablet** — fluid width with generous padding retained
- **Mobile (≤640px)** — full-width buttons, tighter card padding, and a slightly reduced entrance scale for a snappier feel on small screens

## Usage

1. Open `demo.html` directly in any modern browser — no build step or server required.
2. Click any "Open Modal" trigger to see the fade-in + scale-up entrance.
3. Close a modal via the `&times;` icon, by clicking the backdrop, or via keyboard (`Tab` to the close link, `Enter` to activate).
4. To reuse the pattern elsewhere, copy the modal markup block and the corresponding CSS custom property overrides from `style.css`.
