# Dropdown Select

1. What does this do? A select-style dropdown whose menu panel fades and slides down on hover (and keyboard focus of the wrapper), with a rotating chevron and a selected highlight.
2. How is it used? Build a `.dropdown-select` wrapper (focusable) containing a `.dropdown-select__trigger` button (with `.dropdown-select__value` and a `.dropdown-select__chevron`) and a `.dropdown-select__menu` list of `.dropdown-select__item` options; mark the chosen one `.is-selected`. The menu reveals on `:hover`/`:focus-within`. Adjust the accent color and speed via `--ds-accent` and `--ds-speed`.
3. Why is it useful? It gives a lightweight custom select affordance using only CSS (no JavaScript for the open/close animation), with keyboard focus support and `prefers-reduced-motion` support.
