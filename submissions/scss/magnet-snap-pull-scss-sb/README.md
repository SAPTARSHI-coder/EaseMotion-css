# Magnet Snap Pull — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-magnet-snap-pull` keyframes and a `.ease-anim-magnet-snap-pull` utility class.

## What it does
An element snapping in like pulled by a magnet (translate3d + scale + opacity). Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-magnet-snap-pull.scss` — the mixin partial

## Usage
```scss
@use "./ease-magnet-snap-pull" as *;

.my-element {
  @include ease-anim-magnet-snap-pull;
}
```

### Configurable parameters
```scss
@include ease-anim-magnet-snap-pull($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81697
