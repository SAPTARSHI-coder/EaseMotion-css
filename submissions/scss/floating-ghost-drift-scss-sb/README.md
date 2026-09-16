# Floating Ghost Drift — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-floating-ghost-drift` keyframes and a `.ease-anim-floating-ghost-drift` utility class.

## What it does
A floating ghost that drifts side-to-side and up-down. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-floating-ghost-drift.scss` — the mixin partial

## Usage
```scss
@use "./ease-floating-ghost-drift" as *;

.my-element {
  @include ease-anim-floating-ghost-drift;
}
```

### Configurable parameters
```scss
@include ease-anim-floating-ghost-drift($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81848
