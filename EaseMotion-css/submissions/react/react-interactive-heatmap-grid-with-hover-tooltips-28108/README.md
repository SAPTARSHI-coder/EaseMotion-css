# React Component: Interactive Heatmap Grid with Hover Tooltips (#28108)

A modular, copy-paste ready React `<InteractiveHeatmapGrid>` component that visualizes 2D data arrays with color intensity scaling, physical cell hover animations (scale + lift), and a spring-animated floating tooltip. Zero external dependencies — pure React hooks and EaseMotion CSS.

## 📦 What's included?

- `HeatmapGrid.jsx`: The React component containing the `InteractiveHeatmapGrid`, `HeatmapCell`, and `Tooltip` components. Handles hover states, coordinate math for the tooltip, and intensity scaling.
- `style.css`: The CSS stylesheet powering the CSS `color-mix()` intensity shading, cell hover physics, and the tooltip spring entrance.
- `demo.html`: A self-contained demo showing a GitHub-style 7x20 contribution heatmap with a theme color switcher — opens directly in a browser.

## 🛠 Features

- **CSS `color-mix()` Shading**: Automatically computes the background color of each cell based on its intensity (value / max_value) relative to the provided `colorScheme` base color, using modern CSS `color-mix(in srgb, ...)`.
- **Physical Cell Hover**: When hovering over a cell, it animates with `transform: scale(1.25) translateY(-2px)` and applies a soft drop shadow, physically lifting it above its neighbors.
- **Spring Tooltip**: The tooltip enters using `scale(0.85) → scale(1)` with a `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve. It is positioned absolutely relative to the grid container to prevent clipping issues.
- **Dynamic Max Value**: Automatically calculates the maximum value in the dataset to scale the color intensities correctly.
- **Customizable Labels**: Supply string arrays for X and Y axis labels to annotate the grid.

## 🚀 How to use

```jsx
import InteractiveHeatmapGrid from './HeatmapGrid';
import './style.css';

// 2D Array of numeric data (e.g. 7 days x 5 weeks)
const data = [
  [0, 5, 12, 0, 1],
  [2, 0, 15, 8, 3],
  // ...
];

const yLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const xLabels = ['W1', 'W2', 'W3', 'W4', 'W5'];

const MyDashboard = () => (
  <InteractiveHeatmapGrid
    data={data}
    xLabels={xLabels}
    yLabels={yLabels}
    colorScheme="#10b981" // GitHub Green
  />
);
```

## ⚙️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array<Array<number>>` | `[]` | 2D array of numeric values representing the grid |
| `xLabels` | `Array<string>` | `[]` | Top X-axis labels (rotated vertically) |
| `yLabels` | `Array<string>` | `[]` | Left Y-axis labels |
| `colorScheme` | `string` | `'#3b82f6'` | CSS color string used as the maximum intensity color |

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

Data visualizations can often feel sterile and flat. By adding a physical hover effect to the cells — a slight scale and upward lift (`scale(1.25) translateY(-2px)`) — the user feels like they are interacting with physical blocks of data. The tooltip entrance uses our signature `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve to "pop" out of the hovered cell, creating a cohesive, tactile experience that encourages exploration of the data.
