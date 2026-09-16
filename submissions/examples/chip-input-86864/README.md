# Chip Input Component (#86864)

An interactive tag/chip input field that converts entered text into removable pill chips with entrance pop physics, duplicate prevention, and keyboard shortcut navigation.

## Features
- **Elastic Pop Transitions:** Smooth entrance scaling using `transform: scale()` with spring overshoot keyframes.
- **Dynamic Chip Removal:** Individual dismissal with fade/collapse transitions and backspace removal support.
- **Interactive Container Focus:** Synthetic focus ring applied to the multi-chip container when the embedded text field is active.
- **Accessibility:** Semantic ARIA delete buttons with keyboard Enter and Backspace handling.

## Usage
Include `style.css` in your project and structure the container using `.chip-input-container`.