# Step Indicator — Issue #7423

## Overview

Horizontal step indicator for multi-step forms and checkout flows. Three states: completed (green check), active (pulsing primary), upcoming (grey). Animated transitions between steps.

## States

| State | Class | Circle | Connector |
|-------|-------|--------|-----------|
| Completed | `.completed` | Green background + checkmark | Green line |
| Active | `.active` | Primary background + pulse ring | — |
| Upcoming | (none) | Grey background + number | Grey line |

## Features

- Numbered circles with connecting lines
- Completed: green fill + checkmark animation
- Active: primary fill with pulsing box-shadow
- Labels below each step
- Smooth connector color transition
- Responsive (smaller on mobile)
- Interactive prev/next/reset controls

## Usage

```html
<div class="ease-steps">
  <div class="ease-step completed">
    <div class="ease-step-circle">✓</div>
    <div class="ease-step-label">Cart</div>
  </div>
  <div class="ease-step active">
    <div class="ease-step-circle">3</div>
    <div class="ease-step-label">Payment</div>
  </div>
  <div class="ease-step">
    <div class="ease-step-circle">4</div>
    <div class="ease-step-label">Review</div>
  </div>
</div>
```

## Files

- `demo.html` — Interactive 5-step indicator with controls
- `style.css` — Steps, circles, connectors, animations, responsive
- `README.md` — This documentation
