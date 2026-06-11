# Breadcrumb Component

1. **What does this do?** Provides a pure CSS breadcrumb navigation trail using an `<ol>` list with multiple separator styles (slash, chevron, arrow, bullet), three size variants (sm, base, lg), and custom separator support via `--breadcrumb-separator` — all with zero JavaScript.

2. **How is it used?**
   ```html
   <!-- Default (slash separator) -->
   <nav aria-label="breadcrumb" class="breadcrumb">
     <ol>
       <li><a href="#">Home</a></li>
       <li><a href="#">Library</a></li>
       <li aria-current="page">Breadcrumb</li>
     </ol>
   </nav>

   <!-- Chevron variant -->
   <nav class="breadcrumb breadcrumb-chevron">
     <ol>...</ol>
   </nav>
   ```

3. **Why is it useful?** Breadcrumbs provide secondary navigation that helps users understand their location within a site hierarchy. This implementation follows EaseMotion CSS's philosophy by being pure CSS, using semantic ARIA attributes (`aria-label`, `aria-current="page"`), supporting dark mode automatically, respecting `prefers-reduced-motion`, and keeping the API simple with customizable separators via CSS custom properties.
