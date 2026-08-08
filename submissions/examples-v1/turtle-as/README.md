# Turtle

### What does this do?

It shows a sea turtle paddling through the water. Its four flippers stroke in sequence, the body glides and tilts as it swims, it blinks, and bubbles drift up from the sand. Under reduced motion the turtle rests and the bubbles are hidden.

### How is it used?

```html
<div class="turtle">
  <span class="flip fl"></span>
  <div class="shell"><span class="plates"></span><span class="rim"></span></div>
  <span class="head"><span class="eye"></span></span>
</div>
```

The shell's plating is drawn purely with gradients: a `repeating-conic-gradient` cuts the radial seams between scutes and a `repeating-radial-gradient` adds the concentric rings, both clipped by the shell's `overflow: hidden`. Each flipper holds its own rest angle in a `--pr` custom property, so the shared `paddle` stroke swings each one from its natural position, and staggered delays make the four limbs row in sequence.

### Why is it useful?

Ocean, wildlife, and slow or steady themes use a turtle. This builds a swimming turtle with pure CSS gradients and animation, no images, with a reduced motion fallback.
