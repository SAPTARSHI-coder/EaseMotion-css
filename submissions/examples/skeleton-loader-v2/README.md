# Animated Skeleton Loader Component

## 1. What does this do?
An animated skeleton placeholder utility component that creates a smooth shimmer loading effect for content cards, avatars, titles, and text blocks.

## 2. How is it used?
Apply the base `.skeleton` class along with size modifiers to build custom skeleton cards:

```html
<!-- Avatar Circle -->
<div class="skeleton skeleton-avatar"></div>

<!-- Title Line -->
<div class="skeleton skeleton-title"></div>

<!-- Text Content Lines -->
<div class="skeleton skeleton-text"></div>
<div class="skeleton skeleton-text" style="width: 80%"></div>

<!-- Large Media Image Block -->
<div class="skeleton skeleton-card"></div>

<!-- Button block -->
<div class="skeleton skeleton-btn"></div>
```

## 3. Why is it useful?
It provides a zero-dependency, pure CSS layout loading placeholder pattern that improves perceived app performance and visual transition smoothness without requiring external JavaScript libraries or bundles.
