# Issue 18192 — Float

Gentle floating up-and-down bobbing animation.

**Technique:** `@keyframes` animating `translateY` with `ease-in-out` timing for a natural float. Renders as a card with an icon and label.

**Custom properties:** `--float-distance`, `--float-speed`, `--card-size`.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` disables the animation.
