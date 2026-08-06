# Bonsai

### What does this do?

It shows a bonsai tree in a shallow pot. The three foliage clusters sway gently out of phase with each other, and small leaves break loose now and then, tumbling and spinning as they fall. Under reduced motion the tree is still and no leaves fall.

### How is it used?

```html
<div class="tree">
  <span class="canopy cp1"></span>
  <span class="branch br1"></span>
  <span class="trunk"></span>
</div>
<div class="pot"><span class="soil"></span><span class="rim"></span></div>
```

The trunk and branches are rotated rounded bars, and each foliage cluster is a soft radial-gradient blob anchored at its base with the `sway` animation on a staggered delay, so the canopy moves like it is in a breeze. Falling leaves run a `drop` animation that translates and rotates them out of the tree.

### Why is it useful?

Calm, zen, and plant care themes use a bonsai. This builds a swaying bonsai with pure CSS shapes and animation, no images, with a reduced motion fallback.
