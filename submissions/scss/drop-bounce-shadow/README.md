# Drop Bounce Shadow SCSS Animation Mixin

A core animation utility and SCSS mixin providing a hardware-accelerated drop and bounce effect using `transform` and `opacity`.

## Features

- **Hardware Accelerated:** Uses `transform` (`translateY`) and `opacity` properties for smooth 60 FPS performance.
- **SCSS Mixin & CSS Utility:** Can be consumed via `@include drop-bounce-shadow()` in SCSS or through the `.ease-anim-drop-bounce-shadow` class in plain CSS.
- **Configurable:** Driven by `--ease-duration` and `--ease-timing` variables.
- **Reduced Motion Support:** Automatically disables motion when `@media (prefers-reduced-motion: reduce)` is active.

## Usage

### SCSS Mixin
```scss
@import 'easemotion/mixins';

.my-element {
  @include drop-bounce-shadow(1.5s, ease-out);
}
