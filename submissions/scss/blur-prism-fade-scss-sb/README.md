# Blur Prism Fade — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-blur-prism-fade` keyframes and a `.ease-anim-blur-prism-fade` utility class.

## What it does
An element fades in from a blurred, scaled-up state. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-blur-prism-fade.scss` — the mixin partial

## Usage
```scss
@use "./ease-blur-prism-fade" as *;

.my-element {
  @include ease-anim-blur-prism-fade;
}
```

### Configurable parameters
```scss
@include ease-anim-blur-prism-fade($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81865
