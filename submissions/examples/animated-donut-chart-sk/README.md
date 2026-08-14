# CSS Animated Multi-Segment Donut Chart

1. **What does this do?**
   Renders a four-segment donut chart where each arc animates from `0deg` to its final angle on page load, using four registered `@property` custom properties of type `<angle>` and a single `conic-gradient()` background. Segments are staggered with `animation-delay`.

2. **How is it used?**
   Add the `.donut-chart` div and nest a `.donut-label` span inside it. A `::before` pseudo-element creates the punch-hole. Segment angles are driven by `--s1`–`--s4` which animate via `@keyframes`.

   ```html
   <div class="donut-chart">
     <span class="donut-label">Q2</span>
   </div>
   ```

3. **Why is it useful?**
   Demonstrates that `@property` + `conic-gradient` compose into a real data-visualisation primitive — no JavaScript, no SVG, no canvas. The `prefers-reduced-motion` fallback sets all angles to their final values immediately so the data is always visible.
