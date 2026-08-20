# Profile Chip Menu

1. What does this do? An avatar chip that expands into a small account menu on hover or keyboard focus.
2. How is it used? Wrap a `.profile-chip-menu__chip` button and a `.profile-chip-menu__list` of links inside a `.profile-chip-menu` container. The menu opens on `:hover` and `:focus-within`, so it works for mouse and keyboard users. Customize the accent color and open speed via `--pcm-accent` and `--pcm-speed`.
3. Why is it useful? It provides a compact account menu with pure-CSS reveal (no JavaScript), accessible roles, and `prefers-reduced-motion` support.
