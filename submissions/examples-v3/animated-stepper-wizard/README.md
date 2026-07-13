# Animated Stepper / Wizard Component

A clean, modern, and fully responsive **Stepper / Wizard Component** perfect for multi-step processes like checkouts, onboarding flows, or application forms. This example demonstrates how to combine **EaseMotion CSS** for bouncy completion checkmarks, pulsing active indicators, and staggered entrances to create a clear, engaging progress tracker.

## 🚀 Features

- **Bouncy Completion Checkmarks**: Completed steps use `ease-bounce-in` to playfully pop the checkmark into view.
- **Pulsing Active Indicator**: The current step circle uses `ease-pulse` to subtly draw the user's attention to where they are in the process.
- **Staggered Content Entrances**: The form fields and navigation buttons fade in sequentially using `ease-fade-in-up` and `ease-delay-*`.
- **Smooth Connecting Lines**: The lines between steps change color to indicate completed progress.
- **Interactive Hover States**: Uses `ease-hover-grow` on the navigation buttons for satisfying tactile feedback.
- **Responsive Vertical Layout**: On mobile devices, the stepper automatically switches to a vertical layout for better readability.
- **Clean Form Design**: Includes a responsive 2-column grid for form inputs with smooth focus states.

## 📂 File Structure

```text
submissions/examples/animated-stepper-wizard/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for stepper layout, form styling, and responsive behavior
└── README.md    # Documentation