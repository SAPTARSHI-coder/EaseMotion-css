# Toast / Notification Component

1. **What does this do?** Provides a pure CSS toast notification component with 4 type variants (info, success, warning, error), positioned container (top-right, top-left, bottom-right, bottom-left), close button, icon, title, message, and smooth entrance animation — all with zero JavaScript.

2. **How is it used?**
   ```html
   <div class="toast-container toast-top-right">
     <div class="toast toast-success" role="alert">
       <div class="toast-icon">✓</div>
       <div class="toast-body">
         <strong class="toast-title">Success</strong>
         <p class="toast-message">Saved successfully.</p>
       </div>
       <button class="toast-close" aria-label="Close">&times;</button>
     </div>
   </div>
   ```

3. **Why is it useful?** Toast notifications provide non-intrusive feedback for user actions. This implementation follows EaseMotion CSS's philosophy by using semantic `role="alert"` for accessibility, being pure CSS, supporting 4 fixed positions, respecting `prefers-reduced-motion`, supporting dark mode automatically, and offering a clean API through modifier classes.
