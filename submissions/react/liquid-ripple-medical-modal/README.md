# Liquid Ripple Medical Modal

A React modal component with a smooth Liquid Ripple animation
for Medical Dashboard interfaces.

## Features

- React reusable modal component
- Liquid ripple pulse animation
- Glassmorphism dashboard style
- EaseMotion utility class integration

## Component

`LiquidRippleMedicalModal.jsx`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| title | string | Medical Dashboard | Modal heading |
| children | ReactNode | Health details | Custom content |

## Usage

```jsx
import LiquidRippleMedicalModal from "./LiquidRippleMedicalModal";

function App() {
  return (
    <LiquidRippleMedicalModal title="Patient Overview">
      <p>Patient status: Stable</p>
    </LiquidRippleMedicalModal>
  );
}

export default App;