# Skeleton Text Loading Effect

## What does this do?
A modern skeleton loading animation that mimics text content while data
is being fetched. Placeholder lines feature a smooth shimmer animation
that moves across the surface, providing visual feedback and improving
perceived loading performance.

## How is it used?

```html
<div class="skeleton-card">
  <div class="skeleton-line skeleton-title"></div>
  <div class="skeleton-line"></div>
  <div class="skeleton-line"></div>
  <div class="skeleton-line short"></div>
</div>
```

## Why is it useful?
Provides a reusable loading state commonly used in modern web applications.
Improves user experience during content loading while remaining lightweight,
composable, and easy to customize. Pure CSS shimmer animation, no JS
required, with full prefers-reduced-motion support.