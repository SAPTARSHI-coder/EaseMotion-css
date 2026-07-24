# Smart Hydroponic Vertical Forest Skyscraper Studio

## What does this do?
A single-page UI showcase visualizing a vertical forest skyscraper — blooming leaf clusters, drifting mist particles, an irrigation cycle meter, and live environmental metric cards.

## How is it used?
```html
<header class="forest-header">...</header>

<main class="forest-grid">
  <section class="panel canopy-panel">
    <div class="canopy-view">
      <span class="leaf-cluster cluster-1"></span>
      <span class="mist-particle p-1"></span>
    </div>
  </section>
  <section class="panel irrigation-panel">
    <div class="irrigation-meter">
      <div class="irrigation-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (blooming leaf clusters, rising mist particles, irrigation meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
