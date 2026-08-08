# Animated Toast & Snackbar Notifications

1. What does this do?
   Provides smooth slide-in, bounce-in, shake, and fade-out animation keyframes and reusable layout classes for success, error, warning, and info toast and snackbar notifications with auto-dismiss progress indicators.

2. How is it used?
   Apply variant and animation classes directly to a toast or snackbar element:

```html
<!-- Success Toast with Slide-Right entrance -->
<div class="toast success slide-right">
  <div class="toast-icon">
    <!-- SVG Icon -->
  </div>
  <div class="toast-body">
    <h4 class="toast-title">Changes Saved</h4>
    <p class="toast-message">Your profile settings have been updated.</p>
  </div>
  <button class="toast-close" aria-label="Close">✕</button>
  <div class="toast-progress"></div>
</div>

<!-- Material Snackbar with Slide-Bottom entrance -->
<div class="snackbar info slide-bottom">
  <p class="snackbar-text">Item archived to trash</p>
  <button class="snackbar-action">Undo</button>
</div>
```

3. Why is it useful?
   Toast and snackbar notifications are fundamental UI components in modern web applications and SaaS platforms; this feature delivers GPU-accelerated entrance and exit animations alongside progress indicators without requiring heavy JS animation libraries.
