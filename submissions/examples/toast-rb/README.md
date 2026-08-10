# Toast Notification Component

A pure CSS toast notification system with auto-dismiss, entrance animations, and a visual progress bar. No JavaScript required.

## Files

- `demo.html` — Live preview with slide-right, slide-up, and dark mode variants
- `style.css` — All toast styles, keyframes, and layout helpers

## How Auto-Dismiss Works

The entire toast lifecycle is handled by a single CSS keyframe animation:

1. **0% – 8%** : Toast slides into view (entrance)
2. **8% – 92%** : Toast stays fully visible (dwell)
3. **92% – 100%** : Toast slides out and fades (exit)

`animation-fill-mode: forwards` keeps the toast in the hidden exit state after the animation completes. No JS timers needed.

## Classes

| Class | Description |
|-------|-------------|
| `.toast-container` | Fixed-position wrapper (top-right by default) |
| `.toast` | Base toast banner |
| `.toast-success` | Green accent variant |
| `.toast-error` | Red accent variant |
| `.toast-info` | Blue accent variant |
| `.toast-slide-right` | Slides in from right edge |
| `.toast-slide-up` | Slides in from bottom |
| `.toast-static` | Disables auto-dismiss (persistent) |
| `.toast-dark` | Dark mode palette swap |

## CSS Custom Properties

Override these on `.toast` or via inline styles:

```css
.toast {
  --toast-duration: 4s;        /* Total lifecycle time */
  --toast-delay: 0s;             /* Entrance delay (staggering) */
  --toast-bg: #ffffff;           /* Background color */
  --toast-text: #111827;         /* Text color */
  --toast-accent: #3b82f6;     /* Border + progress bar color */
}