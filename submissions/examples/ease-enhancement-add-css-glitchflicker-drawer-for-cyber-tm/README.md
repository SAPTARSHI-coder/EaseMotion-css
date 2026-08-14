# ease-enhancement-add-css-glitchflicker-drawer-for-cyber

Drawer with cyberpunk glitch-flicker animation on trigger.

## Issue

- **Issue**: [#64742](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64742)

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--enhancement-add-css-glitchflicker-drawer-for-cyber-color` | `#6c63ff` | Primary accent color |
| `--enhancement-add-css-glitchflicker-drawer-for-cyber-color-light` | `#a09af8` | Light variant |
| `--enhancement-add-css-glitchflicker-drawer-for-cyber-color-dark` | `#4b44cc` | Dark variant |
| `--enhancement-add-css-glitchflicker-drawer-for-cyber-glow` | `#00f5ff` | Neon glow accent |
| `--enhancement-add-css-glitchflicker-drawer-for-cyber-speed` | `300ms` | Animation speed |
| `--enhancement-add-css-glitchflicker-drawer-for-cyber-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |

## Variants

- **Default**: Standard component with primary color
- **variant-success**: Green accent variant
- **variant-warning**: Amber accent variant
- **variant-danger**: Red accent variant
- **variant-neon**: Cyberpunk neon glow effect

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="ease-enhancement-add-css-glitchflicker-drawer-for-cyber-container">
  <!-- component content -->
</div>
```

## Accessibility

- Respects `prefers-reduced-motion`
- Keyboard navigable
- Sufficient color contrast ratios

## Dark Mode

Auto-adapts to `prefers-color-scheme: dark`.
