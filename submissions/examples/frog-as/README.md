# Frog

### What does this do?

It shows a frog sitting on a lily pad. Its throat pouch swells and deflates as it croaks, it blinks its big eyes, it gives a little hop, and a fly buzzes around above it. Under reduced motion the frog sits still and the fly stops.

### How is it used?

```html
<div class="frog">
  <span class="body"></span>
  <span class="throat"></span>
  <div class="head"><span class="eye el"><span class="pupil"></span></span></div>
</div>
```

The croak is the key trick: the throat pouch is anchored at its top edge with `transform-origin: 50% 0`, so scaling it up in the `croak` keyframes makes it balloon *downward* out of the chin rather than growing in all directions. The eyes are domes that sit proud of the head, each with a pupil that blinks with a fast `scaleY`.

### Why is it useful?

Pond, nature, and playful mascot themes use a frog. This builds a croaking frog with pure CSS shapes and animation, no images, with a reduced motion fallback.
