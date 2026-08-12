# React Interactive Pricing Tier Switcher (Monthly/Annual)

## Description

A reusable React component that allows users to switch between Monthly and Annual pricing plans. The component is built using React Hooks and EaseMotion CSS animation utilities with no external dependencies.

---

## Features

- Toggle between Monthly and Annual pricing
- Three pricing tiers (Basic, Pro, Premium)
- Dynamic price updates
- Built with React Hooks (`useState`)
- Uses EaseMotion CSS animation classes
- Copy-paste ready
- No external libraries required

---

## Installation

Copy the `PricingTierSwitcher.jsx` file into your React project.

---

## Usage

```jsx
import PricingTierSwitcher from "./PricingTierSwitcher";

function App() {
  return (
    <div>
      <PricingTierSwitcher />
    </div>
  );
}

export default App;
```

---

## Props

This component does not require any props.

---

## Technologies Used

- React
- React Hooks (`useState`)
- EaseMotion CSS Animation Utilities

---

## EaseMotion Classes Used

- `ease-fade-in`
- `ease-scale-in`


---

## Component Behavior

- Displays three pricing plans.
- Users can switch between **Monthly** and **Annual** pricing.
- Prices update instantly when the selected plan changes.
- Uses smooth EaseMotion CSS animations for transitions and interactions.

---

## Folder Structure

```
interactive-pricing-tier-switcher-monthly-annual-react/
│── PricingTierSwitcher.jsx
└── README.md
```

---

## License

This component is created for the EaseMotion CSS React Track and is intended for learning and reuse.