# Croissant

### What does this do?

It shows a fresh croissant on a wooden board. It rises and settles as if just out of the oven, the glaze catches the light, steam curls off it, and crumbs shift beside it. Under reduced motion it sits still.

### How is it used?

```html
<div class="croi">
  <span class="lobe lb1"></span>
  <span class="lobe lb2"></span>
  <span class="hornc hcl"></span>
</div>
```

The crescent is not a clip path. It is five rounded lobes plus two tapered horns, all sharing one `transform-origin: 50% 100%` at the base of the pastry, each rotated to its own angle from a `--cr` custom property. Fanning them from a single pivot puts their tips on a circular arc, and that arc is what reads as the curve of a croissant. The same trick shapes the horns, which only differ by a `scaleY` squash that tapers them.

### Why is it useful?

Bakery, breakfast, and cafe themes use a croissant. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
