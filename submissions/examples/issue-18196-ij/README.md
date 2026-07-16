# Issue 18196 — Progress Bar

Animated progress bar that fills from 0% to 100% on load.

**Technique:** `@keyframes` animating `width` from 0% to 100% with `ease-out` timing. Uses `animation-fill-mode: forwards` to retain the final state.

**Custom properties:** `--fill-color`, `--fill-height`, `--fill-duration`, `--track-bg`, `--radius`.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` sets width to 100% immediately without animation.
