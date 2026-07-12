# AI Ocean Coral Reef Regeneration Monitoring

## What does this do?
A single-page UI showcase visualizing an AI-powered coral reef monitoring dashboard — pulsing coral activity map, reef health meter, and live biodiversity metric cards.

## How is it used?
```html
<header class="reef-header">...</header>

<main class="reef-grid">
  <section class="panel reef-panel">
    <div class="reef-map">
      <span class="coral-node node-1"></span>
    </div>
  </section>
  <section class="panel health-panel">
    <div class="health-meter">
      <div class="health-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and ambient animations (pulsing coral nodes, health meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
