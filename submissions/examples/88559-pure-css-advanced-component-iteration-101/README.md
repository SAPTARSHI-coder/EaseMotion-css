# Pure CSS Quantum Cryptography & Key Distribution Deck (Iteration 101)

An interactive, pure CSS quantum key distribution (QKD) telemetry component featuring quantum protocol switching (BB84 Polarization, Entangled EPR Pairs, Decoy-State QKD, Continuous-Variable CV-QKD), single-photon wavepacket detector, 8-node quantum repeater mesh, and zero-JS cipher inspection drawer.

> Part of GSSoC 2026 contributions. Fixes/Resolves Issue [#88559](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88559).

## Features

- **100% Pure CSS State Machine**: Protocol selection tabs (BB84, EPR Pairs, Decoy-State, Continuous-Variable), Bell-state intercept toggle, and cipher ledger modal drawer powered strictly with CSS `:checked` radio and checkbox state logic.
- **Dynamic Single-Photon Wavepacket Visualizer**: Animated rectilinear and diagonal photonic beams (`@keyframes photonDrift`), quantum spin auras (`@keyframes photonSpin`), and polarizing beam splitter (PBS) analyzer cube.
- **Secret Key Sift Efficiency Radial Gauge**: Conic-gradient radial progress visualizer with live key sift percentages, security status badges, and smooth state transitions.
- **8-Node Quantum Repeater Mesh Matrix**: Individual repeater node status cells with live entropy percentages and connection lock indicators.
- **Dark Glassmorphic Quantum Theme**: Obsidian void aesthetic with electric cyan, photonic violet, emerald, and amber accents, backdrop blur filters, and styled metric progress bars.
- **Responsive & Accessible**: Fully adaptable layout across mobile, tablet, and desktop viewports, with `:focus-visible` keyboard accessibility and `prefers-reduced-motion` compliance.

## Usage

```html
<div class="qkd-card">
  <!-- Protocol State Controller -->
  <input type="radio" name="protocol-tab" id="protocol-bb84" class="state-radio" checked>
  <input type="radio" name="protocol-tab" id="protocol-epr" class="state-radio">
  <input type="radio" name="protocol-tab" id="protocol-decoy" class="state-radio">
  <input type="radio" name="protocol-tab" id="protocol-cv" class="state-radio">
  <input type="checkbox" id="cipher-modal-toggle" class="state-checkbox">

  <!-- Navigation Glider Tabs -->
  <nav class="qkd-nav">
    <label for="protocol-bb84" class="qkd-tab tab-bb84">BB84 Polarization</label>
    <label for="protocol-epr" class="qkd-tab tab-epr">Entangled EPR</label>
    <label for="protocol-decoy" class="qkd-tab tab-decoy">Decoy-State</label>
    <label for="protocol-cv" class="qkd-tab tab-cv">Continuous-Var</label>
    <div class="tab-glider"></div>
  </nav>

  <!-- Photonic Telemetry Body -->
  <div class="qkd-body">...</div>
</div>
```

## Structure

```
submissions/examples/88559-pure-css-advanced-component-iteration-101/
├── demo.html
├── style.css
└── README.md
```

## Tech Stack

- HTML5
- CSS3 (Keyframe Animations, Custom Properties, Conic Gradients, Flexbox & Grid, CSS State Selectors)
