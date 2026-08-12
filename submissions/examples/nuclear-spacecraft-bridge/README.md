# UI Design: Nuclear Thermal Propulsion Spacecraft Bridge Showcase

## What does this do?
It implements a high-fidelity, responsive single-page Spacecraft Bridge Control Center HUD showcase featuring 3D rotating vector core schematics, animated SVG gauges, vertical liquid fuel tanks, sound wave oscillators, and edge-screen flashing alarms.

## How is it used?
Integrate the control board and deck components into your landing showcase or gaming dashboard:

### 1. 3D Rotating Core Schematic (CSS 3D Transforms)
```html
<div class="scene-viewport">
  <div class="wireframe-cube">
    <!-- Concentric axis rings spinning in 3D perspective -->
    <div class="core-ring core-ring--horiz"></div>
    <div class="core-ring core-ring--vert"></div>
    <div class="core-ring core-ring--diag"></div>
    <div class="core-sphere"></div>
  </div>
</div>
```

### 2. Radial Telemetry Gauges (SVG Path Stroke Offsets)
```html
<div class="gauge-container">
  <svg class="gauge-svg" width="160" height="160" viewBox="0 0 160 160">
    <circle class="gauge-track" cx="80" cy="80" r="70" fill="none" stroke-width="8"></circle>
    <!-- Use stroke-dashoffset transition to animate temperatures -->
    <circle class="gauge-fill" id="tempGaugeFill" cx="80" cy="80" r="70" fill="none" stroke-width="8"></circle>
  </svg>
  <div class="gauge-center-text">
    <span class="gauge-value" id="tempVal">5,400</span>
    <span class="gauge-label">Kelvin</span>
  </div>
</div>
```

### 3. Oscilloscope Waves (Staggered Delay Flex Grid)
```html
<div class="wave-graph">
  <!-- Use custom delay and height ratios to form wave frequencies -->
  <div class="wave-bar" style="--delay: 0.1s; --pulse-max: 12px;"></div>
  <div class="wave-bar" style="--delay: 0.2s; --pulse-max: 20px;"></div>
  <div class="wave-bar" style="--delay: 0.3s; --pulse-max: 28px;"></div>
  ...
</div>
```

## Why is it useful?
futuristic UIs are notoriously difficult to build responsively and often rely on heavy canvas rendering or asset-heavy videos, which slow down interface performance and restrict customization.

This component aligns with EaseMotion CSS's philosophy by using **CSS-first rendering**:
1. **Pure CSS 3D Geometry**: The rotating wireframe reactor schematic uses hardware-accelerated CSS `perspective`, `transform-style: preserve-3d`, and `rotate3d()` loops rather than heavy WebGL libraries.
2. **60 FPS Animation-First Components**: The fuel level slides, bubbling patterns, oscilloscope sound waves, and alarm flashes utilize lightweight animations that run fully on the GPU.
3. **Responsive Deck Layout**: The multi-column HUD grid automatically adapts, shifting from a wide three-column tactical cockpit layout on desktop to single diagnostics columns on mobile devices.
4. **Reduced Motion Compliance**: Provides complete overrides in `@media (prefers-reduced-motion: reduce)` to freeze all 3D rotations, screen alarm flashes, and oscilloscope frequencies, keeping it highly accessible.

## Preview
Open `demo.html` directly in your browser to see the spacecraft interface.
