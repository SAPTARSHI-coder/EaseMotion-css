# ease-svg-draw

Issue: #65174

## Feature: SVG Path Drawing Animation

A CSS utility providing a smooth draw-path animation effect using CSS custom
properties and keyframe animations, following the EaseMotion design system.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| --svg-draw-color-primary | #6366f1 | Primary accent color |
| --svg-draw-color-secondary | #ec4899 | Secondary accent color |
| --svg-draw-color-bg | #0f172a | Page background |
| --svg-draw-color-surface | #1e293b | Card/surface background |
| --svg-draw-duration-normal | 350ms | Standard transition duration |
| --svg-draw-duration-slow | 600ms | Animation duration |
| --svg-draw-ease-snap | cubic-bezier(0.34,1.56,0.64,1) | Spring snap easing |

## Variants

### Size
- `.svg-draw-item--sm` - Small compact variant
- `.svg-draw-item--lg` - Large prominent variant

### Color Accent
- `.svg-draw-item--success` - Green success accent (left border)
- `.svg-draw-item--secondary` - Pink secondary accent (left border)

## Accessibility

- Respects `prefers-reduced-motion` media query
- All animations are disabled when reduced motion is preferred
- Interactive elements are keyboard accessible

## Usage

```html
<div class="svg-draw-item svg-draw-item--sm">
  <div class="svg-draw-icon">1</div>
  <div class="svg-draw-content">
    <div class="svg-draw-item-title">Item Title</div>
    <div class="svg-draw-item-desc">Description text</div>
  </div>
</div>
```

## License

MIT
