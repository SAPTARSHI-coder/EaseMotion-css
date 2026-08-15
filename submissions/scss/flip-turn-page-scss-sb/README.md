# Flip Turn Page — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-flip-turn-page` keyframes and a `.ease-anim-flip-turn-page` utility class.

## What it does
A page-turn flip using rotateY. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-flip-turn-page.scss` — the mixin partial

## Usage
```scss
@use "./ease-flip-turn-page" as *;

.my-element {
  @include ease-anim-flip-turn-page;
}
```

### Configurable parameters
```scss
@include ease-anim-flip-turn-page($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81883
