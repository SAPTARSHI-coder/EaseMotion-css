# Segmented Control

1. **What does this do?** Provides a pure CSS segmented control (button group / segmented tabs) using hidden radio inputs, with 3 size variants (sm, base, lg), color variants (primary, success), full-width mode, and disabled item support — no JavaScript.

2. **How is it used?**
   ```html
   <div class="segmented" role="radiogroup" aria-label="View">
     <input type="radio" name="view" id="day" checked>
     <label class="segmented-item" for="day">Day</label>
     <input type="radio" name="view" id="week">
     <label class="segmented-item" for="week">Week</label>
     <input type="radio" name="view" id="month">
     <label class="segmented-item" for="month">Month</label>
   </div>
   ```

3. **Why is it useful?** Segmented controls let users switch between closely related views or options in a compact, visually grouped way. This implementation follows EaseMotion CSS's philosophy by using native radio inputs (accessible by default), `role="radiogroup"` for screen readers, being pure CSS with smooth checked-state transitions, supporting dark mode and reduced motion automatically, and providing a clean API through modifier classes.
