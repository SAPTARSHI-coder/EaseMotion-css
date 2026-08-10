# React Tooltip - Shimmer Pulse for Fitness Tracker Layouts

A reusable React Tooltip component with Shimmer Pulse animation designed for fitness dashboards, workout tracking apps, health metrics, and progress interfaces.

## Features

- Smooth Shimmer Pulse animation
- Fitness dashboard focused UI
- Highlight workout achievements and stats
- React reusable component
- Multiple tooltip positions
- EaseMotion utility class support


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | String | Workout Completed! | Tooltip message |
| position | String | top | Tooltip placement |
| children | ReactNode | Required | Tooltip trigger element |


## Usage

```jsx
import ReactTooltip from "./ReactTooltip";
import "./style.css";

function App(){

 return (
   <ReactTooltip
      text="10,000 steps goal completed!"
      position="top"
   >
      <button>
        Daily Progress
      </button>
   </ReactTooltip>
 );

}

export default App;