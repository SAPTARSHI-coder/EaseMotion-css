# Pineapple

### What does this do?

It shows a pineapple on hot sand. It sways in the breeze, light glints off its skin, sparkles pop around it, and its shadow breathes. Hovering or focusing it makes the crown of leaves fan wide open. Under reduced motion it stands still and the crown stays closed.

### How is it used?

```html
<div class="pine" tabindex="0">
  <span class="frond fr1"></span>
  <span class="fruit"></span>
  <span class="scaleP"></span>
</div>
```

The diamond skin is two `repeating-linear-gradient`s crossed at plus and minus 58 degrees, laid over a fruit shaped element. Because both gradients are clipped by the same `border-radius`, the lattice curves with the fruit instead of running off the edge, so the entire pineapple texture is one element and two properties. Each leaf of the crown keeps its own angle in a `--fr` custom property, and the hover state multiplies it with `calc(var(--fr) * 1.5)`, so every frond opens further along the direction it already points rather than snapping to a shared angle.

### Why is it useful?

Tropical, fruit, and summer themes use a pineapple. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
