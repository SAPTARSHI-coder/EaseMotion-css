# Flip 3D Button

1. What does this do? A two-faced button that rotates 180 degrees around the X axis on hover/focus to reveal a second face.
2. How is it used? Wrap two `.flip-3d-button__face` buttons (front and back) inside a `.flip-3d-button` container. Customize the two face colors and flip speed via `--f3b-from`, `--f3b-to`, and `--f3b-speed`.
3. Why is it useful? It gives a compact, tactile two-state affordance using only CSS 3D transforms (no JavaScript), and respects `prefers-reduced-motion`.
