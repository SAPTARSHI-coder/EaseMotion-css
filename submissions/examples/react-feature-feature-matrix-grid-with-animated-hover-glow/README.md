# Feature Feature Matrix Grid with Animated Hover Glow

1. **What does this do?**  
   It renders a grid of feature cards that dynamically project a cursor-tracking radial hover glow spotlight when hovered, supporting the companion React component structure.

2. **How is it used?**  
   Apply the `.feature-card` class on card container divs, and include a children backdrop div with the `.radial-spotlight` class:
   ```html
   <div class="feature-card">
     <div class="radial-spotlight"></div>
     <div class="card-inner">
       <h3>Feature Title</h3>
     </div>
   </div>
   ```

3. **Why is it useful?**  
   It provides an immersive micro-interaction highlight layer that guides user focus and interest without adding heavy payload scripts or blocking document layouts.
