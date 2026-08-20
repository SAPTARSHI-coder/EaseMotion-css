# Animated Stepper/Progress Indicator Submission

## 1. What does this do?
It provides a modern, animated stepper/progress indicator component with multiple layouts (horizontal, vertical, mini) for tracking progress through multi-step processes like checkout flows, registration wizards, and setup guides.

## 2. How is it used?
Wrap your steps in a `.stepper` container with appropriate layout class (`.stepper-horizontal`, `.stepper-vertical`, or `.stepper-mini`). Each step uses `.step` class with `.step-indicator` and `.step-content`. Steps can have states: `completed`, `active`, or default (upcoming). Connecting lines use `.step-line` class.

## 3. Why is it useful?
- Essential component for multi-step processes (checkout, registration, setup)
- 3 different layouts: horizontal, vertical, and mini
- Smooth animations between step states (completed, active, upcoming)
- Visual progress tracking with animated connecting lines
- Pulse animation on active step for attention
- Step details support for additional information
- Interactive demo with navigation controls
- Fully responsive design for all devices
- Accessible with `prefers-reduced-motion` support
- Easy to customize colors, sizes, and content
- Maintainer can easily standardize this as `.ease-stepper-[YOUR_INITIALS]` in the core library.