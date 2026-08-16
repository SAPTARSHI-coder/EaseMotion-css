# Expandable Card

1. What does this do? A compact card that expands smoothly on hover to reveal a full description panel and a call-to-action button.
2. How is it used? Build an `.expandable-card` with a `.expandable-card__media` block and a `.expandable-card__body` containing the eyebrow, title, summary, a `.expandable-card__details` panel (clipped by default), and a `.expandable-card__btn`. On hover/focus-within the details `max-height` grows and the button fades in. Adjust the accent color and expand speed via `--ec-accent` and `--ec-speed`.
3. Why is it useful? It keeps the default view compact and reveals richer content on hover using only CSS (`max-height` + opacity transitions, no JavaScript), with keyboard focus support and `prefers-reduced-motion` support.
