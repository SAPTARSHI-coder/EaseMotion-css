# Deep-Brain Stimulation Neural Tuning Suite

## What does this do?
A single-page UI showcase visualizing a deep-brain stimulation neural tuning interface — expanding signal rings, pulsing electrode markers, a stimulation frequency meter, and live device metric cards.

## How is it used?
```html
<header class="dbs-header">...</header>

<main class="dbs-grid">
  <section class="panel signal-panel">
    <div class="signal-view">
      <span class="signal-ring ring-1"></span>
      <span class="electrode-dot dot-1"></span>
    </div>
  </section>
  <section class="panel freq-panel">
    <div class="freq-meter">
      <div class="freq-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (expanding signal rings, pulsing electrode dots, frequency meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.

**Note:** purely a decorative UI showcase — no real EEG/DBS data, signal processing, or clinical functionality.
