# Radial Bar Chart

### What does this do?

It shows a radial bar chart, sometimes called a racetrack chart. Each metric is a concentric ring that fills clockwise to its own percentage over a faint track, with a two column legend naming each ring and its value.

### How is it used?

```html
<svg viewBox="0 0 200 200">
  <circle class="a" cx="100" cy="100" r="76" pathLength="100" style="--v: 82;" />
</svg>
```

Each bar is an SVG `circle` with `pathLength="100"`, so `stroke-dasharray: calc(var(--v) * 1) 100` fills it to that percentage. The whole SVG is rotated so the rings start at the top, and rounded caps give the bars a soft end.

### Why is it useful?

Radial bar charts compare several progress values in a compact circular form, common on fitness and dashboard cards. This renders one from inline SVG rings driven by a single custom property each, with no charting library.
