# Shimmer Skeleton Loader Grid - EaseMotion CSS

A responsive content loading skeleton component engineered with smooth keyframe gradient sweeps.

## 1. What does this do?
This component provides placeholder loading animations for media cards and text grids, replacing layout shift with continuous CSS linear gradient sweeps.

## 2. How is it used?
Apply the `.skeleton` class to any placeholder block in your layout:

```html
<link rel="stylesheet" href="style.css">

<div class="skeleton-card">
  <div class="skeleton skeleton-image"></div>
  <div class="skeleton skeleton-text"></div>
</div>
```

## 3. Why is it useful?
- **Perceived Speed:** Reduces perceived load latency for data-heavy applications.
- **Hardware Acceleration:** Employs optimized `background-position` gradient translation.
- **Theme Adaptability:** Custom properties make base and shimmer highlight hues easily tweakable.
