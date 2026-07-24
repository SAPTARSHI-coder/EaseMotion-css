# AI Automated Code Synthesis & Optimization Workbench

## What does this do?
A single-page UI showcase visualizing an AI workbench that synthesizes and refactors code, then scores and applies optimizations in real time — animated code stream, optimization gauge, and live metric cards.

## How is it used?
```html
<header class="workbench-header">...</header>

<main class="workbench-grid">
  <section class="panel code-panel">...</section>
  <section class="panel metric-panel">
    <div class="gauge">
      <div class="gauge-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance animations (line-by-line code reveal, gauge fill, staggered card pop) built with pure CSS keyframes and animation-delay — no JS — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
