# Pure CSS Pagination (ease-pagination-akhil)

### What does this do?
Adds a standard, accessible pagination navigation component with hover animations, active states, and disabled link support.

### How is it used?
Wrap an unordered list inside a semantic `<nav>` element and apply the `ease-page-link` class to the anchors.

```html
<nav aria-label="Pagination" class="ease-pagination-container">
  <ul class="ease-pagination-list">
    <li><a href="#" class="ease-page-link">Previous</a></li>
    <li><a href="#" class="ease-page-link ease-page-active" aria-current="page">1</a></li>
    <li><a href="#" class="ease-page-link">2</a></li>
    <li><a href="#" class="ease-page-link">Next</a></li>
  </ul>
</nav>
```

### Why is it useful?
Pagination is a critical UI component for data-heavy layouts (like tables or product lists). This submission ensures it is accessible (using `aria-current="page"` and `aria-label`) while maintaining smooth, hardware-accelerated CSS hover transitions.
