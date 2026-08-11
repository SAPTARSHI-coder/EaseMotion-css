# Issue 18191 — Pulse Ring

Expanding pulse ring effect using `::before` and `::after` pseudo-elements.

**Technique:** Two concentric rings expand outward with `scale` and `opacity` fade using `@keyframes`. Staggered `animation-delay` on `::after`.

**Custom properties:** `--ring-size`, `--icon-size`, `--ring-color`, `--pulse-duration`.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` removes pseudo-elements entirely.
