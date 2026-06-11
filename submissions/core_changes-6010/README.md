# Feature #6010: Add ease-spin rotation animation class

## Description
Add `ease-spin` class with a continuous rotation animation, completing the set of animation utilities alongside `ease-pulse`, `ease-bounce`, `ease-ping`, and `ease-shake`.

## Proposed Implementation
Add to `core/animations.css`:
```css
@keyframes ease-kf-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.ease-spin {
  animation: ease-kf-spin 1s linear infinite;
}
```

## Files
- `style.css` — the spin keyframe and class
- `demo.html` — interactive demo
