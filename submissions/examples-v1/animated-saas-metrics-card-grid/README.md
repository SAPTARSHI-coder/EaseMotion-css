# Animated SaaS Metrics Card Grid

An interactive, premium SaaS dashboard metrics card grid with responsive layout columns, positive/negative trend indicator badges, and self-drawing SVG sparklines. Designed for SaaS analytics, business intelligence dashboards, and system monitoring hubs.

## What does this do?

This component provides an analytics overview featuring:

- **Card Hover Elevation**: Lifts card elements (`translateY(-8px)`) and expands shadow glows.
- **Dynamic Accent Fades**: Highlights borders and drop shadows according to metric performance (Green glow for `positive`, Red glow for `negative`).
- **Load-in Sparkline Drawings**: Automatically draws SVG trendlines on page load using pure CSS keyframes on `stroke-dashoffset`.
- **Responsive Flexbox Grid**: Dynamically tiles cards across 4, 3, 2, or 1 column based on the screen width.
- **Micro-interaction Hover Scaling**: Shrinks/grows trend markers and glows values on hover.

## How is it used?

Integrate the widget template into your dashboard layout:

```html
<!-- Example of Metric Card Grid -->
<div class="metrics-grid">
  <div class="metric-card positive">
    <h4>Revenue</h4>
    <div class="metric-value">$48,290</div>
    <span class="trend positive">+18.4%</span>
  </div>

  <div class="metric-card negative">
    <h4>Churn Rate</h4>
    <div class="metric-value">1.84%</div>
    <span class="trend negative">-2.4%</span>
  </div>
</div>
```

### Accents & Themes

Modify the theme by changing the class modifiers on the `.metric-card` container:

- **Positive**: Add `positive` to the card wrapper (Green theme, upwards sparkline).
- **Negative**: Add `negative` to the card wrapper (Red theme, downwards sparkline).

## Why is this useful?

Metrics cards are the primary data-points displayed on business intelligence dashboards. This grid:

1. **Drives UX value**: Highlights critical data indicators using clean color pulses and self-drawing graphs.
2. **Offers peak performance**: Uses hardware-accelerated GPU transitions to remain lightweight and buttery smooth.
3. **Pure CSS implementation**: Operates completely without scripts or dependencies.

## Tech Stack

- HTML5
- CSS3 (Vanilla Custom Properties, Keyframe Animations, Grid, Flexbox)
- Custom Inline SVGs (No external image network requests required)

## Preview

To see the metrics cards in action:

1. Open the [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-saas-metrics-card-grid/demo.html) directly in any modern web browser.
2. Observe the sparkline draw transitions on page load, and hover cards to trigger elevations.

## Contribution Notes

- Class names correspond to GSSoC contribution requirements.
- The project maintainer will refactor selectors to the `ease-*` prefix during repository integration.
