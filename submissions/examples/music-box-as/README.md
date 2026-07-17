# Music Box

### What does this do?

It shows an open music box with a ballerina turning on top. She pirouettes, her tutu flares as she spins, the crank winds round, notes drift up out of the box, and sparkles catch the light. Under reduced motion she stands still.

### How is it used?

```html
<div class="mbox">
  <span class="lid"></span>
  <div class="dancer">
    <span class="torso"></span>
    <span class="tutu"></span>
  </div>
  <div class="crankM"><span class="handleM"></span></div>
</div>
```

The pirouette is a `rotateY` on the dancer wrapper rather than a `rotate`. Turning her about the vertical axis makes her narrow to almost nothing at the halfway point and open out again, which is what a real spin looks like from the front, where a flat `rotate` would just tip her over sideways. The crank turns from `transform-origin: 8% 50%`, its own axle at the left end of the handle, so the knob swings in a circle around the box instead of the whole arm orbiting its centre.

### Why is it useful?

Nostalgic, toy, and keepsake themes use a music box. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
