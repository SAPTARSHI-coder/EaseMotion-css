# Avatar Component

1. **What does this do?** Provides a pure CSS avatar component with image support (via `<img>` child), initials fallback (via `data-initials`), 5 size variants (xs, sm, base, lg, xl), 3 shape variants (circle, rounded, square), status indicators (online, offline, away, busy via `data-status`), and overlapping avatar groups — all with zero JavaScript.

2. **How is it used?**
   ```html
   <!-- Initials avatar -->
   <div class="avatar" data-initials="JD" style="--avatar-bg: #6c63ff;"></div>

   <!-- Image avatar -->
   <div class="avatar avatar-lg">
     <img src="user.jpg" alt="User">
   </div>

   <!-- With status -->
   <div class="avatar" data-initials="JD" data-status="online"></div>

   <!-- Avatar group -->
   <div class="avatar-group">
     <div class="avatar" data-initials="A"></div>
     <div class="avatar" data-initials="B"></div>
     <div class="avatar" data-initials="C"></div>
   </div>
   ```

3. **Why is it useful?** Avatars are a fundamental UI pattern for profile pages, comment sections, team lists, and user menus. This implementation follows EaseMotion CSS's philosophy by being pure CSS (no JavaScript), using semantic `data-` attributes for configuration, supporting dark mode automatically via `prefers-color-scheme`, and respecting `prefers-reduced-motion` — while keeping the API simple and declarative.
