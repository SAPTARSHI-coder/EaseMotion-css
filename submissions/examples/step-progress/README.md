# Step Progress

1. What does this do? A three-step wizard indicator with a connecting line that fills as steps complete, and an active step that pulses.
2. How is it used? Build an ordered list `.step-progress` of `.step-progress__item` entries, each with a `.step-progress__dot` and `.step-progress__label`. Mark a completed step with `is-done` and the current step with `is-active`; the connecting fill grows to cover all done steps. Customize the accent and track colors via `--sp-accent` and `--sp-track`.
3. Why is it useful? It visualizes checkout/wizard progress with pure CSS (no JavaScript), a pulsing active marker, and `prefers-reduced-motion` support.
