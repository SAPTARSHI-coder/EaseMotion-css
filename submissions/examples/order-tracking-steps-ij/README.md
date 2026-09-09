# Order Tracking Steps

1. What does this do? A vertical step tracker for order tracking with connected lines that fill between completed steps. The active step pulses with a ring animation. Includes a compact horizontal variant. Builds on the ease-stepper pattern.

2. How is it used? Add a `.steps-container` with `.step` children. Apply `.completed` for past steps, `.active` for the current step (with `.pulse` on the circle for the ring animation), and `.upcoming` for future steps. The `.step-line` bridges each step and transitions color based on state.

3. Why is it useful? Order tracking is a common e-commerce UI pattern. The connected line fill and pulse give clear progress feedback, helping users quickly understand where their order is in the fulfillment process.
