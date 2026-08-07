# Fan

### What does this do?

It shows an electric fan with four blades spinning fast behind a wire grille, a center hub, a neck, and a round base. The grille is a fixed pattern of concentric rings and radial bars over the moving blades. Under reduced motion the blades stop.

### How is it used?

```html
<div class="head">
  <div class="blades"><span class="blade b1"></span>...</div>
  <span class="grille"></span>
  <span class="hub"></span>
</div>
```

The `blades` container spins with `fan-spin`, and each blade is a rounded shape rotated to a quarter turn. The static `grille` layers a `repeating-radial-gradient` for rings and a `repeating-conic-gradient` for the guard bars on top of the blades.

### Why is it useful?

Appliance UIs, cooling status, and playful loaders use a fan. This builds a spinning fan with a wire grille using pure CSS gradients and rotation, no images, with a reduced motion fallback.
