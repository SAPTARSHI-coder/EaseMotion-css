# Skeleton Loading Shimmer

A modern skeleton placeholder with a sweeping light shimmer effect, commonly used to indicate that content is loading.

## Preview

Open `demo.html` in your browser to see a mock user profile card displaying the shimmer loading state.

## Implementation Details

- **No Images/JavaScript:** The shimmer is created entirely mathematically using CSS gradients.
- **The Gradient:** The base color of the skeleton elements is a solid light gray (`#e2e5e7`). On top of that, a `linear-gradient` is applied as a `background-image`. This gradient transitions from transparent, to semi-transparent white (the "shimmer"), back to transparent.
- **Animation:** The gradient's `background-size` is stretched to `200%` width. The `@keyframes shimmer` animation then continuously sweeps the `background-position` from left (`-200%`) to right (`200%`), passing the white highlight over the gray elements repeatedly.
