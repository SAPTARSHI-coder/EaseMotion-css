# Issue 18195 — Spin Loader

Spinning circle loader with conic-gradient trail.

**Technique:** `border-radius: 50%` with a `conic-gradient` that transitions across colours. Continuous `@keyframes rotate` spins the element. A radial-gradient cutout creates the donut hole.

**Custom properties:** `--spinner-size`, `--spinner-speed`, `--spinner-color-start`, `--spinner-color-end`.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` stops the rotation and shows a full gradient.
