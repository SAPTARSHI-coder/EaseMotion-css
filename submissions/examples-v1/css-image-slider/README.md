# Pure CSS Image Comparison Slider Component

An encapsulated comparison module running zero-JS split calculations by combining native input range bounds directly with CSS Custom Property inline variables and `clip-path` masking definitions.

## Functional Controls

- **Dynamic Polygon Clipping:** The foreground container (`.ease-img-after`) re-calculates masking coordinates smoothly using a single custom property variable injection (`clip-path: polygon(...)`).
- **Layer Interception Sliders:** Overlaying a completely invisible, transparentized input tracking element at high z-index depth bounds to cleanly catch horizontal sliding inputs across mobile viewports.
- **Anti-Reflow Layout Injections:** Maintaining clean strict aspect ratios using modern explicit property parameters (`aspect-ratio: 16 / 9`) to eliminate element scaling jumps.

## Usage Layout Structure

```html
<div class="ease-slider-container" style="--slider-pos: 50%;">
  <img class="ease-slider-img ease-img-before" />
  <img class="ease-slider-img ease-img-after" />
  <div class="ease-slider-divider"></div>
  <input type="range" class="ease-slider-input" ... />
</div>
```

Closes #12658
