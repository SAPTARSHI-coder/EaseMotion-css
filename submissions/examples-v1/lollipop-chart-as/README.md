# Lollipop Chart

### What does this do?

It shows a lollipop chart, a lighter take on the bar chart where each value is a thin stem topped by a round dot. Six categories rise to different heights set by a `--h` custom property, each with its value above the dot and a label below.

### How is it used?

```html
<div class="lp-col" style="--h: 82%;">
  <span class="lp-val">4.9k</span>
  <span class="lp-stem"></span>
  <span class="lp-dot"></span>
</div>
```

Each column sets its height with `--h`. The `lp-stem` grows from the baseline to that height, the `lp-dot` sits at the top with `bottom: var(--h)`, and the value label floats just above, so one property positions the whole lollipop.

### Why is it useful?

Lollipop charts reduce the ink of full bars while keeping the comparison clear, good for rankings and category counts. This renders one with pure CSS from a single height custom property per column, no charting library.
