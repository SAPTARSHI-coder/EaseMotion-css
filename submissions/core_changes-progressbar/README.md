# Progress Bar Component

1. **What does this do?** Provides a pure CSS progress bar component with determinate mode (via inline `width` style on `.progress-bar`), indeterminate mode (animated sliding bar for unknown progress), 3 size variants (sm, base, lg), 4 color variants (primary, success, warning, danger), striped and animated-stripe styles, and optional label — all with zero JavaScript.

2. **How is it used?**
   ```html
   <!-- Determinate -->
   <div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
     <div class="progress-bar" style="width: 50%;"></div>
   </div>

   <!-- Indeterminate -->
   <div class="progress">
     <div class="progress-bar progress-indeterminate"></div>
   </div>

   <!-- Color + size variant -->
   <div class="progress progress-sm">
     <div class="progress-bar progress-success" style="width: 75%;"></div>
   </div>
   ```

3. **Why is it useful?** Progress bars communicate task completion to users, reducing uncertainty during waiting states. This implementation follows EaseMotion CSS's philosophy by using semantic ARIA attributes (`role="progressbar"`, `aria-valuenow`), being pure CSS, respecting `prefers-reduced-motion`, supporting dark mode automatically, and offering multiple visual variants through simple modifier classes.
