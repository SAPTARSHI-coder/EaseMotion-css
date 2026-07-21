# Skeleton Loader Component

## What does this do?

Provides skeleton loader CSS components with shimmer animation for displaying content loading states. Skeleton loaders reduce perceived load time and prevent layout shift during content loading.

## How is it used?

```html
<!-- Avatar + text skeleton -->
<div class="skeleton-card-avatar">
  <div class="skeleton skeleton-avatar"></div>
  <div class="skeleton-text-block">
    <div class="skeleton skeleton-text skeleton-text-medium"></div>
    <div class="skeleton skeleton-text skeleton-text-short"></div>
  </div>
</div>
```

### Available Skeleton Types

| Class                     | Description                |
|---------------------------|----------------------------|
| `.skeleton-avatar`        | Circular avatar placeholder |
| `.skeleton-image`         | Image placeholder           |
| `.skeleton-text`          | Text line                  |
| `.skeleton-text-short`    | Short text line (65%)      |
| `.skeleton-text-medium`   | Medium text line (80%)     |
| `.skeleton-text-xs`       | Extra short text (40%)     |
| `.skeleton-btn`           | Button placeholder         |
| `.skeleton-card-full`     | Full card skeleton         |

## Why is it useful?

- **Reduces perceived latency** — users see structure immediately
- **Prevents layout shift** — skeletons match content dimensions
- **Accessible** — prefer to show static content; use skeletons only while loading
- **Lightweight** — pure CSS animation, no JS required for the shimmer effect

## Browser Support

All modern browsers. `background-size: 200%` with `background-position` animation is widely supported. Falls back gracefully to a static pulse animation via `prefers-reduced-motion`.

## Tech Stack

Pure HTML + CSS. No JavaScript dependencies.
