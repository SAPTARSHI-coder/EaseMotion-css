# Volcanic Activity & Seismic Early Warning Grid

## What does this do?
A single-page UI showcase visualizing a volcanic/seismic early warning grid — expanding tremor wave rings, pulsing sensor markers, a magma pressure meter, and live monitoring metric cards.

## How is it used?
```html
<header class="seismic-header">...</header>

<main class="seismic-grid">
  <section class="panel network-panel">
    <div class="network-view">
      <span class="tremor-wave wave-1"></span>
      <span class="sensor-dot dot-1"></span>
    </div>
  </section>
  <section class="panel pressure-panel">
    <div class="pressure-meter">
      <div class="pressure-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (expanding tremor waves, pulsing sensor dots, pressure meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.

**Note:** purely a decorative UI showcase — no real seismic data feed or geophysical functionality.
