# Zoom Elastic Stretch — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-zoom-elastic-stretch` keyframes and a `.ease-anim-zoom-elastic-stretch` utility class.

## What it does
An elastic zoom with a stretch overshoot. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-zoom-elastic-stretch.scss` — the mixin partial

## Usage
```scss
@use "./ease-zoom-elastic-stretch" as *;

.my-element {
  @include ease-anim-zoom-elastic-stretch;
}
```

### Configurable parameters
```scss
@include ease-anim-zoom-elastic-stretch($duration: 1.2s, $timing: ease-in-out, $fill: both);
```

Timing is also configurable at runtime via CSS custom properties:
```css
:root {
  --ease-duration: 1.2s;
  --ease-timing: ease-in-out;
}
```

## Accessibility
Includes a `@media (prefers-reduced-motion: reduce)` override that disables the animation.

Closes #81881
