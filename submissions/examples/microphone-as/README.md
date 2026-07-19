# Microphone

### What does this do?

It shows a studio microphone on a stand, picking up sound. Rings of sound ripple outward from the mesh head, the gold band around it glows in and out, and a level meter bounces at the base. Under reduced motion the ripples are hidden and the meter holds still.

### How is it used?

```html
<div class="mic">
  <div class="head"><span class="mesh"></span><span class="ring"></span></div>
  <span class="neck"></span>
  <div class="stand"><span class="pole"></span><span class="foot"></span></div>
</div>
<div class="meter"><span class="lv l1"></span></div>
```

The mesh grille is two perpendicular repeating gradients layered over a metal sphere gradient, so the whole screen pattern costs one property. The `wave` rings share a `pulse` animation on staggered delays, scaling out and fading so sound appears to radiate continuously, and the meter bars scale on their own offsets.

### Why is it useful?

Podcast, recording, and voice or karaoke themes use a microphone. This builds a live studio mic with pure CSS gradients and animation, no images, with a reduced motion fallback.
