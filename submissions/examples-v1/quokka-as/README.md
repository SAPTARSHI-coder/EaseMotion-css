# Quokka

### What does this do?

It shows a quokka sitting up with a leaf, wearing its famous grin. It bobs, tilts its head, nibbles the leaf, flicks its tail, twitches an ear, and blinks. Under reduced motion it sits still, still smiling.

### How is it used?

```html
<div class="quok">
  <span class="bodyQ"></span>
  <div class="headQ">
    <span class="faceQ"></span>
    <span class="smileQ"></span>
  </div>
  <span class="armQ"></span>
  <span class="leafQ"></span>
</div>
```

The grin is a box with only its bottom border drawn and its bottom corners fully rounded, which curves that single line into a smile. No clip path, no second element. The arm and the leaf share the same `nibbleQ` keyframe on the same 2.2 second clock, so the leaf moves exactly with the paw holding it rather than drifting free of it. The ear uses a long-hold keyframe: it rests for 88 percent of the cycle and flicks only briefly, which reads as an idle twitch instead of a steady wag.

### Why is it useful?

Wildlife, cheerful, and mascot themes use a quokka. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
