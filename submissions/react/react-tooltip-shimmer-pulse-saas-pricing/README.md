# React Tooltip - Shimmer Pulse for SaaS Pricing Layouts

A reusable React Tooltip component with a Shimmer Pulse animation designed for SaaS pricing cards, subscription plans, and premium feature showcases.

## Features

- Shimmer Pulse animation
- SaaS pricing focused design
- Premium gradient styling
- React component based
- Multiple tooltip positions
- EaseMotion utility class integration


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | String | Premium Plan Feature | Tooltip message |
| position | String | top | Tooltip placement |
| children | ReactNode | Required | Trigger element |


## Usage

```jsx
import ReactTooltip from "./ReactTooltip";
import "./style.css";


function App(){

 return(
   <ReactTooltip
      text="Unlock advanced analytics"
      position="top"
   >
      <button>
        Premium Plan
      </button>
   </ReactTooltip>
 );

}

export default App;