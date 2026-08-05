# Donut

### What does this do?

It shows a frosted donut floating above its shadow. It bobs and tilts on its own, the sprinkles pulse in sequence, and hovering or focusing it makes the whole donut spin instead. Under reduced motion it holds still.

### How is it used?

```html
<div class="donut" tabindex="0">
  <span class="dough"></span>
  <span class="icing"></span>
  <span class="sprink s1"></span>
  <span class="hole"></span>
</div>
```

Every sprinkle is placed with `rotate(var(--sd)) translateY(-72px)`, rotating first and then pushing outward, so one custom property both aims the sprinkle around the ring and sets how far from the centre it lands. The pulse keyframe rebuilds that same `rotate(...) translateY(...)` on each step, so the shared animation scales the sprinkle without throwing away its position. The icing gets its uneven poured edge from an asymmetric `border-radius` rather than a clip path.

### Why is it useful?

Bakery, dessert, and playful landing page themes use a donut. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
