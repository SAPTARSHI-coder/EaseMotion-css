# React Analytics Metric Card with Animated Counter

## Description

A reusable React component that displays an analytics metric card with a smooth animated counter. The counter automatically increases from **0** to a target value using React Hooks and EaseMotion CSS animation utilities.

---

## Features

- Animated counter
- Built with React Hooks (`useState` and `useEffect`)
- Automatic counting animation
- Uses EaseMotion CSS animation utilities
- Copy-paste ready
- No external dependencies

---

## Installation

Copy the `AnalyticsMetricCard.jsx` file into your React project.

---

## Usage

```jsx
import AnalyticsMetricCard from "./AnalyticsMetricCard";

function App() {
  return (
    <div>
      <AnalyticsMetricCard />
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
- React Hooks (`useState`, `useEffect`)
- EaseMotion CSS Animation Utilities

---

## EaseMotion Classes Used

- `ease-fade-in`
- `ease-scale-in`

---

## Component Behavior

- Starts the counter from **0**.
- Automatically counts up to the target value.
- Stops the animation once the target is reached.
- Uses a smooth counting animation powered by `setInterval`.
- Cleans up the interval when the component unmounts.

---

## Folder Structure

```
analytics-metric-card-with-animated-counter-react/
│── AnalyticsMetricCard.jsx
└── README.md
```

---

## Concepts Used

- React `useState` for managing the counter state.
- React `useEffect` for starting the animation when the component loads.
- `setInterval` for incrementing the counter.
- Cleanup function to prevent memory leaks.

---

## License

This component is created for the EaseMotion CSS React Track and is intended for learning and reuse.