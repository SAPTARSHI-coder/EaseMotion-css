# Neon Text Flicker — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-neon-text-flicker` keyframes and a `.ease-anim-neon-text-flicker` utility class.

## What it does
A flickering neon sign effect. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-neon-text-flicker.scss` — the mixin partial

## Usage
```scss
@use "./ease-neon-text-flicker" as *;

.my-element {
  @include ease-anim-neon-text-flicker;
}
```

### Configurable parameters
```scss
@include ease-anim-neon-text-flicker($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81867
