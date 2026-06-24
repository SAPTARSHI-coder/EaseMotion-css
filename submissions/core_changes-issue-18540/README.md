# ease-scroll-* — Scroll-Driven Animation Utilities

Core utility classes that add scroll-driven animations to the EaseMotion CSS framework using `view-timeline`, `scroll-timeline`, and `animation-range`.

## Classes

| Class | Effect | Timeline Range |
|-------|--------|---------------|
| `.ease-scroll-progress` | Fixed progress bar that fills as page scrolls | Full page scroll |
| `.ease-scroll-reveal` | Fade in + translateY(20px) | Entry 0% → entry 80% |
| `.ease-scroll-slide-up` | Fade in + translateY(40px) | Entry 0% → entry 75% |
| `.ease-scroll-slide-left` | Fade in + translateX(30px) from right | Entry 0% → entry 75% |
| `.ease-scroll-slide-right` | Fade in + translateX(-30px) from left | Entry 0% → entry 75% |
| `.ease-scroll-scale` | Fade in + scale(0.85 → 1) | Entry 0% → entry 80% |
| `.ease-scroll-blur` | Fade in + filter blur(8px → 0) | Entry 0% → entry 80% |
| `.ease-scroll-stagger` | Staggered child reveal (up to 8 children) | Per-element entry 0% → 75% |

## Usage

```html
<!-- Progress bar at top of page -->
<div class="ease-scroll-progress"></div>

<!-- Element reveals on scroll -->
<div class="ease-scroll-reveal">Content</div>

<!-- Staggered children -->
<div class="ease-scroll-stagger">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## Customisation

The progress bar uses CSS custom properties:
- `--ease-primary`: start colour (default `#6366f1`)
- `--ease-accent`: end colour (default `#06b6d4`)

## Browser Support

Requires Chrome 115+ or Edge 115+. Falls back gracefully (no animation) in other browsers.
