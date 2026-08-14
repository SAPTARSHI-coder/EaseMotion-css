# React Multi-Step Onboarding Wizard with Slide Transitions

## Description
A modular, animated multi-step onboarding wizard component built with React. It dynamically manages slide directionality, triggering distinct entrance animations based on whether the user navigates forward (`slideInRight`) or backward (`slideInLeft`). It includes an animated progress bar, responsive layouts, and seamlessly leverages standard EaseMotion CSS utility classes for lightweight, 60fps animations.

## Component Props

| Prop | Type | Description |
|------|------|-------------|
| `steps` | `array` | Array of step objects. Format: `{ title: string, description: string, image?: string, content?: ReactNode }`. |
| `onComplete` | `function` | Callback triggered when the "Get Started" (or final step) button is clicked. |
| `onSkip` | `function` | (Optional) Callback triggered when the "Skip" button is clicked. If not provided, the skip button is hidden. |

## Usage Example

```jsx
import React from 'react';
import OnboardingWizard from './OnboardingWizard';
import 'easemotion.css'; // Ensure EaseMotion core CSS is imported globally

const App = () => {
  const wizardSteps = [
    {
      title: "Welcome to SmartGrid",
      description: "Take control of your renewable energy dispatch with intelligent, AI-driven insights.",
      image: "https://via.placeholder.com/180?text=Welcome",
    },
    {
      title: "Monitor in Real-Time",
      description: "Connect your solar, wind, and hydro networks to instantly view live output metrics.",
      image: "https://via.placeholder.com/180?text=Monitor",
    },
    {
      title: "Optimize Battery Storage",
      description: "Automatically route excess energy to battery banks during off-peak hours.",
      image: "https://via.placeholder.com/180?text=Battery",
    }
  ];

  const handleComplete = () => {
    console.log("Onboarding complete. Redirecting to dashboard...");
  };

  const handleSkip = () => {
    console.log("User skipped onboarding.");
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#f8fafc', padding: '2rem' }}>
      <OnboardingWizard 
        steps={wizardSteps} 
        onComplete={handleComplete} 
        onSkip={handleSkip} 
      />
    </div>
  );
};

export default App;
```

## Features & EaseMotion Integration
- **Directional Slide Transitions**: Relies on React state (`direction`) to dynamically apply `slide-in-right` or `slide-in-left` CSS classes, creating an intuitive left-to-right spatial mapping for step navigation.
- **`ease-fade-in`**: Used to smoothly render the wizard container upon initial mount and softly blend slide transitions.
- **`ease-float`**: Applied to the central step image to provide a subtle, continuous levitation effect that makes the UI feel alive.
- **`ease-pulse`**: Highlights the active step indicator dot in the footer.
- **`ease-hover-lift`**: Applied to all navigational buttons (Next, Back, Skip, Get Started) for tactile micro-interactions.
- **Zero External Dependencies**: Powered entirely by standard React hooks (`useState`, `useEffect`) and standard EaseMotion CSS keyframes. No external libraries like `react-swipeable-views` or `framer-motion` are required.
