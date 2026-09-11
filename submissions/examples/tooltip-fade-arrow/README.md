# Tooltip (Fade Arrow)

1. What does this do? A smart tooltip that fades in above its target with a pointing arrow, revealed on hover and keyboard focus.
2. How is it used? Wrap a `.tooltip-fade-arrow__target` button and a `.tooltip-fade-arrow__bubble` (containing a `.tooltip-fade-arrow__arrow`) inside a `.tooltip-fade-arrow` container. The bubble shows on `:hover` and `:focus-within`. Adjust colors and fade timing via the `--tfa-*` variables.
3. Why is it useful? It is a dependency-free, accessible tooltip with a pointing arrow and a smooth combined opacity/translate fade, and it respects `prefers-reduced-motion`.
