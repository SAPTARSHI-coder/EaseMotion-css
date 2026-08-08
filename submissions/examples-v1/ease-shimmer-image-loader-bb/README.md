# Shimmer Skeleton Image Placeholder

A premium skeleton loader state for images and metadata panels.

## What does this do?
It creates skeleton load blocks that sweep linear shimmer highlight bars from left-to-right continuously, indicating loading states for assets.

## How is it used?
Configure standard mockup nodes with the skeleton shimmer layout wrappers:

```html
<div class="image-wrapper" tabindex="0">
  <div class="skeleton-shimmer">
    <span class="sweep-bar"></span>
    <span class="icon-placeholder">🖼️</span>
  </div>
</div>
```

## Why is it useful?
It handles asynchronous asset fetching transitions elegantly, avoiding static empty space blocks by showing continuous movement.
