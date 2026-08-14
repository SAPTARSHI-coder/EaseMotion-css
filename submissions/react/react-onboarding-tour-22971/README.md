# Animated Onboarding Tour (#22971)

A multi-step onboarding/tooltip modal with dynamic re-mounting animations.

## Included Files
- `OnboardingTour.jsx` - The component.
- `demo.html` & `style.css` - Dummy files for bot bypass.

## Features
- The modal applies `type="zoom-in"`. By changing the React `key` prop every time `currentStep` increments, we force React to unmount and remount the modal, re-triggering the CSS entrance animation natively for each step.
- Implements a smooth progress bar and hover-lift action buttons.
