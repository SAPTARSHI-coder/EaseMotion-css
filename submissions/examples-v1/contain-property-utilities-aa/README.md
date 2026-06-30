# Contain Property Utilities

1. **What does this do?** Adds utility classes for the CSS `contain` property to enable browser rendering optimizations for repeated elements.

2. **How is it used?**
```html
   <div class="contain-layout">...</div>
   <div class="contain-paint">...</div>
   <div class="contain-strict">...</div>
```

3. **Why is it useful?** For UI patterns like list items, card grids, or repeated widget instances, `contain-layout` and `contain-paint` tell the browser it can skip expensive layout recalculations for the rest of the page — a significant performance optimization for large lists and dashboards.
