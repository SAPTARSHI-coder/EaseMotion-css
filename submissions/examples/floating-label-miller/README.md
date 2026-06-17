# Floating Label Input

1. **What does this do?**
   An input field where the label floats upward when the field is focused or filled. Uses the CSS `:placeholder-shown` pseudo-class trick — zero JavaScript required.

2. **How is it used?**
   ```html
   <div class="float-field">
     <input class="float-input" type="text" id="name" placeholder="Name" />
     <label class="float-label" for="name">Full Name</label>
   </div>
   ```
   > Important: the `placeholder` attribute must be set (to any value) for the `:placeholder-shown` trick to work.

3. **Variants**
   - `float-field-error` — red border + error message support
   - `float-field-success` — green border
   - `float-field-filled` — Material Design filled style (flat bottom border)
   - `disabled` attribute on input — greyed out state

4. **Why is it useful?**
   The `:placeholder-shown` trick is pure CSS genius — animation-first, no JS, works with all input types. Transition on `top` and `font-size` makes the float feel smooth and premium. Fully accessible — label stays connected to input via `for`/`id`. Respects `prefers-reduced-motion`.
