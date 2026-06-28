# Interactive Parallax Starfield & Warp Speed Hyperdrive

This submission implements a pure CSS, zero-JS 3D space travel and warp speed hyperdrive simulation for GSSOC issue **#13606** (or general animation-first submissions).

## Description

An animation-first, zero-dependency interactive starfield and hyperdrive warp speed simulation. It creates a deep space cockpit view and HUD overlay where clicking the warp toggle accelerates space flight into stretched light trails radially expanding from the center.

## How it works

The component is implemented using HTML and Vanilla CSS:
1. **Starfield Layout**: Individual star elements are positioned absolutely at the center. They are assigned custom CSS variables via inline styles: `--angle` (direction of expansion), `--delay` (animation staggering), `--dist` (max travel distance), and `--star-size`.
2. **Space Motion**: Stars translate outward along their rotated paths using a linear keyframe animation (`ease-kf-star-travel`).
3. **Hyperdrive Warp Acceleration**: Triggered via a hidden checkbox at the top level and associated label in the cockpit cockpit. Checking the box switches the animation to `ease-kf-star-warp`, which accelerates the flight and stretches the stars along their motion vectors using `scaleY(20)` and `scaleX(0.5)`.
4. **Interactive HUD**: The status indicator, velocity progress bar, and cockpit warning flashes are all driven natively by sibling checkbox selectors (`#ease-warp-trigger:checked ~ ...`).
5. **Accessibility**: Full fallback is provided under `@media (prefers-reduced-motion: reduce)` to display a static, low-intensity space flight state.

## Usage

Include the space container and trigger checkbox in your markup:

```html
<input type="checkbox" id="ease-warp-trigger" style="display: none;">

<div class="ease-space-container">
  <div class="ease-warning-flash"></div>
  <div class="ease-nebula"></div>
  <div class="ease-starfield">
    <div class="ease-star" style="--angle: 12deg; --delay: 0.5s; --dist: 300px; --star-size: 2px;"></div>
    <!-- Add more stars with randomized angles/delays -->
  </div>
  
  <div class="ease-cockpit-overlay">
    <!-- Header panel with status dot -->
    <div class="ease-panel ease-header-panel">
      <div class="ease-status-indicator">
        <span class="ease-status-dot"></span>
        <span class="ease-status-text">STATUS: CRUISING</span>
      </div>
    </div>
    
    <!-- Controls panel with warp toggle -->
    <div class="ease-panel ease-dashboard-panel ease-cockpit-interactive">
      <div class="ease-warp-switch-container">
        <span class="ease-warp-label">Warp Drive</span>
        <div class="ease-switch">
          <label for="ease-warp-trigger" class="ease-slider"></label>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Features

- **Pure CSS/Zero JS**: Built completely without javascript, meaning no execution lag or dependency loads.
- **Radial Motion Stretching**: Avoids bulky DOM element updates by natively scaling and translating vector lines along their motion angle.
- **Immersive HUD Panel**: Futuristic glassmorphism borders, glowing system text, alert highlights, and responsive speed gauges.
- **A11y Compliant**: Designed with a safe static space flight fallback for users sensitive to fast animations.
