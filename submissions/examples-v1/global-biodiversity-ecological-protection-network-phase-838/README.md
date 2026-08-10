# Global Biodiversity Ecological Protection Network

## What does this do?
A single-page UI showcase visualizing a global biodiversity conservation dashboard — pulsing protected-zone network, biodiversity index meter, and live species/habitat metric cards.

## How is it used?
```html
<header class="bio-header">...</header>

<main class="bio-grid">
  <section class="panel network-panel">
    <div class="network-view">
      <span class="zone-node node-1"></span>
    </div>
  </section>
  <section class="panel index-panel">
    <div class="index-meter">
      <div class="index-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and ambient animations (pulsing conservation zones, index meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
