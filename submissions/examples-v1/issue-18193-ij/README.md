# Issue 18193 — Wobble

Element wobbles side to side on hover using alternating rotation values.

**Technique:** `@keyframes` with decaying oscillation angles triggered by `:hover`. Keyframes alternate between negative and positive rotation.

**Custom properties:** `--wobble-deg`, `--wobble-speed`, `--card-size`.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` disables the wobble animation on hover.
