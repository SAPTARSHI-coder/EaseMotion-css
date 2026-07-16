# Gauge Meter

### What does this do?

It shows a semicircle gauge meter where a needle points to a value set with a custom property, over a green to red arc. It reads like a speedometer or a score dial, with the value shown in the center.

### How is it used?

```html
<div class="gauge" style="--val: 72" role="img" aria-label="Score 72 out of 100">
  <div class="gauge-arc"></div>
  <div class="gauge-hole"></div>
  <div class="gauge-needle"></div>
  <div class="gauge-cap"></div>
  <div class="gauge-value">72</div>
</div>
```

Set `--val` from 0 to 100. The needle rotates by `calc(var(--val) * 1.8deg - 90deg)`, so 0 points left, 50 points up, and 100 points right across the half circle.

### Why is it useful?

Scores, speeds, and health metrics read well on a half circle gauge. This builds a semicircle gauge from a conic gradient arc and a needle rotated by a custom property, using only CSS. The needle eases to its value and the transition is removed under reduced motion.
