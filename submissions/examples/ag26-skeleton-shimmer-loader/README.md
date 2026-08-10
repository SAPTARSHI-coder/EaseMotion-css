# Skeleton Loading Shimmer Effect

A modern placeholder shimmer animation used for loading states, entirely in CSS.

## Preview
Open `demo.html` in your browser. You will see a mock card with image and text placeholders that continuously sweep a bright shimmer from left to right.

## Implementation
- The `.skeleton` class has a base gray background.
- It overlays a `linear-gradient` with a lighter gray strip in the middle.
- The `background-size` is set larger than the element, and the `@keyframes shimmer` continuously moves the `background-position` from left to right, creating the shine effect.
