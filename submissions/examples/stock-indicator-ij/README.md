# Stock Indicator

1. What does this do? A stock availability indicator with animated dot + expanding ring for low stock, a solid green for in-stock, and gray for out-of-stock. The low-stock dot pulses while a ring radiates outward to draw urgency.

2. How is it used? Add a `.stock-card` with `.stock-dot` and `.stock-ring` elements. Apply class `.low` for pulsing red (with ring animation), `.in-stock` for solid green, or `.oos` for gray. The ring animation is driven by `@keyframes ring-burst`.

3. Why is it useful? Stock indicators are critical for e-commerce urgency (e.g., "Only 3 left!"). The pulsing dot + expanding ring creates a subtle urgency cue that draws the eye without being distracting, encouraging faster purchase decisions.
