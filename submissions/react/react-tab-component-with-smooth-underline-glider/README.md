# React Component: Tabs with Smooth Underline Glider

An enterprise-ready, fully customizable layout switcher relying on `useLayoutEffect` dimension calculations to route a performance-optimized glider marker across active indices.

## Properties API Reference

| Property Name | Type       | Default     | Description                                                                     |
| :------------ | :--------- | :---------- | :------------------------------------------------------------------------------ |
| `tabs`        | `Array`    | `[]`        | Sequence array containing components schema holding structural tab data configurations. |
| `componentId` | `String`   | `useId()`   | Structural seed string used to link internal automated ARIA accessibility identifiers. |
| `onChange`    | `Function` | `undefined` | Callback boundary tracking event context mapping indices `(tabObject, index)`.  |

---

## Technical Integration Blueprint

```jsx
import React from 'react';
import TabsGlider from './TabsGlider';
import './style.css';

const configurationData = [
  { label: 'Overview', content: <p>System metrics logging operational.</p> },
  { label: 'Metrics', content: <p>Telemetry parameters rendering seamlessly.</p> }
];

export default function App() {
  return (
    <TabsGlider
      tabs={configurationData}
      onChange={(tab, idx) => console.log(`Current position index track: ${idx}`)}
    />
  );
}

```
---
Crafted with 💜 by **[pari-dubey1](https://github.com/pari-dubey1)**