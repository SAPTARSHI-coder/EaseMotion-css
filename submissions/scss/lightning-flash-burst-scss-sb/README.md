# Lightning Flash Burst — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-lightning-flash-burst` keyframes and a `.ease-anim-lightning-flash-burst` utility class.

## What it does
A lightning bolt that flashes in bursts. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-lightning-flash-burst.scss` — the mixin partial

## Usage
```scss
@use "./ease-lightning-flash-burst" as *;

.my-element {
  @include ease-anim-lightning-flash-burst;
}
```

### Configurable parameters
```scss
@include ease-anim-lightning-flash-burst($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81869
