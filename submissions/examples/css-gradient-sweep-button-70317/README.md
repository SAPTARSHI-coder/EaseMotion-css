# CSS Gradient Sweep Button

1. What does this do? Renders a button whose background gradient swaps to a second gradient on hover/focus while a light sheen sweeps across its surface.
2. How is it used? Use `<button class="sweep"><span>Label</span></button>`; the resting gradient sits on the element and the hover gradient lives on the `::after` layer, revealed on interaction; `::before` is the moving sheen.
3. Why is it useful? Adds a ready-to-use animated gradient-sweep button with no JavaScript, keyboard-accessible focus state, and `prefers-reduced-motion` support.

Closes #70317
