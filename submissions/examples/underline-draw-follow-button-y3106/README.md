# Underline Draw Follow Button (E-Commerce Design)

1. **What does this do?**  
   It provides an interactive, CSS-only follow action button that triggers a sleek, horizontal underline drawing transition on hover, and slides text content vertically when toggled.

2. **How is it used?**  
   Implement the structure using a checkbox state toggle, custom label classes (`follow-btn`), and internal sliding labels (`follow-content`):
   ```html
   <input type="checkbox" id="follow-checkbox" class="follow-state-toggle" />
   
   <label for="follow-checkbox" class="follow-btn">
     <span class="follow-content unfollowed-state">+ Follow</span>
     <span class="follow-content followed-state">✓ Following</span>
   </label>
   ```

3. **Why is it useful?**  
   Follow actions are standard elements in e-commerce shops, designer portfolio grids, and social portals. By implementing this transition purely in CSS, we avoid bulky script runtimes, while maintaining clear accessibility standards and a lightweight bundle footprint.
