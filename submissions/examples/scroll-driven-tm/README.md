# Scroll-Driven Animations · Scrollytelling Demo

A narrative scrollytelling demo featuring six scenes powered purely by CSS scroll-driven animations (`scroll-timeline`, `view-timeline`, `animation-range`). No JavaScript.

## Scenes

1. **Horizon Reveal** — a landscape rises from the bottom via scaleY driven by `view-timeline`
2. **Parallax Drift** — tiles drift horizontally at staggered speeds creating parallax depth
3. **Spiral Bloom** — a dot expands through concentric ring shadows and morphs into a square
4. **Staggered Hops** — dots slide into view sequentially using per-element view timelines
5. **Wave Rider** — a repeating gradient scrolls while an emoji surf slides across the viewport
6. **Flux Meter** — five bars fill to their `--target` percentage using view-timeline animation

## Theme

Neutral warm/ink palette with automatic dark mode via `prefers-color-scheme`. Reduced motion respected via `prefers-reduced-motion`.
