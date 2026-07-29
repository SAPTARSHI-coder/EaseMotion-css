# Skeleton Loading Components

## What does this do?
A complete skeleton component system providing structured placeholders for layout components (like avatar circles, text lines, headers, buttons, and card containers) that use shimmer or pulse animations to represent loading states.

## How is it used?
Compose individual placeholder classes or use the pre-built `.ease-skeleton-card` container pattern:

```html
<!-- Single elements -->
<div class="ease-skeleton ease-skeleton-avatar ease-skeleton-shimmer"></div>
<div class="ease-skeleton ease-skeleton-heading ease-skeleton-pulse"></div>

<!-- Composite Card -->
<div class="ease-skeleton-card">
  <div class="ease-skeleton-card-media ease-skeleton ease-skeleton-shimmer"></div>
  <div class="ease-skeleton-card-body">
    <div class="ease-skeleton-text-line ease-skeleton-shimmer"></div>
    <div class="ease-skeleton-text-line ease-skeleton-shimmer"></div>
  </div>
</div>
```

## Why is it useful?
Skeleton screens provide a perceived performance boost by giving users an immediate visual preview of the layout structure before data loads. This component standardizes avatar, text, heading, and card shapes, making it easy to create beautiful loading states that respect user motion preferences.
