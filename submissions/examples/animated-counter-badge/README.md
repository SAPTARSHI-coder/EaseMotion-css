# Animated Counter Badge

A circular badge with an animated count. The badge auto-increments every 2 seconds with a bump scale animation. Clicking the badge also increments the counter. A Reset button restores the count to zero. Uses `requestAnimationFrame` to coordinate the CSS animation.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. Watch the badge count up automatically, or click it to increment manually.

## Accessibility notes

Reduced motion disables the bump animation. The badge text is updated via `textContent` for screen reader compatibility.
