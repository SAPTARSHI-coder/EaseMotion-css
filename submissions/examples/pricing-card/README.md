# Pricing Card

1. What does this do? A highlighted pricing card with a bold monthly price, a feature checklist, a "Most popular" badge, and a gradient CTA button.
2. How is it used? Build a `.pricing-card` (add `is-featured` for the highlighted variant) with `.pricing-card__plan`, `.pricing-card__price` (currency + amount + period), `.pricing-card__tagline`, a `.pricing-card__features` list, and a `.pricing-card__cta` button. Customize the accent, ink, and muted colors and the hover speed via `--pc-accent`, `--pc-ink`, `--pc-muted`, and `--pc-speed`.
3. Why is it useful? It gives a polished, conversion-focused price card with a gradient CTA and `prefers-reduced-motion` support using only CSS (no JavaScript).
