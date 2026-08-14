# Animated Personal Finance Budget Tracker

## What does this do?

This component is an animated personal finance budget tracker dashboard that displays monthly income, expenses, remaining balances, budget category breakdowns (Housing, Dining, Shopping, Entertainment) with custom grow progress bars, recent transaction previews, and an animated circular SVG savings goal progress ring using pure HTML and CSS.

## How is it used?

The component structure is self-contained. Below is an example structure of the dashboard elements and styling classes:

```html
<div class="apf-card">
  <header class="apf-header">
    <h1 class="apf-title">Personal Budget & Spending Tracker</h1>
    <div class="apf-status-badge">
      <span class="apf-pulse-dot" aria-hidden="true"></span>
      <span>Budget On Track</span>
    </div>
  </header>

  <!-- Summary Grid -->
  <section class="apf-summary-grid">
    <div class="apf-summary-card">
      <strong>$4,800.00</strong>
      <span>Monthly Income</span>
    </div>
  </section>

  <div class="apf-grid">
    <!-- Main Info Column -->
    <section class="apf-left-col">
      <div class="apf-panel">
        <div class="apf-category-item">
          <strong>Housing & Utilities</strong>
          <div class="apf-progress-track">
            <div
              class="apf-progress-fill"
              style="--apf-pct: 80;"
              aria-label="Housing: 80%"
            ></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
```

## Why is it useful?

It provides a professional, zero-JavaScript dashboard module designed for personal finance settings, banking systems, expense sheets, and billing tools. By utilizing pure CSS variables, keyframe animations for circular progress ring velocity and category progressions, hover transforms on metric blocks, and media query controls (for responsiveness and accessibility overrides), it delivers accessible, high-performance interactions that match the EaseMotion CSS framework rules.

## Tech Stack

- HTML5 (Semantic fintech layout, tabindex accessibility hooks)
- CSS3 (Custom keyframe animations, SVG circular offset calculations, CSS Grid/Flexbox layouts, media query overrides for responsiveness and reduced-motion states)

## Preview

Open [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-personal-finance-budget-tracker/demo.html) directly in your browser to see the effect.

## Contribution Notes

- Class naming uses the `apf-` prefix to prevent collision.
- Maintainers will standardize classes to the `ease-*` convention before merge.
