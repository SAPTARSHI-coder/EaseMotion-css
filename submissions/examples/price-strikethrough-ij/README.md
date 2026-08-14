# Price Strikethrough

1. What does this do? An animated price strikethrough where a red line draws from left to right across the original price using `scaleX(0)` → `scaleX(1)` with `transform-origin: left center`. A pulsing sale badge reinforces the discount. Includes a "done" variant showing the final state.

2. How is it used? Add a `.price-old` container with `.old-amount` and `.strike-line` child. The strike line animates via `@keyframes strike-draw` when visible. The sale badge pulses with `@keyframes badge-pulse` (subtle scale oscillation).

3. Why is it useful? Animated strikethroughs add a polish layer to sales/discount displays in e-commerce. The drawing line effect draws the eye to the price reduction, making discounts feel more impactful than a static strikethrough.
