# Dot Pagination

1. What does this do? Compact dot pagination where the active dot stretches into a pill, and inactive dots scale up on hover.
2. How is it used? Build a `.dot-pagination` nav of `.dot-pagination__dot` buttons; mark the current one with `.is-active` (and `aria-current="true"`). The active dot widens to a pill via width transition; others are small circles that scale on hover. Adjust the accent color and stretch speed via `--dp-accent` and `--dp-speed`.
3. Why is it useful? It provides a minimal, tactile carousel/slide indicator using only CSS (the active styling is CSS-only; JS would toggle `.is-active`), with keyboard focus support and `prefers-reduced-motion` support.
