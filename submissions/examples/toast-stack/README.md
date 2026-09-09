# Toast Stack

1. What does this do? Stacked toast notifications that slide in from the side (translateX) and fade in, cascading with a staggered delay; the latest toast appears on top.
2. How is it used? Build a `.toast-stack` column of `.toast-stack__toast` items, each with a `.toast-stack__icon` and `.toast-stack__message`. Severity modifiers (`is-success`, `is-info`, `is-warning`) set the accent bar and icon color. The toasts animate in on load with staggered delays. Adjust the accent color via `--ts-accent`.
3. Why is it useful? It provides a notification queue affordance using only CSS (no JavaScript), with severity variants and `prefers-reduced-motion` support.
