# CSS Skeuomorphic Tactile Press Button

1. **What does this do?**
   Simulates a physical mechanical key press: the button sinks 5px on `:active` while its multi-layer `box-shadow` transitions from a raised outer shadow to an inset inner shadow — giving tactile depth feedback with no JavaScript.

2. **How is it used?**
   Apply `.press-btn` to any `<button>`. Use `.press-btn--danger` or `.press-btn--success` for colour variants. For a sticky toggle, wrap a checkbox inside a `<label class="press-btn press-toggle">`.

   ```html
   <button class="press-btn">Click me</button>

   <label class="press-btn press-toggle">
     <input type="checkbox">
     Enable
   </label>
   ```

3. **Why is it useful?**
   Interactive affordance is part of motion design — a convincing press state communicates that something happened without a visual indicator change. The 80ms transition is tuned to feel physical. Useful for CTAs, game controls, and keyboard-key displays. Respects `prefers-reduced-motion` by retaining colour feedback while removing the translate.
