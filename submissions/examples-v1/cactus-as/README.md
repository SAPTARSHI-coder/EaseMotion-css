# Cactus

### What does this do?

It shows a potted saguaro cactus in the desert sun. The two arms sway gently, a pink flower blooms and slowly turns on top, and the sun glows in the corner. Under reduced motion the cactus, flower, and sun all hold still.

### How is it used?

```html
<div class="cactus">
  <span class="arm left"></span>
  <span class="arm right"></span>
  <span class="trunk"></span>
  <span class="flower"></span>
</div>
<div class="pot"><span class="rim"></span></div>
```

The trunk and arms are rounded green bars with a faint vertical ridge from a repeating gradient, and each arm bends upward with an elbow drawn by `::after`. The flower is a `conic-gradient` bloom with a yellow center, and the arms sway with mirrored `sway` animations while the flower gently scales and rotates.

### Why is it useful?

Desert, plant, and cozy themes use a cactus. This builds a swaying potted cactus with pure CSS shapes and animation, no images, with a reduced motion fallback.
