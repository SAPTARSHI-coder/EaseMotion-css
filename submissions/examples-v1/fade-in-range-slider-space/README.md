# Fade In Range Slider

An ultra-premium, space cockpit-themed `<input type="range">` visualizer featuring smooth entrance animations, glowing state visualizers, and a dual-preset interactive simulator.

## 1. What does this do?
This component overrides the default browser range input track and thumb geometry with custom glowing states and starry thumbs, incorporating a CSS-only fade-in entrance transition when loaded.

## 2. How is it used?

To add a space-themed range input, add this markup block to your layout:
```html
<div class="slider-wrapper slider-fade-in fade-delay-1">
  <div class="slider-label-area">
    <span class="slider-title">WARP ENGINE SPEED</span>
    <span class="slider-value-display">45%</span>
  </div>
  <div class="slider-input-container">
    <!-- Native Range Input -->
    <input type="range" class="space-slider speed-slider" min="0" max="100" value="45" aria-label="Warp Engine Speed">
    
    <!-- Decorative Ticks -->
    <div class="slider-ticks">
      <span class="tick"></span>
      <span class="tick"></span>
      <span class="tick"></span>
      <span class="tick"></span>
      <span class="tick"></span>
    </div>
  </div>
</div>
```

## 3. Why is it useful?
Default browser range sliders are difficult to style consistently across browsers, and standard web dashboards often suffer from plain layouts. 

This component fits EaseMotion's philosophy by:
- **Clean Cross-Browser Architecture:** Targets Webkit/Blink and Mozilla rendering engines separately to ensure pixel-perfect track height, border-radius, and thumb positioning across systems.
- **Fade-in Composability:** Seamlessly fades in range groups sequentially (`fade-delay-1`, `fade-delay-2`, etc.) to create an elegant user cockpit boot sequence.
- **Pure CSS Customizer Bindings:** Binds selection radios to CSS variables to switch the HUD's accent hue (Cyan, Purple, Red) and flight telemetry states (Stealth Mode vs Hyperdrive override alerts) without JavaScript.

## 4. Customization Token API

The cockpit interface can be configured directly inside parent container scopes using CSS Custom Properties:

| Property | Description | Default Preset | Available Presets |
|---|---|---|---|
| `--space-hud-accent` | Accent color of slider thumb, glows, and values | `var(--space-color-cyan)` | Presets: `#color-cyan`, `#color-purple`, `#color-red` |
| `--slider-track-height` | Runway track height thickness | `6px` | Length value |
| `--slider-thumb-size` | Diameter of circular star thumb | `20px` | Length value |

---
*Created as a submission for GSSOC-26  under submissions/examples/fade-in-range-slider-space/*
