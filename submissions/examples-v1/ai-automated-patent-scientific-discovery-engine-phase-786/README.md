# AI Automated Patent & Scientific Discovery Engine

## What does this do?
A single-page UI showcase visualizing an AI-driven patent and scientific discovery pipeline — expanding scan rings, pulsing discovery node markers, a novelty scoring meter, and live pipeline metric cards.

## How is it used?
```html
<header class="patent-header">...</header>

<main class="patent-grid">
  <section class="panel scan-panel">
    <div class="scan-view">
      <span class="scan-ring ring-1"></span>
      <span class="node-dot dot-1"></span>
    </div>
  </section>
  <section class="panel novelty-panel">
    <div class="novelty-meter">
      <div class="novelty-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (expanding scan rings, pulsing node dots, novelty meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.

**Note:** purely a decorative UI showcase — no real patent search, NLP, or scientific-discovery functionality.
