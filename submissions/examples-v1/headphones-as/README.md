# Headphones

### What does this do?

It shows a pair of over-ear headphones playing music. The ear cups thump to the beat, one just after the other, the driver in each cup glows in time, and rings of sound ripple out from both sides. Under reduced motion the cups rest and the ripples are hidden.

### How is it used?

```html
<div class="cans">
  <span class="band"></span>
  <div class="cup left"><span class="pad"></span><span class="disc"></span></div>
  <div class="cup right">...</div>
</div>
```

The headband is a thick half-circle border with no bottom edge, so one element gives the whole arc. Each cup runs the `thump` animation with the right side offset by half a beat, and the glowing driver inside pulses on the same clock, so the two sides feel like they are alternating with the music.

### Why is it useful?

Music, podcast, and focus or listening themes use headphones. This builds animated headphones with pure CSS shapes and animation, no images, with a reduced motion fallback.
