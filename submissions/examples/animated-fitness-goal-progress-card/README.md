# Animated Fitness Goal Progress Card

## What does this do?

This component is an animated fitness dashboard card that tracks and displays progress towards a daily/weekly calorie goal with a custom animating SVG progress ring, statistics cards, a milestone checklist, and a weekly activity bar chart, utilizing pure HTML and CSS.

## How is it used?

The component is self-contained. The primary layout is structured using card container classes, grid layout wrappers, and custom-styled nested elements:

```html
<div class="afgc-card">
  <header class="afgc-header">
    <h1 class="afgc-title">Weekly Endurance Challenge</h1>
    <div class="afgc-status-badge">
      <span class="afgc-pulse-dot" aria-hidden="true"></span>
      <span>82% Completed</span>
    </div>
  </header>

  <div class="afgc-grid">
    <section class="afgc-left-col">
      <!-- SVG Progress Ring -->
      <div class="afgc-panel afgc-ring-panel">
        <svg class="afgc-progress-ring" width="140" height="140">
          <circle
            class="afgc-progress-ring-bg"
            stroke="rgba(255,255,255,0.06)"
            stroke-width="10"
            fill="transparent"
            r="58"
            cx="70"
            cy="70"
          />
          <circle
            class="afgc-progress-ring-fill"
            stroke="url(#afgc-ring-grad)"
            stroke-width="10"
            fill="transparent"
            r="58"
            cx="70"
            cy="70"
            style="--afgc-ring-pct: 82;"
          />
        </svg>
      </div>
      <!-- Stats -->
      <div class="afgc-stats-grid">
        <div class="afgc-stat-card" tabindex="0">
          <span class="afgc-stat-icon">🏃</span>
          <div class="afgc-stat-info">
            <strong>8.2 km</strong>
            <span>Distance</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
```

## Why is it useful?

It provides a modern, performance-first, zero-JavaScript dashboard component. By leveraging pure CSS variables, SVG dash-array calculations (`stroke-dashoffset`), keyframe animations, and custom CSS grid layouts, it delivers fluid micro-interactions and smooth transitions that fit perfectly into the EaseMotion CSS philosophy of high-performance and accessible animations.

## Tech Stack

- HTML5 (Semantic tags, JSDOM test-friendly attributes)
- CSS3 (Variables, CSS Grid, Custom keyframe animations, Responsive media queries, Accessibility compliance with `prefers-reduced-motion`)

## Preview

Open [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-fitness-goal-progress-card/demo.html) directly in your browser to see the effect.

## Contribution Notes

- Class naming is prefixed with `afgc-` to prevent collisions.
- Maintainers will rename classes to the `ease-*` convention before merging.
