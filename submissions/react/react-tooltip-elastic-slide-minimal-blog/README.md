# React Tooltip - Elastic Slide for Minimal Blog Layouts

A lightweight React Tooltip component with a smooth Elastic Slide animation designed for minimal blog interfaces and content-focused websites.

## Features

- Clean minimal design
- Smooth Elastic Slide animation
- React component based
- Multiple tooltip positions
- EaseMotion utility class usage
- Easy customization


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | String | Blog Tooltip | Tooltip message |
| position | String | top | Tooltip placement |
| children | ReactNode | Required | Trigger element |


## Usage

```jsx
import ReactTooltip from "./ReactTooltip";
import "./style.css";


function App(){

 return(
   <ReactTooltip
      text="Read article summary"
      position="top"
   >
      <button>
        Article Info
      </button>
   </ReactTooltip>
 );

}

export default App;