# Card Stack And Layered Effects

Layered card stack effects with depth shadows, perspective transforms, and parallax-like stacking animations

## Features

- card-stack: multiple overlapping cards with depth effect
- card-stack-hover: cards spread on hover
- card-3d: 3D perspective card with rotation
- card-flip: card flip animation on hover
- card-peek: peek-a-boo card reveal effect
- sm/md/lg size variants for stack depth
- Dark mode: adjusts shadow colors and card backgrounds
- Reduced motion: disables 3D transforms and animations
- Works with any card content structure

## Usage

### Quick Start

```html
<!-- Add the CSS file to your project -->
<link
  rel="stylesheet"
  href="submissions/examples/card-stack-effects-tm/style.css"
/>
```

## Design Tokens Used

- `var(--ease-color-primary)` — Primary brand color
- `var(--ease-color-secondary)` — Secondary accent color
- `var(--ease-color-neutral-50)` through `var(--ease-color-neutral-900)` — Neutral palette
- `var(--ease-color-success)`, `var(--ease-color-danger)`, `var(--ease-color-warning)`, `var(--ease-color-info)` — Semantic colors
- `var(--ease-radius-sm)`, `var(--ease-radius-md)`, `var(--ease-radius-lg)`, `var(--ease-radius-xl)` — Border radii
- `var(--ease-shadow-sm)` through `var(--ease-shadow-xl)` — Elevation levels
- `var(--ease-speed-fast)`, `var(--ease-speed-medium)` — Animation durations
- `var(--ease-ease)`, `var(--ease-ease-bounce)` — Easing functions
- `var(--ease-glow-primary)` — Glow effect token
- `var(--ease-space-1)` through `var(--ease-space-6)` — Spacing scale
- `var(--ease-font-sans)` — Typography
- `var(--ease-text-xs)` through `var(--ease-text-lg)` — Type scale

## Accessibility

- All animations respect `prefers-reduced-motion`
- Dark mode variants via `prefers-color-scheme: dark` query
- WCAG AA compliant color choices for focus indicators

## License

MIT — submitted to EaseMotion-css competition.
