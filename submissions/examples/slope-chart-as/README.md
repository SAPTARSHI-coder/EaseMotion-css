# Slope Chart

### What does this do?

It shows a slope chart comparing each category between two points in time. Two vertical axes hold the start and end values, and a line connects each category's dots across them, colored green when it rose and red when it fell, with labels on both sides.

### How is it used?

```html
<svg viewBox="0 0 300 190">
  <line class="up" x1="64" y1="124" x2="236" y2="66" />
  <circle class="up" cx="64" cy="124" r="4" />
</svg>
```

Each category is one SVG `line` from its left value to its right value, with `circle` dots at each end. An `up` or `down` class colors the slope by direction, and text labels sit beside each axis.

### Why is it useful?

Slope charts make gains and losses across categories obvious in a compact form, common in before and after comparisons. This renders one from inline SVG lines styled with CSS, no charting library.
