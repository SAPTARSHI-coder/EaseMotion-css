# Procurement Bid Comparison Table

## Overview

A procurement bid comparison table for purchasing workflows that compares price, delivery time, warranty, compliance, and recommendation across multiple vendors — using semantic HTML table markup with best-value, review-needed, and disqualified states — pure CSS, zero JavaScript.

## Features

* Semantic `<table>` markup with proper `<thead>`, `<tbody>`
* Three vendor bid comparison across five criteria
* Three states: best-value (green), review-needed (yellow), disqualified (red)
* Color-coded tags and score bars with text labels
* Score bars with low/mid/high fill colors
* Check/warn/cross indicators for pass/fail criteria
* Staggered row fade-in animation
* Dark theme with glassmorphism surface
* Responsive horizontal scroll on narrow screens
* Reduced-motion accessibility support

## Bid States

| State | Color | Tag Text | Description |
|-------|-------|----------|-------------|
| Best Value | Green (#22c55e) | Best Value | Highest overall score |
| Review Needed | Yellow (#eab308) | Review | Meets requirements but needs review |
| Disqualified | Red (#ef4444) | Disqualified | Fails critical criteria |

## Comparison Criteria

| Criteria | Description |
|----------|-------------|
| Price (₹) | Total bid amount |
| Delivery | Estimated delivery time in weeks |
| Warranty | Warranty period in years |
| Compliance | Regulatory and specification compliance |
| Recommendation | Overall recommendation score |

## Example Usage

```html
<table>
  <thead>
    <tr>
      <th>Vendor</th>
      <th>Price</th>
      <th>Delivery</th>
      <th>Warranty</th>
      <th>Score</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>TechNova Solutions</td>
      <td>₹12,50,000</td>
      <td>6 weeks</td>
      <td>3 years</td>
      <td>...</td>
      <td><span class="tag best-value">Best Value</span></td>
    </tr>
  </tbody>
</table>
```

## Accessibility

Status is conveyed through both color and text label. The component respects `prefers-reduced-motion` to disable all animations.

## Browser Compatibility

Compatible with modern browsers supporting CSS Animations, Transforms, Keyframes, Backdrop Filter, and Media Queries.

## Acceptance Criteria

* Uses CSS keyframes.
* Smooth and reusable animation.
* Lightweight implementation.
* Accessible design.
* Easy integration into existing projects.
* Consistent with EaseMotion CSS principles.
