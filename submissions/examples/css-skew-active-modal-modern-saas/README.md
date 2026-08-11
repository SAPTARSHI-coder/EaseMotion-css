# CSS Skew-Active Modal — Modern SaaS

## Overview

A production-ready, pure CSS-only skew-active modal system inspired by
professional SaaS dashboards like Linear, Notion, Vercel, Stripe Dashboard,
and GitHub — workspace invitations, team member management, billing
upgrades, and delete confirmations.

The modal is driven entirely by the native `:target` pseudo-class, so it
requires **zero JavaScript**. Each trigger is a semantic `<a href="#modal-id">`
anchor, and closing is handled by linking back to `#`.

## Folder Structure

```
css-skew-active-modal-modern-saas/
├── demo.html   # Full showcase: hero, live demo, 4 modal variations, docs
├── style.css   # Modal component styles + EaseMotion utility subset
└── README.md   # This file
```

## Features

- **Hero section** introducing the component with CTA buttons
- **Interactive demo** trigger to open the workspace invitation modal
- **Four modal variations** with realistic SaaS content:
  - Workspace Invitation
  - Team Member Management
  - Billing Upgrade
  - Delete Confirmation
- **Skew-active entrance**: card starts with a slight skew and upward translate, fades in, and settles flat
- **Gentle hover-lift micro-interactions** on buttons, cards, and plan tiles
- **Soft overlay** with backdrop blur and clean elevation shadows
- **White & slate backgrounds with blue accents**, rounded corners, and clean spacing
- **Fully responsive** across desktop, tablet, and mobile
- No JavaScript, no Bootstrap, no Tailwind, no frameworks

## Accessibility

- **Keyboard accessible** — every trigger, form field, and close control is operable with `Tab` + `Enter`
- **Visible focus indicators** — a high-contrast outline appears via `:focus-visible` on all interactive elements
- **Semantic HTML** — `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` on every modal
- **High color contrast** — text and CTA colors meet WCAG AA contrast ratios
- **Large touch targets** — buttons, plan cards, and form controls meet a 44px+ minimum hit area
- **Reduced motion support** — `@media (prefers-reduced-motion: reduce)` disables skew/fade/translate transitions instantly

## EaseMotion Classes Used

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

All component-specific modal styling (`.modal-overlay`, `.modal-backdrop`,
`.modal-card`, etc.) lives exclusively in `style.css`.

## Customization

The modal exposes five CSS custom properties, overridable globally on
`:root` or per-modal via `#modal-id { ... }`:

| Variable | Purpose |
|---|---|
| `--modal-skew` | Starting skew angle the card animates from (e.g. `-2deg`) |
| `--modal-duration` | Speed of the skew/fade/translate transition (e.g. `0.35s`) |
| `--modal-radius` | Corner rounding of the modal card |
| `--modal-shadow` | Elevation shadow applied to the modal card |
| `--modal-overlay` | Background color of the blurred overlay backdrop |

Example override:

```css
#custom-modal {
  --modal-skew: -2deg;
  --modal-duration: 0.35s;
  --modal-radius: 16px;
  --modal-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);
  --modal-overlay: rgba(15, 23, 42, 0.5);
}
```

Each of the four showcase modals (`#invite-modal`, `#team-modal`,
`#billing-modal`, `#delete-modal`) demonstrates a distinct override of
these same five variables — see the `Variant Customizations` section of
`style.css`.

## Responsive Support

- **Desktop** — centered modal card, max-width 380–460px depending on variant
- **Tablet** — fluid width with generous padding retained
- **Mobile (≤640px)** — full-width buttons, stacked invite row, single-column plan grid, reduced skew angle for a subtler feel on small screens

## Usage

1. Open `demo.html` directly in any modern browser — no build step or server required.
2. Click any "Open Modal" trigger to see the skew-active entrance.
3. Close a modal via the `&times;` icon, by clicking the backdrop, or via keyboard (`Tab` to the close link, `Enter` to activate).
4. To reuse the pattern elsewhere, copy the modal markup block and the corresponding CSS custom property overrides from `style.css`.
