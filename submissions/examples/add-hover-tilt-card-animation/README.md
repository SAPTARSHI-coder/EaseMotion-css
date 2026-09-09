# Hover Tilt Card Animation Feature

Submits layout utility architectures and perspective depth layers for modern interactive cards (`.ease-tilt-perspective`, `.ease-tilt-card`, `.ease-tilt-depth`) under issue #15367.

## Functional Mechanics

- **The Problem:** Static micro-layouts, highlight lists, or generic item cards can feel flat during web desktop browsing passes. Adding heavy, script-driven 3D parallax dependencies causes layout shift layout stutters, increases total blocking time (TBT), and degrades mobile scroll fluidity.
- **The Solution:** Pure hardware-accelerated CSS 3D matrix offsets. This configuration pairs parent viewport perspectives (`perspective: 1000px`) with child transform spaces (`transform-style: preserve-3d`). This lets developers construct snappy, volumetric pop-out interactions natively on hover without dropping performance scores.

## Usage Layout Structure
```html
<div class="ease-tilt-perspective">
  <div class="ease-tilt-card">
    <div class="ease-tilt-depth">
      </div>
  </div>
</div>
```

Closes #15367
