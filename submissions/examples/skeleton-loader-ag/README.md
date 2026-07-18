# EaseMotion Skeleton Loader Example

This directory provides a standalone, pure CSS example of a skeleton loading state using EaseMotion-inspired CSS utility classes.

## What is a Skeleton Loader?
A skeleton loader is a placeholder UI that closely mimics the layout of the actual content being fetched from the server. It reduces the perceived waiting time for users and prevents jarring layout shifts when the real content finally renders.

## The `.ease-shimmer` Utility
Unlike spinners that use SVG rotations, this skeleton effect relies on animating a `linear-gradient` background.

### How it Works:
1. **The Gradient**: We define a horizontal gradient that starts with a base color (`#e2e8f0`), transitions to a bright highlight (`#f8fafc`), and returns to the base color.
2. **The Size**: We set `background-size: 200% 100%`. This stretches the background to be twice as wide as the actual element.
3. **The Animation**: The `@keyframes ease-shimmer` continuously shifts the `background-position` from `200% 0` to `-200% 0`. Because the background is oversized, this shift creates the illusion of a bright sheen moving horizontally across the element.

## Performance Considerations
This approach is highly performant. 
- It avoids animating layout-triggering properties like `width`, `margin`, or `left`.
- Animating `background-position` is generally paint-friendly and handled efficiently by modern browsers.
- Using a single utility class ensures that multiple skeleton elements can be rendered concurrently without choking the main thread.

## Accessibility (a11y)
The implementation fully respects the `@media (prefers-reduced-motion: reduce)` query. If reduced motion is preferred by the user, the `.ease-shimmer` animation is forced to `none`, and the background position is locked. The placeholder blocks remain fully visible to indicate a loading state, ensuring usability is preserved without inducing motion sickness.
