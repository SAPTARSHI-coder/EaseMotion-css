# Horizontal Bar Chart

### What does this do?

It renders a horizontal bar chart where each row has a category label, a bar that grows to a percent from a custom property, and a value shown at the end of the bar. The bars animate in on load.

### How is it used?

```html
<ul class="hbar">
  <li style="--val: 82%">
    <span class="hbar-label">Chrome</span>
    <span class="hbar-track"><span class="hbar-fill">82%</span></span>
  </li>
</ul>
```

Set each bar length with the `--val` custom property. The label sits in a fixed left column and the bar fills the rest, so long labels stay readable.

### Why is it useful?

Horizontal bar charts compare a handful of categories with long labels better than vertical bars. This renders a labeled horizontal bar chart driven by a custom property per row, with an entry animation, using only CSS and no charting script. The animation is removed under reduced motion.
