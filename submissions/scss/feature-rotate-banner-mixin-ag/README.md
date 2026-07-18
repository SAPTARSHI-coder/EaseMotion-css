# Rotate Banner Mixin

## Description
The `ease-rotate-banner-mixin-ag` is an SCSS mixin designed for banner notifications. It creates a 3D entrance effect where the banner appears to swing down from the top edge (like a hinge) by utilizing `rotateX` and `perspective`.

## Installation & Usage
Import the `_rotate-banner.scss` file into your styles.

```scss
@import 'path/to/feature-rotate-banner-mixin-ag/rotate-banner';

.top-alert-banner {
  /* Basic banner styling */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ef4444;
  color: white;
  padding: 1rem;
  text-align: center;
  z-index: 1000;
  
  /* Apply the mixin */
  @include ease-rotate-banner-mixin-ag(0.6s, ease-out);
}
```

## Parameters
The mixin accepts the following optional parameters:
- `$duration`: How long the entrance animation lasts. Default is `0.6s`.
- `$easing`: The timing function. Default is `ease-out`.

## How It Works
The keyframes set `transform-origin: top` so the element hinges from its top edge. It starts at `rotateX(-90deg)` (folded up and invisible), swings past the resting point slightly to `rotateX(15deg)`, and finally settles at `0deg`.

## Accessibility Considerations
- **Reduced Motion**: 3D rotations can cause discomfort. A `@media (prefers-reduced-motion: reduce)` block disables the rotation completely. It falls back to a simple, standard `translateY` fade-down (`ease-rotate-banner-fallback-ag`), ensuring a safe viewing experience for all users while retaining the concept of the element entering from above.
