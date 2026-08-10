# 3D Origami Unfolding Menu (100% Pure CSS)

## 1. What does this do?

An interactive, 100% pure CSS 3D origami folding interface where hovering over or clicking a primary toggle button triggers a sequential accordion-style paper map unfolding chain reaction across multiple nested 3D panels.

## 2. How is it used?

Wrap nested panel elements inside `.ease-origami-container` and `.ease-origami-fold-chain`:

```html
<div class="ease-origami-container">
  <input type="checkbox" id="origami-toggle" class="ease-origami-checkbox" />

  <label for="origami-toggle" class="ease-origami-toggle">
    <span class="ease-toggle-icon">🗺️</span>
    <span class="ease-toggle-text">Explore Origami Map</span>
    <span class="ease-toggle-indicator">▼</span>
  </label>

  <div class="ease-origami-fold-chain">
    <!-- Panel 1 (Top Hinge) -->
    <div class="ease-fold-panel ease-fold-1">
      <div class="ease-panel-content">
        <h3>Layer 01 - Tactical Overview</h3>
      </div>
      <div class="ease-panel-shade"></div>

      <!-- Panel 2 (Nested at bottom of Panel 1) -->
      <div class="ease-fold-panel ease-fold-2">
        <div class="ease-panel-content">
          <h3>Layer 02 - Navigation Nodes</h3>
        </div>
        <div class="ease-panel-shade"></div>

        <!-- Panel 3 (Nested at bottom of Panel 2) -->
        <div class="ease-fold-panel ease-fold-3">
          <div class="ease-panel-content">
            <h3>Layer 03 - Environmental Analytics</h3>
          </div>
          <div class="ease-panel-shade"></div>

          <!-- Panel 4 (Nested at bottom of Panel 3) -->
          <div class="ease-fold-panel ease-fold-4">
            <div class="ease-panel-content">
              <h3>Layer 04 - System Controls</h3>
            </div>
            <div class="ease-panel-shade"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## 3. Why is it useful?

It demonstrates zero-dependency, advanced 3D spatial UI physics in pure CSS. By combining nested 3D element hierarchies (`transform-style: preserve-3d`), top-hinged rotation origins (`transform-origin: top center`), alternating folded X-axis rotation angles (`rotateX(-90deg)` vs `rotateX(178deg)`), sequential `transition-delay` staggered timing, and dynamic shadow opacity transitions, it achieves a tactile, physically realistic origami map unfolding experience without JavaScript or external libraries—aligning directly with EaseMotion's zero-config, animation-first philosophy.

---

## 4. Complex 3D Math & Architectural Structure

### Spatial Hinge Kinematics

Each child fold panel is nested directly inside the preceding panel and positioned at `top: 100%`. Because the parent panel specifies `transform-style: preserve-3d` and `transform-origin: top center`, any 3D rotation applied to a parent panel automatically translates and rotates the entire downstream child chain through 3D world coordinates.

### Alternating Fold Angles (Paper Z-Fold)

- **Layer 01**: Initial state `rotateX(-90deg)`. Folds back towards the top container.
- **Layer 02**: Initial state `rotateX(178deg)`. Accordions back against Layer 01.
- **Layer 03**: Initial state `rotateX(-178deg)`. Accordions forward relative to Layer 02.
- **Layer 04**: Initial state `rotateX(178deg)`. Accordions back against Layer 03.
- **Unfolded State**: All layers animate to `rotateX(0deg)` simultaneously relative to their hinges, forming a continuous, perfectly flat paper surface.

### Sequential Animation Delays

- **Expand (Top-to-Bottom)**:
  - Layer 1 delay: `0.00s`
  - Layer 2 delay: `0.12s`
  - Layer 3 delay: `0.24s`
  - Layer 4 delay: `0.36s`
- **Collapse (Bottom-to-Top)**:
  - Layer 4 delay: `0.00s`
  - Layer 3 delay: `0.10s`
  - Layer 2 delay: `0.20s`
  - Layer 1 delay: `0.30s`

### Ambient Shading Physics

Each panel contains an `.ease-panel-shade` overlay. At extreme fold angles, shadow opacity peaks at `0.9` to simulate light occlusion in paper creases. As panels unfold to `0deg`, shade opacity smoothly transitions to `0`, revealing clean, bright surface details under full key lighting.
