# CSS Grid Magazine

## What does this do?
Provides a magazine-style CSS Grid layout system — hero sections with mixed-size cards, editor's pick grids with wide/tall/featured spans, and responsive article columns — using EaseMotion CSS tokens for colours, spacing, and typography.

## How is it used?
Add `.mag-grid` with a layout class (`.mag-hero`, `.mag-mixed`, `.mag-articles`, `.mag-compact`) then place `.mag-card` elements inside. Use `.mag-card-wide`, `.mag-card-tall`, `.mag-card-featured`, `.mag-card-compact` for size/emphasis variants.

```html
<div class="mag-grid mag-hero">
  <div class="mag-card mag-card-featured">...</div>
  <div class="mag-card">...</div>
  <div class="mag-card">...</div>
</div>
```

## Why is it useful?
Magazine-style grids are a common pattern for content-heavy sites (news, blogs, portfolios). These classes provide a consistent, responsive system that adapts at 768px and 1024px breakpoints, supports mixed-size articles, and integrates with EaseMotion's design tokens for theming and accessibility.
