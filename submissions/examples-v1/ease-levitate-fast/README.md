# Fast Levitation Animation (`ease-levitate-fast`)

A beginner-to-intermediate continuous animation utility token engineered to loop an element vertically with a rapid, energetic floating motion over an optimized 1.5-second time frame.

## Architectural Layout Blueprint

- **Custom Variable Height Integration:** Driven by the custom `--ease-levitate-height` property, allowing swift configurations of spatial vertical displacement paths.
- **Asymmetric Vector Displacement:** Runs a continuous `translateY(0) -> translateY(var(--ease-levitate-height)) -> translateY(0)` keyframe matrix with synchronized box-shadow expansion.
- **Accessible Motion Support:** Configured natively with a defensive `@media (prefers-reduced-motion: reduce)` block query that completely freezes all continuous floating loops.

## Workspace Tree Map
- `demo.html`: Independent playground housing the live interactive showcase.
- `style.css`: Clean modular tracking stylesheet rules.

---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**