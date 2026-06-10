# Accordion Component

1. **What does this do?** Provides a pure CSS accordion component with two modes (single using `<details>`/`<summary>` and exclusive using hidden radio inputs), three border variants (bordered, borderless, separated), three size variants (sm, base, lg), and custom icon support — all with smooth open/close animations and zero JavaScript.

2. **How is it used?**
   ```html
   <!-- Single accordion (multiple open allowed) -->
   <div class="accordion accordion-bordered">
     <details class="accordion-item">
       <summary class="accordion-header">
         <span class="accordion-title">Title</span>
         <span class="accordion-icon"></span>
       </summary>
       <div class="accordion-content">Content here</div>
     </details>
   </div>

   <!-- Exclusive accordion (only one open) -->
   <div class="accordion accordion-bordered accordion-exclusive">
     <div class="accordion-group">
       <input type="radio" name="ex" id="ex1" class="accordion-radio" checked>
       <label class="accordion-header" for="ex1">
         <span class="accordion-title">Title</span>
         <span class="accordion-icon"></span>
       </label>
       <div class="accordion-content">Content here</div>
     </div>
   </div>
   ```

3. **Why is it useful?** Accordions organize content into collapsible sections, reducing visual clutter and letting users focus on what matters. This implementation follows EaseMotion CSS's animation-first philosophy with smooth `grid-template-rows` transitions, respects `prefers-reduced-motion`, supports dark mode automatically, and requires no JavaScript — staying true to the framework's zero-dependency approach.
