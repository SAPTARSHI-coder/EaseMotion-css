# Gradient Rotate Loader

1. What does this do? Shows a soft multi-stop conic gradient that spins beneath a round mask, producing a smooth color sweep around a ring.
2. How is it used? Add a `.gradient-rotate-loader` element (optionally with a `.gradient-rotate-loader__label` child). Customize size, ring thickness, track color, and speed via `--grl-size`, `--grl-ring`, `--grl-track`, and `--grl-speed`.
3. Why is it useful? It is a lightweight, dependency-free loader with a smooth, full-color sweep (no harsh arc edges), and it respects `prefers-reduced-motion`.
