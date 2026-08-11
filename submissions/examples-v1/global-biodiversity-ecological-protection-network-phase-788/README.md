# Global Biodiversity Ecological Protection Network

## What does this do?
A single-page UI showcase visualizing a global biodiversity protection network — expanding habitat zone rings, pulsing species tracking dots, a conservation index meter, and live monitoring metric cards.

## How is it used?
```html
<header class="bio-header">...</header>

<main class="bio-grid">
  <section class="panel habitat-panel">
    <div class="habitat-view">
      <span class="zone-ring ring-1"></span>
      <span class="species-dot dot-1"></span>
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
It demonstrates layered entrance and continuous ambient animations (expanding zone rings, pulsing species dots, conservation meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
