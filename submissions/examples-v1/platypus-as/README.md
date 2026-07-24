# Platypus

### What does this do?

It shows a platypus paddling along a creek. It rides the surface, dips its bill, sweeps its flat tail to steer, rows with its webbed paws, and blinks, while ripples spread and bubbles rise around it. Under reduced motion it floats still.

### How is it used?

```html
<div class="platy">
  <span class="bodyp2"></span>
  <span class="tailp2"></span>
  <div class="headp2">
    <span class="skullp2"></span>
    <span class="bill"></span>
  </div>
</div>
```

The bill's shape is one asymmetric `border-radius`: heavily rounded on the outer end and nearly square where it meets the face, which is what gives it the flat duck-bill profile without a clip path. The head dips from `transform-origin: 92% 80%`, the point where the skull meets the neck, so the bill sweeps down into the water while the back of the head stays put. The tail steers from its own root, and the two paws row on the same keyframe half a cycle apart, so they alternate rather than paddling together.

### Why is it useful?

Wildlife, river, and unusual animal themes use a platypus. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
