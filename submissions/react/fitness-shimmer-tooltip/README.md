# React Tooltip Component with Shimmer Pulse

A premium, animated tooltip component designed specifically for Fitness Tracker UI layouts. It leverages a smooth shimmering pulse effect to draw attention to vital fitness stats (like Heart Rate, Calories, or Steps).

## Features
- 🌟 **Shimmer Pulse Effect**: Built-in CSS animation for a high-tech fitness tracker feel.
- 🎨 **Theming**: Supports multiple glowing themes (`cyan`, `green`, `orange`).
- ⚡ **EaseMotion Integration**: Utilizes `ease-fade-in` and `ease-zoom-in` utility classes for smooth mounting interactions.
- 📐 **Flexible Positioning**: Supports `top`, `bottom`, `left`, and `right` placements.

## Props

| Prop         | Type      | Default  | Description                                                                 |
|--------------|-----------|----------|-----------------------------------------------------------------------------|
| `children`   | `node`    | Required | The trigger element that the tooltip wraps (e.g., a button or icon).        |
| `content`    | `node`    | Required | The text or elements to display inside the tooltip.                         |
| `position`   | `string`  | `'top'`  | Where the tooltip appears relative to the target (`top`, `bottom`, `left`, `right`).|
| `colorTheme` | `string`  | `'cyan'` | The accent color of the shimmer and shadow (`cyan`, `green`, `orange`).     |

## Usage Example

```jsx
import React from 'react';
import FitnessTooltip from './FitnessTooltip';

const FitnessDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Daily Activity</h2>
      
      <div className="stats-row">
        {/* Cyan Theme - Top Position */}
        <FitnessTooltip 
          content={<span>❤️ Heart Rate: 124 bpm</span>} 
          position="top" 
          colorTheme="cyan"
        >
          <button className="stat-card ease-hover-lift">Active Heart Rate</button>
        </FitnessTooltip>

        {/* Orange Theme - Bottom Position */}
        <FitnessTooltip 
          content={<span>🔥 Calories Burned: 450 kcal</span>} 
          position="bottom" 
          colorTheme="orange"
        >
          <button className="stat-card ease-hover-lift">Morning Run Workout</button>
        </FitnessTooltip>
      </div>
    </div>
  );
};

export default FitnessDashboard;