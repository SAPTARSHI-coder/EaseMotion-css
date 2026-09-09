# Pulsing Image Placeholder Skeleton

## What does this do?
This adds a dedicated loading skeleton specifically designed for large media blocks like hero images, video thumbnails, or photo gallery cards. It renders a 16:9 aspect-ratio placeholder with a centered image icon, a sweeping shimmer effect, and a soft pulsing animation — all with pure CSS and no JavaScript.

## How is it used?
Apply the `.skeleton-image` class to a block element. Place an inner div with `.skeleton-image-shimmer` inside it to add the moving highlight sweep.

Example:
```html
<div class="skeleton-image">
  <div class="skeleton-image-shimmer"></div>
</div>
```

## Why is it useful?
- Prevents **Cumulative Layout Shift (CLS)** by reserving the exact space images will occupy before they load, improving Core Web Vitals scores.
- The pulsing and shimmer animations use only `opacity` and `background-position` — both GPU-composited properties — making them extremely performant.
- Works seamlessly in any grid or flexbox layout without requiring JavaScript or image dimensions to be known upfront.
