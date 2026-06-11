# Alert / Banner Component

1. **What does this do?** Provides contextual alert banners in 4 types (info, success, warning, error) with icon, title, message, optional close button, 3 size variants (sm, base, lg), a banner (full-width) mode, and a CSS-only dismissible variant using a hidden checkbox — all with zero JavaScript.

2. **How is it used?**
   ```html
   <div class="alert alert-info" role="alert">
     <div class="alert-icon">ℹ</div>
     <div class="alert-body">
       <strong class="alert-title">Info</strong>
       <p class="alert-message">Your trial ends soon.</p>
     </div>
     <button class="alert-close" aria-label="Close">&times;</button>
   </div>

   <!-- Dismissible -->
   <div class="alert-dismissible">
     <input type="checkbox" id="dismiss-me" class="alert-dismiss-input">
     <div class="alert alert-warning" role="alert">...</div>
   </div>
   ```

3. **Why is it useful?** Alerts provide contextual feedback for user actions and system status. This implementation follows EaseMotion CSS's philosophy by using `role="alert"` for screen reader announcements, being pure CSS, offering a dismissible mode without JavaScript (via checkbox hack), supporting dark mode and reduced motion automatically, and providing a consistent API through modifier classes.
