# Text Kinetic Wave — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-text-kinetic-wave` keyframes and a `.ease-anim-text-kinetic-wave` utility class.

## What it does
Text rises and falls in a gentle kinetic wave. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-text-kinetic-wave.scss` — the mixin partial

## Usage
```scss
@use "./ease-text-kinetic-wave" as *;

.my-element {
  @include ease-anim-text-kinetic-wave;
}
```

### Configurable parameters
```scss
@include ease-anim-text-kinetic-wave($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81846
