# Pure CSS Planetary Rover Telemetry & Mission Deck (Iteration 104)

An interactive, pure CSS autonomous planetary rover telemetry component featuring subsystem instrument switching (Terrain LiDAR, Power Grid, Spectrometer, DSN Uplink), animated rotating radar sweep visualizer, 6-wheel independent suspension chassis matrix, and zero-JS sample core calibration drawer.

> Part of GSSoC 2026 contributions. Fixes/Resolves Issue [#88561](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88561).

## Features

- **100% Pure CSS State Machine**: Subsystem instrument tabs (LiDAR Nav, RTG Power, Spectrometer, DSN Uplink), autonomous pathfinding toggle, and sample core modal drawer powered strictly with CSS `:checked` radio and checkbox state logic.
- **Dynamic Planetary LiDAR Radar Visualizer**: Conic rotating laser sweep beam (`@keyframes radarBeamRotate`) and pulsating waypoint blips (`@keyframes blipGlow`, `@keyframes posRingPulse`) displaying autonomous hazard detection on Jezero crater terrain.
- **Nuclear RTG Reserve Radial Gauge**: Conic-gradient radial progress visualizer with live power telemetry percentages, subsystem status indicators, and smooth state transitions.
- **6-Wheel Rocker-Bogie Chassis Matrix**: Individual drive motor status nodes with real-time torque readouts (Nm) and contact lock indicators.
- **Dark Glassmorphic Martian Theme**: Obsidian deep space aesthetic with vibrant Mars amber, cyan, emerald, and gold accents, backdrop blur filters, and styled telemetry metric bars.
- **Responsive & Accessible**: Fully adaptable layout across mobile, tablet, and desktop viewports, with `:focus-visible` keyboard accessibility and `prefers-reduced-motion` compliance.

## Usage

```html
<div class="rover-card">
  <!-- Subsystem State Controller -->
  <input type="radio" name="subsystem-tab" id="subsystem-nav" class="state-radio" checked>
  <input type="radio" name="subsystem-tab" id="subsystem-power" class="state-radio">
  <input type="radio" name="subsystem-tab" id="subsystem-spectral" class="state-radio">
  <input type="radio" name="subsystem-tab" id="subsystem-comm" class="state-radio">
  <input type="checkbox" id="mission-modal-toggle" class="state-checkbox">

  <!-- Navigation Glider Tabs -->
  <nav class="subsystem-nav">
    <label for="subsystem-nav" class="subsystem-tab tab-nav">Terrain LiDAR</label>
    <label for="subsystem-power" class="subsystem-tab tab-power">Power Grid</label>
    <label for="subsystem-spectral" class="subsystem-tab tab-spectral">Spectrometer</label>
    <label for="subsystem-comm" class="subsystem-tab tab-comm">DSN Comm</label>
    <div class="tab-glider"></div>
  </nav>

  <!-- Telemetry Display Body -->
  <div class="rover-body">...</div>
</div>
```

## Structure

```
submissions/examples/88561-pure-css-advanced-component-iteration-104/
├── demo.html
├── style.css
└── README.md
```

## Tech Stack

- HTML5
- CSS3 (Keyframe Animations, Custom Properties, Conic Gradients, Flexbox & Grid, CSS State Selectors)
