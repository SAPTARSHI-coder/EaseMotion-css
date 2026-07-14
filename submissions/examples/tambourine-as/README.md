# Tambourine

### What does this do?

It shows a tambourine being shaken. The frame rocks side to side, all eight jingles rattle in their slots, sound rings expand out from it, and the ribbons flow. Hovering or focusing it shakes the tambourine four times faster. Under reduced motion it holds still.

### How is it used?

```html
<div class="tamb" tabindex="0">
  <span class="hoopT"></span>
  <span class="skinT"></span>
  <span class="jingle j1"></span>
</div>
```

Each jingle is placed with `rotate(var(--jr)) translateY(-104px)`: rotate first, then push outward, so one angle both aims the disc and sets how far from the centre it sits, and eight of them at 45 degree steps ring the hoop from a single rule. The rattle keyframe rebuilds that same rotation before nudging the disc a few pixels further out, so shaking never flattens a jingle back to the top of the frame. The hoop itself is a bordered circle, so its depth is just the border width.

### Why is it useful?

Music, percussion, and celebration themes use a tambourine. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
