# Pagination Component

1. **What does this do?** Provides a pure CSS pagination component for navigating between pages, with size variants (sm, base, lg), shape variants (default squared, rounded pill-style), ellipsis support, prev/next buttons, and active page highlighting — all with zero JavaScript.

2. **How is it used?**
   ```html
   <nav aria-label="pagination" class="pagination">
     <a href="#" class="pagination-prev">‹ Prev</a>
     <a href="#" class="pagination-page">1</a>
     <a href="#" class="pagination-page" aria-current="page">2</a>
     <span class="pagination-ellipsis">…</span>
     <a href="#" class="pagination-next">Next ›</a>
   </nav>

   <!-- Rounded variant -->
   <nav class="pagination pagination-rounded">...</nav>

   <!-- Size variant -->
   <nav class="pagination pagination-sm">...</nav>
   ```

3. **Why is it useful?** Pagination is essential for navigating large collections of content. This implementation follows EaseMotion CSS's philosophy by using semantic HTML (`<nav>` with `aria-label`), supporting `aria-current="page"` for accessibility, being pure CSS, respecting `prefers-reduced-motion`, supporting dark mode automatically, and providing a clean minimal API through modifier classes and CSS custom properties.
