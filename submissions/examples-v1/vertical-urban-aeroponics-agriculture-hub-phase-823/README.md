# Vertical Urban Aeroponics Agriculture Hub

## What does this do?
A single-page UI showcase visualizing a vertical aeroponics farming hub — rising growth-tower bars, drifting nutrient mist particles, a nutrient cycle meter, and live yield metric cards.

## How is it used?
```html
<header class="hub-header">...</header>

<main class="hub-grid">
  <section class="panel tower-panel">
    <div class="tower-view">
      <span class="tower-bar bar-1"></span>
      <span class="mist-particle p-1"></span>
    </div>
  </section>
  <section class="panel nutrient-panel">
    <div class="nutrient-meter">
      <div class="nutrient-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance and continuous ambient animations (growing tower bars, rising mist particles, nutrient meter fill, staggered metric cards) built entirely with CSS keyframes and animation-delay — no JS dependencies — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
