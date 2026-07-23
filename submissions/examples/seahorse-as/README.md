# Seahorse

### What does this do?

It shows a seahorse hovering above the seabed. Its dorsal fin flutters far too fast to see clearly, exactly as a real one does, its curled tail coils and relaxes, and the whole body drifts up and down while sea grass sways and bubbles rise. Under reduced motion the seahorse holds still.

### How is it used?

```html
<div class="horse">
  <div class="head"><span class="snout"></span></div>
  <span class="trunk"></span>
  <span class="fin"></span>
  <span class="curl c1"></span>
</div>
```

The curled tail is built from three ring segments: each is a circle with only two of its four borders colored, which draws an arc rather than a full ring. Stacking three of those at shrinking sizes gives the spiral. Each arc holds its own angle in a `--cr` custom property so the shared `coil` animation can tighten the whole tail without flattening the spiral.

### Why is it useful?

Ocean, aquarium, and delicate or whimsical themes use a seahorse. This builds a drifting seahorse with pure CSS shapes and animation, no images, with a reduced motion fallback.
