# Blob Morph Animation

## 1. What does this do?

Shows organic blob shapes that continuously morph using animated `border-radius` values at each keyframe.

## 2. How is it used?

Add a `.blob` element inside a `.blob-wrapper`. Apply a `.blob-gradient-*` class to choose the color scheme.

```html
<div class="blob-wrapper">
  <div class="blob blob-gradient-1"></div>
</div>
```

## 3. Why is it useful?

Creates organic, fluid backgrounds for hero sections or decorative elements using only CSS border-radius animation. Multiple layered blobs at different speeds produce depth. Respects `prefers-reduced-motion`.
