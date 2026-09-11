# Pure CSS Smart Home IoT Command Center (Iteration 114)

An interactive, pure CSS IoT smart home automation deck featuring room profile switching, climate thermostat dial visualizers, light intensity faders, and HVAC preset drawers.

> Part of GSSoC 2026 contributions. Fixes/Resolves Issue [#88570](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88570).

## Features
- **100% Pure CSS State Machine**: Room selection tabs (Living Room, Studio, Security Grid), master power toggle, and climate preset drawer powered with CSS `:checked` radio and checkbox state logic.
- **Thermostat Dial Visualizer**: Circular gradient climate dial visualizer with live mode indicators.
- **Glassmorphic IoT Aesthetic**: Dark-mode cyan & blue design system with custom properties, glassmorphism blur, and styled device faders.
- **Responsive Layout**: Full screen adaptability across mobile and desktop breakpoints.

## Usage

```html
<div class="iot-card">
  <!-- Room State Controller -->
  <input type="radio" name="room-select" id="room-living" class="state-radio" checked>
  <input type="checkbox" id="power-master-toggle" class="state-checkbox" checked>

  <!-- Navigation -->
  <nav class="room-nav">
    <label for="room-living">Living Room</label>
    <label for="room-studio">Studio Desk</label>
  </nav>

  <!-- IoT Display -->
  <div class="iot-body">...</div>
</div>
```

## Structure
```
submissions/examples/88570-pure-css-advanced-component-iteration-114/
├── demo.html
├── style.css
└── README.md
```

## Tech Stack
- HTML5
- CSS3 (Keyframe Animations, Custom Properties, Flexbox & Grid, CSS State Selectors)
