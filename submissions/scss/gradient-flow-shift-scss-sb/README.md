# Gradient Flow Shift — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-gradient-flow-shift` keyframes and a `.ease-anim-gradient-flow-shift` utility class.

## What it does
A flowing gradient that shifts its background-position in a loop. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-gradient-flow-shift.scss` — the mixin partial

## Usage
```scss
@use "./ease-gradient-flow-shift" as *;

.my-element {
  @include ease-anim-gradient-flow-shift;
}
```

### Configurable parameters
```scss
@include ease-anim-gradient-flow-shift($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81844
