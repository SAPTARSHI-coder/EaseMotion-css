# Smart Cyber-Physical Power Grid Command

## What does this do?
A single-page UI showcase visualizing a cyber-physical power grid command center — pulsing grid nodes, animated connection lines, a load balance meter, and live power output metric cards.

## How is it used?
```html
<header class="grid-header">...</header>

<main class="grid-main">
  <section class="panel network-panel">
    <div class="network-view">
      <span class="grid-node node-1"></span>
      <span class="pulse-line line-1"></span>
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
It demonstrates layered entrance and continuous ambient animations (pulsing grid nodes, animated connection lines, load meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
