# Cognitive Brain-Computer Interface Training Studio

## What does this do?
A single-page UI showcase visualizing a brain-computer interface training studio — an animated live-drawing EEG waveform, a focus calibration meter, and live training session metric cards.

## How is it used?
```html
<header class="bci-header">...</header>

<main class="bci-grid">
  <section class="panel eeg-panel">
    <div class="eeg-view">
      <svg class="eeg-wave"><path d="..." /></svg>
    </div>
  </section>
  <section class="panel focus-panel">
    <div class="focus-meter">
      <div class="focus-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (a looping SVG stroke-draw waveform, focus meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
