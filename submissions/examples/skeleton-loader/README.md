# Skeleton Loader

1. What does this do? A shimmering card skeleton that sweeps a light band across grey placeholder blocks (media + title + text lines) to indicate loading.
2. How is it used? Build a `.skeleton-loader` with a `.skeleton-loader__media` block and a `.skeleton-loader__body` of `.skeleton-loader__line` blocks (use `--title`, `--text`, `--short` modifiers for widths). Adjust the base/shine colors and sweep speed via `--sk-base`, `--sk-shine`, and `--sk-speed`.
3. Why is it useful? It communicates loading state with a smooth shimmer using only CSS gradients and animations (no JavaScript), and freezes to a static grey under `prefers-reduced-motion`.
