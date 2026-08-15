# Infinite 3D Sci-Fi Tunnel Flight

This submission implements a pure CSS, zero-JS endless 3D geometric tunnel flight simulation for GSSOC issue **#13606** (or general animation-first submissions).

## Description

An animation-first, zero-dependency interactive 3D portal/tunnel corridor flight simulation. It uses repeating CSS 3D rings and seamless translation loops to create an endless hallway flight effect, complete with cockpit HUD overlays, speed boost thrusters, and portal shape morphing (Circle, Star, tech Chamber).

## How it works

The component is implemented using HTML and Vanilla CSS:
1. **Geometric Ring Construction**: A series of 12 HTML divs are spaced out incrementally along the Z-axis using 3D translations (`translate3d(0, 0, -80px)`) and slightly rotated (`rotateZ(15deg)`) to create a twisted corridor look.
2. **Infinite Translation Loop**: The parent tunnel container animates forward on the Z-axis and rotates. By translating it forward by exactly the distance between two rings (80px) and rotating it by the twist offset (-15deg), the final frame aligns perfectly with the starting frame, creating a seamless, mathematically infinite flight loop.
3. **Interactive Controls**: Cockpit selectors (using checkbox/radio hacks) trigger styling shifts. Activating "Boost" accelerates the animation loop and glows the neon borders, while selecting portals morphs the rings' `border-radius` (e.g. from `50%` to `50% 0% 50% 0%` for a star pattern).
4. **Accessibility**: Full fallback is provided under `@media (prefers-reduced-motion: reduce)` to display a static, safe depth corridor without rapid motion.

## Usage

Include the tunnel viewport and triggers in your markup:

```html
<!-- Triggers (placed outside viewport to enable sibling styling) -->
<input type="checkbox" id="ease-boost-trigger" style="display: none;">
<input type="radio" name="tunnel-shape" id="ease-shape-circle" checked style="display: none;">
<input type="radio" name="tunnel-shape" id="ease-shape-star" style="display: none;">
<input type="radio" name="tunnel-shape" id="ease-shape-tech" style="display: none;">

<div class="ease-tunnel-viewport">
  <div class="ease-alert-flash"></div>
  <div class="ease-tunnel">
    <div class="ease-tunnel-ring ease-ring-1"></div>
    <div class="ease-tunnel-ring ease-ring-2"></div>
    <!-- ... up to 12 rings ... -->
  </div>
  
  <div class="ease-tunnel-hud">
    <!-- Top status bar -->
    <div class="ease-hud-panel ease-hud-header">
      <div class="ease-hud-status">
        <span class="ease-hud-status-dot"></span>
        <span class="ease-hud-status-text">STATUS: CRUISING</span>
      </div>
    </div>
    
    <!-- Controls dashboard -->
    <div class="ease-hud-panel ease-hud-dashboard ease-hud-interactive">
      <div class="ease-shape-selectors">
        <label for="ease-shape-circle" class="ease-shape-btn">Circle</label>
        <label for="ease-shape-star" class="ease-shape-btn">Star</label>
        <label for="ease-shape-tech" class="ease-shape-btn">Chamber</label>
      </div>
      <div class="ease-boost-switch-container">
        <span class="ease-boost-label">Boost</span>
        <div class="ease-switch">
          <label for="ease-boost-trigger" class="ease-slider"></label>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Features

- **Pure CSS/Zero JS**: Built completely without javascript, meaning no execution lag or dependency loads.
- **Hardware-Accelerated 3D Transforms**: Translating and rotating native elements using the GPU preserves rendering efficiency.
- **Dynamic Portal Morphing**: Transitions borders between distinct geometric structures (Circle, Star, Chamber) on user clicks.
- **A11y Compliant**: Designed with a safe static fallback for users sensitive to fast animations.
