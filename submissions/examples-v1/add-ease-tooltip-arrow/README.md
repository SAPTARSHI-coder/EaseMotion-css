# Animated Directional Arrow Tooltip

1. **What does this do?**
   This component adds a premium CSS-only tooltip that wiggles its arrow pointing towards the trigger element on hover, supporting 4 direction variants (top, bottom, left, right) and viewport-aware auto-positioning.

2. **How is it used?**
   For standard tooltips, wrap the trigger and tooltip in a container and apply the direction modifier:

   ```html
   <div class="tooltip-container">
     <button>Hover me</button>
     <div class="tooltip tooltip-top">Tooltip Text</div>
   </div>
   ```

   For viewport-aware tooltips, link the trigger and tooltip using CSS Anchor Positioning and the Popover API:

   ```html
   <button anchor-name="--my-trigger" popovertarget="my-tip">Hover me</button>
   <div
     id="my-tip"
     popover
     class="tooltip-anchor-tip"
     style="position-anchor: --my-trigger;"
   >
     Tooltip Text
   </div>
   ```

3. **Why is it useful?**
   It aligns perfectly with EaseMotion CSS's philosophy of lightweight, high-performance interactions: it uses hardware-accelerated transitions, wiggles the arrow dynamically on hover via micro-animations, and resolves viewport collision using native CSS Anchor Positioning (bypassing any JS dependency).
