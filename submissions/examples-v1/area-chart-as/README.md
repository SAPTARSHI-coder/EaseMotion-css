# Area Chart

### What does this do?

It shows an area chart of a weekly trend. A line traces the values, a gradient fill fades from the line down to the axis, gridlines and day labels frame the plot, and two points are marked. Everything is inline SVG styled with CSS.

### How is it used?

```html
<svg viewBox="0 0 312 170">
  <polygon class="ar-area" points="18,150 18,109 57,86 ... 294,37 294,150" />
  <polyline class="ar-line" points="18,109 57,86 97,98 ... 294,37" />
</svg>
```

The filled shape is a `polygon` that follows the data then closes down to the baseline, painted with a `linearGradient`. The `polyline` on top draws the crisp line, and `circle` elements highlight key points.

### Why is it useful?

Dashboards use area charts to show a trend with volume underneath. This renders one from an SVG polygon and polyline with a gradient fill, using only CSS and no charting library.
