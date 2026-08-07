# Personalized Pharmacogenomics Drug Design Hub

## What does this do?
A single-page UI showcase visualizing a pharmacogenomics drug design hub — a spinning double-helix with pulsing genetic marker dots, a compound match score meter, and live analysis metric cards.

## How is it used?
```html
<header class="pharma-header">...</header>

<main class="pharma-grid">
  <section class="panel helix-panel">
    <div class="helix-view">
      <span class="helix-strand strand-1"></span>
      <span class="marker-dot dot-1"></span>
    </div>
  </section>
  <section class="panel match-panel">
    <div class="match-meter">
      <div class="match-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (spinning helix strands, pulsing genetic markers, match meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
