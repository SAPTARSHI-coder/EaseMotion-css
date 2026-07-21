## What

Side-by-side comparison of CSS Grid's `auto-fill` and `auto-fit` keywords using `repeat(auto-fill/auto-fit, minmax(160px, 1fr))`. Two galleries display 8 numbered cards each — one uses `auto-fill`, the other `auto-fit` — to demonstrate how each handles empty grid tracks when the container is wider than the total item width.

## How

- `.gallery--fill` uses `grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))`, which preserves empty column tracks.
- `.gallery--fit` uses `grid-template-columns: repeat(auto-fit, minmax(160px, 1fr))`, which collapses empty tracks and lets items expand.
- Cards use a staggered `animation-delay` via a `--h` custom property for a cascading entrance effect.
- No media queries are used; responsiveness is fully driven by `minmax()` and the `auto-*` keywords.
- `prefers-reduced-motion` disables the entrance animation and falls back to a static layout.

## Why

Understanding the `auto-fill` vs `auto-fit` distinction is essential for building resilient CSS Grid layouts without media queries. `auto-fill` is useful when you want stable column counts (e.g. placeholder slots in a dashboard), while `auto-fit` is ideal when items should expand to fill available space (e.g. product cards in a storefront). This example makes the difference visually obvious.
