# Radar Chart

### What does this do?

It shows a radar (spider) chart comparing two data series across five axes. Concentric grid polygons and radial axis lines form the frame, and two translucent polygons plot each series over the same five stats, with axis labels and a legend.

### How is it used?

```html
<svg viewBox="0 0 240 200" role="img" aria-label="Radar chart">
  <polygon class="rd-shape a" points="120,32 168,92 158,161 95,142 55,87" />
  <polygon class="rd-shape b" points="120,62 188,86 142,139 85,156 72,92" />
</svg>
```

The frame is a set of nested `polygon` gridlines plus axis `line` elements. Each series is one `rd-shape` polygon whose vertex list encodes the value on each axis; the `a` and `b` classes set the fill and stroke colors.

### Why is it useful?

Radar charts compare several dimensions of two or more items at a glance, common in sports, product, and skill comparisons. This renders one from inline SVG polygons with only CSS styling and no charting library.
