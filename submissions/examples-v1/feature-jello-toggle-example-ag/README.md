# Jello Toggle Example (Standard)

## Description
A standard HTML/CSS custom toggle switch that applies a "Jello" interactive state animation. When the user clicks or presses the toggle, the entire switch track wobbles like jello (using `scale3d` distortions) to provide fun, tactile feedback.

## Files
- `demo.html`: Contains the wrapper, native checkbox, and the custom switch `<div>`.
- `style.css`: Styles the custom switch and uses `:active` on the wrapper to trigger the `@keyframes jello-active-ag` animation.

## Accessibility
- Uses a visually hidden native `<input type="checkbox">` to ensure correct screen reader semantics and form behavior.
- Supports `:focus-visible` to draw an outline ring when the user tabs to the input.
- **Reduced Motion**: Disables the multi-frame `scale3d` jello wobble. Replaces it with a static `transform: scale(0.95)` during the `:active` press state, providing safe tactile feedback without excessive motion.
