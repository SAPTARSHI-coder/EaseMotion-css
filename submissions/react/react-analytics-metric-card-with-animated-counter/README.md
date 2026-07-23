# Analytics Metric Card with Animated Counter

A modular, copy-paste ready React component that displays an analytics metric with an animated counter that dynamically counts up from zero to the target value on mount. It incorporates the signature EaseMotion CSS hover animations for an interactive feel.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `title` | `string` | **Required** | The metric's title (e.g., "Total Revenue") |
| `value` | `number` | **Required** | The target numeric value to count up to |
| `prefix` | `string` | `''` | A string prefix for the value (e.g., `$`) |
| `suffix` | `string` | `''` | A string suffix for the value (e.g., `k`) |
| `trend` | `number` | `0` | Percentage trend value; positive for up, negative for down |
| `duration` | `number` | `1500` | Duration of the count-up animation in milliseconds |
| `icon` | `ReactNode` | `undefined` | Optional icon to display next to the title |

## Installation

1. Copy `AnalyticsMetricCard.jsx` into your components directory.
2. Copy the associated CSS from `style.css` into your project's stylesheet, or import it directly if using a bundler.
3. No external dependencies are required beyond standard React (`useState`, `useEffect`, `useRef`).

## Usage Example

```jsx
import React from 'react';
import AnalyticsMetricCard from './AnalyticsMetricCard';

function Dashboard() {
  return (
    <div style={{ display: 'flex', gap: '24px', padding: '40px' }}>
      <AnalyticsMetricCard 
        title="Total Revenue" 
        value={125000} 
        prefix="$" 
        trend={12.5} 
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
      />
      <AnalyticsMetricCard 
        title="Active Users" 
        value={1420} 
        trend={-3.2} 
        icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
      />
    </div>
  );
}

export default Dashboard;
```

## Why it fits EaseMotion CSS

- **`ease-hover-lift` Style**: Incorporates standard spring-style hover interaction logic (scale/translate/shadow transition) consistent with EaseMotion primitives.
- **`ease-count-up` Logic**: Mimics the CSS `@property` keyframe behavior using React hooks (`requestAnimationFrame`) to provide full browser compatibility for numeric interpolation while adhering to the same easing principles.
- Zero external package dependencies ensure it's truly copy-paste ready.
