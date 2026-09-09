# Pure CSS Media Studio & Audio Visualizer Deck (Iteration 106)

An interactive, pure CSS audio visualizer deck component featuring vinyl spinning physics, soundwave spectrum animations, track playlist switching, and a DSP equalizer drawer.

> Part of GSSoC 2026 contributions. Fixes/Resolves Issue [#88565](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/88565).

## Features
- **100% Pure CSS Motion & Interactivity**: Play/Pause engine state, track playlist switching, and DSP preset modal overlays controlled entirely with CSS `:checked` radio and checkbox state logic.
- **Vinyl Physics & Audio Spectrum**: Rotational `@keyframes vinylSpin` animation with `animation-play-state: paused` control and staggered `@keyframes soundWave` equalizer bars.
- **Glassmorphic Cyberpunk Theme**: Custom dark mode glassmorphism UI with backdrop blur filters, glowing status indicators, and styled fader bars.
- **Fully Responsive & Accessible**: Supports small device screens and keyboard focus styling (`:focus-visible`).

## Usage

```html
<div class="audio-deck">
  <!-- Radio State Controllers -->
  <input type="radio" name="track-select" id="track-1" class="state-radio" checked>
  <input type="checkbox" id="play-state-toggle" class="state-checkbox" checked>

  <!-- Deck Stage -->
  <div class="deck-stage">
    <div class="vinyl-disc"></div>
    <div class="spectrum-visualizer">
      <div class="spectrum-bar bar-s1"></div>
      <div class="spectrum-bar bar-s2"></div>
    </div>
  </div>
</div>
```

## Structure
```
submissions/examples/88565-pure-css-advanced-component-iteration-106/
├── demo.html
├── style.css
└── README.md
```

## Tech Stack
- HTML5
- CSS3 (Keyframe Animations, Custom Properties, Flexbox & Grid, CSS State Selectors)
