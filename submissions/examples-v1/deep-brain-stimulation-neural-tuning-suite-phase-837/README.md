# Deep-Brain Stimulation Neural Tuning Suite

## What does this do?
A single-page UI showcase visualizing a deep-brain stimulation calibration suite — blinking electrode array nodes with expanding signal waves, a stimulation level meter, and live device metric cards.

## How is it used?
```html
<header class="dbs-header">...</header>

<main class="dbs-grid">
  <section class="panel electrode-panel">
    <div class="electrode-view">
      <span class="electrode-node node-1"></span>
      <span class="signal-wave wave-1"></span>
    </div>
  </section>
  <section class="panel stim-panel">
    <div class="stim-meter">
      <div class="stim-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (blinking electrode nodes, expanding signal waves, stimulation meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
