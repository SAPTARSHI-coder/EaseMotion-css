# Carbon Emissions Target Tracker

A dark-themed CSS component for monitoring organizational carbon emissions progress toward 2030 net-zero targets. Built with glassmorphism aesthetics, animated progress bars, and state-driven card indicators.

## Features

- Dark theme with `#0a0e17` background and ambient glow orbs
- Glassmorphism cards with `backdrop-filter: blur(16px)` and semi-transparent borders
- Three animated progress bars (Current, Target, Reduction) with gradient fills
- Three state card styles (On Track, Attention, Off Track) distinguished by 4px left accent bars
- Staggered `fadeUp` entrance animations on all sections
- Responsive grid layout adapting from 3-column to single-column on small screens
- `prefers-reduced-motion` support that disables all animations and transitions
- `@supports` fallback for browsers lacking `backdrop-filter`
- No JavaScript or external dependencies

## Example Usage

```html
<div class="state-card on-track">
  <div class="state-card-header">
    <div class="status-icon">&#10003;</div>
    <div>
      <span class="state-badge">&#9679; On Track</span>
      <div class="state-card-title">Regional Office</div>
    </div>
  </div>
  <p class="state-card-desc">Operations running below carbon budget.</p>
  <div class="state-metrics">
    <div class="metric">
      <div class="metric-label">Current</div>
      <div class="metric-value">320</div>
    </div>
    <div class="metric">
      <div class="metric-label">Target</div>
      <div class="metric-value">400</div>
    </div>
    <div class="metric">
      <div class="metric-label">Variance</div>
      <div class="metric-value positive">-20%</div>
    </div>
  </div>
</div>
```

## State Indicators

| State | Left Accent | Badge Color | Description |
|-------|-------------|-------------|-------------|
| On Track | `#22c55e` (green) | Green badge | Emissions within or below target |
| Attention | `#f59e0b` (yellow) | Yellow badge | Emissions slightly above target |
| Off Track | `#ef4444` (red) | Red badge | Emissions significantly exceeding target |

## Accessibility

- Semantic HTML structure using `<header>`, `<section>` elements
- ARIA labels omitted in favor of semantic landmarks and clear visual hierarchy
- High-contrast text colors (`#f1f5f9` primary, `#e2e8f0` body) against dark backgrounds
- `prefers-reduced-motion` media query disables all animations for vestibular motion sensitivity
- Status conveyed through both color (accent bar, badge, icon) and text labels

## Browser Compatibility

- Chrome 76+, Firefox 70+, Safari 14+, Edge 79+
- Requires `backdrop-filter` support (fallback provided for unsupported browsers)
- CSS Grid and Custom Properties for layout and theming
- No JavaScript required

## Acceptance Criteria

- [x] Dark theme with `#0a0e17` background applied
- [x] Glassmorphism cards with blur backdrop effect
- [x] Three animated progress bars at 78%, 60%, and 45%
- [x] Three state card variants (on-track, attention, off-track) with 4px left accent
- [x] Staggered `fadeUp` entrance keyframe animations
- [x] Responsive layout using `auto-fit` and `minmax` grid columns
- [x] `prefers-reduced-motion` disables all animations
- [x] `@supports` fallback for browsers without backdrop-filter
- [x] No JavaScript or external assets

Fixes #19153
