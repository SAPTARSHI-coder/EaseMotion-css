# Crab

### What does this do?

It shows a crab scuttling sideways on the sand. Its two claws open and snap shut on alternating beats, its six legs paddle in a travelling wave, its eyestalks swivel and blink, and the whole crab shuffles side to side. Under reduced motion the crab holds still.

### How is it used?

```html
<div class="crab">
  <div class="claw lc"><span class="upper"></span><span class="lower"></span></div>
  <span class="leg lg1"></span>
  <span class="shell"></span>
  <span class="stalk sk1"><span class="eyec"></span></span>
</div>
```

Each claw is two halves hinged at a shared pivot at their inner end, rotating in opposite directions so the pincer opens and closes rather than the whole claw wobbling. Each leg stores its splay angle in a `--lr` custom property, so one `step` animation can paddle all six around their own resting positions, and staggered delays send the motion down the row like a real crab's gait.

### Why is it useful?

Beach, ocean, and playful mascot themes use a crab. This builds a scuttling crab with pure CSS shapes, custom properties, and animation, no images, with a reduced motion fallback.
