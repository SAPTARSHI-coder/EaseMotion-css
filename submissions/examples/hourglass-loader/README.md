# Hourglass Loader

1. What does this do? Shows a classic hourglass whose two halves continuously swap (the whole frame flips 180° each cycle) while the top bulb drains and the bottom bulb fills — a pure-CSS loader in a single element group.
2. How is it used? Add a `.hourglass-loader` element with a `.hourglass-loader__frame` span containing `.hourglass-loader__sand--top`, `.hourglass-loader__sand--bottom`, and `.hourglass-loader__stream` spans, plus an optional `.hourglass-loader__label`. Customize the glass, sand, frame, and cycle speed via `--hgl-glass`, `--hgl-sand`, `--hgl-frame`, and `--hgl-speed`.
3. Why is it useful? It is a dependency-free loader built entirely from CSS clip-paths and transforms (no images, no JavaScript), and it respects `prefers-reduced-motion`.
