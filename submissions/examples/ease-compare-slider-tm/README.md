# ease-compare-slider

Issue: #65232

## Feature: Before/After Image Comparison Slider

A CSS utility providing a smooth compare-swap animation effect using CSS custom
properties and keyframe animations, following the EaseMotion design system.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| --compare-slider-color-primary | #6366f1 | Primary accent color |
| --compare-slider-color-secondary | #ec4899 | Secondary accent color |
| --compare-slider-color-bg | #0f172a | Page background |
| --compare-slider-color-surface | #1e293b | Card/surface background |
| --compare-slider-duration-normal | 350ms | Standard transition duration |
| --compare-slider-duration-slow | 600ms | Animation duration |
| --compare-slider-ease-snap | cubic-bezier(0.34,1.56,0.64,1) | Spring snap easing |

## Variants

### Size
- `.compare-slider-item--sm` - Small compact variant
- `.compare-slider-item--lg` - Large prominent variant

### Color Accent
- `.compare-slider-item--success` - Green success accent (left border)
- `.compare-slider-item--secondary` - Pink secondary accent (left border)

## Accessibility

- Respects `prefers-reduced-motion` media query
- All animations are disabled when reduced motion is preferred
- Interactive elements are keyboard accessible

## Usage

```html
<div class="compare-slider-item compare-slider-item--sm">
  <div class="compare-slider-icon">1</div>
  <div class="compare-slider-content">
    <div class="compare-slider-item-title">Item Title</div>
    <div class="compare-slider-item-desc">Description text</div>
  </div>
</div>
```

## License

MIT
