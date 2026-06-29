# Issue 18197 — Typing Indicator

Three dots animate sequentially to indicate someone is typing.

**Technique:** Each `.dot` uses `@keyframes` that translates Y and changes opacity. Staggered `animation-delay` via a `--dot-i` custom property creates the wave effect.

**Custom properties:** `--dot-size`, `--dot-color`, `--dot-gap`, `--anim-duration`, `--anim-distance`.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` disables animation and shows static dots at reduced opacity.
