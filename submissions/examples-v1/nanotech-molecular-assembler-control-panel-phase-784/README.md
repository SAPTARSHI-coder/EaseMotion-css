# Nanotech Molecular Assembler Control Panel

## What does this do?
A single-page UI showcase visualizing a nanotech molecular assembler control panel — expanding orbit rings, pulsing molecule markers, an assembly yield meter, and live reactor metric cards.

## How is it used?
```html
<header class="nano-header">...</header>

<main class="nano-grid">
  <section class="panel assembly-panel">
    <div class="assembly-view">
      <span class="orbit-ring ring-1"></span>
      <span class="molecule-dot dot-1"></span>
    </div>
  </section>
  <section class="panel yield-panel">
    <div class="yield-meter">
      <div class="yield-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (expanding orbit rings, pulsing molecule dots, yield meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.

**Note:** purely a decorative UI showcase — no real molecular simulation or nanofabrication functionality.
