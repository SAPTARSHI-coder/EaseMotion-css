# Liquid Ripple Fitness Modal

A React modal component with a smooth Liquid Ripple animation,
designed for fitness tracker dashboards.

## Features

- React reusable component
- Liquid ripple pulse animation
- Glassmorphism fitness UI
- EaseMotion utility class support

## Files

- `LiquidRippleFitnessModal.jsx`
- `style.css`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | Fitness Progress | Modal heading |
| children | ReactNode | Default content | Custom modal content |

## Usage

```jsx
import LiquidRippleFitnessModal from "./LiquidRippleFitnessModal";

function App(){
  return (
    <LiquidRippleFitnessModal title="Workout Summary">
      <p>
        Calories burned: 500 kcal
      </p>
    </LiquidRippleFitnessModal>
  );
}

export default App;