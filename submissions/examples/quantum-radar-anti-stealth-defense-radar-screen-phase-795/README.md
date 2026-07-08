# Quantum Radar Anti-Stealth Defense Radar Screen

## What does this do?
A single-page UI showcase visualizing a quantum radar defense screen — a rotating sweep arm over concentric range rings, pulsing contact blips, a detection confidence meter, and live tracking metric cards.

## How is it used?
```html
<header class="radar-header">...</header>

<main class="radar-grid">
  <section class="panel sweep-panel">
    <div class="sweep-view">
      <span class="radar-ring ring-1"></span>
      <span class="sweep-arm"></span>
      <span class="contact-blip blip-1"></span>
    </div>
  </section>
  <section class="panel signal-panel">
    <div class="signal-meter">
      <div class="signal-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (rotating radar sweep, pulsing contact blips, signal meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
