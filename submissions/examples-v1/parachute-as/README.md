# Parachute

### What does this do?

It shows a parachute drifting down through a blue sky. The striped canopy swings gently from side to side, the payload and suspension lines swing with it, and clouds drift by in the background. Under reduced motion the parachute and clouds hold still.

### How is it used?

```html
<div class="parachute">
  <span class="canopy"></span>
  <span class="line l1"></span>
  <span class="payload"></span>
</div>
```

The canopy is the top half of a rounded shape filled with a `repeating-conic-gradient`, which paints the alternating orange and yellow gores, plus a scalloped lower lip drawn by `::after`. Four suspension lines fan out to the payload, and the whole rig runs the `sway` animation, rocking around a pivot near the top so it swings like a real descent.

### Why is it useful?

Delivery, drop, and adventure themes use a parachute. This builds a swinging parachute with pure CSS gradients and animation, no images, with a reduced motion fallback.
