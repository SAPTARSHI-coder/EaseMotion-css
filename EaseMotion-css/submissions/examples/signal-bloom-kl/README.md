# Signal Bloom

A self-contained interactive visualization conceptualizing a communication signal that grows into a bloom of light. This component merges CSS animations and Vanilla JavaScript to create an atmospheric, reactive visual experience without external dependencies.

## Features

- **Central Transmitter**: A luminous, interactive core with a subtle idle pulse animation.
- **Dynamic Signal Rings**: Click-driven (or keyboard-driven) transmission waves that expand outward.
- **Particle Bloom**: Each signal triggers a radial explosion of particles dynamically generated via JavaScript and animated purely via CSS transforms.
- **Signal Strength Control**: An accessible range slider that directly modulates the maximum expansion radius and the number of generated bloom particles.
- **Frequency Control**: Radio buttons controlling the animation duration, simulating wavelength frequency impacts on the signal.
- **Performance Constraints**: Intelligent DOM cleanup tied to `animationend` events and a hard limit (`MAX_ACTIVE`) on transmission instances to prevent DOM bloat during rapid clicking.

## File Structure

- `demo.html`: Contains the structural markup, the semantic controls, and the Vanilla JavaScript driving the visualization logic.
- `style.css`: Houses all styling, visual aesthetics (glassmorphism panels, CSS grids), responsive layouts, and the heavy-lifting `@keyframes` driving the rings and particles.

## JavaScript Architecture

The logic is built purely in Vanilla JavaScript and adheres to safe DOM manipulation practices:
- **Element Creation**: Elements are created using `document.createElement()` and styled by writing directly to inline CSS variables (`style.setProperty`). 
- **Deterministic Randomness**: Math routines generate the exact radial distance (`--p-tx`, `--p-ty`), delays (`--p-delay`), and scales for the particles before they are appended to the DOM.
- **Cleanup Strategy**: A `{ once: true }` event listener for `animationend` on the primary signal ring handles the removal of the entire transmission wrapper and its nested particles, ensuring zero memory leaks over repeated usage.

## Accessibility

- **Keyboard Support**: The central transmitter is a native `<button>` element. It responds cleanly to `<kbd>Enter</kbd>` and `<kbd>Space</kbd>`. 
- **Focus Rings**: Defined explicitly utilizing `:focus-visible` with `outline-offset` to ensure high contrast keyboard navigation visibility.
- **Semantic HTML**: `<section>` elements utilize `aria-label`. The radio group uses `role="radiogroup"` and `aria-labelledby`.
- **Live Regions**: A dedicated visually-hidden (`sr-only`) div employs `aria-live="polite"` to announce successful transmissions, signal strength, and frequency to screen readers without overwhelming them with particle DOM updates.
- **Reduced Motion**: Respects `@media (prefers-reduced-motion: reduce)`. 
  - In CSS: Disables continuous idle pulses and converts the massive expanding rings into subtle in-place fade animations.
  - In JS: Reads `window.matchMedia` and completely halts the generation of the particle bloom, drastically reducing visual noise while maintaining the core logic and counter functionality.

## Responsive Design

The visualization employs modern CSS layout modules (Grid/Flexbox) scaling from massive ultra-wide monitors down to `320px` mobile devices:
- Controls shift from side-by-side grids to vertical stacked flex flows.
- Container padding and font sizes organically step down based on device width to preserve the visual focus.

## Installation / Usage

1. Open `demo.html` in any modern web browser.
2. Interact with the UI panel to configure your signal strength and frequency.
3. Click the central transmitter to fire the communication burst.
4. No build steps, bundlers, or CDNs are required.
