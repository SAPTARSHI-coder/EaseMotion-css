# Pop Stepper Component

A lightweight React stepper component featuring a smooth pop animation for the active step.

## Features

- Animated active step indicator
- Completed step states
- Clean reusable React component
- Semantic HTML structure
- Accessible progress navigation
- Supports reduced motion preferences

## Installation

Copy `PopStepper.jsx` and `style.css` into your React project.

## Usage

```jsx
import PopStepper from "./PopStepper";

const steps = [
  "Account",
  "Profile",
  "Confirmation"
];

function App() {
  return (
    <PopStepper
      steps={steps}
      currentStep={2}
    />
  );
}

export default App;
