# Skeleton Loader — EaseMotion CSS Submission

A pure CSS skeleton loader component with shimmer animation.
No JavaScript. No dependencies.

## Classes

| Class                  | Description                          |
|------------------------|--------------------------------------|
| `skeleton-card`        | Card-shaped container                |
| `skeleton-avatar`      | Circular avatar placeholder          |
| `skeleton-line`        | Full-width text line placeholder     |
| `skeleton-line-short`  | ~60% width shorter line placeholder  |

## Usage

```html
<div class="skeleton-card">
  <div class="skeleton-avatar"></div>
  <div class="skeleton-line"></div>
  <div class="skeleton-line skeleton-line-short"></div>
</div>
```

## Accessibility

Shimmer animation is disabled for users with `prefers-reduced-motion` enabled.