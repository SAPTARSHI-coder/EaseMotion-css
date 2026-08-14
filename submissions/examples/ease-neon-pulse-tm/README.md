# ease-neon-pulse

Issue: #65227

## Feature: Neon Pulse Glow Animation

A CSS utility providing a smooth glow-pulse animation effect using CSS custom
properties and keyframe animations, following the EaseMotion design system.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| --neon-pulse-color-primary | #6366f1 | Primary accent color |
| --neon-pulse-color-secondary | #ec4899 | Secondary accent color |
| --neon-pulse-color-bg | #0f172a | Page background |
| --neon-pulse-color-surface | #1e293b | Card/surface background |
| --neon-pulse-duration-normal | 350ms | Standard transition duration |
| --neon-pulse-duration-slow | 600ms | Animation duration |
| --neon-pulse-ease-snap | cubic-bezier(0.34,1.56,0.64,1) | Spring snap easing |

## Variants

### Size
- `.neon-pulse-item--sm` - Small compact variant
- `.neon-pulse-item--lg` - Large prominent variant

### Color Accent
- `.neon-pulse-item--success` - Green success accent (left border)
- `.neon-pulse-item--secondary` - Pink secondary accent (left border)

## Accessibility

- Respects `prefers-reduced-motion` media query
- All animations are disabled when reduced motion is preferred
- Interactive elements are keyboard accessible

## Usage

```html
<div class="neon-pulse-item neon-pulse-item--sm">
  <div class="neon-pulse-icon">1</div>
  <div class="neon-pulse-content">
    <div class="neon-pulse-item-title">Item Title</div>
    <div class="neon-pulse-item-desc">Description text</div>
  </div>
</div>
```

## License

MIT
