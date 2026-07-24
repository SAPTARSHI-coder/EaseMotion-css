# Bubble Chart

### What does this do?

It shows a bubble chart, a scatter plot where each point also carries a third value as its size. Bubbles are placed by two axes (reach and growth) with their radius encoding revenue, each in its own translucent color with a label, over a gridded frame with a midline on each axis.

### How is it used?

```html
<svg viewBox="0 0 290 210">
  <circle class="b e" cx="230" cy="82" r="32" />
  <circle class="b c" cx="186" cy="118" r="15" />
</svg>
```

Each bubble is an SVG `circle` positioned with `cx` and `cy` and sized with `r` for the third dimension. Class `a` through `f` sets the translucent fill and stroke, and bubbles brighten on hover.

### Why is it useful?

Bubble charts compare items across three dimensions at once, common in market, portfolio, and research views. This renders one from inline SVG circles styled with CSS, with no charting library.
