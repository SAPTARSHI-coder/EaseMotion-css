# ease-reveal (scroll-triggered)

Scroll-triggered fade + slide-in animations using `animation-timeline: view()`. Zero JavaScript required.

## Usage

```html
<div class="ease-reveal">Reveals on scroll</div>
<div class="ease-reveal ease-reveal-left">Slides in from right</div>
```

## Variants

| Class               | Description             |
| ------------------- | ----------------------- |
| `ease-reveal`       | Default fade + slide up |
| `ease-reveal-up`    | Slide up on reveal      |
| `ease-reveal-down`  | Slide down on reveal    |
| `ease-reveal-left`  | Slide left on reveal    |
| `ease-reveal-right` | Slide right on reveal   |
| `ease-reveal-fade`  | Fade only               |
| `ease-reveal-zoom`  | Zoom in on reveal       |
| `ease-reveal-fast`  | 300ms duration          |
| `ease-reveal-slow`  | 900ms duration          |
| `ease-delay-100`    | 100ms delay             |
| `ease-delay-200`    | 200ms delay             |
| `ease-delay-300`    | 300ms delay             |
| `ease-delay-500`    | 500ms delay             |

## Browser Support

Requires `animation-timeline: view()` (Chrome 115+, Edge 115+). Falls back gracefully — elements remain fully visible in unsupported browsers.

## Notes

- Combine delay variants for staggered group reveals
- `animation-fill-mode: both` keeps elements visible after animation completes
- Works on any block element without any JavaScript

## Submission

- **Author:** sudha09-git
- **Issue:** #2349
- **Files:** `style.css`, `demo.html`
