# Skeleton Shimmer Loader

## What does this do?
Placeholder loading blocks with a left-to-right shimmer sweep — 
like Facebook or YouTube's loading states. Zero JavaScript.

## How is it used?
Add `.skeleton` to any block element, then layer in variants:

```html
<!-- Avatar + text lines -->
<div class="skeleton-card">
  <div class="skeleton-row">
    <div class="skeleton skeleton-avatar"></div>
    <div class="skeleton-lines">
      <div class="skeleton skeleton-line skeleton-line-full"></div>
      <div class="skeleton skeleton-line skeleton-line-md"></div>
    </div>
  </div>
</div>
```

Variants:
- Shape: `skeleton-avatar`, `skeleton-image`, `skeleton-line`
- Width: `skeleton-line-sm`, `skeleton-line-md`, `skeleton-line-full`
- Speed: `shimmer-slow`, `shimmer-fast`

## Why is it useful?
Skeleton loaders are a standard loading UX pattern. Pure CSS keeps
it lightweight — no JavaScript or dependencies needed.

## Tech Stack
- HTML
- CSS only (`@keyframes`, `linear-gradient`, `::after`)

## Preview
Open `demo.html` directly in your browser.