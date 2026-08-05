# Area Line Chart

### What does this do?

It shows a small area line chart drawn with an inline SVG polyline over a gradient fill, with faint gridlines, dot markers on each point, and day labels along the bottom. There is no charting script.

### How is it used?

```html
<figure class="line-chart">
  <div class="lc-head"><h2>Weekly signups</h2><span class="val">1,284</span></div>
  <svg viewBox="0 0 300 135">
    <defs><linearGradient id="lc-grad" x1="0" y1="0" x2="0" y2="1">...</linearGradient></defs>
    <polygon class="lc-area" points="10,130 10,97 ... 290,130" />
    <polyline class="lc-line" points="10,97 58,80 ... 290,31" />
  </svg>
  <figcaption class="lc-x"><span>Mon</span>...</figcaption>
</figure>
```

Plot the same points on the `polyline` for the line and on the `polygon` (closed to the baseline) for the gradient area. Add a `circle` marker per point.

### Why is it useful?

Dashboards need a trend line beside the bar and donut charts. This renders an area line chart from an inline SVG path with a gradient fill and gridlines, using only CSS. The line and area are static so it holds still under reduced motion.
