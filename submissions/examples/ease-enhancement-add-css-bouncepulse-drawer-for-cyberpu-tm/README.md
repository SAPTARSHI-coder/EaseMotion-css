# ease-enhancement-add-css-bouncepulse-drawer-for-cyberpu

Drawer with bouncy pulse animation when opening.

## Issue

- **Issue**: [#64739](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64739)

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--enhancement-add-css-bouncepulse-drawer-for-cyberpu-color` | `#6c63ff` | Primary accent color |
| `--enhancement-add-css-bouncepulse-drawer-for-cyberpu-color-light` | `#a09af8` | Light variant |
| `--enhancement-add-css-bouncepulse-drawer-for-cyberpu-color-dark` | `#4b44cc` | Dark variant |
| `--enhancement-add-css-bouncepulse-drawer-for-cyberpu-glow` | `#00f5ff` | Neon glow accent |
| `--enhancement-add-css-bouncepulse-drawer-for-cyberpu-speed` | `300ms` | Animation speed |
| `--enhancement-add-css-bouncepulse-drawer-for-cyberpu-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |

## Variants

- **Default**: Standard component with primary color
- **variant-success**: Green accent variant
- **variant-warning**: Amber accent variant
- **variant-danger**: Red accent variant
- **variant-neon**: Cyberpunk neon glow effect

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="ease-enhancement-add-css-bouncepulse-drawer-for-cyberpu-container">
  <!-- component content -->
</div>
```

## Accessibility

- Respects `prefers-reduced-motion`
- Keyboard navigable
- Sufficient color contrast ratios

## Dark Mode

Auto-adapts to `prefers-color-scheme: dark`.
