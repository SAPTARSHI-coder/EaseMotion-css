# Text Stroke Animation

1. What does this do? Outlined display text that fills with a vertical gradient in a top-to-bottom sweep, looping alternate.
2. How is it used? Build a `.text-stroke-animation` heading (transparent fill with a thick outline via `-webkit-text-stroke`) containing an absolutely positioned `.text-stroke-animation__fill` duplicate that holds the colored gradient fill and is revealed by animating `clip-path` from `inset(0 0 100% 0)` to `inset(0 0 0 0)`. Adjust the fill gradient and sweep speed via `--tsa-fill` and `--tsa-speed`.
3. Why is it useful? It creates a striking vertical color-fill text reveal using only CSS (no images or JavaScript), and freezes to a fully filled state under `prefers-reduced-motion`.
