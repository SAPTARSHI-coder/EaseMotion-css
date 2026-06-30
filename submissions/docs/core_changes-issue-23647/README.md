# ease-container — Responsive Container Width Utility

1. **What does this do?**
   Adds `.ease-container` (responsive max-width with auto-centering) and `.ease-container-fluid` (full-width with padding). Breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1536px. Gutter controlled by `--ease-container-padding` (default: 1rem).

2. **How is it used?**

   ```html
   <div class="ease-container">
     Centered content — max-width adapts to viewport
   </div>

   <div class="ease-container-fluid">Full width with consistent padding</div>

   <div class="ease-container" style="--ease-container-padding: 2rem;">
     Custom gutter width
   </div>
   ```

3. **Why is it useful?**
   Every page layout needs a centered container with responsive max-widths. Instead of manually writing `max-width` + `margin: 0 auto` + media queries each time, `.ease-container` provides a single reusable class that matches standard framework conventions.
