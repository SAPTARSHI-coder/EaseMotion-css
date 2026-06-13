# ease-rotate-y

Utility class for a smooth Y‑axis rotation (3D flip) effect.

## Usage
```html
<link rel="stylesheet" href="path/to/style.css" />
<div class="ease-rotate-y">Hover me</div>
```

- The element rotates 180° on hover/focus.
- Respects `prefers-reduced-motion` – disables animation for users who prefer less motion.

## Demo
Open `demo.html` in this folder to see the effect.

## Implementation Details
- Uses `perspective: 1000px` for a realistic 3D feel.
- Transition uses a cubic‑bezier easing curve matching the rest of the library.
- `will-change: transform` hints the browser for better performance.

## Compatibility
Works in all modern browsers supporting CSS transforms and transitions.

---
*Resolves [Issue #7062](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/7062).*
