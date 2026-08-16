# Stepper Progress

1. What does this do? A horizontal stepper where completed steps fill with the accent color, connector lines draw between completed steps, and the current step pulses.
2. How is it used? Build a `.stepper-progress` ordered list of `.stepper-progress__step` items, each with a `.stepper-progress__node` (check or number) and `.stepper-progress__label`. Mark finished steps with `.is-done` (fills the node and draws its outgoing connector) and the active one with `.is-current` (pulses). Adjust the accent, track, and draw speed via `--sp-accent`, `--sp-track`, and `--sp-speed`.
3. Why is it useful? It renders a multi-step progress indicator with animated connectors using only CSS (no JavaScript), and disables animations under `prefers-reduced-motion`.
