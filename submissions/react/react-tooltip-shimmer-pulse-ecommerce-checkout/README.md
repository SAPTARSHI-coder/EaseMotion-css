# React Tooltip - Shimmer Pulse for E-Commerce Checkout Layouts

A reusable React Tooltip component with Shimmer Pulse animation designed for e-commerce checkout pages, shopping carts, offers, and purchase experiences.

## Features

- Shimmer Pulse animation
- Checkout-focused design
- Offer and payment highlight support
- React component based
- Multiple tooltip positions
- EaseMotion utility class integration


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | String | Checkout Offer | Tooltip message |
| position | String | top | Tooltip placement |
| children | ReactNode | Required | Trigger element |


## Usage

```jsx
import ReactTooltip from "./ReactTooltip";
import "./style.css";


function App(){

 return(
   <ReactTooltip
      text="Free shipping unlocked!"
      position="top"
   >
      <button>
        Checkout Now
      </button>
   </ReactTooltip>
 );

}

export default App;