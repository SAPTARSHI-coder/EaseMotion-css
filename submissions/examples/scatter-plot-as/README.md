# Scatter Plot

### What does this do?

It shows a small scatter plot drawn with inline SVG, plotting points from two series in different colors over an axis frame with gridlines and axis labels, plus a legend naming each series.

### How is it used?

```html
<figure class="scatter">
  <h2>Hours studied vs score</h2>
  <svg viewBox="0 0 260 170">
    <path class="sc-frame" d="M30 20 V140 H250" />
    <circle class="pt a" cx="48" cy="124" r="4" />
    <circle class="pt b" cx="58" cy="100" r="4" />
  </svg>
  <figcaption class="sc-legend"><span class="a">Class A</span><span class="b">Class B</span></figcaption>
</figure>
```

Each point is an SVG `circle` with an `a` or `b` class for its series color. The frame is an L shaped path and the gridlines are horizontal lines. The legend swatches match the point colors.

### Why is it useful?

Dashboards use a scatter plot to show correlation between two values. This renders a scatter plot from inline SVG circles over a gridded frame with a legend, using only CSS and no charting script.
