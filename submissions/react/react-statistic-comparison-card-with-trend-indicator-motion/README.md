# React Statistic Comparison Card with Trend Indicator Motion

## Description

A reusable React component that compares two statistical values and displays the overall trend using percentage calculations and visual trend indicators. Built with React Hooks and EaseMotion CSS animation utilities for smooth transitions.

---

## Features

- Compare current and previous values
- Automatic percentage calculation
- Displays value difference
- Trend indicator (Increase / Decrease)
- Performance status message
- Uses EaseMotion CSS animations
- Copy-paste ready component
- No external dependencies

---

## Installation

Copy the `StatisticComparisonCard.jsx` file into your React project.

---

## Usage

```jsx
import StatisticComparisonCard from "./StatisticComparisonCard";

function App() {
  return (
    <div>
      <StatisticComparisonCard />
    </div>
  );
}

export default App;
```

---

## Props

This component currently does not require any props.

---

## Technologies Used

- React
- React Hooks (`useState`)
- EaseMotion CSS Animation Utilities

---

## EaseMotion Classes Used

- `ease-fade-in`
- `ease-scale-in`

---

## Component Behavior

- Displays the current and previous values.
- Calculates the percentage increase or decrease.
- Shows the numerical difference between the values.
- Displays a visual trend indicator (📈 or 📉).
- Shows a simple performance status message.
- Includes a "Last Updated" section.

---

## Folder Structure

```text
react-statistic-comparison-card-with-trend-indicator-motion/
│── StatisticComparisonCard.jsx
└── README.md
```

---

## Concepts Used

- React `useState`
- Conditional Rendering
- Percentage Calculation
- Basic Arithmetic Operations
- JSX Rendering
- EaseMotion CSS Animations

---

## License

This component is created for the EaseMotion CSS React Track and is intended for learning and reuse.