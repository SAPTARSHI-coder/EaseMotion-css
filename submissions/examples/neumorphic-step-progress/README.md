# Neumorphic Step Progress Bar

A clean, modern horizontal step progress tracker built using the "Neumorphism" design system. It visually represents a multi-step process (like a checkout flow or a signup wizard), showing completed steps, the current active step, and future steps.

## Features
- Pure CSS implementation
- Beautiful neumorphic depth effects using both inset and outset `box-shadow` properties
- Animated background progress line that fills up to the current step
- Three distinct CSS states (`.active`, `.current`, and default) for easy JavaScript integration

## Usage
Add the HTML structure and the accompanying `style.css` to your project. To change the state of a step, simply toggle the CSS classes:
- Add the `active` class to a `.step` when the user has completed it.
- Add the `current` class to a `.step` to indicate the user is currently on it.
- Remove both classes for future, incomplete steps.
Modify the `calc()` percentage in the `.step-progress::after` CSS rule to dynamically adjust the width of the animated line based on the number of steps completed.
