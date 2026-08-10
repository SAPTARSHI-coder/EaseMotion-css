# Mouse Hover 3D Tracker Card Component

## What does this do?
This component creates a interactive 3D card tilt effect that tracks mouse hover position across a 5x5 grid using pure CSS with zero JavaScript.

## How is it used?
Include `style.css` in your HTML document and wrap your card elements in the `.container` grid canvas with `.tracker` areas:

```html
<div class="container noselect">
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <!-- ... tr-2 through tr-25 ... -->
    <div id="card">
      <p id="prompt">HOVER OVER :D</p>
      <div class="title">look mom,<br>no JS</div>
      <div class="subtitle">mouse hover tracker</div>
    </div>
  </div>
</div>
```

## Why is it useful?
It provides a smooth, GPU-accelerated 3D parallax tilt effect using CSS `grid`, `perspective`, and sibling combinators (`~`), perfectly embodying EaseMotion CSS's zero-JS animation philosophy.

## Credit
Inspired by Uiverse.io card design by kennyotsu.
