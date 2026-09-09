# Copy Field

1. What does this do? An input with a copy button that swaps to a checkmark label on active state.
2. How is it used? Build a `.copy-field` label wrapping a `.copy-field__input` (readonly) and a `.copy-field__control` holding the input and a `.copy-field__btn` with a `.copy-field__icon` and `.copy-field__text`. On `:active` (a press), the icon collapses into a checkmark and the label swaps to "Copied" with a green tint. In a real app, JavaScript would copy to the clipboard and add a class to persist the state. Adjust the accent color via `--cf-accent`.
3. Why is it useful? It provides a copy-to-clipboard affordance with a clear visual confirmation using only CSS for the interaction, and renders without motion under `prefers-reduced-motion`.
