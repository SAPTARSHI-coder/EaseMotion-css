# Fade Out (Exit Animation)

1. **What does this do?**
   Fades an element from `opacity: 1` to `opacity: 0` when it's removed or hidden — the exit counterpart to an entrance fade-in animation. The faded-out state holds at `opacity: 0` once the animation finishes, rather than snapping back.

2. **How is it used?**
   Add the `fadeout-playing` class to an element to trigger the fade-out. In this demo, clicking a box toggles the class via JS (and removes it first to allow replay), but in real usage it would typically be added right before an element is removed from the DOM or hidden. Stagger multiple elements by combining it with a delay variant: `fadeout-delay-1`, `fadeout-delay-2`, or `fadeout-delay-3` (150ms / 300ms / 450ms).

   ```html
   <div class="fadeout-box fadeout-delay-2">Goodbye</div>
   <!-- add `fadeout-playing` via JS right before removing/hiding the element -->
   ```

3. **Why is this useful?**
   Every Motion Library currently has entrance animations (fade-in, slide-in, etc.) but no symmetric exit counterpart — anything fading out today has to be hand-rolled. This fills that gap as a small, composable primitive: a clean single-purpose animation that pairs with the existing delay-class system rather than introducing a new one, matching the framework's "small, composable, hover/interaction-driven" philosophy.

### Notes for the maintainer
- This resolves the `ease-fade-out` issue, but is submitted as an unprefixed standalone demo (`fadeout-*` naming) per the contribution guidelines, since adding a class directly into the core Motion Library under `// Exit animations` is maintainer territory. The animation in `style.css` (`fadeout-fade` keyframe + `.fadeout-playing`) is written to be a near-literal drop-in for `.ease-fade-out` — happy to adjust naming/timing on integration.
- The demo boxes intentionally match the size/border/label layout style used by other entrance-animation demos in the library, so it reads as a matched pair with `ease-fade-in`.
- Delay classes (`fadeout-delay-1/2/3`) only apply `animation-delay` while `.fadeout-playing` is active, so they compose cleanly without needing separate keyframes.
- `prefers-reduced-motion: reduce` skips straight to the faded-out end state instead of animating.
- Tested in Chrome, Firefox, and Edge.