# Animated Progress Stepper

A clean, modern, and fully responsive **Progress Stepper/Wizard** component perfect for multi-step forms, checkout flows, and onboarding processes. This example demonstrates how to combine **EaseMotion CSS** staggered entrance animations with custom CSS transitions to create smooth step indicators and connecting lines that guide users through a process.

## 🚀 Features

- **Staggered Step Entrance**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so each step and connecting line appears sequentially on page load.
- **Three Visual States**: Clear distinction between completed (green checkmark), active (pulsing indigo), and upcoming (gray) steps.
- **Animated Connecting Lines**: Lines between steps smoothly fill with color as steps are completed using CSS transitions.
- **Pulsing Active Indicator**: The current step has a continuous pulse animation to draw attention.
- **Interactive Form**: Includes a mock form with input fields and navigation buttons using `ease-hover-grow` for tactile feedback.
- **Fully Responsive**: On mobile devices, the stepper rotates to a vertical layout for better readability.

## 📂 File Structure

```text
submissions/examples/animated-progress-stepper/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for stepper layout, states, and responsive behavior
└── README.md    # Documentation