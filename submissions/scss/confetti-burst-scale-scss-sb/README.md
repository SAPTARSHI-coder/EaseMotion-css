# Confetti Burst Scale — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-confetti-burst-scale` keyframes and a `.ease-anim-confetti-burst-scale` utility class.

## What it does
Confetti pieces burst outward with an overshoot scale pop. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-confetti-burst-scale.scss` — the mixin partial

## Usage
```scss
@use "./ease-confetti-burst-scale" as *;

.my-element {
  @include ease-anim-confetti-burst-scale;
}
```

### Configurable parameters
```scss
@include ease-anim-confetti-burst-scale($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81842
