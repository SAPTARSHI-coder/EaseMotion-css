# Label Float Bounce

1. What does this do? A floating label input where the label has a tiny overshoot bounce when it floats up on focus, using a spring-like cubic-bezier curve for the transition.

2. How is it used? Builds on the floating label pattern. Add a `.float-group` with `.float-input` and `.float-label`. The label floats up on `:focus` and `:not(:placeholder-shown)`. The `cubic-bezier(0.34, 1.56, 0.64, 1)` curve provides the bounce.

3. Why is it useful? It polishes the standard floating label pattern with a subtle bounce that makes the interaction feel more lively and responsive.
