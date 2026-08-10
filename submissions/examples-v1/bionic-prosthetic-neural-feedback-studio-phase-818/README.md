# Bionic Prosthetic Neural Feedback Studio

## What does this do?
A single-page UI showcase visualizing a bionic prosthetic control studio — blinking neural signal map, haptic feedback meter, and live sensor metric cards.

## How is it used?
```html
<header class="bionic-header">...</header>

<main class="bionic-grid">
  <section class="panel signal-panel">
    <div class="signal-view">
      <span class="signal-node node-1"></span>
      <span class="signal-path path-1"></span>
    </div>
  </section>
  <section class="panel feedback-panel">
    <div class="feedback-meter">
      <div class="feedback-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and ambient animations (blinking neural nodes, feedback meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
