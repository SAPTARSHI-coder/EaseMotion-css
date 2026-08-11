# Staggered Group Animations

Automatically staggers entrance animations across all direct children of a container using a single CSS class. No JavaScript needed.

## Classes

| Class | Effect |
|---|---|
| `.ease-stagger-fade-in` | Fade in + slight translateY |
| `.ease-stagger-slide-up` | Slide up from below |
| `.ease-stagger-slide-left` | Slide in from left |
| `.ease-stagger-slide-right` | Slide in from right |
| `.ease-stagger-zoom-in` | Scale up from 0.6 |
| `.ease-stagger-blur-in` | Blur → clear + translateY |

## CSS Custom Properties

Customize timing on the container element:

| Property | Default | Description |
|---|---|---|
| `--ease-stagger-delay` | `100ms` | Delay between each child |
| `--ease-stagger-duration` | `0.4s` | Duration of each child animation |

## Usage

```html
<div class="ease-stagger-fade-in">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- With custom timing -->
<div class="ease-stagger-slide-up" style="--ease-stagger-delay: 150ms; --ease-stagger-duration: 0.5s;">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Browser Support

- CSS custom properties (CSS variables) — all modern browsers
- `@keyframes` animations — all modern browsers
- `prefers-reduced-motion` — all modern browsers

Supports up to 20 children via `nth-child` selectors.

## Accessibility

Respects `prefers-reduced-motion` — all animations are disabled when the user has reduced motion enabled.
