# React Tooltip - Elastic Slide for Task Management Layouts

A reusable React Tooltip component with Elastic Slide animation designed for task management dashboards, project boards, and productivity applications.

## Features

- Smooth Elastic Slide animation
- Task management focused UI
- Lightweight React component
- Multiple tooltip positions
- EaseMotion utility class integration
- Easy customization


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | String | Task Management Tooltip | Tooltip message |
| position | String | top | Tooltip placement |
| children | ReactNode | Required | Element triggering tooltip |


## Usage

```jsx
import ReactTooltip from "./ReactTooltip";
import "./style.css";


function App(){

 return(
   <ReactTooltip
      text="Move task to completed"
      position="top"
   >
      <button>
        Complete Task
      </button>
   </ReactTooltip>
 );

}

export default App;