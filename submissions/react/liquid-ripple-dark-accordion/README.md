# Liquid Ripple Dark Accordion

A React accordion component with a smooth liquid ripple transition designed for dark minimalist layouts.

## Features

- React based component
- Smooth expand/collapse animation
- Uses EaseMotion utility classes
- Dark UI friendly design

## Usage

```jsx
import LiquidRippleAccordion from "./LiquidRippleAccordion";

const data = [
  {
    title: "What is EaseMotion?",
    content: "An animation-first CSS utility library."
  },
  {
    title: "Why use this component?",
    content: "It provides smooth interactive layouts."
  }
];

function App() {
  return (
    <LiquidRippleAccordion items={data} />
  );
}