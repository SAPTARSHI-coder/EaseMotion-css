# ease-typewriter

Issue: #65172

## Feature: Typewriter Text Animation

A CSS utility providing a smooth type-in animation effect using CSS custom
properties and keyframe animations, following the EaseMotion design system.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| --typewriter-color-primary | #6366f1 | Primary accent color |
| --typewriter-color-secondary | #ec4899 | Secondary accent color |
| --typewriter-color-bg | #0f172a | Page background |
| --typewriter-color-surface | #1e293b | Card/surface background |
| --typewriter-duration-normal | 350ms | Standard transition duration |
| --typewriter-duration-slow | 600ms | Animation duration |
| --typewriter-ease-snap | cubic-bezier(0.34,1.56,0.64,1) | Spring snap easing |

## Variants

### Size
- `.typewriter-item--sm` - Small compact variant
- `.typewriter-item--lg` - Large prominent variant

### Color Accent
- `.typewriter-item--success` - Green success accent (left border)
- `.typewriter-item--secondary` - Pink secondary accent (left border)

## Accessibility

- Respects `prefers-reduced-motion` media query
- All animations are disabled when reduced motion is preferred
- Interactive elements are keyboard accessible

## Usage

```html
<div class="typewriter-item typewriter-item--sm">
  <div class="typewriter-icon">1</div>
  <div class="typewriter-content">
    <div class="typewriter-item-title">Item Title</div>
    <div class="typewriter-item-desc">Description text</div>
  </div>
</div>
```

## License

MIT
