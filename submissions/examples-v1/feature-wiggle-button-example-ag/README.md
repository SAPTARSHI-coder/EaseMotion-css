# Wiggle Button Example

## Description
A standard HTML/CSS example demonstrating a "Wiggle" attention-seeker animation applied to a button. When hovered or focused, the button rocks slightly back and forth using a rotation keyframe. This is particularly useful for emphasizing important calls to action or error states.

## Files
- `demo.html`: The markup for the button.
- `style.css`: Uses an `@keyframes` animation modifying the `transform: rotate()` property back and forth to create the wiggle effect.

## Accessibility
- Includes standard `:focus-visible` outline for keyboard navigation.
- **Reduced Motion**: Disables the rotation-based wiggle animation, falling back to a subtle, static `scale(1.02)` transform on hover.
