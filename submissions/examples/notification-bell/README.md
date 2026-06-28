# Notification Bell Animation

## 1. What does this do?
A bell icon with a shake/ring animation on hover and an interval-based auto-ring variant, with a notification badge dot.

## 2. How is it used?
Add the `.bell-btn` class to a button containing a `.bell-icon` SVG and optional `.bell-dot`. Add `.bell-interval` for continuous auto-ring.
```html
<button class="bell-btn bell-interval" aria-label="Notifications">
  <svg class="bell-icon">...</svg>
  <span class="bell-dot"></span>
</button>
```

## 3. Why is it useful?
A lightweight, pure-CSS notification bell with no JavaScript. The hover trigger avoids distracting users by default, while `.bell-interval` can be used sparingly for attention. Respects `prefers-reduced-motion`.
