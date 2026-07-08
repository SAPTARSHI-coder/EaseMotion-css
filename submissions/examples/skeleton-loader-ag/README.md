# CSS-Only Skeleton Loader Component

## What does this do?
Provides a set of pure CSS skeleton loading placeholder classes for cards, text blocks, and avatars. These use a shimmering gradient animation to indicate content is loading, with no JavaScript required.

## How is it used?
```html
<!-- Skeleton card -->
<div class="ease-skeleton-card">
  <div class="ease-skeleton-avatar"></div>
  <div class="ease-skeleton-text ease-skeleton-text--lg"></div>
  <div class="ease-skeleton-text ease-skeleton-text--md"></div>
  <div class="ease-skeleton-text ease-skeleton-text--sm"></div>
</div>
```

## Why is it useful?
Skeleton screens dramatically improve perceived performance by showing users the shape of incoming content before data loads. This implementation uses `background-size` and `background-position` animation on a shimmer gradient, keeping it entirely on the compositor thread for buttery-smooth 60fps performance.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open `demo.html` directly in your browser to see the shimmer effect.
