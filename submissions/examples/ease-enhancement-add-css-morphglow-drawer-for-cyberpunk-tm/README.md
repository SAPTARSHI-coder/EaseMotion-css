# ease-enhancement-add-css-morphglow-drawer-for-cyberpunk

Drawer with morph-glow border animation effect.

## Issue

- **Issue**: [#64744](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64744)

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--enhancement-add-css-morphglow-drawer-for-cyberpunk-color` | `#6c63ff` | Primary accent color |
| `--enhancement-add-css-morphglow-drawer-for-cyberpunk-color-light` | `#a09af8` | Light variant |
| `--enhancement-add-css-morphglow-drawer-for-cyberpunk-color-dark` | `#4b44cc` | Dark variant |
| `--enhancement-add-css-morphglow-drawer-for-cyberpunk-glow` | `#00f5ff` | Neon glow accent |
| `--enhancement-add-css-morphglow-drawer-for-cyberpunk-speed` | `300ms` | Animation speed |
| `--enhancement-add-css-morphglow-drawer-for-cyberpunk-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |

## Variants

- **Default**: Standard component with primary color
- **variant-success**: Green accent variant
- **variant-warning**: Amber accent variant
- **variant-danger**: Red accent variant
- **variant-neon**: Cyberpunk neon glow effect

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="ease-enhancement-add-css-morphglow-drawer-for-cyberpunk-container">
  <!-- component content -->
</div>
```

## Accessibility

- Respects `prefers-reduced-motion`
- Keyboard navigable
- Sufficient color contrast ratios

## Dark Mode

Auto-adapts to `prefers-color-scheme: dark`.
