# React Statistic Comparison Card with Trend Indicator Motion

A reusable React component displaying current and previous statistics with an animated trend indicator.

## Features

- React Hooks
- Animated trend indicator
- Current & previous values
- Up / Down trend badges
- Responsive layout
- CSS animation
- No external dependencies

## Installation

```jsx
import StatisticComparisonCard from "./StatisticComparisonCard";
import "./style.css";
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| title | string | Card title |
| currentValue | string | Current statistic |
| previousValue | string | Previous statistic |
| percentage | string | Trend percentage |
| trend | `"up"` or `"down"` | Trend direction |

## Usage

```jsx
<StatisticComparisonCard
  title="Revenue"
  currentValue="$48,500"
  previousValue="$44,200"
  percentage="+9.7%"
  trend="up"
/>
```

## Files

- StatisticComparisonCard.jsx
- style.css
- README.md

## Requirements

- React
- No external libraries