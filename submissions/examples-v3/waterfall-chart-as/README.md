# Waterfall Chart

### What does this do?

It shows a waterfall chart of cash flow. A starting total bar is followed by floating increase and decrease bars that each pick up where the running total left off, ending with a final total bar. Increases are green, decreases red, totals blue, with value labels, connectors, and a legend.

### How is it used?

```html
<div class="wf-col">
  <span class="wf-val up">+35</span>
  <span class="wf-bar up" style="--base: 50%; --h: 35%;"></span>
  <span class="wf-x">Sales</span>
</div>
```

Each bar floats with `bottom: var(--base)` and `height: var(--h)`, so setting the running total base and the step size positions it. Class `up`, `down`, or `tot` sets the color, and a dashed `::after` links each bar to the next.

### Why is it useful?

Finance and analytics use waterfall charts to explain how a value moves from a start to an end through gains and losses. This renders one from floating CSS bars driven by two custom properties, with no charting library.
