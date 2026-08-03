# Bagel

### What does this do?

It shows a seeded bagel with cream cheese, lox and dill on a plate. It floats and tilts, the toppings settle on it, and hovering or focusing the bagel makes the whole thing spin instead. Under reduced motion it sits still.

### How is it used?

```html
<div class="bagel" tabindex="0">
  <span class="ring2"></span>
  <span class="seeds"></span>
  <span class="cream"></span>
  <span class="holeb"></span>
</div>
```

The seeds are ten hard stop `radial-gradient` circles painted into one element that is clipped to a circle, so they scatter across the crust and get cut off cleanly at the edge without a single seed element. The lox gets its fatty striping from a `repeating-linear-gradient` layered over the salmon colour. Each topping keeps its tilt in a `--lr` custom property that the settle keyframe reads back inside `rotate()`, so the shared animation lifts each piece without flattening its angle.

### Why is it useful?

Bakery, brunch, and menu themes use a bagel. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
