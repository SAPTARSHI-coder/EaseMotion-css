# Zoom-In Pricing Table

A responsive glassmorphism pricing table built around a controlled `transform: scale()` interaction. The active card grows toward the viewer while surrounding choices remain readable.

## File structure

```text
zoom-in-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Three complete pricing cards with plan summaries, feature lists, and actions.
- Smooth zoom-in effect on hover and keyboard focus.
- Subtle inactive-card de-emphasis on capable browsers using `:has()`.
- Glass blur, layered gradients, borders, and depth shadows.
- Responsive desktop and mobile behavior.
- No JavaScript or external assets.
- Reduced-motion support removes scaling and opacity changes.

## Usage

Open `demo.html` directly in a browser. The core component is the `.plans` grid containing `.plan` cards.

## Motion details

The interaction uses `transform: scale(1.065)` with a custom easing curve. The transform is intentionally centered so the card expands evenly instead of shifting the layout. On smaller screens the scale is reduced to prevent excessive overflow.

The `:has()` enhancement lowers the opacity of inactive cards while one is being hovered. The layout remains fully usable in browsers without `:has()` because the base card styling is independent of that enhancement.

## Customization

Modify the scale amount, transition duration, or `--ease` token to tune the personality. For a calmer interface, values around `1.03` and `320ms` are recommended.

## Accessibility

The same interaction is available through `:focus-within`, not just mouse hover. Links have visible focus indicators and content remains readable without motion. `prefers-reduced-motion: reduce` disables scaling and inactive-card fading.
