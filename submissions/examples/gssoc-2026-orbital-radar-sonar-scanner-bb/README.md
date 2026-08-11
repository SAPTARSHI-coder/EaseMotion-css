# Orbital Radar Sonar Scanner

A sci-fi orbital sonar scanner UI display featuring a continuous conic gradient sweep arm, pulsing coordinate targets, and crosshair grids.

## 1. What does this do?
This component renders a 360-degree rotating radar HUD screen with concentric range rings, telemetry coordinate overlays, and target blips that pulse using pure CSS keyframes.

## 2. How is it used?
Link `style.css` in your project and embed the radar markup:

```html
<link rel="stylesheet" href="style.css">

<div class="radar-display">
  <div class="sweep-arm"></div>
  <div class="blip blip-1"></div>
</div>
```

## 3. Why is it useful?
It provides gaming dashboards, sci-fi applications, and telemetry data visualization interfaces with a vibrant HUD aesthetic while maintaining zero external JavaScript dependencies.
