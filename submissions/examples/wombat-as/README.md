# Wombat

### What does this do?

It shows a wombat waddling home to its burrow. It rolls side to side as it walks, its three visible legs step in sequence, its nose snuffles the ground, its ears twitch, and it blinks. Behind it, and true to the animal, it drops cube-shaped droppings. Under reduced motion it stands still.

### How is it used?

```html
<div class="womb">
  <span class="bodyW3"></span>
  <div class="headW3">
    <span class="snoutW3"></span>
    <span class="noseW3"></span>
  </div>
</div>
```

The coarse fur is a `repeating-linear-gradient` angled across the body and clipped by its own `border-radius`, so the pile follows the curve of the animal rather than running flat across it. The head snuffles from `transform-origin: 88% 84%`, the point where the skull meets the shoulders, so the broad nose dips toward the ground while the back of the head barely moves. The waddle is a rotation and a lift on the same keyframe, which is what makes a heavy, low animal read as rolling rather than bouncing.

### Why is it useful?

Wildlife, Australian, and sturdy or "unbothered" themes use a wombat. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
