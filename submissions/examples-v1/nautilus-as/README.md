# Nautilus

### What does this do?

It shows a nautilus drifting through deep water. It moves diagonally as it swims, its six tentacles ripple in sequence, its eye blinks, and bubbles rise past its shell. Under reduced motion it hangs still.

### How is it used?

```html
<div class="naut">
  <span class="shellN"></span>
  <span class="stripesN"></span>
  <span class="tent tn1"></span>
</div>
```

The shell's radiating stripes are a `repeating-conic-gradient` anchored off-centre, at `42% 58%`, and masked so nothing shows within the inner 26 percent. Putting the gradient's origin away from the middle is what makes the bands sweep round the spiral rather than radiating evenly like a pie chart, and the mask keeps the centre of the coil clear. The tentacles fan from `transform-origin: 100% 50%` at the hood, each with its own angle in a `--tn` custom property that the ripple keyframe reads back, so they wave without collapsing onto one bearing.

### Why is it useful?

Ocean, fossil, and spiral or geometry themes use a nautilus. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
