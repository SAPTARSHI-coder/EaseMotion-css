# CSS-only Shimmer Loading Skeleton

### 1. What does this do?
A purely CSS-driven loading skeleton UI. It uses a sweeping linear gradient animation overlaid via a pseudo-element (`::after`) to simulate a light reflection passing over the skeleton blocks, creating a "shimmer" effect.

### 2. How is it used?
```html
<div class="skeleton-card">
  <div class="skeleton skeleton-avatar"></div>
  <div class="skeleton-lines">
    <div class="skeleton skeleton-title"></div>
    <div class="skeleton skeleton-text"></div>
    <div class="skeleton skeleton-text"></div>
  </div>
</div>
```

### 3. Why is this useful?
Skeleton loaders drastically improve perceived performance and user experience compared to traditional spinners. Providing a beautifully animated, customizable skeleton loader that requires zero JavaScript makes EaseMotion CSS an even more powerful utility library.
