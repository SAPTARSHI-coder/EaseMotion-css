# 3D Card Tilt with Sheen

A zero-JavaScript 3D interactive card tilt component built for the **EaseMotion CSS** library ecosystem. Designed for tech showcases, feature highlight grids, and high-impact product landing pages.

## What does this do?
Provides a high-performance 3D perspective card (`perspective: 1000px`) that dynamically tilts in multi-directional 3D space (`rotateX`, `rotateY`, `translateZ`) while sweeping a glossy metallic sheen overlay across the surface in response to mouse movement.

## How is it used?
Wrap the `.tilt-card-body` inside a `.tilt-container` stage containing 3x3 `.tilt-trigger` quadrant elements:

```html
<div class="tilt-stage">
  <div class="tilt-container">
    <div class="tilt-trigger quad-top-left"></div>
    <!-- Additional quadrant triggers... -->
    
    <div class="tilt-card-body">
      <div class="card-sheen-layer"></div>
      <div class="card-content">
        <!-- Content elements elevated on Z-axis -->
      </div>
    </div>
  </div>
</div>