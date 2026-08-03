# Lantern

### What does this do?

It shows a red paper lantern hanging on a cord at night. It swings gently, the flame inside flickers, a warm halo breathes around it, the tassel sways below, and embers drift up past it. Under reduced motion everything hangs still.

### How is it used?

```html
<div class="lantern">
  <span class="capl"></span>
  <div class="paper"><span class="ribs"></span><span class="glowl"></span></div>
  <div class="tasselw"><span class="tassel"></span><span class="tail tl1"></span></div>
</div>
```

The lantern's paper ribs are a `repeating-linear-gradient` of thin vertical lines over the rounded body, so the whole ribbed panel structure costs one property. The lantern swings from a `transform-origin` above itself, up at the cord's anchor point, so it arcs from where it actually hangs. The tassel gets its own pivot and a slightly faster sway, so it trails the lantern rather than moving rigidly with it.

### Why is it useful?

Festival, night, and warmth or celebration themes use a lantern. This builds a glowing paper lantern with pure CSS gradients and animation, no images, with a reduced motion fallback.
