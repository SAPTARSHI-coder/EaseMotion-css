# RubberBand Button Example (Standard)

## Description
A standard HTML/CSS button component that implements a "RubberBand" Hover Effect. When the user hovers over (or focuses) the button, it stretches horizontally and squeezes vertically in rapid succession, settling back to its original shape. This provides a tactile, playful interaction.

## Files
- `demo.html`: Contains the standard button markup.
- `style.css`: Contains the button styles and the `@keyframes button-rubberband-ag` animation, utilizing `scale3d` for performant squashing and stretching.

## Accessibility
- Uses `:focus-visible` so keyboard users can trigger the same animation when tabbing to the button.
- **Reduced Motion**: Disables the extreme squash-and-stretch animation completely. Replaces it with a static `scale(1.02)` transform on hover to provide safe, subtle interaction feedback without triggering motion sensitivity issues.
