# React Tooltip with Shimmer Pulse (SaaS Pricing)

A React tooltip component with a smooth shimmer pulse interaction transition, designed for SaaS pricing layouts (e.g. explaining plan features on hover).

## Props

| Prop       | Type                                       | Default | Description                                  |
|------------|---------------------------------------------|---------|-----------------------------------------------|
| `text`     | `string`                                    | —       | The tooltip content to display                |
| `children` | `node`                                      | —       | The trigger element the tooltip is attached to |
| `position` | `"top" \| "bottom" \| "left" \| "right"`    | `"top"` | Placement of the tooltip relative to trigger   |

## Usage

```jsx
import Tooltip from "./Tooltip";
import "./style.css";

function PricingFeature() {
  return (
    <Tooltip text="Includes unlimited team seats" position="top">
      <span className="feature-label">Team Seats ⓘ</span>
    </Tooltip>
  );
}
```

## Why is this useful?

Tooltips explaining plan features are a common pattern in SaaS pricing tables. This component pairs a lightweight React hover/focus interaction with an EaseMotion-style shimmer pulse animation, giving pricing UIs a polished, premium feel without extra dependencies.
