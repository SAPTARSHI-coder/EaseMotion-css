# Stingray

### What does this do?

It shows a stingray gliding through open water. Its wings beat up and down, the whole animal rises and sinks as it swims, the tail trails behind it, the pale markings on its back catch the light, and bubbles drift up past it. Under reduced motion it holds still.

### How is it used?

```html
<div class="ray">
  <span class="disc"></span>
  <span class="wings ws1"></span>
  <span class="wings ws2"></span>
  <span class="tails"></span>
</div>
```

Each wing is a single `clip-path` triangle, which is what gives it a sharp tip that a `border-radius` cannot produce. The beat is a vertical `scaleY` squash rather than a rotation, and each wing keeps its own hinge in a `--wo` custom property that feeds `transform-origin`: the left wing pivots at its right edge and the right wing at its left edge, so both squash toward the body instead of around their own centres. That is what makes them read as flapping rather than shrinking.

### Why is it useful?

Ocean, aquarium, and calm or ambient themes use a stingray. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
