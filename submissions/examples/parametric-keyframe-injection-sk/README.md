# CSS Parametric Keyframe Injection

1. **What does this do?**
   Five visually distinct animations — float up, slide-and-scale, diagonal arc-spin, spring bounce, and atmospheric drift — all produced by a **single `@keyframes` rule** and a single `.motion-atom` class. Each box configures its own unique motion by setting `--travel-x`, `--travel-y`, `--rotation`, `--end-scale`, `--duration`, and `--easing` as inline CSS custom properties.

2. **How is it used?**
   Add the `.motion-atom` class and set motion parameters inline:

   ```html
   <div class="motion-atom" style="
     --travel-x: 0px;
     --travel-y: -70px;
     --rotation: 0deg;
     --end-scale: 1;
     --duration: 1.4s;
     --easing: ease-in-out;
   ">Float Up</div>
   ```

   The `@keyframes parametric-motion` block references these via `var()` in the `to` state. Because `var()` inside `@keyframes` resolves at the element — not globally — each element gets its own computed transform.

3. **Why is it useful?**
   This is the CSS equivalent of a motion token system. Instead of writing a new `@keyframes` block for every animation variant, you write one composable keyframe and parameterise it. Adding a new animation variant is a single HTML attribute change — no new CSS required. Directly aligned with EaseMotion CSS's composable, utility-first approach.
