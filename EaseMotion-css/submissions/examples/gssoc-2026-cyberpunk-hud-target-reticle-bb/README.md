# Cyberpunk HUD Tactical Target Reticle (GSSoC 2026)

## 1. What does this do?
The **Cyberpunk HUD Tactical Target Reticle** component presents a sci-fi tactical targeting reticle featuring animated conic radar sweep overlays (`conic-gradient`), rotating crosshair tick rings, lock-on core pulse scaling (`@keyframes pulseLock`), and telemetry readouts.

## 2. How is it used?
Include the CSS stylesheet in your project:
```html
<link rel="stylesheet" href="style.css">
```
Embed the reticle container markup inside your HUD display or game menu component:
```html
<div class="reticle-container">
  <div class="radar-sweep"></div>
  <div class="crosshair-ring">...</div>
  <div class="lock-on-core"></div>
</div>
```

## 3. Why is it useful?
- **High Visual Impact**: Brings gaming and cyberpunk UI visual flair without heavy Canvas or WebGL dependencies.
- **Hardware-Accelerated CSS Keyframes**: Runs smooth 60 FPS rotation and scaling transitions.
- **Modular HUD Aesthetics**: High contrast neon telemetry panels designed for dark mode futuristic web interfaces.
