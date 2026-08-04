# Slide Out Bottom (Exit Animation)

1. **What does this do?**
   Slides an element downward while fading it out — an exit animation that moves the element 40px down and to `opacity: 0` as it leaves view. The slid-out, faded state holds once the animation finishes, rather than snapping back into place.

2. **How is it used?**
   Add the `slideoutbottom-playing` class to an element to trigger the exit. In this demo, clicking a box toggles the class via JS (removing it first to allow replay), but in real usage it would typically be added right before an element is removed from the DOM or hidden. Stagger multiple elements with a delay variant: `slideoutbottom-delay-1`, `slideoutbottom-delay-2`, or `slideoutbottom-delay-3` (150ms / 300ms / 450ms).

   ```html
   <div class="slideoutbottom-box slideoutbottom-delay-2">Goodbye</div>
   <!-- add `slideoutbottom-playing` via JS right before removing/hiding the element -->
   ```

3. **Why is this useful?**
   It rounds out the Exit animations set alongside a plain fade-out with a directional variant — useful for dismissible cards, toasts, or list items where downward motion communicates "this is leaving" more clearly than a flat fade. It composes with the same delay-class system as the rest of the library, so staggering a list of exiting elements stays simple.

### Notes for the maintainer
- This resolves the `ease-slide-out-bottom` issue, but is submitted as an unprefixed standalone demo (`slideoutbottom-*` naming) per the contribution guidelines, since adding a class directly into the core Motion Library under `// Exit animations` is maintainer territory. The animation in `style.css` (`slideoutbottom-slide` keyframe + `.slideoutbottom-playing`) is written to be a near-literal drop-in for `.ease-slide-out-bottom` — happy to adjust the travel distance/timing on integration.
- Box sizing, border, and label layout intentionally match the `fade-out-ms07` submission so the two read as a consistent pair within the Exit animations group.
- Delay classes (`slideoutbottom-delay-1/2/3`) only apply `animation-delay` while `.slideoutbottom-playing` is active, composing cleanly without separate keyframes per delay.
- `prefers-reduced-motion: reduce` skips straight to the slid-out, faded end state instead of animating.
- Tested in Chrome, Firefox, and Edge.