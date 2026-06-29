# Shimmer Scan Loading Effect

## 1. What does this do?
Creates a metallic shimmer/scan-line sweep effect across a surface, commonly used for skeleton loading states.

## 2. How is it used?
Add the `.shimmer-loading` class to any element to apply a sweeping shimmer. Use `.shimmer-line` for text lines and `.shimmer-card` for the container. The `.shimmer-dark` class switches to a dark theme.
```html
<div class="shimmer-line shimmer-loading"></div>
```

## 3. Why is it useful?
Provides a performant, accessible loading placeholder effect using only CSS pseudo-elements and transforms. Fully respects `prefers-reduced-motion` and works on both light and dark backgrounds.
