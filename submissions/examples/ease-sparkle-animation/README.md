# Sparkle Stars Animation (`ease-sparkle`)

An intermediate animation modifier utility that dynamically scatters exactly 3 gold sparkle points across the element's perimeter corners natively on cursor hover focus.

## Architectural Layout Blueprint

- **Isolated 3-Point Coordinate Map:** Maps exactly 3 structural particle nodes using standard pseudo-elements (`::before`, `::after`) combined with a localized element tag to bypass browser clipping parameters.
- **Strict Scale Interpolation:** Follows a precise `scale(0) -> scale(1) -> scale(0)` performance keyframe loop to render clean particle pops without computational layout overshoots.
- **Accessible Motion Isolation:** Armed with functional `@media (prefers-reduced-motion: reduce)` block sheets that freeze active keyframe loops for reading comfort.

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**