# Penguin

### What does this do?

It shows a penguin standing on the ice in falling snow. The penguin waddles side to side, its flippers flap out of phase with each other, and it blinks every few seconds. Under reduced motion the penguin stands still and the snow stops.

### How is it used?

```html
<div class="penguin">
  <span class="wing left"></span>
  <div class="body"><span class="belly"></span><span class="beak"></span></div>
  <span class="foot lf"></span>
</div>
```

The body is a rounded dark gradient with a white belly, a triangular `clip-path` beak, and orange feet. The whole penguin rocks with the `waddle` animation around a pivot at its feet, while each flipper runs a mirrored `flap` so they swing in opposite directions, and the eyes blink with a quick `scaleY`.

### Why is it useful?

Winter, Antarctic, and playful mascot themes use a penguin. This builds a waddling penguin with pure CSS shapes and animation, no images, with a reduced motion fallback.
