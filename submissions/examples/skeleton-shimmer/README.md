# Skeleton Shimmer

1. What does this do? Shimmering placeholder blocks (avatar + text lines) that sweep with a light gradient while content loads.
2. How is it used? Build a `.skeleton-shimmer` block with a `.skeleton-shimmer__avatar` and a `.skeleton-shimmer__lines` group of `.skeleton-shimmer__line` spans. Each block carries a base color with a transparent-to-light gradient overlay that animates its background-position to create the moving shimmer. Adjust the base color, shine tint, and sweep speed via `--ss-base`, `--ss-shine`, and `--ss-speed`.
3. Why is it useful? It shows a polished loading placeholder using only CSS (no JavaScript), and renders a static gray block under `prefers-reduced-motion`.
