# Flip Icon Example (Standard)

## Description
A standard HTML/CSS example demonstrating an infinite "Flip" animation used as a Loading Indicator. The icon repeatedly flips 360 degrees around the Y-axis (`rotateY`), making it suitable for sync or refresh icons.

## Files
- `demo.html`: The markup for the icon inside a circular wrapper.
- `style.css`: Uses `@keyframes infinite-flip-y-ag` with `perspective` to create the 3D flipping motion.

## Accessibility
- The wrapper includes `role="status"` and `aria-label="Loading"` so screen readers can announce it properly.
- **Reduced Motion**: Disables the physical 3D flip animation entirely. Replaces it with a slow, safe opacity pulse on the wrapper to convey the loading state without triggering motion sickness.
