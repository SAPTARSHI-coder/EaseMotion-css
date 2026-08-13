# Skeleton Loader Component

## What does this do?
Displays animated shimmer placeholder content while actual data is being
fetched, improving the perceived loading experience.

## How is it used?

**Card skeleton:**
```html
<div class="skeleton-card">
  <div class="skeleton skeleton-image"></div>
  <div class="skeleton skeleton-title"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text short"></div>
</div>
```

**Profile skeleton:**
```html
<div class="skeleton-profile">
  <div class="skeleton skeleton-avatar"></div>
  <div class="skeleton-profile-info">
    <div class="skeleton skeleton-title"></div>
    <div class="skeleton skeleton-text short"></div>
  </div>
</div>
```

## Why is it useful?
Skeleton loaders are widely used in apps like YouTube, Instagram, and LinkedIn
to indicate content is loading. Pure CSS shimmer animation, no JS required,
with full prefers-reduced-motion support.