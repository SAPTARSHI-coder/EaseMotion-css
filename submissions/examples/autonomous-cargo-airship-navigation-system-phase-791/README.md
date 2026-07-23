# Autonomous Cargo Airship Navigation System

## What does this do?
A single-page UI showcase visualizing an autonomous cargo airship navigation system — an animated flight path with a moving airship icon, pulsing waypoints, drifting cloud particles, an altitude stability meter, and live cargo telemetry cards.

## How is it used?
```html
<header class="airship-header">...</header>

<main class="airship-grid">
  <section class="panel route-panel">
    <div class="route-view">
      <span class="route-line"></span>
      <span class="airship-icon"></span>
      <span class="waypoint wp-1"></span>
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
It demonstrates layered entrance and continuous ambient animations (airship flight path motion, pulsing waypoints, drifting clouds, altitude meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
