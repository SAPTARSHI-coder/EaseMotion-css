# Next-Gen Biomimetic Materials Synthesis Lab

## What does this do?
A single-page UI showcase visualizing a biomimetic materials synthesis lab — pulsing self-assembling molecular structure, synthesis progress meter, and live material property metric cards.

## How is it used?
```html
<header class="lab-header">...</header>

<main class="lab-grid">
  <section class="panel structure-panel">
    <div class="structure-view">
      <span class="cell-node node-1"></span>
      <span class="cell-link link-1"></span>
    </div>
  </section>
  <section class="panel synth-panel">
    <div class="synth-meter">
      <div class="synth-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and ambient animations (pulsing molecular nodes, synthesis meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
