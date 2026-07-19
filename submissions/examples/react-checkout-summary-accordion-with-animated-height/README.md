# React Checkout summary Accordion wityh Animated Height

## Description
A reusable React component that displays a checkout summary in an accordion with smooth animated height transitions using EaseMotion CSS utilities.

## Features
- Smooth expand/collapse animation 
- React Hooks (useState)
- Reusable component
- Clean JSX structure
- No external dependencies except React and EaseMotion CSS

## Props

| Prop | Type | Description |
|------|------|-------------|
| title | string | Accordion heading |
| children | ReactNode | Content displayed inside the accordion |

## Usage

```jsx
import CheckoutSummaryAccordion from "./CheckoutSummaryAccordion";

function App() {
  return (
    <CheckoutSummaryAccordion title="Order Summary">
      <p>Total: $120</p>
    </CheckoutSummaryAccordion>
  );
}