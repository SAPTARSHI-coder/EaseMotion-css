# ease-enhancement-add-css-shimmersweep-card-grid-for-cyb

A responsive grid of cards with shimmer sweep animations on hover.

## Issue

- **Issue**: [#64747](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64747)

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--enhancement-add-css-shimmersweep-card-grid-for-cyb-color` | `#6c63ff` | Primary accent color |
| `--enhancement-add-css-shimmersweep-card-grid-for-cyb-color-light` | `#a09af8` | Light variant |
| `--enhancement-add-css-shimmersweep-card-grid-for-cyb-color-dark` | `#4b44cc` | Dark variant |
| `--enhancement-add-css-shimmersweep-card-grid-for-cyb-glow` | `#00f5ff` | Neon glow accent |
| `--enhancement-add-css-shimmersweep-card-grid-for-cyb-speed` | `300ms` | Animation speed |
| `--enhancement-add-css-shimmersweep-card-grid-for-cyb-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |

## Variants

- **Default**: Standard component with primary color
- **variant-success**: Green accent variant
- **variant-warning**: Amber accent variant
- **variant-danger**: Red accent variant
- **variant-neon**: Cyberpunk neon glow effect

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="ease-enhancement-add-css-shimmersweep-card-grid-for-cyb-container">
  <!-- component content -->
</div>
```

## Accessibility

- Respects `prefers-reduced-motion`
- Keyboard navigable
- Sufficient color contrast ratios

## Dark Mode

Auto-adapts to `prefers-color-scheme: dark`.
