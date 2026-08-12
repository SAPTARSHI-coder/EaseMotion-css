# Cyberpunk AI Command Center Bento Grid

## What does this do?
A futuristic, cyberpunk-inspired Bento Grid dashboard for AI operations interfaces — featuring glassmorphism cards, animated corner glows, neon accent colors, a sliding progress bar shimmer, a spinning performance ring, and live-feeling status indicators. Pure HTML/CSS, zero dependencies.

## How to use it
```html
<div class="cyber-bento-grid">

  <!-- Hero card, spans 2x2 -->
  <div class="cyber-card hero">
    <div class="cyber-card-glow"></div>
    <div class="cyber-label">AI COMMAND CENTER</div>
    <h2 class="cyber-hero-title">12 Active Agents</h2>
    <p class="cyber-hero-sub">All systems operational</p>
  </div>

  <!-- Metric card with progress bar -->
  <div class="cyber-card">
    <div class="cyber-card-glow cyber-card-glow--pink"></div>
    <div class="cyber-label">GPU Usage</div>
    <div class="cyber-metric">92<span class="cyber-metric-unit">%</span></div>
    <div class="cyber-bar">
      <div class="cyber-bar-fill" style="--fill: 92%"></div>
    </div>
  </div>

  <!-- Wide card with performance ring -->
  <div class="cyber-card wide">
    <div class="cyber-card-glow"></div>
    <div class="cyber-card-row">
      <div>
        <div class="cyber-label">Model Performance</div>
        <div class="cyber-model-name">GPT-5.5</div>
      </div>
      <div class="cyber-ring" style="--pct: 98.7">
        <span class="cyber-ring-value">98.7%</span>
      </div>
    </div>
  </div>

</div>
```

## Components included
- `.cyber-card` — glassmorphism card with hover lift + glow expansion
- `.cyber-card-glow` (`--pink/green/amber`) — animated corner glow, color variants
- `.cyber-metric` / `.cyber-metric-unit` — large numeric display
- `.cyber-bar` / `.cyber-bar-fill` (`--amber`) — animated shimmer progress bar
- `.cyber-ring` / `.cyber-ring-value` — spinning conic-gradient performance ring
- `.cyber-agent-list` / `.cyber-dot` — live status indicators with blink animation
- `.cyber-workflow-item` / `.cyber-workflow-status` (`--done/running/pending`) — task queue states
- `.hero` / `.wide` — grid sizing modifiers (2x2 and 2-col span)

## Why it fits EaseMotion CSS
This aligns with EaseMotion CSS's animation-first philosophy by combining a modern dashboard layout with visually engaging motion — glassmorphism, neon glows, hover depth, and ambient pulsing indicators. It provides a real-world inspiration template for AI products, analytics dashboards, and developer tools, built entirely with composable HTML/CSS. `prefers-reduced-motion` disables all ambient and hover animations while preserving the visual layout and color coding.
