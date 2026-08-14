# React Interactive Heatmap Grid with Hover Tooltips

A modular, copy-paste ready React component that renders a GitHub-style contribution heatmap with animated hover tooltips and dynamic cell scaling, powered by **EaseMotion CSS**.

## Files
- `HeatmapGrid.jsx` – Core React component managing grid rendering and active hover state.
- `style.css` – EaseMotion CSS styles: `easeHmTooltipFadeIn` animation and `transform: scale()` transitions.
- `demo.html` – Standalone HTML demo using Babel and React CDNs — no server required.

## Installation
1. Copy the folder into your project.
2. Import the component:
   ```jsx
   import HeatmapGrid from "./HeatmapGrid.jsx";
   ```
3. Link the stylesheet:
   ```html
   <link rel="stylesheet" href="./style.css" />
   ```

## Usage
```jsx
import React from 'react';
import HeatmapGrid from './HeatmapGrid';

const data = [
  { label: 'commits', value: 12, date: 'Oct 1, 2023' },
  { label: 'commits', value: 0,  date: 'Oct 2, 2023' },
  { label: 'commits', value: 5,  date: 'Oct 3, 2023' },
];

function App() {
  return (
    <HeatmapGrid data={data} columns={7} />
  );
}
```

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `Array` | `[]` | Cell items: `{ label, value, date }`. |
| `columns` | `number` | `7` | Sets the CSS grid columns. |
| `colorRange` | `Array<string>` | `['#ebedf0', ...]` | 5-color array representing intensity from lowest (0) to highest. |

## Why it fits EaseMotion CSS
All interactions are powered by pure CSS. Hovering a cell triggers a `transform: scale(1.4)` jump with an elastic `cubic-bezier` transition. The tooltip appears via an `@keyframes` animation (`easeHmTooltipFadeIn`) sliding up and fading in. React simply handles mapping the data and tracking which cell is hovered.

## Demo
Open `demo.html` directly in a browser — no server needed.

---

> **Note:** PR modifies only files inside `submissions/react/react-interactive-heatmap-grid-with-hover-tooltips-realtushartyagi-28168/`. No changes to `core/` or `components/`.
