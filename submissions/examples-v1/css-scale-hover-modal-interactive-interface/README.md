# CSS Scale-Hover Modal — Interactive Interface

## Overview

A production-ready, pure CSS-only scale-hover modal system designed for
modern productivity apps, design tools, and dashboards — user profiles,
settings, confirmation dialogs, and quick action panels.

The modal is driven entirely by the native `:target` pseudo-class, so it
requires **zero JavaScript**. Each trigger is a semantic `<a href="#modal-id">`
anchor, and closing is handled by linking back to `#`. Toggles inside the
settings modal use plain checkbox-based interaction.

## Folder Structure

```
css-scale-hover-modal-interactive-interface/
├── demo.html   # Full showcase: hero, live demo, 4 modal variations, docs
├── style.css   # Modal component styles + EaseMotion utility subset
└── README.md   # This file
```

## Features

- **Hero section** introducing the component with CTA buttons
- **Interactive demo** trigger to open the user profile modal
- **Four modal variations** with realistic interface content:
  - User Profile Modal
  - Settings Modal
  - Confirmation Dialog
  - Quick Action Panel
- **Scale-hover entrance**: card scales from `0.9` to `1` with a smooth opacity fade
- **Gentle hover-scale micro-interactions** on buttons, cards, and action tiles
- **Soft overlay** with backdrop blur and modern elevation shadows
- **White & slate backgrounds with blue accents**, rounded corners, and glassmorphism
- **Fully responsive** across desktop, tablet, and mobile
- No JavaScript, no Bootstrap, no Tailwind, no frameworks

## Accessibility

- **Keyboard accessible** — every trigger, toggle, and close control is operable with `Tab` + `Enter`/`Space`
- **Visible focus** — a high-contrast outline appears via `:focus-visible` on all interactive elements, including checkbox toggles
- **Semantic HTML** — `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` on every modal
- **High contrast** — text and CTA colors meet WCAG AA contrast ratios
- **Large touch targets** — buttons, toggles, and action tiles meet a 44px+ minimum hit area
- **Reduced motion support** — `@media (prefers-reduced-motion: reduce)` disables scale/fade transitions instantly

## EaseMotion Classes Used

Only existing EaseMotion CSS utility classes are used — no new animation
utilities were introduced. A local, standalone subset matching the core
EaseMotion definitions ships inside `style.css` so this folder works
independently:

| Class | Used for |
|---|---|
| `ease-fade-in` | Hero content entrance |
| `ease-slide-up` | Section headers, cards, and accessibility tiles |
| `ease-hover-grow` | CTA buttons, action tiles, and hero buttons |
| `ease-hover-lift` | Trigger cards |
| `ease-hover-glow` | Primary CTA button for extra emphasis |
| `ease-delay-100` … `ease-delay-500` | Staggering entrance of grid items |

All component-specific modal styling (`.modal-overlay`, `.modal-backdrop`,
`.modal-card`, etc.) lives exclusively in `style.css`.

## Customization

The modal exposes five CSS custom properties, overridable globally on
`:root` or per-modal via `#modal-id { ... }`:

| Variable | Purpose |
|---|---|
| `--modal-scale` | Starting scale value the card animates up from (e.g. `0.9`) |
| `--modal-duration` | Speed of the scale/fade transition (e.g. `0.3s`) |
| `--modal-radius` | Corner rounding of the modal card |
| `--modal-shadow` | Elevation shadow applied to the modal card |
| `--modal-overlay` | Background color of the blurred overlay backdrop |

Example override:

```css
#custom-modal {
  --modal-scale: 0.9;
  --modal-duration: 0.3s;
  --modal-radius: 18px;
  --modal-shadow: 0 30px 60px rgba(15, 23, 42, 0.25);
  --modal-overlay: rgba(15, 23, 42, 0.45);
}
```

Each of the four showcase modals (`#profile-modal`, `#settings-modal`,
`#confirm-modal`, `#actions-modal`) demonstrates a distinct override of
these same five variables — see the `Variant Customizations` section of
`style.css`.

## Responsive Support

- **Desktop** — centered modal card, max-width 380–460px depending on variant
- **Tablet** — fluid width with generous padding retained
- **Mobile (≤640px)** — full-width buttons, 2-column stat/action grids, tighter card padding

## Usage

1. Open `demo.html` directly in any modern browser — no build step or server required.
2. Click any "Open Modal" trigger to see the scale-hover entrance.
3. Close a modal via the `&times;` icon, by clicking the backdrop, or via keyboard (`Tab` to the close link, `Enter` to activate).
4. To reuse the pattern elsewhere, copy the modal markup block and the corresponding CSS custom property overrides from `style.css`.
