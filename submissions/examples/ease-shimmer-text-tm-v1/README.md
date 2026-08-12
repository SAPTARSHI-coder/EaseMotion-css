# ease-shimmer-text

Issue: #65235

## Feature: Text Shimmer Effect

A CSS utility providing a smooth shimmer-reveal animation effect using CSS custom
properties and keyframe animations, following the EaseMotion design system.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| --shimmer-text-color-primary | #6366f1 | Primary accent color |
| --shimmer-text-color-secondary | #ec4899 | Secondary accent color |
| --shimmer-text-color-bg | #0f172a | Page background |
| --shimmer-text-color-surface | #1e293b | Card/surface background |
| --shimmer-text-duration-normal | 350ms | Standard transition duration |
| --shimmer-text-duration-slow | 600ms | Animation duration |
| --shimmer-text-ease-snap | cubic-bezier(0.34,1.56,0.64,1) | Spring snap easing |

## Variants

### Size
- `.shimmer-text-item--sm` - Small compact variant
- `.shimmer-text-item--lg` - Large prominent variant

### Color Accent
- `.shimmer-text-item--success` - Green success accent (left border)
- `.shimmer-text-item--secondary` - Pink secondary accent (left border)

## Accessibility

- Respects `prefers-reduced-motion` media query
- All animations are disabled when reduced motion is preferred
- Interactive elements are keyboard accessible

## Usage

```html
<div class="shimmer-text-item shimmer-text-item--sm">
  <div class="shimmer-text-icon">1</div>
  <div class="shimmer-text-content">
    <div class="shimmer-text-item-title">Item Title</div>
    <div class="shimmer-text-item-desc">Description text</div>
  </div>
</div>
```

## License

MIT
