# CSS Neumorphic Effect: 3D Perspective Tilt Variation

Pure CSS neumorphic UI featuring 3D perspective spatial tilt rotation, haptic shadow displacement, and multi-depth parallax layers.

## 1. What does this do?
Rotates a neumorphic card in 3D space (`perspective: 1000px`) with multi-angle tilt options (Top-Left, Top-Right, Center, Bottom-Left, Bottom-Right), dynamic shadow light offset shifts, and `translateZ()` internal element parallax without JavaScript.

## 2. How is it used?
Include `style.css` and use radio input triggers paired with 3D perspective card markup:

```html
<input type="radio" name="tilt-angle" id="tilt-nw" class="tilt-radio" checked>

<div class="perspective-stage">
  <div class="neumorphic-3d-card">
    <div class="card-glass-body">
      <div class="card-content-layer">PARALLAX CONTENT</div>
    </div>
  </div>
</div>

<label for="tilt-nw" class="neumorphic-btn">Top-Left</label>
```

## 3. Why is it useful?
Provides an immersive spatial depth effect for modern landing page cards, product showcases, and interactive portfolio items with full dark mode theme integration and reduced motion accessibility.
