# Enhanced Skeleton Loading Variants

1. What does this do? Adds three animated skeleton loading variants — shimmer (light sweep), wave (animated gradient), and pulse (opacity fade) — plus reusable layout templates for cards, articles, table rows, and list items, with dark mode and reduced-motion support.

2. How is it used? Apply `.skeleton` with a variant class (`.skeleton-shimmer`, `.skeleton-wave`, or `.skeleton-pulse`) to any block element, and use the helper shapes (`.skeleton-text`, `.skeleton-text-short`, `.skeleton-heading`, `.skeleton-avatar`, `.skeleton-thumbnail`) or template wrappers (`.skeleton-card`, `.skeleton-article`, `.skeleton-row`, `.skeleton-list-item`) for common loading patterns.

```html
<!-- Single variant -->
<div class="skeleton skeleton-shimmer" style="width: 200px; height: 20px"></div>
<div class="skeleton skeleton-wave" style="width: 100%; height: 40px"></div>
<div class="skeleton skeleton-pulse" style="width: 50px; height: 50px; border-radius: 50%"></div>

<!-- Card template -->
<div class="skeleton-card">
  <div class="skeleton skeleton-shimmer skeleton-card-image"></div>
  <div class="skeleton skeleton-card-title"></div>
  <div class="skeleton skeleton-card-text"></div>
  <div class="skeleton skeleton-text-short"></div>
</div>

<!-- Article template -->
<div class="skeleton-article">
  <div class="skeleton skeleton-wave skeleton-article-image"></div>
  <div class="skeleton skeleton-article-title"></div>
  <div class="skeleton skeleton-article-line"></div>
  <div class="skeleton skeleton-text-short"></div>
</div>

<!-- Table row template -->
<div class="skeleton-row">
  <div class="skeleton skeleton-pulse skeleton-row-cell"></div>
  <div class="skeleton skeleton-pulse skeleton-row-cell"></div>
  <div class="skeleton skeleton-pulse skeleton-row-cell"></div>
  <div class="skeleton skeleton-pulse skeleton-row-cell"></div>
</div>
```

3. Why is it useful? Loading skeletons improve perceived performance and reduce layout shift; these variants give developers choice between shimmer (most common), wave (more fluid), and pulse (lowest motion), plus pre-built templates for the most common UI patterns (cards, articles, tables, lists), all respecting dark mode and reduced-motion preferences.

Fixes #16398
