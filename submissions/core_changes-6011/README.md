# Feature #6011: Add ease-slide-left and ease-slide-right entrance animations

## Description
Add horizontal slide entrance animations to complement the existing `ease-slide-up` and `ease-slide-down` classes.

## Proposed Implementation
Add to `core/animations.css`:
- `@keyframes ease-kf-slide-left` (translateX(100%) → translateX(0))
- `@keyframes ease-kf-slide-right` (translateX(-100%) → translateX(0))
- `.ease-slide-left` and `.ease-slide-right` classes

## Files
- `style.css` — keyframes and classes
- `demo.html` — interactive demo
