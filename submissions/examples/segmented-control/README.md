# Segmented Control

1. What does this do? A sleek segmented control with a moving underline and icon states, driven by hidden radios and CSS sibling selectors (no JavaScript).
2. How is it used? Build a `.segmented-control` containing alternating `.segmented-control__input` radios and `.segmented-control__tab` labels (one input+label per option), then a trailing `.segmented-control__underline` span. Set `--sc-tabs` to the number of options and `--sc-accent`/`--sc-speed` to taste. Each label can hold an `.segmented-control__icon` and `.segmented-control__text`.
3. Why is it useful? It gives a polished tabbed switcher with a sliding pill underline, keyboard focus support, and `prefers-reduced-motion` handling using only CSS.
