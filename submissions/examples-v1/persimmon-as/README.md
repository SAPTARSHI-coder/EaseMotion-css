# Persimmon

### What does this do?

It shows a ripe persimmon hanging from an autumn twig. It swings on its stem, the four sepals of its calyx flex, light glints off the skin, the leaves sway, and stray leaves drift down. Hovering or focusing the fruit swings it three times faster, as if it were about to drop. Under reduced motion it hangs still.

### How is it used?

```html
<div class="persim" tabindex="0">
  <span class="fruitP"></span>
  <span class="sepal sp1"></span>
  <span class="calyxP"></span>
</div>
```

The calyx is four identical sepals placed by rotation alone: each is a leaf shape whose `border-radius` rounds two opposite corners, and each keeps its own bearing in a `--sp2` custom property set 90 degrees apart. Because they all pivot from `transform-origin: 50% 20%`, a point near the top of the fruit, four copies of one shape fan into a full star-shaped calyx with no extra geometry. The flex keyframe rebuilds `rotate(var(--sp2))` before scaling, so the sepals swell without snapping back to a single angle.

### Why is it useful?

Autumn, fruit, and harvest themes use a persimmon. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
