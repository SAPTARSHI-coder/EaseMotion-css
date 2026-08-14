# Animated Feature Comparison Table

An interactive, premium feature comparison table with CSS Grid alignment, highlighted Pro plan columns, checkmark glows, and horizontal swipe responsiveness. Designed for SaaS pricing sections, agency landing pages, and product comparisons.

## What does this do?
This component provides a comparison table featuring:
- **Card Hover Backgrounds**: Highlights the hovered row (`background: rgba(255, 255, 255, 0.035)`) and shifts the row label slightly to the right.
- **Pro Column Highlight**: Features a dedicated class `.plan.featured` that applies a larger scale (`scale(1.03)`) and custom indigo glowing shadow. The rest of the Pro column cells automatically resolve to a custom highlighted background.
- **Pulsing Tick Indicators**: Custom tick indicators (`.yes-indicator`) pulse with soft glowing keyframes.
- **Horizontal Swipe Responsiveness**: Wraps the table in a scroll snapping container, preventing columns from collapsing or breaking on narrow viewports.

## How is it used?
Integrate the widget template into your dashboard layout:

```html
<!-- Example of Comparison Table -->
<div class="comparison-table">
  <div class="table-header">
    <div class="plan">Free</div>
    <div class="plan featured">Pro</div>
    <div class="plan">Enterprise</div>
  </div>

  <div class="feature-row">
    <span>Unlimited Projects</span>
    <span class="no-indicator">✗</span>
    <span class="yes-indicator">✓</span>
    <span class="yes-indicator">✓</span>
  </div>
</div>
```

## Why is it useful?
Feature comparison tables are crucial on commercial SaaS and product pages. This component:
1. **Ensures high responsiveness**: Solves the common mobile table collapse issue using horizontal swipe snap tracks.
2. **Promotes conversion details**: Centers user focus around the featured "Pro" tier using scales and glows.
3. **Pure CSS implementation**: Delivers highly interactive animations with zero JavaScript.

## Tech Stack
- HTML5
- CSS3 (Vanilla Custom Properties, Grid, Flexbox, Keyframes)

## Preview
To see the comparison table in action:
1. Open the [demo.html](file:///c:/Users/LENOVO/Desktop/GSSoC/Ease%20Motion/EaseMotion-css-gssoc/submissions/examples/animated-feature-comparison-table/demo.html) directly in any modern web browser.
2. Hover over table rows to test out transitions.

## Contribution Notes
- Class names correspond to GSSoC contribution requirements.
- The project maintainer will refactor selectors to the `ease-*` prefix during repository integration.
