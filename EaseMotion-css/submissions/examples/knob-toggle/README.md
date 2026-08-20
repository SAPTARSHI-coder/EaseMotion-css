# Knob Toggle

1. What does this do? A rotary knob-style toggle that switches from OFF to ON with a quarter turn of the knob face, with the track and glow shifting to the ON color.
2. How is it used? Wrap a hidden `.knob-toggle__input` checkbox and a `.knob-toggle__dial` (containing a `.knob-toggle__pointer` and OFF/ON `.knob-toggle__tick` labels) inside a `.knob-toggle` label. Clicking the label or focusing + Space/Enter flips the state. Customize the off color, on color, glow, dial face, and turn speed via `--kt-off`, `--kt-on`, `--kt-on-glow`, `--kt-dial`, and `--kt-speed`.
3. Why is it useful? It is an accessible, dependency-free toggle with a tactile rotary feel and a visible focus ring, and it respects `prefers-reduced-motion`.
