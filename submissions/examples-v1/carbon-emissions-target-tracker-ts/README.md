# Carbon Emissions Target Tracker

## Overview

A dashboard component for tracking carbon emissions against reduction targets. Displays current emissions, target emissions, and reduction achieved via progress bars, summary cards, and three distinct state cards (on-track, attention-needed, off-track) — all in pure CSS with zero JavaScript.

## Features

- Summary cards for current emissions, target, and reduction achieved
- Animated progress bars for emissions, target, and reduction metrics
- Three target state cards with visual and text-based status indicators
- Color-coded accents (green/yellow/red) plus icon badges for accessibility
- Status text labels so meaning is clear without relying on color alone
- Staggered fade-up entrance animations
- Dark theme with glassmorphism surfaces
- Fully responsive layout
- Reduced-motion accessibility support

## Use Cases

- Sustainability dashboards
- ESG reporting interfaces
- Corporate carbon footprint trackers
- Environmental impact monitoring

## Example Usage

```html
<div class="state-card on-track">
  <div class="badge">On Track</div>
  <div class="title">Regional Office</div>
  <div class="desc">Emissions are 18% below target.</div>
  <div class="metric">
    <span class="m-label">Current</span>
    <span class="m-value">410 tCO₂</span>
  </div>
  <div class="metric">
    <span class="m-label">Target</span>
    <span class="m-value">500 tCO₂</span>
  </div>
</div>
```

## State Indicators

| State            | Color            | Badge Text  | Icon |
| ---------------- | ---------------- | ----------- | ---- |
| On Track         | Green (#22c55e)  | "On Track"  | ✓    |
| Attention Needed | Yellow (#eab308) | "Attention" | !    |
| Off Track        | Red (#ef4444)    | "Off Track" | ✗    |

## Accessibility

Status is conveyed through both color and text labels (badge text + icon). The component respects `prefers-reduced-motion` to disable all animations.

## Browser Compatibility

Compatible with modern browsers supporting:

- CSS Animations
- CSS Transforms
- CSS Keyframes
- CSS Backdrop Filter
- Media Queries

## Acceptance Criteria

- Uses CSS keyframes.
- Smooth and reusable animation.
- Lightweight implementation.
- Accessible design.
- Easy integration into existing projects.
- Consistent with EaseMotion CSS principles.
