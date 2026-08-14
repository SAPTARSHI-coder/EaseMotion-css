# Elevation Profile Draw

## What does this do?
It draws a route elevation profile line and then fades in the filled mountain area beneath it.

## How is it used?
```html
<div class="profile-chart" aria-hidden="true">
  <svg viewBox="0 0 360 160">
    <path class="profile-area" d="M20 132 L66 118 L103 124 L144 88 L189 104 L232 54 L278 78 L330 34 L340 132 Z"></path>
    <path class="profile-line" d="M20 132 L66 118 L103 124 L144 88 L189 104 L232 54 L278 78 L330 34"></path>
  </svg>
</div>
```

## Why is it useful?
It gives outdoor, fitness, and travel interfaces a lightweight CSS motion pattern for showing route difficulty and terrain shape.
