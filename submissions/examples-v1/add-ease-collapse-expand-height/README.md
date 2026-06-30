# Animation: add-ease-collapse-expand-height

1. **What does this do?**  
   It enables a smooth, CSS-only height transition from zero to auto for collapsible elements like accordions, disclosure cards, or dropdown panels, using the modern CSS Grid template rows technique.

2. **How is it used?**  
   Apply the `.collapse-height-wrapper` class to the outer container, nest the `.collapse-height-inner` class immediately inside it to handle layout clipping, and toggle the `.is-expanded` class on the outer container to open or close the area:

   ```html
   <!-- Collapsible container -->
   <div class="collapse-height-wrapper is-expanded">
     <!-- Layout/overflow clipper -->
     <div class="collapse-height-inner">
       <!-- Content with layout padding goes here -->
       <div class="content-body">
         <p>Collapsible content goes here...</p>
       </div>
     </div>
   </div>
   ```

3. **Why is it useful?**  
   It solves CSS's historic limitation of not being able to transition height to `auto` smoothly, avoiding both JavaScript-driven height calculations (which trigger layout reflows) and arbitrary `max-height` transitions (which suffer from timing lag and delays). This aligns perfectly with EaseMotion CSS's philosophy of highly performant, accessible, and lightweight layout micro-animations.
