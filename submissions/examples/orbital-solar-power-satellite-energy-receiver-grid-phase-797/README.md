# Orbital Solar Power Satellite Energy Receiver Grid

## What does this do?
A single-page UI showcase visualizing an orbital solar power satellite beaming microwave energy to a ground receiver grid — pulsing power beam rays, glowing receiver cells, a transfer efficiency meter, and live output metric cards.

## How is it used?
```html
<header class="solar-header">...</header>

<main class="solar-grid">
  <section class="panel beam-panel">
    <div class="beam-view">
      <span class="sat-node"></span>
      <span class="beam-ray ray-1"></span>
      <span class="receiver-cell cell-1"></span>
    </div>
  </section>
  <section class="panel transfer-panel">
    <div class="transfer-meter">
      <div class="transfer-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (pulsing power beams, glowing receiver cells, transfer meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
