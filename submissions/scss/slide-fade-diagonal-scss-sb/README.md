# Slide Fade Diagonal — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-slide-fade-diagonal` keyframes and a `.ease-anim-slide-fade-diagonal` utility class.

## What it does
An element slides in diagonally while fading in. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-slide-fade-diagonal.scss` — the mixin partial

## Usage
```scss
@use "./ease-slide-fade-diagonal" as *;

.my-element {
  @include ease-anim-slide-fade-diagonal;
}
```

### Configurable parameters
```scss
@include ease-anim-slide-fade-diagonal($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81879
