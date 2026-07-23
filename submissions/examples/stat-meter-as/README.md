# Stat Usage Meters

### What does this do?

It shows a stack of labeled horizontal meters for usage figures like storage, bandwidth, or quota. Each row has a label, a percent value, and a bar that fills to a percent set by a custom property and grows on load.

### How is it used?

```html
<div class="meter is-warn" style="--val: 88%">
  <div class="meter-top"><span>API quota</span><span>88%</span></div>
  <div class="meter-track"><span class="meter-fill"></span></div>
</div>
```

Set the fill amount with the `--val` custom property. Add `is-good` for a green tone or `is-warn` for an amber to red tone; the default is the accent gradient.

### Why is it useful?

Usage meters appear in dashboards and account pages. This renders a set of labeled progress meters driven by a single custom property per row, with a smooth fill animation and a color tone, using only CSS. The fill animation is removed under reduced motion.
