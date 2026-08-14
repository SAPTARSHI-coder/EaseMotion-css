# Matrix Rain Fall Mixin

## Description
The `ease-matrix-rain-fall-kiit` is an SCSS animation mixin and utility class that creates a hardware-accelerated matrix-style falling animation using `transform` and `opacity`. The element falls downwards while fading in and out, simulating digital rain.

## Installation & Usage

```scss
@import 'path/to/ease-matrix-rain-fall-kiit/ease-matrix-rain-fall';

// Use the utility class directly in HTML:
<div class="ease-anim-matrix-rain-fall">Matrix</div>

// Or use the mixin in your own classes:
.my-custom-element {
  --ease-duration: 3s;
  --ease-timing: ease-in-out;
  @include ease-matrix-rain-fall-mixin();
}
```

## Configurable Variables
| Variable | Default | Description |
|-----------|---------|-------------|
| `--ease-duration` | `2s` | Duration of the animation loop. |
| `--ease-timing` | `linear` | Timing function for the animation curve. |

## Accessibility Considerations
- **Reduced Motion**: The utility class includes an automatic `@media (prefers-reduced-motion: reduce)` override to disable the animation, keeping the element completely visible but static for users who prefer reduced motion.
