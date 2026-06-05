# Skeleton Loading Card

1. **What does this do?**
   A full skeleton loading card with a shimmer animation — includes avatar circle, title bar, image placeholder, body lines, and action buttons.

2. **How is it used?**

```html
<div class="skeleton-card">
  <div class="skeleton-header">
    <div class="skeleton-block skeleton-avatar"></div>
    <div class="skeleton-header-text">
      <div class="skeleton-block skeleton-title"></div>
      <div class="skeleton-block skeleton-subtitle"></div>
    </div>
  </div>
  <div class="skeleton-block skeleton-image"></div>
  <div class="skeleton-block skeleton-line"></div>
  <div class="skeleton-footer">
    <div class="skeleton-block skeleton-btn"></div>
  </div>
</div>
```

3. **Why is it useful?**
   Skeleton screens reduce perceived load time and eliminate layout shift. This component assembles EaseMotion's shimmer animation into a ready-to-use card pattern that fits any content-loading UI.
