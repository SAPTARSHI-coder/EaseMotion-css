# Autonomous Cargo Airship Navigation System

## What does this do?
A single-page UI showcase visualizing an autonomous airship navigation dashboard — animated flight-path route, altitude hold meter, and live telemetry cards.

## How is it used?
```html
<header class="nav-header">...</header>

<main class="nav-grid">
  <section class="panel route-panel">
    <div class="route-map">
      <svg class="route-line">...</svg>
      <span class="route-marker marker-start"></span>
    </div>
  </section>
  <section class="panel altitude-panel">
    <div class="altitude-meter">
      <div class="altitude-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance animations (flowing dashed flight path, altitude meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
