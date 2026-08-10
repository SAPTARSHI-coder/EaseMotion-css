# Geothermal Energy Sub-Surface Drilling Rig Console (Phase #830)

An isolated, 60fps HTML/CSS UI design showcase for an industrial sci-fi geothermal drilling console.

## What does this do?
This showcase presents a rugged, dark-themed command interface for a geothermal drilling rig. It visualizes sub-surface strata depth, drill vibration and rotation, magma pocket heat glow, and critical system diagnostics using high-performance CSS animations.

## How is it used?
Open `demo.html` in your browser. The custom animations are configured using the EaseMotion standard `ease-` prefix, making them fully compatible with the core framework. Key animation classes include:

```html
<!-- Rig Status Animations -->
<div class="ease-vibrate">Drill Shaft Shake</div>
<div class="ease-spin-fast">3D Drill Bit Rotation</div>
<div class="ease-pulse-heat">Magma Heat Glow</div>

<!-- Interface Entrance -->
<div class="ease-slide-down">Header Frame</div>
<div class="ease-slide-right">Left Panel</div>
<div class="ease-fade-in-up">Alert Logs</div>

<!-- Data Visualizations -->
<div class="ease-descend">Strata Depth Marker</div>
<div class="ease-fill-pressure">Diagnostic Progress Bar</div>
<div class="ease-pulse-glow-magma">Critical Text Glow</div>
```

## Why is it useful?
Industrial and heavy-machinery dashboards require intense, high-frequency visual feedback (like vibrations, fast rotations, and aggressive warning pulses). This showcase introduces several new animation types (`ease-vibrate`, `ease-spin-fast`, `ease-pulse-heat`) that expand EaseMotion's capabilities to handle industrial, sci-fi, and high-tension UI environments gracefully at 60fps.
