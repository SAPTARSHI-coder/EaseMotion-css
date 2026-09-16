# Search Expand

1. What does this do? A round search button that widens into a full input on hover (or when focused), then collapses back when the pointer leaves and the field loses focus.
2. How is it used? Build a `.search-expand` form with a `.search-expand__input` and a round `.search-expand__btn` containing an SVG icon. On hover/focus-within the input width grows and the placeholder fades in. Adjust the accent color and expand speed via `--se-accent` and `--se-speed`.
3. Why is it useful? It saves space with a compact round button that expands into a usable search field using only CSS transitions (no JavaScript), supports keyboard focus to keep the field open, and respects `prefers-reduced-motion` (renders fully expanded).
