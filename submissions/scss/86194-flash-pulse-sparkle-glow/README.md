# Flash Pulse Sparkle Glow

A reusable SCSS animation mixin for creating a soft pulsing sparkle effect
using compositor-friendly `transform` and `opacity` properties.

## 1. What does this do?

Provides:

- `ease-flash-pulse-sparkle-glow` keyframes.
- `ease-anim-flash-pulse-sparkle-glow` utility class.
- `ease-anim-flash-pulse-sparkle-glow()` SCSS mixin.
- Configurable animation duration.
- Configurable animation timing function.
- `prefers-reduced-motion` support.
- A visual `demo.html` example with supporting `style.css`.

The animation scales the sparkle between `0.92` and `1.08` while
changing opacity between `0.45` and `1`.

## 2. How is it used?

Import the SCSS partial:

```scss
@use "flash-pulse-sparkle-glow" as *;
.sparkle {
  @include ease-anim-flash-pulse-sparkle-glow;
}