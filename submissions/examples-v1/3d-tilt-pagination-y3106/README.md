# 3D Tilt Pagination

1. **What does this do?**  
   It provides an interactive, CSS-only pagination interface featuring 3D perspective tilts on hover and spring-loaded down-press active transitions.

2. **How is it used?**  
   Wrap your pagination buttons within a list parent defining a 3D perspective environment (`pagination-list`) and style individual anchors/buttons as tactile keycap blocks (`page-btn`, `btn-face`):
   ```html
   <ul class="pagination-list">
     <li class="page-item">
       <a href="#" class="page-btn active">
         <span class="btn-face">1</span>
       </a>
     </li>
   </ul>
   ```

3. **Why is it useful?**  
   Tactile feedback is vital for heavy data lists and table structures. This component delivers an extremely premium, gaming-inspired 3D physics tilt interaction using only CSS transforms, avoiding the need for heavy custom event-listeners or canvas scripts.
