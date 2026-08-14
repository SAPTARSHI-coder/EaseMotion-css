# Underline Expand Center — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-underline-expand-center` keyframes and a `.ease-anim-underline-expand-center` utility class.

## What it does
An underline that expands outward from the center. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-underline-expand-center.scss` — the mixin partial

## Usage
```scss
@use "./ease-underline-expand-center" as *;

.my-element {
  @include ease-anim-underline-expand-center;
}
```

### Configurable parameters
```scss
@include ease-anim-underline-expand-center($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81851
