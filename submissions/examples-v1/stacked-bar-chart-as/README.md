# Stacked Bar Chart

### What does this do?

It shows a stacked bar chart. Each category is a vertical bar built from three colored segments that stack to full height, with the segment heights set by a `--h` custom property. An x axis and a legend name the categories and series.

### How is it used?

```html
<div class="sbc-bar">
  <span class="seg c" style="--h: 20%;"></span>
  <span class="seg b" style="--h: 35%;"></span>
  <span class="seg a" style="--h: 45%;"></span>
</div>
```

Each bar is a flex column. Segments are ordered from top to bottom, each taking `height: var(--h)`, and the `a`, `b`, `c` classes set the series colors. The bar clips its top corners so the stack reads as one rounded column.

### Why is it useful?

Stacked bars compare a total across categories while showing each part's contribution, common in revenue and usage dashboards. This renders one purely with flexbox and a height custom property, with no charting script.
