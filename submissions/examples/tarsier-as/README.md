# Tarsier

### What does this do?

It shows a tarsier clinging to a branch at night, its enormous eyes tracking fireflies. Its head snaps left and right in the sudden way a tarsier's does, its pupils dart with the movement, its ears twitch, its tail curls, and it blinks. Under reduced motion it stares straight ahead.

### How is it used?

```html
<div class="tars">
  <div class="headTs">
    <span class="eyeTs eyl2"></span>
    <span class="pupilTs ptl"></span>
  </div>
</div>
```

The head swivel and the pupils share exactly the same keyframe timing: both hold, then snap at 40 percent, hold again, snap back at 65 percent. Because the pupils translate in the same direction the head turns, the gaze leads the movement rather than lagging behind it, which is what makes the look read as alert rather than mechanical. The `cubic-bezier(0.6, 0, 0.2, 1)` on the head is what gives the turn its snap: slow to leave, fast through the middle, settling hard.

### Why is it useful?

Nocturnal, wildlife, and watchful themes use a tarsier. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
