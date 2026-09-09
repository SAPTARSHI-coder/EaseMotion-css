# Gradient Text Shimmer

1. What does this do? Renders animated gradient text whose hues sweep back and forth like silk, with the gradient clipped to the glyph shapes.
2. How is it used? Add `class="gradient-text-shimmer"` to any text element. Adjust the gradient angle and sweep speed via `--gts-angle` and `--gts-speed`. Use the `.gradient-text-shimmer--lg` modifier for a larger display size.
3. Why is it useful? It gives headings a flowing iridescent effect with pure CSS (no images or JavaScript), works in modern browsers via `background-clip: text`, and freezes to a still gradient under `prefers-reduced-motion`.
