# Tooltip Shimmer Pulse

A React tooltip component with a smooth shimmer-pulse interaction transition, designed for dense, data-heavy medical dashboard interfaces.

## What does this do?
Displays a contextual tooltip that gently shimmers/fades in on hover or focus, with an optional stronger pulse variant for flagging critical or urgent values.

## How is it used?

```jsx
import TooltipShimmerPulse from "./TooltipShimmerPulse";

function VitalsCard() {
  return (
    <TooltipShimmerPulse text="Normal range: 60–100 bpm" position="top">
      <span className="metric-label">Heart Rate</span>
    </TooltipShimmerPulse>
  );
}

function CriticalCard() {
  return (
    <TooltipShimmerPulse
      text="Critical: value outside safe range"
      position="right"
      urgent
    >
      <span className="metric-label metric-label--critical">SpO2</span>
    </TooltipShimmerPulse>
  );
}
```

## Props

| Prop       | Type      | Default | Description                                                  |
|------------|-----------|---------|----------------------------------------------------------------|
| `text`     | `string`  | —       | The content shown inside the tooltip bubble                    |
| `position` | `string`  | `"top"` | Tooltip placement: `top`, `bottom`, `left`, `right`             |
| `urgent`   | `boolean` | `false` | Applies a stronger pulse animation for critical/urgent metrics |
| `children` | `node`    | —       | The trigger element the tooltip is attached to                 |

## Why is it useful?
Medical dashboards pack a lot of numeric data into a small space, so tooltips need to be quick to notice without being distracting. The shimmer-pulse motion draws the eye briefly, and the `urgent` variant gives a clear visual escalation for values that need attention — all built on EaseMotion's `ease-hover-lift`, `ease-fade-in`, and `ease-pulse` utility classes, keeping it consistent with the framework's animation-first philosophy while staying accessible (works on both hover and keyboard focus).