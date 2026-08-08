# Snail

### What does this do?

It shows a snail gliding slowly along, its eye stalks wobbling and a glistening slime trail shimmering behind it. Under reduced motion the snail and its stalks hold still.

### How is it used?

```html
<div class="snail">
  <span class="shell"></span>
  <span class="body"></span>
  <span class="head"></span>
  <span class="stalk sl"></span>
</div>
<span class="trail"></span>
```

The shell's spiral is two nested `repeating-conic-gradient` rings, the inner one offset in both angle and color, which reads as a whorl winding inward without needing any curved paths. The eye stalks wobble on mirrored animations, and a soft gradient trail shimmers behind the foot.

### Why is it useful?

Nature, garden, and slow or patience themes use a snail. This builds a gliding snail with pure CSS gradients and animation, no images, with a reduced motion fallback.
