# Orbit Accordion Component

This component provides a premium **Orbit Accordion** designed for modern Finance Dashboards, presenting visual percentage distributions using animated planet-style nodes orbiting around a central core stat.

---

### 1. What does this do?

It creates an accordion panel where expanding a portfolio category slides open a pure CSS concentric orbital chart containing small data nodes revolving around a central percentage core.

---

### 2. How is it used?

Integrate orbit tracks inside the accordion's grid contents by defining tracks (`.track-inner`, `.track-outer`) and node positions (`.node-top`, `.node-bottom`):

```html
<!-- The Orbit Accordion Card structure -->
<div class="ease-accordion-orbit-card">
  <label for="segment-1" class="ease-accordion-orbit-header">
    <span>Investment Portfolio Allocations</span>
  </label>

  <div class="ease-accordion-orbit-content">
    <div class="ease-accordion-orbit-inner">
      <div class="ease-accordion-orbit-text">Details</div>

      <!-- Visual Orbit Chart -->
      <div class="ease-orbit-viewport">
        <div class="ease-orbit-center">100%</div>

        <!-- Concentric Inner Orbit Ring Track -->
        <div class="ease-orbit-track track-inner">
          <div class="ease-orbit-node node-top">55%</div>
          <div class="ease-orbit-node node-bottom">25%</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### 3. Why is it useful?

It fits EaseMotion CSS's core philosophy of **motion-enhanced data storytelling** by providing dynamic portfolio summaries using declarative CSS animations.

It uses a counter-rotation method (spinning tracks clockwise while spinning node labels counter-clockwise at matching speeds) to ensure that despite orbit loops, labels remain upright, legible, and accessible. It is fully responsive, utilizes CSS grid auto-height scaling, and supports `prefers-reduced-motion` settings.

---

### Technical Breakdown

#### Core Orbit Variables

Configure speed and ring counts dynamically:

- **Speeds**: `--orbit-speed: 24s` (Slow), `12s` (Normal), `4.5s` (Fast), `0s` (Static).
- **Orbits**: Dual concentric tracks (`.track-inner` width `130px`, `.track-outer` width `190px`).
- **Positions**: Predefined coordinate positions `.node-top`, `.node-bottom`, `.node-left`, `.node-right`.
