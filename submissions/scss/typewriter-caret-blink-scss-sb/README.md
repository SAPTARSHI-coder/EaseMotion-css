# Typewriter Caret Blink — SCSS animation mixin

A reusable SCSS mixin for the EaseMotion core animation library that emits the `ease-typewriter-caret-blink` keyframes and a `.ease-anim-typewriter-caret-blink` utility class.

## What it does
A blinking caret using opacity. Hardware-accelerated using `transform` and `opacity` for 60 FPS, with a `prefers-reduced-motion` override.

## Files
- `_ease-typewriter-caret-blink.scss` — the mixin partial

## Usage
```scss
@use "./ease-typewriter-caret-blink" as *;

.my-element {
  @include ease-anim-typewriter-caret-blink;
}
```

### Configurable parameters
```scss
@include ease-anim-typewriter-caret-blink($duration: 1.2s, $timing: ease-in-out, $fill: both);
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

Closes #81691
