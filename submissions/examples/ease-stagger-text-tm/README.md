# ease-stagger-text

Issue: #65228

## Feature: Staggered Text Reveal Animation

A CSS utility providing a smooth stagger-up animation effect using CSS custom
properties and keyframe animations, following the EaseMotion design system.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| --stagger-text-color-primary | #6366f1 | Primary accent color |
| --stagger-text-color-secondary | #ec4899 | Secondary accent color |
| --stagger-text-color-bg | #0f172a | Page background |
| --stagger-text-color-surface | #1e293b | Card/surface background |
| --stagger-text-duration-normal | 350ms | Standard transition duration |
| --stagger-text-duration-slow | 600ms | Animation duration |
| --stagger-text-ease-snap | cubic-bezier(0.34,1.56,0.64,1) | Spring snap easing |

## Variants

### Size
- `.stagger-text-item--sm` - Small compact variant
- `.stagger-text-item--lg` - Large prominent variant

### Color Accent
- `.stagger-text-item--success` - Green success accent (left border)
- `.stagger-text-item--secondary` - Pink secondary accent (left border)

## Accessibility

- Respects `prefers-reduced-motion` media query
- All animations are disabled when reduced motion is preferred
- Interactive elements are keyboard accessible

## Usage

```html
<div class="stagger-text-item stagger-text-item--sm">
  <div class="stagger-text-icon">1</div>
  <div class="stagger-text-content">
    <div class="stagger-text-item-title">Item Title</div>
    <div class="stagger-text-item-desc">Description text</div>
  </div>
</div>
```

## License

MIT
