# Camera

### What does this do?

It shows a camera taking a shot on a loop. The shutter button presses down, the lens zooms in, the bulb charges and the whole frame flashes white, then everything settles back and the dial turns for the next shot. Under reduced motion the camera sits still and never flashes.

### How is it used?

```html
<div class="cam">
  <span class="bodyc"></span>
  <span class="lens"></span>
  <span class="glassl"></span>
  <span class="shutter"></span>
</div>
```

The whole sequence is timed rather than triggered: every part runs the same 5 second cycle, and each keyframe holds still until the moment of the shot. The shutter presses at 50%, the bulb's glow `box-shadow` peaks at 50%, and the white overlay only reaches full opacity between 46% and 60%, so the flash lands on the press instead of drifting out of sync. The lens rings are nested circles and the grip texture is one `repeating-linear-gradient`.

### Why is it useful?

Photography, gallery, and portfolio themes use a camera. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback that also suppresses the flash for anyone sensitive to it.
