# Product Quick View

1. What does this do? A quick-view modal that scales up from the product card with a springy `cubic-bezier` animation. The overlay fades in while the modal panel grows from `scale(0.7)` to `scale(1)` with an overshoot bounce effect. Includes close button and backdrop click to dismiss.

2. How is it used? Clicking "Quick View" adds `.open` class to the `.modal-overlay`. The overlay animates with `@keyframes overlay-in` (fade), and the modal panel animates with `@keyframes modal-scale-in` (`cubic-bezier(0.34, 1.56, 0.64, 1)` for the overshoot bounce). A small JS snippet handles open/close/dismiss logic.

3. Why is it useful? Quick-view modals are a staple of e-commerce product grids. The scale-from-card animation creates a spatial connection between the product card and the modal, making the interaction feel natural and polished.
