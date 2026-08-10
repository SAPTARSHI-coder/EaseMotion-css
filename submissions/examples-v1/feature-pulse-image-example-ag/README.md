# Pulse Image Example (Standard)

## Description
A standard HTML/CSS example demonstrating a "Pulse" Exit Animation applied to an image. When a user chooses to delete the image, it performs a subtle outward pulse before shrinking and fading into nothingness. This gives a physical "pop" feeling to the deletion action.

## Files
- `demo.html`: Contains the image container and a delete button, wired with basic JavaScript to apply the `is-exiting-ag` class.
- `style.css`: Contains the image styles and the `@keyframes image-pulse-exit-ag` animation that scales the image up slightly before scaling it down to 0 opacity.

## Accessibility
- The delete button uses an explicit `aria-label="Delete Image"`.
- **Reduced Motion**: Disables the scaling transform pulse completely. Replaces it with a linear `opacity` fade (`image-fade-exit-ag`) so that motion-sensitive users do not experience the "pop" scaling effect.
