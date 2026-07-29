# Issue 18187 — Stack Cards

Stacked cards fan out on hover with staggered transitions.

**Technique:** CSS `transition` on `transform` with staggered `transition-delay` per card. Uses `:hover` on the parent container.

**Custom properties:** `--card-width`, `--card-height`, `--stack-offset`, `--fan-rotate`, `--fan-translate`, `--transition-duration`.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` disables all transitions and resets transforms.
