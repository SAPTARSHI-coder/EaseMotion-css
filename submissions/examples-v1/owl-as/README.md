# Owl

### What does this do?

It shows an owl perched on a branch under the moon. It blinks its big round eyes, tilts its head to one side and back the way owls do, and shrugs its wings. Under reduced motion the owl sits perfectly still.

### How is it used?

```html
<div class="owl">
  <div class="head"><span class="tuft lt"></span><span class="eye le"></span><span class="beak"></span></div>
  <div class="body"><span class="wing lw"></span><span class="chest"></span></div>
  <span class="claw lc"></span>
</div>
```

The head is a rounded gradient with triangular ear tufts and two large layered eyes, and it runs the `turn` animation, rotating around a pivot at the neck so the head tilts and returns. The striped chest comes from a repeating gradient, the wings shrug with mirrored rotations, and the eyes blink with a fast `scaleY`.

### Why is it useful?

Night, wisdom, and learning themes use an owl. This builds a perched owl with pure CSS shapes and animation, no images, with a reduced motion fallback.
