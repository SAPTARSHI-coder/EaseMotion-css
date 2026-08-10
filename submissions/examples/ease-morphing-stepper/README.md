# Interactive Morphing Stepper Process Bar

## 1. What does this do?
This component provides a multi-step morphing progress bar built entirely with pure CSS. It features dynamic track filling, pulsing animations on the currently active step node, and checkmark state transitions for previously completed steps as users navigate through the process.

## 2. How is it used?
Hidden `<input type="radio">` element tags act as the pure HTML/CSS state engine. Clicking the `<label>` elements updates the selected radio button state. The CSS `:has()` relational pseudo-class parent selector inspects the checked radio state of `.ease-stepper-wrapper` to dynamically control styles across child elements:
- Adjusts `.ease-track-fill` width based on the active step (0%, 33.33%, 66.66%, 100%).
- Triggers active node styling and pulse keyframe animations (`@keyframes ease-node-pulse`).
- Replaces step numbers on completed prior steps with `✓` checkmark pseudo-elements (`::after`).

## 3. Why is it useful?
It completely eliminates the need for JavaScript state arrays (`activeStep`), event listeners, or imperative DOM manipulation. By offloading state updates directly to the CSS engine and browser compositor, it delivers high performance, zero JS bundle overhead, and built-in accessibility through standard form controls and `prefers-reduced-motion` media queries.
