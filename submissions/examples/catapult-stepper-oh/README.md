# Component: Catapult Stepper

This submission implements the Catapult Stepper for GSSoC issue **#42013**.

## Description

Animated stepper component with catapult bounce effects for music player interfaces.

## Features

- **Catapult Bounce**: Spring-like bounce on state change
- **Entrance Animation**: Staggered catapult entrance for each step
- **Active Pulse**: Continuous pulse on active step
- **Progress Track**: Visual progress indicator
- **Completed Check**: Animated checkmark for completed steps
- **Interactive Controls**: Previous/Next buttons for demo

## Usage

```html
<div class="stepper-container">
  <div class="stepper-track">
    <div class="stepper-progress"></div>
  </div>
  <div class="stepper-steps">
    <div class="step-item completed">
      <div class="step-circle">
        <span class="step-number">1</span>
        <svg class="check-icon">...</svg>
      </div>
      <span class="step-label">Step 1</span>
    </div>
    <div class="step-item active">
      <div class="step-circle">
        <span class="step-number">2</span>
      </div>
      <span class="step-label">Step 2</span>
    </div>
  </div>
</div>
```

## Step States

| State | Class | Appearance |
|-------|-------|------------|
| Default | none | Gray border, number visible |
| Active | `.active` | Blue, pulsing glow |
| Completed | `.completed` | Green, checkmark visible |

## Animations

### Catapult Bounce (on state change)
```css
@keyframes catapultBounce {
  0% { transform: scale(0.5); }
  50% { transform: scale(1.2); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}
```

### Catapult Entrance (on load)
```css
@keyframes catapultEntrance {
  0% {
    opacity: 0;
    transform: translateY(-30px) scale(0.5);
  }
  60% {
    transform: translateY(5px) scale(1.1);
  }
  80% {
    transform: translateY(-3px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

### Active Pulse
```css
@keyframes activePulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2); }
  50% { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.1); }
}
```

## JavaScript

```javascript
function nextStep() {
  currentStep++;
  updateStepper();
}

function prevStep() {
  currentStep--;
  updateStepper();
}
```

## Acceptance Criteria

- ✅ Catapult bounce animation on state change
- ✅ Staggered entrance animation
- ✅ Active step pulse effect
- ✅ Progress track visualization
- ✅ Completed checkmark animation
- ✅ README.md included
