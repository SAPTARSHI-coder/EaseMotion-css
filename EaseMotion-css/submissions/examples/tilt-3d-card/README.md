# Tilt 3D Card

1. What does this do? A card that tilts in 3D space on hover, lifting its content toward the viewer and casting a deep directional shadow.
2. How is it used? Build a `.tilt-3d-card` (sets perspective) wrapping a `.tilt-3d-card__content` block. On hover/focus the content rotates by `--t3c-rx`/`--t3c-ry` and lifts on Z, with inner elements given `translateZ` for a parallax pop. To make the tilt track the pointer, set `--rx`/`--ry` from a small mousemove script; otherwise the CSS defaults apply on hover. Adjust the speed via `--t3c-speed`.
3. Why is it useful? It creates a tactile 3D tilt-and-lift effect with pure CSS transforms (no JavaScript required for the default hover behavior), keyboard focus support, and `prefers-reduced-motion` support.
