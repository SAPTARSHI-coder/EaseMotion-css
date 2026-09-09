# Icon Rotate Button

1. What does this do? A circular icon button whose arrow spins 90 degrees and darts forward with a color shift on hover/focus.
2. How is it used? Apply `.icon-rotate-button` to a button and place an inline `.icon-rotate-button__icon` SVG inside. Customize colors, dart distance, and speed via `--irb-bg`, `--irb-ink`, `--irb-ink-hover`, `--irb-accent`, and `--irb-speed`.
3. Why is it useful? It gives icon buttons directional, energetic feedback using only CSS transforms (no JavaScript), and respects `prefers-reduced-motion`.
