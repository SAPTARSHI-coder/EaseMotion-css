# Jello Card Example

## Description
This is a standard HTML/CSS example demonstrating a "Jello" interactive state animation. When a user hovers over or focuses on the card, it squishes and wobbles like jello. This is a playful effect that can add character to pricing cards, feature highlights, or game UI.

## Files
- `demo.html`: Contains the card markup. Uses `tabindex="0"` to make the card focusable for testing.
- `style.css`: Applies the jello keyframes on `:hover` and `:focus-visible`. The animation utilizes `scale3d` to distort the element proportionally without changing its layout flow.

## Accessibility
- Uses `:focus-visible` to trigger the animation for keyboard users and provides a clear focus ring.
- **Reduced Motion**: Disables the complex scaling wobble via `@media (prefers-reduced-motion: reduce)`. It gracefully falls back to a simple, static `scale(1.02)` transform on hover.
