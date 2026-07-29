# Analytics Metric Card with Animated Counter (React Component)

A clean, modular React component ideal for dashboards. It features a completely dependency-free animated number counter and integrates EaseMotion CSS utilities for elegant micro-interactions and hover states.

## Features
- **Zero-Dependency Counter:** Uses a custom `requestAnimationFrame` and exponential easing function to smoothly count up from `0` to the target `value` upon mounting.
- **EaseMotion Integration:** Uses standard `ease-` classes for hover lifts (`ease-hover-lift`), entrance fades (`ease-fade-in-up`), and continuous icon pulsing (`ease-pulse-slow`).
- **Trend Indicators:** Automatically color-codes the trend metrics (up = green, down = red, neutral = gray) based on props.
- **Highly Reusable:** Designed as a standalone widget ready to be placed in any dashboard CSS Grid or Flexbox layout.

## Installation

1. Copy `MetricCard.jsx` into your project's component directory.
2. Copy `style.css` (or merge its contents into your global CSS).
3. (Optional) Ensure your EaseMotion CSS framework is linked if you wish to use the global classes rather than the fallbacks provided in `style.css`.

## Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | String | `"Total Revenue"` | The label for the metric. |
| `value` | Number | `124500` | The final numeric value the counter will animate to. |
| `prefix` | String | `"$"` | A symbol to display before the number (e.g. $, €). |
| `suffix` | String | `""` | A symbol to display after the number (e.g. %). |
| `trend` | String | `"up"` | Determines the color and icon of the trend (`"up"`, `"down"`, `"neutral"`). |
| `trendValue` | String | `"12.5%"` | The text value displayed next to the trend icon. |
| `duration` | Number | `2000` | The duration of the number counting animation in milliseconds. |

## Usage Example

```jsx
import React from 'react';
import MetricCard from './MetricCard';

function App() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '50px', background: '#f3f4f6', minHeight: '100vh' }}>
      <MetricCard 
        title="Total Revenue"
        value={124500}
        prefix="$"
        trend="up"
        trendValue="12.5%"
      />
      <MetricCard 
        title="Active Users"
        value={8234}
        prefix=""
        trend="up"
        trendValue="4.2%"
      />
      <MetricCard 
        title="Bounce Rate"
        value={45}
        prefix=""
        suffix="%"
        trend="down"
        trendValue="1.8%"
      />
    </div>
  );
}

export default App;
```
