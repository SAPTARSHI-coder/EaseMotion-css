# CSS Tilt-Shift / Depth-of-Field Blur Effect

1. **What does this do?**
   Simulates tilt-shift photography — a narrow band of the scene stays in sharp focus while everything above and below progressively blurs. A registered `@property --focus-y` controls where the sharp band sits and animates slowly up and down, creating a scanning-camera effect.

2. **How is it used?**
   Wrap three `.depth-layer` divs inside a `.tilt-shift-scene`. The scene's `--focus-y` custom property is animated via `@keyframes`; the `mask-image` on each blurred layer references `var(--focus-y)` to position the blur gradient dynamically.

   ```html
   <div class="tilt-shift-scene">
     <div class="depth-layer depth-layer--far"></div>
     <div class="depth-layer depth-layer--mid"></div>
     <div class="depth-layer depth-layer--near"></div>
   </div>
   ```

3. **Why is it useful?**
   Tilt-shift depth is one of the most visually distinctive photographic effects. A pure CSS implementation — using `filter: blur()` + `mask-image: linear-gradient()` driven by a single registered custom property — gives designers this effect for hero sections and galleries without WebGL or canvas.
