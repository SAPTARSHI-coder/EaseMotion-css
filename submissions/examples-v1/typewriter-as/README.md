# Typewriter

### What does this do?

It shows a typewriter writing a page. The key rows press down in a rippling order, the hammer taps up at the paper, the typed lines appear one step at a time, and when the page fills the carriage return lever swings and the platen knobs roll the paper up. Under reduced motion the page sits finished and still.

### How is it used?

```html
<div class="tw">
  <span class="paper"></span>
  <span class="lines"></span>
  <span class="keys krow1"></span>
  <span class="lever"></span>
</div>
```

The typed text is revealed with `clip-path: inset(0 100% 0 0)` animating to zero on a `steps(9)` timing function, so the lines appear a chunk at a time like a machine striking characters rather than sliding smoothly into view. Each key row is one element: a `radial-gradient` keycap tiled by `background-size`, so a full row of keys costs no markup, and the three rows share one press keyframe with staggered delays so the ripple runs across the keyboard.

### Why is it useful?

Writing, blog, and retro themes use a typewriter. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
