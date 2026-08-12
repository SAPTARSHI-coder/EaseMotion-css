# Animated Skeleton Loading Shimmer

A loading placeholder component with an animated shimmer sweep, used to indicate content is loading (text lines, avatars, cards).

## Usage
Apply `.skeleton` alongside a shape modifier class:
- `.skeleton-avatar` — circular avatar placeholder
- `.skeleton-text` — text line placeholder
- `.skeleton-text-short` — shorter text line variant

Combine inside a `.skeleton-card` wrapper to build a full loading card layout.

## Browser support
Works in all modern browsers — uses CSS gradients and keyframe animations only.

## Notes
No JavaScript required. Swap the `.skeleton` elements for real content once data has loaded.