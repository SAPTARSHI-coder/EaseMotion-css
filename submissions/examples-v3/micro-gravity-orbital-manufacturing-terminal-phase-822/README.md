# Micro-Gravity Orbital Manufacturing Terminal

## What does this do?
A single-page UI showcase visualizing a zero-g orbital manufacturing terminal — spinning fabrication bay rings, print queue progress meter, and live station telemetry cards.

## How is it used?
```html
<header class="orbital-header">...</header>

<main class="orbital-grid">
  <section class="panel bay-panel">
    <div class="bay-view">
      <span class="orbit-ring ring-1"></span>
      <span class="print-core"></span>
    </div>
  </section>
  <section class="panel queue-panel">
    <div class="queue-meter">
      <div class="queue-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (counter-rotating orbit rings, spinning print core, queue meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
