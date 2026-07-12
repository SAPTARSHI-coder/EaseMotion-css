# Pie Chart

### What does this do?

It shows a pie chart drawn from a single conic gradient, paired with a legend that lists each category, its color swatch, and its percent. There is no charting script.

### How is it used?

```html
<div class="pie-card">
  <div class="pie" role="img" aria-label="Traffic sources pie chart"></div>
  <ul class="pie-legend">
    <li style="--c: #6c63ff"><span>Direct</span><b>42%</b></li>
    <li style="--c: #22d3ee"><span>Search</span><b>26%</b></li>
  </ul>
</div>
```

The pie is a `conic-gradient` with a color and a start and end stop per slice. Each legend row sets its swatch color with the `--c` custom property to match its slice.

### Why is it useful?

Dashboards use a pie chart to show a share breakdown. This renders a pie from a conic gradient with a matching legend, using only CSS. The card stacks vertically on very narrow screens.
