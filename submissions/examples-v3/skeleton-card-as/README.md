# Skeleton Content Card

### What does this do?

It shows a loading placeholder card with a circular avatar and text lines that shimmer with a moving gradient while real content loads.

### How is it used?

```html
<div class="skeleton-card" role="status" aria-label="Loading content">
  <div class="skeleton skeleton-avatar"></div>
  <div class="skeleton-lines">
    <div class="skeleton skeleton-line w-60"></div>
    <div class="skeleton skeleton-line w-90"></div>
    <div class="skeleton skeleton-line w-75"></div>
  </div>
</div>
```

Apply the `skeleton` class to any block to give it the shimmer, and use `skeleton-avatar` or `skeleton-line` for the common shapes. Swap the placeholder for the real content once it arrives.

### Why is it useful?

Skeleton loaders reduce perceived wait time by showing the shape of content before it arrives. This animates the shimmer by moving a gradient background position, so it needs no images or JavaScript. The card has a `status` role for assistive tech, and the shimmer is disabled under `prefers-reduced-motion: reduce`.
