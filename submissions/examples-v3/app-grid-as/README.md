# App Launcher Grid

### What does this do?

It lays out an app launcher grid of rounded icon tiles with labels, like a phone home screen or a product switcher. Tiles use gradient backgrounds and lift on hover, and the grid adapts its column count to the width.

### How is it used?

```html
<div class="apps">
  <a class="app" href="#">
    <span class="app-icon"><svg>...</svg></span>
    <span class="app-name">Mail</span>
  </a>
</div>
```

The grid uses `repeat(auto-fit, minmax(84px, 1fr))`, so tiles wrap to fit. Each tile gets one of six gradient backgrounds by position.

### Why is it useful?

Product suites and dashboards offer an app switcher grid to jump between tools. This lays out a responsive icon tile grid with labels and a hover lift, using only CSS and inline SVG so there are no external assets. The lift is removed under reduced motion.
