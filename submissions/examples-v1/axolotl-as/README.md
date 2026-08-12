# Axolotl

### What does this do?

It shows a pink axolotl hovering in the water. It bobs, its feathery gills fan and ripple, its tail wags, it blinks, the weeds sway behind it, and bubbles rise past. Under reduced motion it hangs still.

### How is it used?

```html
<div class="axo">
  <span class="bodya"></span>
  <span class="heada"></span>
  <span class="gill g1"></span>
  <span class="gill g2"></span>
</div>
```

The six gill fronds share one rule and one keyframe. Each keeps its own angle in a `--ga` custom property and pivots from `transform-origin: 0 50%` (or `100% 50%` for the ones on the far side), so every frond fans outward from the neck rather than from its own middle. The ripple keyframe rebuilds `rotate(var(--ga))` on each step before applying `scaleX`, so animating them stretches each frond along its own direction instead of flattening all six to the same angle.

### Why is it useful?

Aquarium, cute mascot, and calm underwater themes use an axolotl. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
