# Issue 18198 — Breathing Glow

Element glows and fades like a deep breath cycle.

**Technique:** `@keyframes` animates `box-shadow` spread, `scale`, and `opacity` in a slow 4-second `ease-in-out` cycle. The circle expands with a larger glow at the peak (50%).

**Custom properties:** `--circle-size`, `--glow-color`, `--glow-size`, `--cycle-duration`, `--scale-min`, `--scale-max`.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` freezes the animation at a mid-glow state.
