# Fennec Fox

### What does this do?

It shows a fennec fox in the desert at night, its huge ears swivelling to catch a sound. The fox perks up, its head turns, its ears swivel, its brush tail swishes, and it blinks under the moon. Under reduced motion it sits still.

### How is it used?

```html
<div class="fennec">
  <div class="headF2">
    <span class="earF2 efl"></span>
    <span class="innerF2 ifl"></span>
    <span class="faceF2"></span>
  </div>
</div>
```

Each ear is two elements, the outer shell and the pink inner, and both read the same `--ef` custom property for their angle and run the same `swivelF2` keyframe. Because the keyframe steps to `rotate(calc(var(--ef) + 8deg))`, the inner ear turns with the outer one instead of sliding out of it, and each ear still keeps its own splay. The tail's dark tip is an inset `box-shadow` rather than an extra element, so the two tone brush costs nothing extra.

### Why is it useful?

Desert, wildlife, and night themes use a fennec fox. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
