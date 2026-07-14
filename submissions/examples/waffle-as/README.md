# Waffle

### What does this do?

It shows a stack of waffles on a plate with syrup, a pat of butter and berries. The stack settles gently, the butter softens and sinks, the syrup drips stretch and pull back, and the berries pulse. Under reduced motion the plate holds still.

### How is it used?

```html
<div class="stack">
  <span class="wafl w3"></span>
  <span class="wafl w2"></span>
  <span class="wafl w1"></span>
  <span class="grid"></span>
  <span class="syrup"></span>
</div>
```

The waffle pockets are two crossed `repeating-linear-gradient`s over the top waffle, so the whole grid is one property rather than a lattice of elements. Each syrup drip stretches from `transform-origin: 50% 0`, so it grows downward off the waffle edge instead of expanding from its own middle, and the butter uses a squashing `scaleY` to read as melting rather than shrinking.

### Why is it useful?

Breakfast, cafe, and menu themes use waffles. This builds a stack with pure CSS gradients and animation, no images, with a reduced motion fallback.
