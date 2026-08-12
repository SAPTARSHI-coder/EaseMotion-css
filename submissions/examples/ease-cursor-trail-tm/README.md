# ease-cursor-trail

Issue: #65230

## Feature: Cursor Trail Animation

A CSS utility providing a smooth trail-fade animation effect using CSS custom
properties and keyframe animations, following the EaseMotion design system.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| --cursor-trail-color-primary | #6366f1 | Primary accent color |
| --cursor-trail-color-secondary | #ec4899 | Secondary accent color |
| --cursor-trail-color-bg | #0f172a | Page background |
| --cursor-trail-color-surface | #1e293b | Card/surface background |
| --cursor-trail-duration-normal | 350ms | Standard transition duration |
| --cursor-trail-duration-slow | 600ms | Animation duration |
| --cursor-trail-ease-snap | cubic-bezier(0.34,1.56,0.64,1) | Spring snap easing |

## Variants

### Size
- `.cursor-trail-item--sm` - Small compact variant
- `.cursor-trail-item--lg` - Large prominent variant

### Color Accent
- `.cursor-trail-item--success` - Green success accent (left border)
- `.cursor-trail-item--secondary` - Pink secondary accent (left border)

## Accessibility

- Respects `prefers-reduced-motion` media query
- All animations are disabled when reduced motion is preferred
- Interactive elements are keyboard accessible

## Usage

```html
<div class="cursor-trail-item cursor-trail-item--sm">
  <div class="cursor-trail-icon">1</div>
  <div class="cursor-trail-content">
    <div class="cursor-trail-item-title">Item Title</div>
    <div class="cursor-trail-item-desc">Description text</div>
  </div>
</div>
```

## License

MIT
