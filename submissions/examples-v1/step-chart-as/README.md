# Step Chart

### What does this do?

It shows a step chart of a value that holds then jumps, like server load sampled over a week. The line moves in horizontal then vertical segments (a staircase) instead of sloping, with a soft fill beneath and marker dots at key steps.

### How is it used?

```html
<svg viewBox="0 0 312 170">
  <polyline class="sc-line" points="16,104 63,104 109,104 109,71 156,71 ..." />
</svg>
```

The `sc-line` polyline alternates a horizontal segment at the current value and a vertical segment to the next value, so the data reads as discrete steps. A `polygon` fills the area below, and `circle` dots mark selected steps.

### Why is it useful?

Step charts suit values that stay constant between changes, like pricing tiers, load, or inventory. This renders one from an SVG polyline and area with pure CSS styling, no charting library.
