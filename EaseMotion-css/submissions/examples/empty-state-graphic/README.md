# Empty State Graphic

1. What does this do? A friendly empty state with an animated icon (a pulsing halo ring and a bobbing core emoji), explanatory copy, and a call-to-action button that fills on hover.
2. How is it used? Build an `.empty-state-graphic` block with an `.empty-state-graphic__art` container holding a `.empty-state-graphic__ring` (the animated halo) and a `.empty-state-graphic__core` (emoji), followed by a heading, `.empty-state-graphic__copy`, and an `.empty-state-graphic__cta` button. The ring expands and fades while the core bobs. Adjust the accent color and speed via `--es-accent` and `--es-speed`.
3. Why is it useful? It turns an empty/no-results state into an inviting moment using only CSS animations (no JavaScript), and renders statically under `prefers-reduced-motion`.
