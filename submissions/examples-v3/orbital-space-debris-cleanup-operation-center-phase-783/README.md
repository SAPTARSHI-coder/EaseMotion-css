# Orbital Space Debris Cleanup Operation Center

## What does this do?
A single-page UI showcase visualizing an orbital debris cleanup operation center — expanding orbit rings, pulsing debris tracking markers, a capture progress meter, and live mission metric cards.

## How is it used?
```html
<header class="debris-header">...</header>

<main class="debris-grid">
  <section class="panel orbit-panel">
    <div class="orbit-view">
      <span class="orbit-ring ring-1"></span>
      <span class="debris-dot dot-1"></span>
    </div>
  </section>
  <section class="panel capture-panel">
    <div class="capture-meter">
      <div class="capture-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (expanding orbit rings, pulsing debris dots, capture meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.

**Note:** purely a decorative UI showcase — no real orbital-tracking or mission-control functionality.
