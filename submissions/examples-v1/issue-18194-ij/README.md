# Issue 18194 — Shake

Element shakes horizontally on button click.

**Technique:** `@keyframes` alternating `translateX` rapidly. A small JS snippet toggles a class `.shake-active` on button click, re-triggering the animation by forcing a reflow.

**Custom properties:** `--shake-distance`, `--shake-speed`, `--card-size`, `--accent`.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` disables the shake animation.
