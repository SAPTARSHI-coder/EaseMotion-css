# ease-scroll-progress

Issue: #65186

## Feature: Scroll Progress Indicator

A CSS utility providing a smooth progress-fill animation effect using CSS custom
properties and keyframe animations, following the EaseMotion design system.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| --scroll-progress-color-primary | #6366f1 | Primary accent color |
| --scroll-progress-color-secondary | #ec4899 | Secondary accent color |
| --scroll-progress-color-bg | #0f172a | Page background |
| --scroll-progress-color-surface | #1e293b | Card/surface background |
| --scroll-progress-duration-normal | 350ms | Standard transition duration |
| --scroll-progress-duration-slow | 600ms | Animation duration |
| --scroll-progress-ease-snap | cubic-bezier(0.34,1.56,0.64,1) | Spring snap easing |

## Variants

### Size
- `.scroll-progress-item--sm` - Small compact variant
- `.scroll-progress-item--lg` - Large prominent variant

### Color Accent
- `.scroll-progress-item--success` - Green success accent (left border)
- `.scroll-progress-item--secondary` - Pink secondary accent (left border)

## Accessibility

- Respects `prefers-reduced-motion` media query
- All animations are disabled when reduced motion is preferred
- Interactive elements are keyboard accessible

## Usage

```html
<div class="scroll-progress-item scroll-progress-item--sm">
  <div class="scroll-progress-icon">1</div>
  <div class="scroll-progress-content">
    <div class="scroll-progress-item-title">Item Title</div>
    <div class="scroll-progress-item-desc">Description text</div>
  </div>
</div>
```

## License

MIT
