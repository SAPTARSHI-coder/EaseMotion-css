# React Tooltip - Elastic Slide for Visual Editor Layouts

A reusable React Tooltip component with Elastic Slide animation designed for visual editors, design tools, and creative workspace interfaces.

## Features

- Smooth Elastic Slide interaction
- Visual editor focused styling
- React component based
- Multiple tooltip positions
- EaseMotion utility class support
- Simple customization


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | String | Visual Editor Tool | Tooltip content |
| position | String | top | Tooltip placement |
| children | ReactNode | Required | Trigger element |


## Usage

```jsx
import ReactTooltip from "./ReactTooltip";
import "./style.css";


function App(){

 return(
   <ReactTooltip
      text="Change layer settings"
      position="top"
   >
      <button>
        Edit Layer
      </button>
   </ReactTooltip>
 );

}

export default App;