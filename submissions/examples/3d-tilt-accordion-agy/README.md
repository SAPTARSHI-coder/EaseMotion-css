# 3D Tilt Accordion Component

This component provides a premium **3D Tilt Accordion** designed for modern Startup layouts and dashboards, featuring layered depth perspective transformations and smooth height/opacity transitions.

---

### 1. What does this do?

It implements a pure CSS accordion component where each card panel is tilted in a three-dimensional perspective, dynamically straightening and sliding open its internal content when selected while lifting forward in 3D space.

---

### 2. How is it used?

Configure accordion panels using checkboxes (for multi-select) or radios (for single-select) as toggles, wrapping each panel with the `.ease-accordion-3d-card` container class:

```html
<!-- Multi-select Accordion Group -->
<div class="ease-accordion-3d-wrapper">
  <div>
    <!-- The native controller -->
    <input type="checkbox" id="panel-1" class="state-input accordion-toggle" />

    <!-- The 3D card structure -->
    <div class="ease-accordion-3d-card">
      <label for="panel-1" class="ease-accordion-3d-header">
        <span>What is the 3D Perspective layout?</span>
        <div class="ease-accordion-3d-icon">
          <svg>...</svg>
        </div>
      </label>

      <!-- The dynamic grid height animate box -->
      <div class="ease-accordion-3d-content">
        <div class="ease-accordion-3d-inner">
          It is an advanced CSS layout utilizing transform-style: preserve-3d to
          position items along the Z-axis.
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### 3. Why is it useful?

It fits EaseMotion CSS's core philosophy of **declarative layout and motion enhancement** by replacing complex JavaScript 3D canvas libraries and animation libraries with simple, performant CSS transform matrices.

It utilizes modern CSS grid fractions (`grid-template-rows: 0fr` to `1fr`) to transition height from auto to collapsed state, achieving smooth heights without restricting developer choices, all while supporting `prefers-reduced-motion` settings.

---

### Technical Breakdown

#### 3D Transform Equations

The cards are stacked using CSS variables representing initial tilt angles:

- Closed rotation matrix: `rotateX(14deg) rotateY(-10deg) translateZ(0px)`
- Open active matrix: `rotateX(0deg) rotateY(0deg) translateZ(32px)`

These coordinates can be dynamically configured via the playground dials (e.g. `--tilt-rx: 6deg` for subtle tilt) to control the depth of cards.
