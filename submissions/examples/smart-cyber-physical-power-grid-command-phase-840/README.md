# Smart Cyber-Physical Power Grid Command

## What does this do?
A single-page UI showcase visualizing a smart power grid command dashboard — pulsing grid topology network, load balance meter, and live substation metric cards.

## How is it used?
```html
<header class="grid-header">...</header>

<main class="power-grid">
  <section class="panel network-panel">
    <div class="network-view">
      <span class="node node-1"></span>
      <span class="line-conn conn-1"></span>
    </div>
  </section>
  <section class="panel load-panel">
    <div class="load-meter">
      <div class="load-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and ambient animations (pulsing grid nodes, load meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
