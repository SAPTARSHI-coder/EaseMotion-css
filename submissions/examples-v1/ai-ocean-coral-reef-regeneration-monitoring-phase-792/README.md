# AI Ocean Coral Reef Regeneration Monitoring

## What does this do?
A single-page UI showcase visualizing AI-driven coral reef regeneration monitoring — growing coral branches, rising bubbles, a reef health index meter, and live biodiversity metric cards.

## How is it used?
```html
<header class="reef-header">...</header>

<main class="reef-grid">
  <section class="panel coral-panel">
    <div class="coral-view">
      <span class="coral-branch branch-1"></span>
      <span class="bubble b-1"></span>
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
It demonstrates layered entrance and continuous ambient animations (growing coral branches, rising bubbles, health meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
