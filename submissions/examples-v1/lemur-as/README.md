# Lemur

### What does this do?

It shows a ring-tailed lemur perched on a branch. Its striped tail curls and uncurls behind it, it tilts its head, reaches out with one arm, blinks its amber eyes, and the leaves sway around it. Under reduced motion it sits still.

### How is it used?

```html
<div class="lemur">
  <span class="taill"></span>
  <span class="bodyl"></span>
  <div class="headl"><span class="facel"></span></div>
</div>
```

The tail's rings are a `repeating-linear-gradient` of alternating black and white bands, so the whole striped tail is one element rather than a dozen. It curls from `transform-origin: 0 50%` where it joins the body, and the curl keyframe steps to `rotate(calc(var(--tl) - 26deg))`, moving relative to the tail's own resting angle rather than replacing it, so the rest pose and the animation do not fight each other. The head has its own pivot at the neck, so the tilt does not drag the body with it.

### Why is it useful?

Wildlife, jungle, and playful mascot themes use a lemur. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
