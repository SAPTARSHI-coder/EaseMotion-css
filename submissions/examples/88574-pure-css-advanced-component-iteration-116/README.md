# Pure CSS Neural BCI Brainwave & Cognitive State Deck (Iteration 116)

An interactive, pure CSS brain-computer interface (BCI) telemetry component featuring EEG brainwave frequency band switching (Alpha, Beta, Theta, Gamma), multi-channel electrode sensor matrix, dynamic cognitive workload radial meter, and zero-JS calibration drawer.

> Part of GSSoC 2026 contributions. Fixes/Resolves Issue [#88574](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88574).

## Features

- **100% Pure CSS State Machine**: Spectrum selection tabs (Alpha, Beta, Theta, Gamma), 60Hz notch filter toggle, and electrode calibration drawer modal powered strictly with CSS `:checked` radio and checkbox state logic.
- **Dynamic Waveform Visualizer**: Keyframe-animated multi-frequency brainwave oscillations (`@keyframes waveMotion`, `@keyframes sweepScan`) simulating real-time EEG channel telemetry with variable speed and color transitions across bands.
- **Cognitive Workload Radial Gauge**: Conic-gradient radial progress visualizer with live workload scores, mental state badges, and smooth state transitions.
- **8-Channel 10-20 Montage Matrix**: Interactive scalp electrode indicators displaying real-time channel status and contact impedance diagnostics.
- **Glassmorphic Neuro-Tech Aesthetic**: Dark-mode obsidian theme with electric cyan, amber, purple, and magenta accents, backdrop blur filters, and styled metric progress bars.
- **Responsive & Accessible**: Fully adaptable layout across mobile, tablet, and desktop viewports, with `:focus-visible` keyboard accessibility and `prefers-reduced-motion` compliance.

## Usage

```html
<div class="bci-card">
  <!-- Frequency Band State Controller -->
  <input type="radio" name="bci-band" id="band-alpha" class="state-radio" checked>
  <input type="radio" name="bci-band" id="band-beta" class="state-radio">
  <input type="radio" name="bci-band" id="band-theta" class="state-radio">
  <input type="radio" name="bci-band" id="band-gamma" class="state-radio">
  <input type="checkbox" id="bci-modal-toggle" class="state-checkbox">

  <!-- Navigation Glider Tabs -->
  <nav class="bci-nav">
    <label for="band-alpha" class="bci-tab tab-alpha">Alpha (8–12 Hz)</label>
    <label for="band-beta" class="bci-tab tab-beta">Beta (13–30 Hz)</label>
    <label for="band-theta" class="bci-tab tab-theta">Theta (4–7 Hz)</label>
    <label for="band-gamma" class="bci-tab tab-gamma">Gamma (31–100 Hz)</label>
    <div class="tab-glider"></div>
  </nav>

  <!-- Telemetry Display Body -->
  <div class="bci-body">...</div>
</div>
```

## Structure

```
submissions/examples/88574-pure-css-advanced-component-iteration-116/
├── demo.html
├── style.css
└── README.md
```

## Tech Stack

- HTML5
- CSS3 (Keyframe Animations, Custom Properties, Conic Gradients, Flexbox & Grid, CSS State Selectors)
