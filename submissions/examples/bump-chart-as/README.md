# Bump Chart

### What does this do?

It shows a bump chart tracking how four teams change rank across five weeks. Each team is a colored line that moves up and down between rank rows and crosses the others as positions swap, with dots and a legend.

### How is it used?

```html
<svg viewBox="0 0 300 180">
  <polyline class="s a" points="40,30 100,70 160,30 220,30 280,70" />
</svg>
```

Rank rows are evenly spaced gridlines, and each series is a `polyline` whose points sit on the rank of that team at each week. Series classes `a` to `d` set the colors, and dots mark notable positions.

### Why is it useful?

Bump charts show ranking changes over time far more clearly than a table, common in sports, charts, and leaderboards. This renders one from inline SVG polylines styled with CSS, no charting library.
