# ease-enhancement-add-css-skewactive-card-grid-for-cyber

Card grid with skew-transform active state animations.

## Issue

- **Issue**: [#64746](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64746)

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--enhancement-add-css-skewactive-card-grid-for-cyber-color` | `#6c63ff` | Primary accent color |
| `--enhancement-add-css-skewactive-card-grid-for-cyber-color-light` | `#a09af8` | Light variant |
| `--enhancement-add-css-skewactive-card-grid-for-cyber-color-dark` | `#4b44cc` | Dark variant |
| `--enhancement-add-css-skewactive-card-grid-for-cyber-glow` | `#00f5ff` | Neon glow accent |
| `--enhancement-add-css-skewactive-card-grid-for-cyber-speed` | `300ms` | Animation speed |
| `--enhancement-add-css-skewactive-card-grid-for-cyber-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |

## Variants

- **Default**: Standard component with primary color
- **variant-success**: Green accent variant
- **variant-warning**: Amber accent variant
- **variant-danger**: Red accent variant
- **variant-neon**: Cyberpunk neon glow effect

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="ease-enhancement-add-css-skewactive-card-grid-for-cyber-container">
  <!-- component content -->
</div>
```

## Accessibility

- Respects `prefers-reduced-motion`
- Keyboard navigable
- Sufficient color contrast ratios

## Dark Mode

Auto-adapts to `prefers-color-scheme: dark`.
