# 3D Tilt Testimonial Card Component

This component provides a premium **3D Tilt Testimonial Card** designed for modern E-Commerce review hubs, featuring layered parallax offsets that lift elements off the card face on hover.

---

### 1. What does this do?

It implements customer review cards where hovering tilts the panel in a three-dimensional perspective, causing nested child layers (avatar, stars, quote body) to float at varying depths.

---

### 2. How is it used?

Configure testimonial cards using the base class `.ease-tilt-card` within a perspective viewport container:

```html
<div class="ease-perspective-viewport">
  <div class="ease-tilt-card">
    <!-- Parallax Depth Watermark -->
    <div class="card-quote-mark">
      <svg>...</svg>
    </div>

    <div class="card-avatar-row">
      <!-- Parallax Depth Avatar -->
      <div class="card-avatar">JV</div>
      <!-- Parallax Depth Stars -->
      <div class="card-stars-track">
        <svg>...</svg>
      </div>
    </div>

    <!-- Parallax Depth Quote Body -->
    <div class="card-body-text">
      <p>"Fabulous product transitions!"</p>
    </div>
  </div>
</div>
```

---

### 3. Why is it useful?

It fits EaseMotion CSS's core philosophy of **declarative layouts and interactive micro-animations** by replacing heavy mouse-move parallax JavaScript scripts with lightweight, GPU-accelerated CSS `translateZ` and `preserve-3d` operations.

It helps developers capture customer attention directly on social proof blocks, boosting e-commerce conversion rates. It incorporates keyboard outlines and respects `prefers-reduced-motion` settings.

---

### Technical Breakdown

#### Parallax Depth Values

Configure separate Z-axis translation bounds dynamically:

- **Avatar**: `transform: translateZ(26px)`
- **Stars**: `transform: translateZ(20px)`
- **Text**: `transform: translateZ(16px)`
- **Watermark**: `transform: translateZ(12px)`
- **Base Card Face**: `transform: translateZ(0)`
