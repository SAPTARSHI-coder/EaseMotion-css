# Orbital Space Debris Cleanup Operation Center

## What does this do?
A single-page UI showcase visualizing an orbital debris cleanup command center — rotating tracking rings, drifting debris fragments, a capture-craft, a cleanup progress meter, and live operations metric cards.

## How is it used?
```html
<header class="debris-header">...</header>

<main class="debris-grid">
  <section class="panel orbit-panel">
    <div class="orbit-view">
      <span class="orbit-ring ring-1"></span>
      <span class="debris-bit bit-1"></span>
      <span class="capture-craft"></span>
    </div>
  </section>
  <section class="panel cleanup-panel">
    <div class="cleanup-meter">
      <div class="cleanup-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (counter-rotating orbit rings, drifting debris fragments, cleanup meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
