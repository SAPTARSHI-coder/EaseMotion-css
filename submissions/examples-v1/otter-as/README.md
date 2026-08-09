# Otter

### What does this do?

It shows a sea otter floating on its back, holding a shell on its chest. It bobs on the swell, taps the shell against itself, swishes its tail, blinks, and sends ripples out across the water. Under reduced motion it floats still.

### How is it used?

```html
<div class="otter">
  <span class="bodyo"></span>
  <span class="belly"></span>
  <span class="shell"></span>
  <span class="heado"></span>
</div>
```

The shell's ridges are a `repeating-conic-gradient` anchored at the bottom of the shell (`from 200deg at 50% 100%`), so the ribs fan outward from the hinge the way a real scallop does, in one element. The tail swishes from `transform-origin: 0 50%` at the hip, so it pivots where it joins the body rather than around its own centre, and the ripples are single rings that scale outward while fading.

### Why is it useful?

Ocean, wildlife, and playful mascot themes use an otter. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
