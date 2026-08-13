# ease-drag-reorder

Issue: #65237

## Feature: Drag-and-Drop Reorder Animation

A CSS utility providing a smooth slide-reorder animation effect using CSS custom
properties and keyframe animations, following the EaseMotion design system.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| --drag-reorder-color-primary | #6366f1 | Primary accent color |
| --drag-reorder-color-secondary | #ec4899 | Secondary accent color |
| --drag-reorder-color-bg | #0f172a | Page background |
| --drag-reorder-color-surface | #1e293b | Card/surface background |
| --drag-reorder-duration-normal | 350ms | Standard transition duration |
| --drag-reorder-duration-slow | 600ms | Animation duration |
| --drag-reorder-ease-snap | cubic-bezier(0.34,1.56,0.64,1) | Spring snap easing |

## Variants

### Size
- `.drag-reorder-item--sm` - Small compact variant
- `.drag-reorder-item--lg` - Large prominent variant

### Color Accent
- `.drag-reorder-item--success` - Green success accent (left border)
- `.drag-reorder-item--secondary` - Pink secondary accent (left border)

## Accessibility

- Respects `prefers-reduced-motion` media query
- All animations are disabled when reduced motion is preferred
- Interactive elements are keyboard accessible

## Usage

```html
<div class="drag-reorder-item drag-reorder-item--sm">
  <div class="drag-reorder-icon">1</div>
  <div class="drag-reorder-content">
    <div class="drag-reorder-item-title">Item Title</div>
    <div class="drag-reorder-item-desc">Description text</div>
  </div>
</div>
```

## License

MIT
