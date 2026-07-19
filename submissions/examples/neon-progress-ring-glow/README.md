# Neon Progress Ring Component

An ultra-premium, CSS-only circular and semi-circular dashboard indicator system featuring breathing glows, dynamic numeric animations, and customizable neon spectral emissions.

## 1. What does this do?
This component provides a series of self-contained, responsive neon progress indicators (circular rings, nested concentric progress displays, and semi-circular gauges) that leverage CSS Houdini custom properties to transition values smoothly without JavaScript.

## 2. How is it used?

### Single Standard Circular Ring
To render a standard neon ring (default Cyan, 75% progress):
```html
<div class="neon-ring-container color-cyan" style="--target: 75; --percentage: 75;">
  <div class="neon-ring" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
    <div class="neon-ring-track"></div>
    <div class="neon-ring-bar"></div>
    <div class="neon-ring-glow-effect"></div>
    <div class="ring-center">
      <span class="percentage-value">75%</span>
      <span class="percentage-label">CPU LOAD</span>
    </div>
  </div>
</div>
```

### Semicircle Gauge Visualizer
To render a 180-degree gauge (71% speed):
```html
<div class="neon-gauge-container color-yellow" style="--target: 71; --percentage: 71;">
  <div class="neon-gauge" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100">
    <div class="neon-gauge-track"></div>
    <div class="neon-gauge-bar"></div>
    <div class="neon-gauge-glow-effect"></div>
    <div class="gauge-center">
      <span class="gauge-value">710</span>
      <span class="gauge-unit">MB/s</span>
      <span class="gauge-label">DOWNLOAD SPEED</span>
    </div>
  </div>
</div>
```

### Concentric Multi-layered Group
To nest concentric tracks inside one group:
```html
<div class="concentric-ring-group">
  <!-- Outer Layer -->
  <div class="neon-ring-container size-lg color-cyan" style="--target: 85; --percentage: 85;">
    <div class="neon-ring concentric-outer">
      <div class="neon-ring-track"></div>
      <div class="neon-ring-bar"></div>
      <div class="neon-ring-glow-effect"></div>
    </div>
  </div>
  <!-- Middle Layer -->
  <div class="neon-ring-container size-md color-magenta" style="--target: 62; --percentage: 62;">
    <div class="neon-ring concentric-middle">
      <div class="neon-ring-track"></div>
      <div class="neon-ring-bar"></div>
      <div class="neon-ring-glow-effect"></div>
    </div>
  </div>
</div>
```

## 3. Why is it useful?
In premium web design and dashboard aesthetics, circular progress visualizers are standard requirements. 

This component fits EaseMotion's philosophy in three ways:
- **Zero-Dependency Engine:** Operates entirely in CSS, bypassing the need for heavy JS libraries (like D3 or Chart.js) or inline SVG math manipulation.
- **Houdini Optimization:** Registers custom properties to permit native browser hardware-accelerated transitions of integers and layout computations.
- **Responsive and Accessible Design:** Includes custom media query support to automatically snap animations and diminish glows for users prioritizing `prefers-reduced-motion: reduce`, alongside standard ARIA progress bar semantics.

## 4. Customization Token API

You can override custom property tokens directly in inline styles or scoped stylesheet selectors:

| Property | Description | Default Value | Available Preset Themes |
|---|---|---|---|
| `--target` | Target integer value of progress (0-100) | `0` | Any integer `0-100` |
| `--percentage` | Holds current transitioning progress value | `0` | Registered integer property |
| `--ring-thickness` | Track boundary width | `12px` | Length unit |
| `--glow-radius` | Glow dispersion amount | `12px` | Length unit |
| `--neon-color` | Solid base color of glow & stroke | `var(--ease-color-cyan)` | Presets: `.color-cyan`, `.color-magenta`, `.color-green`, `.color-yellow` |

---
*Created as a submission for GSSoC-26  under submissions/examples/neon-progress-ring-glow/*
