# Jello Image Example

## Description
A standard HTML/CSS example demonstrating a "Jello" attention-seeker animation applied to an image. When a user hovers over or focuses the image wrapper, the image wobbles with a skew-based jello effect before settling back to its original shape. This adds a playful, interactive feel to media galleries or cards.

## Files
- `demo.html`: An image wrapped in a container that can receive focus.
- `style.css`: Uses a multi-step `@keyframes` animation altering `skewX` and `skewY` to produce the jello wobble.

## Accessibility
- The image wrapper uses `tabindex="0"` and an `aria-label` to ensure it is discoverable by keyboard and screen readers.
- `:focus-visible` provides a clear focus outline on the wrapper.
- **Reduced Motion**: Disables the complex skew animation, falling back to a subtle, simple `scale(1.02)` effect on hover/focus.
