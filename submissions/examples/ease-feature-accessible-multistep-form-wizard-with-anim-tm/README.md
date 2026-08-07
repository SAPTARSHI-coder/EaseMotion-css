# ease-feature-accessible-multistep-form-wizard-with-anim

Multi-step form wizard with animated progress indicators.

## Issue

- **Issue**: [#64740](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64740)

## Design Tokens

| Token | Default | Description |
|-------|---------|-------------|
| `--feature-accessible-multistep-form-wizard-with-anim-color` | `#6c63ff` | Primary accent color |
| `--feature-accessible-multistep-form-wizard-with-anim-color-light` | `#a09af8` | Light variant |
| `--feature-accessible-multistep-form-wizard-with-anim-color-dark` | `#4b44cc` | Dark variant |
| `--feature-accessible-multistep-form-wizard-with-anim-glow` | `#00f5ff` | Neon glow accent |
| `--feature-accessible-multistep-form-wizard-with-anim-speed` | `300ms` | Animation speed |
| `--feature-accessible-multistep-form-wizard-with-anim-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |

## Variants

- **Default**: Standard component with primary color
- **variant-success**: Green accent variant
- **variant-warning**: Amber accent variant
- **variant-danger**: Red accent variant
- **variant-neon**: Cyberpunk neon glow effect

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="ease-feature-accessible-multistep-form-wizard-with-anim-container">
  <!-- component content -->
</div>
```

## Accessibility

- Respects `prefers-reduced-motion`
- Keyboard navigable
- Sufficient color contrast ratios

## Dark Mode

Auto-adapts to `prefers-color-scheme: dark`.
