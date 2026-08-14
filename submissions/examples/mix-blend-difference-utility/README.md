# Mix Blend Difference Utility

Introduces the graphical color blending layer compositing utility token (`.ease-blend-difference`) under issue #15104.

## Functional Mechanics

- **The Problem:** When overlaying typography or custom layout indicator icons across split-background hero blocks, moving canvas blocks, or image slideshow sliders, elements can quickly lose accessibility context. Writing complex logic scripts or setting up duplicative text wrappers to swap light/dark themes increases management bloat.
- **The Solution:** Native matrix inversion blending. The `.ease-blend-difference` utility maps values against base structures using `mix-blend-mode: difference`. When applied over darker elements, white graphics remain white, while automatically morphing to rich dark text values as background thresholds transition to pure white surfaces.

## Usage Layout Structure
```html
<div class="parent-canvas-stack" style="position: relative;">
  <img src="variable-dynamic-asset.jpg" alt="Backdrop" />
  
  <span class="absolute-label ease-blend-difference" style="color: #ffffff;">
    Adaptive Metadata Label
  </span>
</div>
```

Closes #15104
