# CSS Animated Bar / Column Chart

1. **What does this do?**
   Renders vertical and horizontal bar charts where bars grow from zero to their target height/width on page load using `transform: scaleY(0) → scaleY(1)` with `transform-origin: bottom center`. Bar heights and stagger delays are set via inline CSS custom properties (`--h`, `--i`) — no JavaScript required.

2. **How is it used?**
   Each bar is a `<li>` with inline `--h` (height percentage) and `--i` (stagger index) properties. The `.bar` class handles all animation. Horizontal bars use `.h-bar__fill` with `scaleX`.

   ```html
   <ul class="bars">
     <li class="bar" style="--h:75%;--i:0;--color:#6366f1">
       <span class="bar__tip">75%</span>
     </li>
   </ul>
   ```

3. **Why is it useful?**
   Many simple stat widgets are built with charting libraries when pure CSS would suffice. This shows `transform-origin` + CSS custom properties composing into a data-visualisation primitive. Changing a bar value is a single attribute change in HTML — no JS re-renders. `prefers-reduced-motion` skips the animation and shows final values immediately.
