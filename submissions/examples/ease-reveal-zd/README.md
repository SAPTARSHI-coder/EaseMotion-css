# Ease Reveal Zd

## What does this do?
An animated image reveal component with blur-up loading effect, shimmer placeholder, and staggered card entrance — pure HTML and CSS.

## How is it used?
```html
<div class="rv-card">
  <div class="rv-img-wrap">
    <div class="rv-placeholder"></div>
    <img class="rv-img" src="photo.jpg" alt="Description" loading="lazy">
  </div>
  <div class="rv-body">
    <div class="rv-title">Title</div>
    <div class="rv-desc">Description text...</div>
  </div>
</div>
```

Use `.rv-shimmer-text` inside `.rv-body` for skeleton text placeholders.

## Why is it useful?
Image loading states are a crucial part of modern web UX. The blur-up reveal and shimmer placeholder provide a polished loading experience that keeps the page feeling fast and responsive while images load.
