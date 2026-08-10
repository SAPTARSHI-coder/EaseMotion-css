# Fluid Audio Equalizer Visualizer

A hardware-accelerated fluid audio frequency visualizer card featuring neon glow reflections and asynchronous bar keyframe waveforms.

## 1. What does this do?
This component renders an animated audio player widget with 10 frequency bars that pulsate dynamically using pure CSS keyframes, subtle drop-shadows, and glassmorphic card boundaries.

## 2. How is it used?
Link `style.css` in your webpage and construct the equalizer HTML structure:

```html
<link rel="stylesheet" href="style.css">

<div class="eq-card">
  <div class="equalizer-bars">
    <div class="bar bar-1"></div>
    <div class="bar bar-2"></div>
  </div>
</div>
```

## 3. Why is it useful?
It offers music streaming platforms, Web3 audio dApps, and media dashboards an energetic, responsive audio spectrum visualizer without requiring canvas context or Web Audio API overhead.
