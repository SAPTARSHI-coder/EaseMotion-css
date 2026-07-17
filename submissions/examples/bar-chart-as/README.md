# Animated Bar Chart

### What does this do?

It shows a simple vertical bar chart where each column grows to its value on load with a staggered delay and reveals its value on hover.

### How is it used?

```html
<div class="bar-chart">
  <div class="bar" style="--h: 70%">
    <span class="bar-val">70</span>
    <span class="bar-fill"></span>
    <span class="bar-label">Tue</span>
  </div>
</div>
```

Set `--h` on each `.bar` to its height percentage. The fill grows from zero with `scaleY`, and columns stagger their animation.

### Why is it useful?

Small bar charts summarise data on dashboards and reports. This grows columns from a custom property with a staggered scale animation, using only CSS with no JavaScript. The chart exposes an image role with a label, and under `prefers-reduced-motion: reduce` the bars show their height without animating.
