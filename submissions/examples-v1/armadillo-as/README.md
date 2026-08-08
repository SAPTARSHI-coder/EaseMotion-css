# Armadillo

### What does this do?

It shows an armadillo trotting across sand. Its legs step in sequence, its banded tail waggles, dust puffs up behind it, and it blinks. Hovering or focusing it makes the animal tuck: the head swings in under the shell and the armour bands close up around it. Under reduced motion it stands still and stays uncurled.

### How is it used?

```html
<div class="dillo" tabindex="0">
  <span class="shellA"></span>
  <span class="bandA ba1"></span>
  <div class="headd"><span class="snoutd"></span></div>
</div>
```

Each armour band keeps its own angle in a `--bd` custom property, and the tuck restates the transform as `rotate(calc(var(--bd) * 1.9))`. Multiplying rather than replacing means every band closes further in the direction it already leans, so the plates fold around the shell instead of all snapping to one angle. The head pivots from `transform-origin: 100% 80%`, the neck joint, so it swings in under the shell rather than sliding sideways. Both effects are plain `transition`s, so the whole curl costs no keyframes.

### Why is it useful?

Wildlife, desert, and defensive or "protected" themes use an armadillo. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
