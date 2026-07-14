# Volcanic Activity & Seismic Early Warning Grid

## What does this do?
A single-page UI showcase visualizing a real-time seismic and volcanic monitoring dashboard — pulsing activity map, alert-level meter, and live sensor metric cards.

## How is it used?
```html
<header class="grid-header">...</header>

<main class="warning-grid">
  <section class="panel map-panel">
    <div class="seismic-map">
      <span class="pulse-dot dot-1"></span>
    </div>
  </section>
  <section class="panel alert-panel">
    <div class="alert-meter">
      <div class="alert-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered, purposeful entrance animations (pulsing radar dots, animated alert meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
