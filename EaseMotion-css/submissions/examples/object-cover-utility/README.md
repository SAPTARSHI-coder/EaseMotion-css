# Object Cover Utility

Introduces the media aspect-ratio fills parameter utility token (`.ease-object-cover`) under issue #15108.

## Functional Mechanics

- **The Problem:** When building responsive media grids, user profile thumbnails, or article banner placeholders, loaded imagery rarely matches the explicit structural aspect ratios required by the layout grid. Without a containment rule, raw images squash or warp awkwardly to fit their target boxes, degrading UI quality.
- **The Solution:** Seamless center-cropping. The `.ease-object-cover` utility enforces browser-native scaling logic via `object-fit: cover`. The image scales cleanly to fill the entire layout box, preserving its intrinsic proportions while cleanly clipping overlapping horizontal or vertical margins along a stable center axis.

## Usage Layout Structure
```html
<div class="card-hero-slot" style="width: 100%; height: 240px;">
  <img src="landscape.jpg" class="ease-object-cover" style="width: 100%; height: 100%;" />
</div>
```

Closes #15108
