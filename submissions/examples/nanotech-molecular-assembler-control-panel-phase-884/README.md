# Nanotech Molecular Assembler Control Panel

## What does this do?
A single-page UI showcase visualizing a nanotech molecular assembler dashboard — pulsing atomic lattice, assembly progress meter, and live synthesis metric cards.

## How is it used?
```html
<header class="assembler-header">...</header>

<main class="assembler-grid">
  <section class="panel lattice-panel">
    <div class="lattice-view">
      <span class="atom atom-1"></span>
      <span class="bond bond-1"></span>
    </div>
  </section>
  <section class="panel sync-panel">
    <div class="sync-meter">
      <div class="sync-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and ambient animations (pulsing atoms, assembly meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
