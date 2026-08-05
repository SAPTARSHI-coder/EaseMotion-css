# CSS Fade-In Carousel Component

### What does this do?
Adds a pure-CSS, hardware-accelerated carousel slider built explicitly for modern creative showcase layouts that fades and subtly rescales image content viewports dynamically during slide navigation updates.

### How is it used?
```html
<div class="carousel-container-sap">
  <input type="radio" name="carousel-group" id="slide-1" class="carousel-state-sap" checked>
  <input type="radio" name="carousel-group" id="slide-2" class="carousel-state-sap">

  <div class="carousel-viewport-sap">
    <div class="carousel-slide-sap item-1-sap">...</div>
    <div class="carousel-slide-sap item-2-sap">...</div>
  </div>

  <div class="carousel-nav-sap">
    <label for="slide-1" class="nav-dot-sap"></label>
    <label for="slide-2" class="nav-dot-sap"></label>
  </div>
</div>
```

### Why is it useful?
It allows portfolio grids or marketing sections to deploy complex layered slider animations seamlessly without introducing heavy JS intervals, runtime calculation bounds, or external script packages. Configuration handles are exposed at the top via standard CSS variables.