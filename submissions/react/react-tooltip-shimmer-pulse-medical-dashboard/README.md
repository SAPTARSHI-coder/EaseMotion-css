# React Tooltip - Shimmer Pulse for Medical Dashboard Layouts

A reusable React Tooltip component with Shimmer Pulse animation designed for medical dashboards, healthcare applications, patient monitoring systems, and health analytics interfaces.

## Features

- Smooth Shimmer Pulse animation
- Medical dashboard focused design
- Health metric highlighting
- React reusable component
- Multiple tooltip positions
- EaseMotion utility class integration


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | String | Patient Health Status | Tooltip message |
| position | String | top | Tooltip placement |
| children | ReactNode | Required | Trigger element |


## Usage

```jsx
import ReactTooltip from "./ReactTooltip";
import "./style.css";

function App() {

  return (
    <ReactTooltip
      text="Heart rate: 72 BPM"
      position="top"
    >
      <button>
        Health Status
      </button>
    </ReactTooltip>
  );

}

export default App;