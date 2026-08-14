# Interactive Heatmap Grid with Hover Tooltips

A highly interactive React component designed to visualize density data (e.g., contribution graphs). It features smooth `.ease-pulse-hover` scaling on cells and dynamically positioned, animated tooltips.

## Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `data` | `Array<Object>` | `[]` | Flat array of data objects containing `count` and any other custom data properties |
| `colorStops` | `Array<string>` | *(GitHub Greens)* | Array of hex color strings representing the density scale (from 0 to max) |
| `rows` | `number` | `7` | Number of rows in the grid (e.g., 7 for days of the week) |
| `cellSize` | `number` | `14` | Size of each cell in pixels |
| `cellGap` | `number` | `4` | Gap between cells in pixels |
| `tooltipFormatter` | `(item) => string` | *(Default fn)* | Function that returns the string to display inside the tooltip for a given cell |

### Data Object Structure
Your data array should be a flat list. The component automatically chunks it into columns based on the `rows` prop.
```javascript
const data = [
  { count: 0, date: '2023-01-01' },
  { count: 5, date: '2023-01-02' },
  // ...
];
```

## Installation

1. Copy `HeatmapGrid.jsx` and `style.css` into your project components directory.
2. Ensure you have React installed. No other dependencies are required.

## Usage Example

```jsx
import React from 'react';
import HeatmapGrid from './HeatmapGrid';

function App() {
  // Generate some mock data
  const mockData = Array.from({ length: 365 }).map((_, i) => ({
    count: Math.floor(Math.random() * 20),
    date: `Day ${i + 1}`
  }));

  return (
    <div style={{ padding: '40px' }}>
      <h2>Activity Graph</h2>
      <HeatmapGrid 
        data={mockData} 
        tooltipFormatter={(item) => `${item.count} events on ${item.date}`}
      />
    </div>
  );
}

export default App;
```

## Why it fits EaseMotion CSS

- **Hover Micro-interactions**: Integrates a responsive `.ease-pulse-hover` effect scaling the cells to `1.3` on hover/focus using the standard EaseMotion `cubic-bezier(0.34, 1.56, 0.64, 1)` curve.
- **Animated Tooltips**: Tooltips enter using a custom `.ease-scale-up-tooltip` animation, combining opacity and a slight upward translate/scale shift for a premium feel.
- **Accessibility**: Includes basic keyboard focus support (`tabIndex={0}`) allowing users to tab through the grid and trigger the exact same scale and tooltip animations as mouse hover.
