# Animated Customer Feedback Analytics Card

## What does this do?

This component is an animated customer feedback analytics dashboard card that tracks and displays customer satisfaction scores (CSAT) using a custom animating SVG circular gauge, average star ratings with responsive highlights, positive/neutral/negative sentiment ratios, and 5-to-1 star ratings distribution bars using pure HTML and CSS.

## How is it used?

The component structure is self-contained. Below is an example structure of the dashboard elements and styling classes:

```html
<div class="acf-card">
  <header class="acf-header">
    <h1 class="acf-title">Customer Feedback Insights</h1>
    <div class="acf-status-badge">
      <span class="acf-pulse-dot" aria-hidden="true"></span>
      <span>Live Monitoring</span>
    </div>
  </header>

  <div class="acf-grid">
    <!-- Main Left Column -->
    <section class="acf-left-col">
      <div class="acf-panel acf-csat-panel">
        <svg class="acf-progress-ring" width="140" height="140">
          <circle
            class="acf-progress-ring-bg"
            stroke="rgba(255,255,255,0.06)"
            stroke-width="10"
            fill="transparent"
            r="58"
            cx="70"
            cy="70"
          />
          <circle
            class="acf-progress-ring-fill"
            stroke="url(#acf-ring-grad)"
            stroke-width="10"
            fill="transparent"
            r="58"
            cx="70"
            cy="70"
            style="--acf-ring-pct: 92;"
          />
        </svg>
      </div>
    </section>
  </div>
</div>
```

## Why is it useful?

It provides a professional, zero-JavaScript dashboard module designed for CRM suites, analytics portals, and customer success products. By using pure CSS variables, keyframe animations for progress indicators and rating distributions, hover transforms on star ratings, and media query controls (for responsiveness and accessibility overrides), it showcases clean visual design and accessibility matching the EaseMotion CSS framework rules.

## Tech Stack

- HTML5 (Semantic widget blocks, tabindex accessibility hooks)
- CSS3 (Custom keyframe animations, SVG circular offset calculations, CSS Grid/Flexbox layouts, media query overrides for responsiveness and reduced-motion states)

## Preview

Open [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-customer-feedback-analytics-card/demo.html) directly in your browser to see the effect.

## Contribution Notes

- Class naming uses the `acf-` prefix to prevent collision.
- Maintainers will standardize classes to the `ease-*` convention before merge.
