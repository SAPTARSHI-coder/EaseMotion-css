# Filter Chips

1. What does this do? A row of selectable filter chips where the active chip fills with the accent color and the rest stay outlined (thickening on hover).
2. How is it used? Build a `.filter-chips` group of `.filter-chips__chip` buttons; mark the selected one with `.is-active` (and `aria-pressed="true"`). The active chip fills, inactive chips outline and lift slightly on hover. Adjust the accent color and transition speed via `--fc-accent` and `--fc-speed`.
3. Why is it useful? It gives a clean single-select filter affordance with pure CSS (the styling is CSS-only; JS would toggle `.is-active`), keyboard focus support, and `prefers-reduced-motion` support.
