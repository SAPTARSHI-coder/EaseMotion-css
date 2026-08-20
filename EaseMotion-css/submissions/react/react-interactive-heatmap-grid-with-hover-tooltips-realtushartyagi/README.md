# Interactive Heatmap Grid with Hover Tooltips

## Overview

A lightweight, copy‑paste ready **React** component that renders an interactive heatmap grid. Each cell’s background color is mapped to a numeric value using a simple blue‑to‑red gradient. Hovering a cell displays a tooltip with the cell’s value and its row/column coordinates. The component is built with **React hooks** and **EaseMotion CSS** utilities – no external dependencies beyond React.

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `rows` | `number` | yes | Number of rows in the heatmap.
| `cols` | `number` | yes | Number of columns in the heatmap.
| `data` | `number[][]` | yes | 2‑D array of numeric values (`rows × cols`).
| `maxValue` | `number` | no | Upper bound for color scaling. Defaults to the max value in `data`.
| `minValue` | `number` | no | Lower bound for color scaling. Defaults to the min value in `data`.
| `onCellHover` | `(value: number, row: number, col: number) => void` | no | Callback fired when a cell is hovered.

## Installation

1. Copy the folder `react-interactive-heatmap-grid-with-hover-tooltips-realtushartyagi` into your project’s `submissions/react/` directory.
2. Import the component and the accompanying stylesheet:

```jsx
import HeatmapGrid from './react-interactive-heatmap-grid-with-hover-tooltips-realtushartyagi/HeatmapGrid.jsx';
import './react-interactive-heatmap-grid-with-hover-tooltips-realtushartyagi/style.css';
```

## Basic Usage

```jsx
import React from 'react';
import HeatmapGrid from './HeatmapGrid.jsx';
import './style.css';

const rows = 5;
const cols = 7;
const data = [
  [10, 20, 30, 40, 50, 60, 70],
  [15, 25, 35, 45, 55, 65, 75],
  // ... more rows
];

function App() {
  return (
    <HeatmapGrid rows={rows} cols={cols} data={data} />
  );
}

export default App;
```

## Styling & Animations

The component uses the following EaseMotion CSS utilities:
- `ease-fade-in-up` for the tooltip entrance animation.
- Subtle `transform` and `box-shadow` transitions on hover for each cell.
- An optional grid‑level entrance animation defined in `style.css`.

All styles live in `style.css`; feel free to adjust the cell size, spacing, or color interpolation logic.

## Demo

Open `demo.html` in a browser (no server required). The demo uses Babel’s standalone compile to showcase the component with randomly generated data.

## Why it fits EaseMotion CSS

EaseMotion emphasizes **hardware‑accelerated CSS** for rich interactions while allowing JavaScript to handle state. This heatmap follows that philosophy: JavaScript computes the colour scale and tooltip positioning, while all visual effects—fade‑ins, hover scaling, and entrance animation—are pure CSS, ensuring smooth performance across browsers.
