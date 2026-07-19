# Perspective User Badge

### What does this do?
Adds a pure-CSS interactive card modeled after premium portfolio layouts that leans on 3D perspective layers to physically tilt and dynamically slide realistic ambient reflections toward the user's mouse position during spatial interaction.

### How is it used?
```html
<div class="perspective-container-sap">
  <div class="quadrant-grid-sap">
    <div class="quadrant-sap q-top-left"></div>
    <div class="quadrant-sap q-top-right"></div>
    <div class="badge-card-sap">
      <div class="shine-overlay-sap"></div>
      <div class="badge-content-sap">...</div>
    </div>
  </div>
</div>
```

### Why is it useful?
It creates high-end tactile dimensionality on user highlights or resume overview lists using native, hardware-accelerated transforms and responsive quadrant tracking patterns completely free of complex JavaScript bounding box calculations.