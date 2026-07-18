# Threshold Alert Indicator Component

## Description
A highly reactive dashboard alert component that utilizes dynamic `ease-*` states to visually pulse, flash, and pop when metrics breach a pre-defined threshold.

## Properties (Props Reference)

| Property | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| `value` | `number` | Yes | - | The current live metric value being monitored. |
| `threshold` | `number` | Yes | - | The limit value that triggers the critical alert state. |
| `label` | `string` | No | `'System Load'` | The heading label descriptive text for the monitored metric. |
| `statusText` | `string` | No | `'Normal'` | The badge text shown when operating under safe limits. |

## Usage Example

```jsx
import React from 'react';
import { ThresholdAlertIndicator } from './ThresholdAlertIndicator';

export default function DashboardSummary() {
  return (
    <div style={{ maxWidth: '400px', padding: '20px' }}>
      {/* Safe State Example */}
      <ThresholdAlertIndicator label="CPU Temperature" threshold="{80}" value="{42}"/>

      <div style={{ margin: '20px 0' }} />

      {/* Breached State Example (Triggers dynamic ease-pulse-urgent) */}
      <ThresholdAlertIndicator label="CPU Temperature" threshold="{80}" value="{89}"/>
    </div>
  );
}