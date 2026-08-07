# Glitch Toggle Loading Example

## Description
This is a standard HTML/CSS/JS example demonstrating a "Glitch" loading indicator on a toggle switch. When the switch is turned on, it simulates a processing/loading state by applying a chaotic, cyberpunk-style glitch animation for 3 seconds before settling into a standard 'on' state.

## Files
- `demo.html`: Contains the structural markup for a semantic `<button role="switch">` and vanilla JS to manage ARIA states and trigger the loading timeout.
- `style.css`: Contains the toggle styling and the `@keyframes ease-glitch-container-ag` and `ease-glitch-thumb-ag` animations.

## How It Works
1. The user clicks the toggle, and JS sets `aria-checked="true"`.
2. JS also appends the `.is-loading-ag` class for a simulated network request duration (3 seconds).
3. While `.is-loading-ag` is present, the toggle track and thumb undergo rapid, infinite animations (`translate`, `skew`, `scale`, and color shifts between green, red, and cyan). This creates the jittery glitch effect.
4. After 3 seconds, the JS removes `.is-loading-ag` and the toggle stabilizes.

## Accessibility Considerations
- Uses `role="switch"` and `aria-checked` to properly convey state to screen readers.
- Fully keyboard accessible via standard button behavior (`tab` to focus, `space`/`enter` to toggle).
- An `aria-labelledby` attribute links the label to the toggle.
- **Reduced Motion**: Disables the rapid glitch animations via `@media (prefers-reduced-motion: reduce)`. The loading state is replaced with a safe, slow opacity pulse.
