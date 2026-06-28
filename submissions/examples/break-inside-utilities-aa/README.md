# Break Inside Utilities

1. **What does this do?** Adds utility classes for the CSS `break-inside` and `page-break-inside` properties to control whether elements may be broken across columns or pages.

2. **How is it used?**
```html
   <div class="break-auto">May break across columns</div>
   <div class="break-avoid">Stays together in one column</div>
   <div class="break-avoid-page">No page break inside (print)</div>
   <div class="break-avoid-column">No column break inside</div>
```

3. **Why is it useful?** When building multi-column article layouts, masonry grids, or printable document styles, `break-avoid` prevents cards and sections from being awkwardly split across columns or pages — filling a practical gap in the layout utility set.
