# Sparkline Stat Card

### What does this do?

It shows a stat card with a metric label, a big value, a trend delta, and a small bar sparkline built from stacked spans. Each bar height comes from a custom property and the bars rise on load, with the last bar accented.

### How is it used?

```html
<article class="spark-card">
  <span class="sc-label">Revenue</span>
  <div class="sc-row">
    <span class="sc-value">$12.8k</span>
    <span class="sc-delta up">▲ 8.4%</span>
  </div>
  <div class="sc-spark">
    <span style="--h: 40%"></span>
    <span style="--h: 70%"></span>
  </div>
</article>
```

Set each bar height with the `--h` custom property. Use the `up` or `down` class on the delta to color it green or red.

### Why is it useful?

Dashboards pair a headline number with a tiny trend chart. This renders a compact bar sparkline from plain spans driven by custom properties, next to a value and a delta, using only CSS with no charting script. The rise animation is removed under reduced motion.
