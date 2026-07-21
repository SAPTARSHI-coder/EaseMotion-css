# Autonomous Lunar Mining & Processing Rover Command

## What does this do?
A single-page UI showcase visualizing an autonomous lunar mining command center — a rover excavation site with rising dust puffs and ore veins, an ore processing meter, and live fleet metric cards.

## How is it used?
```html
<header class="rover-header">...</header>

<main class="rover-grid">
  <section class="panel dig-panel">
    <div class="dig-view">
      <span class="rover-body"></span>
      <span class="dust-particle d-1"></span>
      <span class="ore-vein vein-1"></span>
    </div>
  </section>
  <section class="panel process-panel">
    <div class="process-meter">
      <div class="process-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (rising dust puffs, ore processing meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
