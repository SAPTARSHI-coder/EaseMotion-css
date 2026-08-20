# Threshold Alert Indicator (ease-threshold-alert-indicator-dev)

A highly visual dashboard monitoring element that dynamically applies reactive, stateful animation profiles. The layout maintains an elegant passive presence when data fields are safe, but automatically scales into high-visibility pulsing warning structures the instant a pre-defined safety boundary is breached.

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `value` | `number` | (required) | The current live metric or value being monitored. |
| `threshold` | `number` | (required) | The limit value that triggers the critical alert state. |
| `label` | `string` | `'System Load'` | Text label describing the tracked metric. |
| `statusText` | `string` | `'Normal'` | The display badge string shown when operating within safe parameters. |

## Usage Example

```jsx
import React from 'react';
import { ThresholdAlertIndicator } from './ThresholdAlertIndicator';
import './style.css'; // Make sure to import the styles

const App = () => {
  return (
    <div style={{ maxWidth: '400px', margin: '40px' }}>
      <ThresholdAlertIndicator label="CPU Core Temperature" statusText="Optimal" threshold="{80}" value="{85}"/>
    </div>
  );
};

export default App;