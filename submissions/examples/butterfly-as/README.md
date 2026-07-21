# Butterfly

### What does this do?

It shows a butterfly hovering over a flower. All four wings beat, the whole insect drifts up and sideways as it flies, pollen sparkles blink around it, and the flower rocks below. Under reduced motion the wings settle open.

### How is it used?

```html
<div class="fly">
  <span class="wing wtl"></span>
  <span class="wing wtr"></span>
  <span class="bodyf"></span>
</div>
```

The wing beat is a `rotateY` rather than a scale, so each wing turns edge on and reads as folding through space instead of squashing flat. What makes that work for both sides from one keyframe is `transform-origin: var(--ox) 50%`: the left wings hinge at their right edge (`--ox: 100%`) and the right wings at their left edge (`--ox: 0%`), so a single `flapf` animation drives all four and each still pivots at the body. The lower wings carry a small delay so the pairs do not beat in lockstep.

### Why is it useful?

Nature, spring, and playful landing page themes use a butterfly. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
