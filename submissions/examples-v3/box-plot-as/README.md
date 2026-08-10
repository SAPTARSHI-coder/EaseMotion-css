# Box Plot

### What does this do?

It shows a box and whisker plot comparing a distribution across four regions. Each box marks the interquartile range with a median line inside, and whiskers with caps reach out to the minimum and maximum. Gridlines and a value axis frame the chart, all as inline SVG.

### How is it used?

```html
<g class="box" transform="translate(50 0)">
  <line class="whisk" x1="0" y1="46" x2="0" y2="130" />
  <rect class="iqr" x="-15" y="74" width="30" height="35" />
  <line class="median" x1="-15" y1="95" x2="15" y2="95" />
</g>
```

Each box is an SVG group: a `whisk` line for the range, `cap` lines at the ends, an `iqr` rectangle for the middle 50 percent, and a `median` line. Classes set the colors and stroke weights.

### Why is it useful?

Box plots summarize spread, skew, and outliers at a glance, common in analytics and reporting. This renders them from inline SVG shapes styled with CSS, with no statistics or charting library.
