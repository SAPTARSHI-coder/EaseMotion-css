# Liquid Ripple Organic Accordion

A React accordion component with a smooth Liquid Ripple interaction effect,
designed for Organic Craft inspired layouts.

## Features

- React reusable component
- Liquid ripple animation
- EaseMotion utility class support
- Customizable accordion items
- Lightweight implementation

## Installation

Copy the component folder into your React project.

## Props

| Prop | Type | Description |
|------|------|-------------|
| items | Array | Accordion data collection |

## Usage

```jsx
import LiquidRippleOrganicAccordion from "./LiquidRippleOrganicAccordion";

const items = [
  {
    title: "Natural Materials",
    content: "Explore organic materials and handcrafted designs."
  },
  {
    title: "Craft Process",
    content: "Learn about traditional creative processes."
  }
];

function App() {
  return (
    <LiquidRippleOrganicAccordion items={items} />
  );
}

export default App;