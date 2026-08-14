# ease-enhancement-add-css-elasticslide-drawer-for-cyberp

Bouncy elastic-slide drawer with spring physics feel.

## Issue

- **Issue**: [#64741](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64741)

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--enhancement-add-css-elasticslide-drawer-for-cyberp-color` | `#6c63ff` | Primary accent color |
| `--enhancement-add-css-elasticslide-drawer-for-cyberp-color-light` | `#a09af8` | Light variant |
| `--enhancement-add-css-elasticslide-drawer-for-cyberp-color-dark` | `#4b44cc` | Dark variant |
| `--enhancement-add-css-elasticslide-drawer-for-cyberp-glow` | `#00f5ff` | Neon glow accent |
| `--enhancement-add-css-elasticslide-drawer-for-cyberp-speed` | `300ms` | Animation speed |
| `--enhancement-add-css-elasticslide-drawer-for-cyberp-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |

## Variants

- **Default**: Standard component with primary color
- **variant-success**: Green accent variant
- **variant-warning**: Amber accent variant
- **variant-danger**: Red accent variant
- **variant-neon**: Cyberpunk neon glow effect

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="ease-enhancement-add-css-elasticslide-drawer-for-cyberp-container">
  <!-- component content -->
</div>
```

## Accessibility

- Respects `prefers-reduced-motion`
- Keyboard navigable
- Sufficient color contrast ratios

## Dark Mode

Auto-adapts to `prefers-color-scheme: dark`.
