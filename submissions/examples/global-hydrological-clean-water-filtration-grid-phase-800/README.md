# Global Hydrological Clean Water Filtration Grid

## What does this do?
A single-page UI showcase visualizing a global water filtration monitoring grid — falling droplets passing through tiered filtration stages, a water purity meter, and live station metric cards.

## How is it used?
```html
<header class="water-header">...</header>

<main class="water-grid">
  <section class="panel filter-panel">
    <div class="filter-view">
      <span class="flow-drop drop-1"></span>
      <span class="filter-stage stage-1"></span>
    </div>
  </section>
  <section class="panel purity-panel">
    <div class="purity-meter">
      <div class="purity-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (falling water droplets through filtration stages, purity meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
