# CSS @layer Cascade Animation Priority Demo

1. **What does this do?**
   Shows, interactively with pure CSS, which `animation` declaration wins when three `@layer` blocks all target the same element. Toggling the layer checkboxes reveals how layer *order* — not source order or specificity — determines the winning animation.

2. **How is it used?**
   Three toggle labels control hidden `<input type="checkbox">` siblings. Each layer's `@keyframes` is activated with an `#id:checked ~ .contest-box` selector inside the corresponding `@layer` block. The layer declared last in `@layer base, theme, override` has the highest priority, so `override` beats `theme` beats `base` when multiple toggles are on.

   A separate `.unlayered-box` carries an animation defined *outside* any `@layer`, proving the rule: unlayered styles always win the cascade regardless of layer priority.

3. **Why is it useful?**
   `@layer` ordering is a common source of confusion — developers expect source order or specificity to win, but layer order takes precedence. Seeing the box change animations in real time as toggles are switched makes the abstract rule concrete. No JavaScript required.
