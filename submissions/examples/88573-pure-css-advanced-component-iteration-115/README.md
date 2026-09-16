# Pure CSS Fitness & Activity Tracker Deck (Iteration 115)

An interactive, pure CSS biometrics activity tracking component featuring metric goal switching (Steps, Heart Rate BPM, Calories), circular radial progress rings, and workout session history drawers.

> Part of GSSoC 2026 contributions. Fixes/Resolves Issue [#88573](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88573).

## Features
- **100% Pure CSS State Machine**: Metric selection tabs (Steps, Heart Rate, Active Calories) and workout log drawer modal powered with CSS `:checked` radio and checkbox state logic.
- **Radial Activity Ring Visualizer**: Circular gradient ring progress with live metric value switching.
- **Glassmorphic Biometrics Theme**: Dark-mode pink & amber design system with custom properties, glassmorphism blur, and styled progress bars.
- **Responsive Layout**: Full screen adaptability across mobile and desktop breakpoints.

## Usage

```html
<div class="fitness-card">
  <!-- Metric State Controller -->
  <input type="radio" name="metric-select" id="metric-steps" class="state-radio" checked>
  <input type="checkbox" id="workout-modal-toggle" class="state-checkbox">

  <!-- Navigation -->
  <nav class="metric-nav">
    <label for="metric-steps">Steps</label>
    <label for="metric-bpm">Heart Rate</label>
  </nav>

  <!-- Fitness Display -->
  <div class="fitness-body">...</div>
</div>
```

## Structure
```
submissions/examples/88573-pure-css-advanced-component-iteration-115/
├── demo.html
├── style.css
└── README.md
```

## Tech Stack
- HTML5
- CSS3 (Keyframe Animations, Custom Properties, Flexbox & Grid, CSS State Selectors)
