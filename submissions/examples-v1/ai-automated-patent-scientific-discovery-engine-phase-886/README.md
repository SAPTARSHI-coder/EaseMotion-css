# AI Automated Patent & Scientific Discovery Engine

## What does this do?
A single-page UI showcase visualizing an AI engine that scans research papers and patent filings to surface novel discoveries — animated query stream, confidence meter, and live metric cards.

## How is it used?
```html
<header class="discovery-header">...</header>

<main class="discovery-grid">
  <section class="panel scan-panel">
    <pre class="scan-stream">...</pre>
  </section>
  <section class="panel score-panel">
    <div class="confidence-meter">
      <div class="confidence-fill"></div>
    </div>
  </section>
  <section class="panel card-grid">
    <div class="metric-card card-1">...</div>
  </section>
</main>
```

## Why is it useful?
It demonstrates layered entrance animations (line-by-line query reveal, confidence meter fill, staggered metric cards) built with pure CSS keyframes and animation-delay — no JS — fitting EaseMotion CSS's philosophy of smooth, dependency-free motion design. The grid layout is fully responsive down to mobile.
