# Ripple Button

1. What does this do? A button that releases an expanding ripple ring from its center on click (and lifts on hover, settles on press).
2. How is it used? Build a `.ripple-button` containing a `.ripple-button__label` and a trailing `.ripple-button__ring` span. The ring blooms outward on `:active`. Adjust the accent color and ripple speed via `--rb-accent` and `--rb-speed`.
3. Why is it useful? It adds satisfying tactile click feedback with pure CSS animations (no JavaScript), and the ripple is disabled under `prefers-reduced-motion`.
