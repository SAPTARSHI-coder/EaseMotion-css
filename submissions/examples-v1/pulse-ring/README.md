# Pulse Ring Effect

## 1. What does this do?
Shows expanding concentric pulse rings emanating from a central dot, similar to a radar ping or live indicator.

## 2. How is it used?
Add a `.pulse-dot` inside a `.pulse-container`. Customize the color with `--pulse-color`.
```html
<div class="pulse-container">
  <div class="pulse-dot"></div>
  <span class="pulse-label">Live</span>
</div>
```

## 3. Why is it useful?
A lightweight, pure CSS live/online indicator using only `box-shadow` animation. Color is customizable via CSS variable. Respects `prefers-reduced-motion` and shows a static ring when motion is reduced.
