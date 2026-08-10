# Bouncing Wave Text Loader

A text-based loading animation where each letter bounces up and down sequentially, creating a continuous wave pattern.

## Preview

Open `demo.html` in your browser to watch the letters spell out "LOADING..." while bouncing and changing color in a wave.

## Implementation Details

- **No JavaScript:** The staggered wave animation is achieved entirely through CSS.
- **Custom CSS Variables:** Each `<span>` element containing a letter has an inline CSS variable set (e.g., `style="--i:1"`).
- **Staggered Delays:** In the CSS, the `animation-delay` property calculates a delay based on that variable: `animation-delay: calc(.1s * var(--i));`. This ensures that each letter starts its bounce slightly after the previous one, forming the wave.
- **Color Change:** The `@keyframes` animation not only translates the letters on the Y-axis but also briefly changes their color to pink at the peak of the bounce.
