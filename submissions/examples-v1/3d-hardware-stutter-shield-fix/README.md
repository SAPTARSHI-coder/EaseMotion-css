# 3D Transform Hardware-Acceleration Performance Patch

## What does this do?

Implements a hardware-acceleration performance shield for complex 3D scale transforms to resolve layout stuttering and pixel shaking.

## How is it used?

```html
<div class="ease-3d-shield">Animated 3D content here</div>
```

## Why is it useful?

Forces browser engines to promote rendering blocks onto dedicated GPU compositor layers, reducing CPU recalculation and frame drops during complex 3D animations. Fixes #29248.

## Contribution Notes

- Fixes: #29248
- Addresses pixel shaking on lower-end hardware.
