# Medical Shimmer Pulse Tooltip

A smooth, premium animated tooltip component leveraging **EaseMotion CSS utilities**, optimized for tracking vital stats, alerts, and critical data streams in Medical Dashboards.

## Features
- **Shimmer Pulse Transition:** Provides smooth visual telemetry updates.
- **Context Aware:** Colored states representing Normal, Warning, and Critical patient metrics.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `text` | `String` | *Required* | The text content to display inside the tooltip. |
| `position` | `String` | `'top'` | Position of tooltip (`'top'` or `'bottom'`). |
| `status` | `String` | `'normal'` | Medical severity status (`'normal'`, `'warning'`, `'critical'`). |
| `children` | `ReactNode`| *Required*| The element that triggers the tooltip on hover. |

## Usage Example

```jsx
import Tooltip from './Tooltip';

function MedicalDashboard() {
  return (
    <div className="p-6">
      <Tooltip text="Heart Rate: 142 BPM - Exceeds Safe Threshold" status="critical" position="top">
        <button className="bg-red-100 text-red-600 p-3 rounded">HR: 142</button>
      </Tooltip>
    </div>
  );
}