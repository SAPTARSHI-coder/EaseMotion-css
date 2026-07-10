# Liquid Ripple Editorial Accordion

A React Accordion component with a smooth Liquid Ripple interaction effect,
designed for Sleek Editorial layouts.

## Features

- React based reusable accordion
- Liquid ripple transition animation
- EaseMotion utility class support
- Simple props configuration
- Lightweight implementation

## Props

| Prop | Type | Description |
|------|------|-------------|
| items | Array | Accordion items containing title and content |

## Usage

```jsx
import LiquidRippleEditorialAccordion from "./LiquidRippleEditorialAccordion";

const items = [
  {
    title: "Editorial Design",
    content: "Create clean and modern article layouts."
  },
  {
    title: "Typography",
    content: "Enhance readability with elegant typography."
  }
];

function App() {
  return (
    <LiquidRippleEditorialAccordion items={items} />
  );
}

export default App;