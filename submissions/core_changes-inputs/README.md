# Form Input Fields

1. **What does this do?** Provides styled form input components including text inputs, textareas, select dropdowns, checkboxes (custom checkmark), and radio buttons (custom dot) with size variants (sm, base, lg), error/hint states, disabled/read-only support, and focus ring — all pure CSS with zero JavaScript.

2. **How is it used?**
   ```html
   <!-- Text input -->
   <div class="field">
     <label class="field-label" for="name">Name</label>
     <input class="field-input" id="name" type="text" placeholder="Your name">
   </div>

   <!-- Error state -->
   <div class="field">
     <input class="field-input field-error" type="text" value="Bad">
     <span class="field-hint field-hint-error">Error message.</span>
   </div>

   <!-- Custom checkbox -->
   <label class="field-check">
     <input type="checkbox">
     <span class="field-checkmark"></span>
     <span>Option</span>
   </label>
   ```

3. **Why is it useful?** Form inputs are the most fundamental building block of user interaction on the web. This implementation follows EaseMotion CSS's philosophy by being pure CSS (using hidden native inputs for accessibility), supporting `:focus-visible` keyboard navigation, providing consistent styling across all form elements, respecting `prefers-reduced-motion`, supporting dark mode automatically, and using semantic `<label>` associations.
