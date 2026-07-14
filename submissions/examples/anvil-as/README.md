# Anvil

### What does this do?

It shows a blacksmith's anvil with a hammer striking a glowing ingot. The hammer swings down on a loop, sparks burst out at the moment of impact and fly off in different directions, the hot metal flares brighter on each blow, and the forge glow breathes behind it. Under reduced motion the hammer rests.

### How is it used?

```html
<div class="anvil">
  <span class="topa"></span>
  <span class="horn"></span>
  <span class="waist"></span>
  <span class="basea"></span>
</div>
```

The anvil's shape comes from two `clip-path` polygons: a triangle for the horn and a trapezoid for the waist, which is what gives the classic pinched profile without any images. The sparks are the interesting timing trick: they all share one keyframe that keeps them invisible until 38 percent of the cycle, the exact moment the hammer lands, then throws each one to its own destination taken from `--sx` and `--sy`. Because the spark animation and the hammer animation are the same length, the burst stays locked to the impact forever without any JavaScript.

### Why is it useful?

Forge, crafting, and build or "make" themes use an anvil. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
