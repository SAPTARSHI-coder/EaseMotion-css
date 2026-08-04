# Liquid Ripple Corporate Accordion

A React Accordion component with a smooth Liquid Ripple animation
designed for modern corporate layouts.

## Features

- React reusable accordion
- Liquid ripple motion effect
- Smooth expand/collapse animation
- EaseMotion utility class support

## Files

- LiquidRippleCorporateAccordion.jsx
- style.css

## Props

| Prop | Type | Description |
|------|------|-------------|
| items | Array | Accordion data with title and content |

## Usage

```jsx
import LiquidRippleCorporateAccordion from "./LiquidRippleCorporateAccordion";

function App() {
  const data = [
    {
      title: "Company Overview",
      content: "Modern corporate information."
    },
    {
      title: "Services",
      content: "Business solutions and products."
    }
  ];

  return (
    <LiquidRippleCorporateAccordion items={data} />
  );
}

export default App;