# Zoom Toast Example

## Description
A standard HTML/CSS/JS example demonstrating a "Zoom" entrance and exit animation for toast notifications. The toast pops in from the bottom-right with a satisfying springy scale-up, then shrinks away on dismissal.

## Files
- `demo.html`: Trigger button and a dynamically injected toast using an `aria-live` region.
- `style.css`: Two keyframe animations — `zoom-toast-in-ag` (springy scale up) and `zoom-toast-out-ag` (scale down/fade out).

## Accessibility
- Uses `aria-live="polite"` and `aria-atomic="true"` on the toast container so screen readers announce new toasts.
- The toast element has `role="status"`.
- **Reduced Motion**: Replaces scale animation with a plain opacity fade-in/out.
