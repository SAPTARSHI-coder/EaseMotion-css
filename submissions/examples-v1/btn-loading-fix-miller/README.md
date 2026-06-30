# Button Loading Spinner Fix

1. **What does this fix?**
   The `.ease-btn-loading` spinner was hardcoded to `border-color: white`, making it completely invisible on outline and light button variants.

2. **The fix**
   Changed spinner border to use `currentColor` so it always inherits the button's text color and remains visible on any variant.

   ```css
   /* Before (broken) */
   .ease-btn-loading::after {
     border: 2px solid white;
     border-top-color: transparent;
   }

   /* After (fixed) */
   .ease-btn-loading::after {
     border: 2px solid currentColor;
     border-top-color: transparent;
   }
   ```

3. **How is it used?**

   ```html
   <button class="ease-btn ease-btn-outline ease-btn-loading">Loading</button>
   <button class="ease-btn ease-btn-light ease-btn-loading">Loading</button>
   <button class="ease-btn ease-btn-primary ease-btn-loading">Loading</button>
   ```

4. **Why it fits EaseMotion CSS?**
   Using `currentColor` is the CSS-native, composable way to handle this — no variant-specific overrides needed. One fix covers all current and future button variants.
