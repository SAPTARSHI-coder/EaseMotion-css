# Skeleton Loading Card Utility (`skeleton-loading-card-ksk`)

1. What does this do?  
A composable skeleton loading card utility that displays smooth shimmer animation placeholders while content is fetching. It mimics the structure of actual cards using lightweight animated shapes, improving perceived performance and preventing layout shifts without JavaScript.

2. How is it used?  
Wrap placeholder elements inside `.skeleton-card`. Combine composable blocks like `.skeleton-image`, `.skeleton-title`, `.skeleton-text`, `.skeleton-avatar`, and `.skeleton-btn`:

```html
<div class="skeleton-card">
  <div class="skeleton-image"></div>
  <div class="skeleton-content">
    <div class="skeleton-title"></div>
    <div class="skeleton-text"></div>
    <div class="skeleton-text short"></div>
  </div>
</div>
```

Customize timing, colors, and radii via CSS custom properties:
```css
.skeleton-card {
  --skeleton-base-bg:       rgba(255, 255, 255, 0.05);
  --skeleton-shimmer-color: rgba(255, 255, 255, 0.14);
  --skeleton-duration:      1.8s;
  --skeleton-radius:        8px;
}
```

3. Why is it useful?  
Provides perceived performance gains over traditional spinning loaders. Users understand what layout structure to expect before data arrives. Includes support for Light/Dark themes and responsive scaling.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #53628.*
