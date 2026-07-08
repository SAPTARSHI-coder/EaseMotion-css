# Analytics Metric Card with Animated Counter

A modular, copy-paste ready React component that renders an analytics metric card. It leverages requestAnimationFrame to animate the numeric value counting up from 0 to the target value smoothly over a customizable duration using cubic-out easing, complete with trend parameters and visual sparklines.

---

## 📦 Installation

This component has zero external dependencies outside React and standard EaseMotion CSS libraries.

1. Copy [AnalyticsMetricCard.jsx](./AnalyticsMetricCard.jsx) into your React component directory.
2. Link the core EaseMotion CSS stylesheet inside your application entry file (e.g. `App.js` or `main.js`):

```javascript
import 'ease-motion-css/easemotion.css';
```

---

## 🚀 Usage Example

```jsx
import React from 'react';
import AnalyticsMetricCard from './AnalyticsMetricCard';

export default function App() {
  return (
    <div className="container" style={{ padding: '3rem', backgroundColor: '#030712', minHeight: '100vh' }}>
      <h2 style={{ color: '#fff', marginBottom: '2rem' }}>Analytics Dashboard</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {/* Metric Card 1: Revenue */}
        <AnalyticsMetricCard
          title="Monthly Revenue"
          value={12450}
          prefix="$"
          trend="+18.4%"
          trendDirection="up"
          accentColor="#8b5cf6"
          icon={<span>💰</span>}
        />

        {/* Metric Card 2: Conversion Rate */}
        <AnalyticsMetricCard
          title="Conversion Rate"
          value={3.4}
          suffix="%"
          trend="-2.1%"
          trendDirection="down"
          accentColor="#10b981"
          icon={<span>📈</span>}
        />

        {/* Metric Card 3: Active Users */}
        <AnalyticsMetricCard
          title="Active Users"
          value={8420}
          trend="Flat"
          trendDirection="neutral"
          accentColor="#3b82f6"
          icon={<span>👤</span>}
        />
      </div>
    </div>
  );
}
```

---

## ⚙️ Props Specifications

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | *Required* | Label title describing the metric (e.g. 'Bounce Rate'). |
| `value` | `number` | *Required* | Target value to count up to. |
| `duration` | `number` | `1500` | Duration of count animation in milliseconds. |
| `trend` | `string` | *Optional* | Percentage trend label (e.g. '+12%'). |
| `trendDirection` | `string` | `'up'` | Color highlighting trend (options: 'up', 'down', 'neutral'). |
| `prefix` | `string` | `''` | Value prefix symbol (e.g. '$'). |
| `suffix` | `string` | `''` | Value suffix symbol (e.g. '%'). |
| `icon` | `ReactNode`| *Optional* | Elements rendering in header row. |
| `accentColor` | `string` | `'#8b5cf6'` | Accent color used for highlighting cards and lines. |

---

## 🎨 Extended Styles & Customization Guide

### 1. Easing Curves Math
The counter increments via a **Cubic-Out Easing** curve:
$$f(t) = 1 - (1 - t)^3$$
This ensures the numbers speed up initially and decelerate near the target value for a professional feel.

### 2. Custom Sparkline Variables
You can configure customized line styles by overriding custom properties:
* `--metric-accent-violet`: Color of the card highlight border.
* `--draw-spark-duration`: Speed of the sparkline animation drawing (default: 2s).
* `--mouse-x`, `--mouse-y`: Coordinates for spotlight.

### 3. Localization Settings
The metric formatter automatically formats decimals and adds regional digit separators using `toLocaleString()` depending on client locales.
