# Animation: add-ease-stretch-out-vertical

1. **What does this do?**  
   It enables a smooth, hardware-accelerated vertical collapse transition (`ease-stretch-out-vertical`) for exiting elements. It transitions the vertical scale (`scaleY`) from `1` to `0` and opacity from `1` to `0` over a specified duration with an elegant cubic-bezier easing curve.

2. **How is it used?**  
   Apply the `.ease-stretch-out-vertical` class to the exiting container. Choose a transform origin modifier to specify which direction the element should collapse:
   - `.stretch-out-top` — Collapses upwards towards the top edge (default).
   - `.stretch-out-center` — Collapses symmetrically towards the center line.
   - `.stretch-out-bottom` — Collapses downwards towards the bottom edge.

   ### HTML Integration Snippet

   ```html
   <!-- An alert banner collapsing upwards -->
   <div
     class="alert-banner ease-stretch-out-vertical stretch-out-top"
     id="myAlert"
   >
     <p>Maintenance Warning: Database backup starting in 5 minutes.</p>
     <button onclick="dismiss('myAlert')">Close</button>
   </div>
   ```

   ### Suggested Layout Collapse Helper

   Since CSS transforms only scale the element visually without modifying document flow, you can combine the animation with a height transition on the layout container to prevent layout snapping:

   ```javascript
   function dismiss(id) {
     const el = document.getElementById(id);

     // Trigger visual collapse
     el.classList.add("ease-stretch-out-vertical");

     // Set transition and shrink height/spacing
     el.style.height = `${el.getBoundingClientRect().height}px`;
     el.style.transition = "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)";

     // Force reflow
     void el.offsetHeight;

     el.style.height = "0";
     el.style.paddingTop = "0";
     el.style.paddingBottom = "0";
     el.style.marginTop = "0";
     el.style.marginBottom = "0";
     el.style.border = "none";
     el.style.opacity = "0";

     el.addEventListener("transitionend", () => {
       el.style.display = "none";
     });
   }
   ```

3. **Why is it useful?**
   - **Modern UX Feedback**: Provides clean spatial micro-interactions for dismissible notifications, archived tasks, delete alerts, or closed menus.
   - **Highly Performant**: Animating CSS `transform` and `opacity` runs on the GPU, avoiding costly layout invalidations or repaint thrashing during the visual exit.
   - **Directional Control**: Allowing top, center, and bottom origins gives developers full design control over where the visual focus collapses.
   - **A11y Compliant**: Includes standard `prefers-reduced-motion` override transitions that bypass scaling and execute a simple, comfortable fade-out for users with motion sensitivities.
