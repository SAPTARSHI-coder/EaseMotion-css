# Guitar

### What does this do?

It shows an acoustic guitar being strummed. The pick sweeps across the strings, all six strings blur as they ring, the body sways with the playing, and notes drift off. Under reduced motion the guitar rests silently.

### How is it used?

```html
<div class="gtr">
  <span class="upperg"></span>
  <span class="lowerg"></span>
  <span class="notchl"></span>
  <span class="strg sg1"></span>
</div>
```

The guitar's waist is carved rather than drawn: two circles in the page's own background colour bite into the sides where the bouts meet, so the classic curve costs no clip path. Each string blurs by scaling only in x from `transform-origin: 50% 100%`, which widens it in place without lifting it off the bridge, and the six strings stagger the same keyframe so the ring travels across them as the pick passes. The frets are a single `repeating-linear-gradient` down the neck.

### Why is it useful?

Music, band, and arts themes use a guitar. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
