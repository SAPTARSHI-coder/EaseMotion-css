# Multi-Step Form Wizard Submission

## 1. What does this do?
It provides a modern, animated multi-step form wizard with progress indicators, step navigation, and smooth transitions. Perfect for checkout flows, registration wizards, and onboarding experiences.

## 2. How is it used?
Wrap your form content in `.form-step` containers with `data-step` attributes. Use the step indicators (`.step-indicator`) to show progress. JavaScript handles navigation between steps and updates the UI automatically.

## 3. Why is it useful?
- Essential for multi-step processes (checkout, registration, onboarding)
- Visual progress tracking with animated progress bar
- Step indicators show completed, active, and pending states
- Smooth fade-in animations when switching steps
- Fully responsive design for mobile devices
- Includes success/completion state
- Accessible with proper form labels and ARIA attributes
- Includes `prefers-reduced-motion` support for accessibility
- Easy to customize and extend
- Maintainer can easily standardize this as `.ease-wizard-[YOUR_INITIALS]` in the core library.