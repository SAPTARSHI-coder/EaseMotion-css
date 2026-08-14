# ease-card-stack-swipe

Issue: #65187

## Feature: Stacked Card Swipe Animation

A CSS utility providing a smooth swipe-out animation effect using CSS custom
properties and keyframe animations, following the EaseMotion design system.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| --card-stack-swipe-color-primary | #6366f1 | Primary accent color |
| --card-stack-swipe-color-secondary | #ec4899 | Secondary accent color |
| --card-stack-swipe-color-bg | #0f172a | Page background |
| --card-stack-swipe-color-surface | #1e293b | Card/surface background |
| --card-stack-swipe-duration-normal | 350ms | Standard transition duration |
| --card-stack-swipe-duration-slow | 600ms | Animation duration |
| --card-stack-swipe-ease-snap | cubic-bezier(0.34,1.56,0.64,1) | Spring snap easing |

## Variants

### Size
- `.card-stack-swipe-item--sm` - Small compact variant
- `.card-stack-swipe-item--lg` - Large prominent variant

### Color Accent
- `.card-stack-swipe-item--success` - Green success accent (left border)
- `.card-stack-swipe-item--secondary` - Pink secondary accent (left border)

## Accessibility

- Respects `prefers-reduced-motion` media query
- All animations are disabled when reduced motion is preferred
- Interactive elements are keyboard accessible

## Usage

```html
<div class="card-stack-swipe-item card-stack-swipe-item--sm">
  <div class="card-stack-swipe-icon">1</div>
  <div class="card-stack-swipe-content">
    <div class="card-stack-swipe-item-title">Item Title</div>
    <div class="card-stack-swipe-item-desc">Description text</div>
  </div>
</div>
```

## License

MIT
