# Skeleton Loading Card

## What does this do?
This adds a pure CSS "skeleton screen" loading component. It displays the structure of a card (an avatar circle and text lines) with an animated, shimmering gradient passing over it to indicate that content is currently loading.

## How is it used?
Create your layout using generic `<div>` tags, and apply the base `.skeleton` class alongside shape modifiers like `.skeleton-avatar` or `.skeleton-text`.

Example:
```html
<div class="skeleton-card">
  <div class="skeleton skeleton-avatar"></div>
  <div class="skeleton skeleton-text"></div>
</div>
```

## Why is it useful?
- Improves perceived performance by displaying the UI structure before the actual content loads, reducing visual jarring when data arrives.
- The shimmering effect relies purely on CSS `@keyframes` animating `background-position` of a `linear-gradient`, which is lightweight and requires no external libraries or JavaScript.
