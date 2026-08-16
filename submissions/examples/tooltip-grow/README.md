# Tooltip Grow

1. What does this do? A hover/focus tooltip that grows into view (scale + fade) above its target, with a pointer arrow.
2. How is it used? Build a `.tooltip-grow` wrapper containing a `.tooltip-grow__target` (button) and a `.tooltip-grow__bubble` (`role="tooltip"`) with a `.tooltip-grow__arrow`. The bubble scales from 0.6 to 1 and fades in on hover/focus. Adjust the accent color and speed via `--tg-accent` and `--tg-speed`.
3. Why is it useful? It delivers an accessible tooltip with keyboard focus support using only CSS (no JavaScript), and renders statically under `prefers-reduced-motion`.
