# Toggle / Switch Component

1. **What does this do?** Provides a pure CSS toggle switch using a hidden `<input type="checkbox">` with a styled track and animated thumb, supporting 4 color variants (primary, success, warning, danger), 3 size variants (sm, base, lg), and disabled state — all with zero JavaScript.

2. **How is it used?**
   ```html
   <label class="toggle">
     <input type="checkbox" checked>
     <span class="toggle-slider"></span>
     <span class="toggle-label">Enable notifications</span>
   </label>

   <!-- With color variant -->
   <label class="toggle toggle-success">
     <input type="checkbox" checked>
     <span class="toggle-slider"></span>
     <span class="toggle-label">Success toggle</span>
   </label>
   ```

3. **Why is it useful?** Toggle switches provide an intuitive on/off interaction for settings and preferences. This implementation follows EaseMotion CSS's philosophy by using semantic `<input type="checkbox">` (natively accessible), supporting `:focus-visible` keyboard navigation, respecting `prefers-reduced-motion`, being pure CSS, and offering a clean declarative API through modifier classes.
