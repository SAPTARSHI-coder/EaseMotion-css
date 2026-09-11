# Switch Pill

1. What does this do? A pill-shaped toggle switch that slides its knob to the opposite end when checked, and swaps the "On"/"Off" labels while filling the track with the accent color.
2. How is it used? Build a `.switch-pill` label wrapping a native `.switch-pill__input` checkbox and a `.switch-pill__track` containing a `.switch-pill__knob`, `.switch-pill__on`, and `.switch-pill__off`. The checkbox's `:checked` state drives the knob translate, label swap, and track fill. Adjust the accent color and slide speed via `--sp-accent` and `--sp-speed`.
3. Why is it useful? It provides an accessible toggle using a real checkbox (keyboard and screen-reader friendly) styled as a labeled pill, with `prefers-reduced-motion` support.
