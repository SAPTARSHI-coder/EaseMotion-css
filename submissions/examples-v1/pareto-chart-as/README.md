# Pareto Chart

### What does this do?

It shows a Pareto chart: descending frequency bars with a cumulative percentage line drawn over them, plus an 80 percent reference line. Together they highlight the vital few causes that make up most of the total, the classic 80/20 view.

### How is it used?

```html
<svg viewBox="0 0 300 210">
  <rect class="pb" x="15" y="28.8" width="38" height="151.2" rx="3" />
  <polyline class="pt-line" points="34,104 92,57 150,32 208,19 266,12" />
</svg>
```

Bars are SVG `rect` elements sized by count and sorted high to low, while the `pt-line` polyline traces the running cumulative percentage with marker dots. A dashed `pt-80` line marks the 80 percent threshold.

### Why is it useful?

Pareto charts are a staple of quality and prioritization work, showing where to focus effort first. This renders one from inline SVG bars and a line styled with CSS, with no charting library.
