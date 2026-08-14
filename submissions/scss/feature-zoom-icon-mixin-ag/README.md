# Zoom Icon Mixin

## Description
The `ease-zoom-icon-mixin-ag` is an SCSS mixin for animating icons as they enter the screen. It creates a satisfying, springy "zoom" effect where the icon scales up from 30% of its size, slightly overshoots its final dimension, and then settles at 100%. This is highly effective for drawing attention to state changes, such as a success checkmark appearing after form submission.

## Installation & Usage
Import the `_zoom-icon.scss` file into your styles.

```scss
@import 'path/to/feature-zoom-icon-mixin-ag/zoom-icon';

.success-checkmark-icon {
  /* Basic icon styling */
  width: 48px;
  height: 48px;
  color: #10b981;
  display: inline-block;
  
  /* Include the mixin for the entrance animation */
  @include ease-zoom-icon-mixin-ag(0.5s);
}
```

## Parameters
The mixin accepts the following optional parameters:
- `$duration`: How long the animation lasts. Default is `0.5s`.
- `$easing`: The timing function. Default is `cubic-bezier(0.175, 0.885, 0.32, 1.275)`, which provides the spring-like elastic pop at the end of the zoom.

## Accessibility Considerations
- **Reduced Motion**: The elastic scaling animation can trigger motion sickness in some users. A `@media (prefers-reduced-motion: reduce)` block disables the zoom completely and replaces it with a gentle opacity fade (`ease-zoom-icon-fallback-ag`), providing a safe and accessible alternative without losing the visual entrance cue.
