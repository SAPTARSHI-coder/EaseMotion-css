# Wiggle Modal Example

## Description
This is a standard HTML/CSS/JS example demonstrating a "Wiggle" attention-seeker animation applied to a modal. When the modal is triggered (e.g., simulating an error or incorrect password), it rapidly wiggles back and forth, visually communicating rejection or grabbing immediate attention.

## Files
- `demo.html`: Contains the modal layout and basic JavaScript to toggle visibility and restart the animation when opened.
- `style.css`: Uses keyframes animating `rotate` back and forth at decreasing intervals to create a natural, diminishing wiggle effect.

## Accessibility
- Uses standard ARIA attributes (`role="dialog"`, `aria-modal`, `aria-hidden`) for screen readers.
- **Reduced Motion**: Disables the wiggle animation entirely via `@media (prefers-reduced-motion: reduce)`. The modal will simply appear without shaking.
