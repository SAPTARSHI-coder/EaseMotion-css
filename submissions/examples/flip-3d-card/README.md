# Flip 3D Card

1. What does this do? A photo card that flips 180 degrees on the Y axis to reveal details on its back face, triggered by hover or keyboard focus.
2. How is it used? Build a `.flip-3d-card` (with `tabindex="0"` for keyboard flip) containing a `.flip-3d-card__inner` wrapper that holds a `.flip-3d-card__face--front` and a `.flip-3d-card__face--back` face. Adjust the flip speed via `--f3d-speed`.
3. Why is it useful? It creates a polished 3D flip effect using only CSS transforms (`transform-style: preserve-3d`, `backface-visibility: hidden`), supports keyboard focus, and respects `prefers-reduced-motion`.
