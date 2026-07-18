# Ease Region Selector Map (Contributor Submission: prerna)

An interactive, responsive, and highly-stylized **Global Region Selector Map** component built with pure CSS transitions and SVG path animations. Designed to let users interactively explore and select global regions/data-centers on a map.

## Key Features

- **Stylized SVG Map**: Clean vector continent coordinates structured as interactive paths.
- **Node Ping Indicators**: Pulsing location indicators with multiple radiating ripple waves.
- **Micro-Animations**: Region paths support hover transitions, glow strokes, and active border drawing using SVG dash offset properties.
- **Three Theme Styles**:
  - `ease-region-map--glass` (Default): Sleek dark grid with frosted cards and neon indigo glows.
  - `ease-region-map--cyber`: High-tech green/yellow scanner, HUD borders, scanlines, and terminal logs.
  - `ease-region-map--sunset`: Warm ambient sunset orange/rose gradients.
- **Responsive Layout**: Designed to adapt from compact mobile widgets to full-screen dashboard grids.
- **Accessibility & Accessibility Preferences**: Respects `prefers-reduced-motion` and provides keyboard focus states.

## HTML Structure

Add the base `.ease-region-container` and target themes as shown below:

```html
<div class="ease-region-container ease-region-map--glass">
  <!-- Interactive SVG Map -->
  <div class="ease-region-map-wrapper">
    <svg viewBox="0 0 1000 500" class="ease-region-svg">
      <!-- Grid Backdrops -->
      <g class="map-grid">...</g>
      
      <!-- Region Continent Paths -->
      <path class="region-path" data-region="na" d="..." />
      <path class="region-path" data-region="sa" d="..." />
      <!-- Other continent paths... -->
      
      <!-- Pulse Nodes -->
      <g class="region-node" data-region="na">
        <circle class="node-pulse-ring" cx="180" cy="140" r="10" />
        <circle class="node-pulse-ring-2" cx="180" cy="140" r="15" />
        <circle class="node-center" cx="180" cy="140" r="5" />
      </g>
      <!-- Other region nodes... -->
    </svg>
  </div>

  <!-- Telemetry Details Panel -->
  <div class="ease-region-telemetry">
    <h3 class="telemetry-title">Region Telemetry</h3>
    <div class="telemetry-grid">
      <div class="telemetry-card">
        <span class="card-label">Latency</span>
        <span class="card-value">24ms</span>
      </div>
      <!-- Other telemetry items... -->
    </div>
  </div>
</div>
```

## Class Modifiers

| Class Modifier | Description |
|---|---|
| `.ease-region-map--glass` | (Default) Frosted glass dashboard with deep blue and purple glow effects. |
| `.ease-region-map--cyber` | Tactical matrix HUD theme with neon emerald/yellow colors, digital terminals, and crosshairs. |
| `.ease-region-map--sunset` | Warm ambient design utilizing orange-pink sunrise visual gradients. |
| `.region-path.is-active` | Activates region border drawing, filled gradients, and highlights. |
| `.region-node.is-active` | Triggers visual ping ripple waves radiating from the coordinates. |

## Customization Variables

The component defines custom CSS variables that can be overridden at the root or container level:

```css
:root {
  --region-glow-color: rgba(108, 99, 255, 0.4);
  --region-active-stroke: #8b5cf6;
  --region-node-color: #06b6d4;
  --region-grid-opacity: 0.15;
}
```

## Tech Stack
- **HTML5** (Semantic elements, SVG)
- **CSS3** (Transitions, Keyframe Animations, Grid Layouts, Custom Properties)
- **Vanilla JS** (Used in demo only to toggle classes and simulate server changes)
