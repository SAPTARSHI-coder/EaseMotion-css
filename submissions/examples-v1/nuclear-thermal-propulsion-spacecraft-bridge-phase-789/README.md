# Nuclear Thermal Propulsion Spacecraft Bridge

## What does this do?
A single-page UI showcase visualizing a nuclear thermal propulsion spacecraft bridge — a throbbing reactor core with spinning containment rings and exhaust puffs, a thrust output meter, and live propulsion metric cards.

## How is it used?
```html
<header class="ntp-header">...</header>

<main class="ntp-grid">
  <section class="panel core-panel">
    <div class="core-view">
      <span class="core-glow"></span>
      <span class="core-ring ring-1"></span>
      <span class="exhaust-trail trail-1"></span>
    </div>
  </section>
  <section class="panel thrust-panel">
    <div class="thrust-meter">
      <div class="thrust-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (throbbing reactor core, counter-rotating containment rings, exhaust puffs, thrust meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
