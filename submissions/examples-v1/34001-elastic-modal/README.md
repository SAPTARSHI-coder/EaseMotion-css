# Elastic Bounce Glass Modal

A pure CSS modal component featuring a "Glassmorphism" blur effect and an elastic bounce transition.

## Features
- **Glassmorphism:** Uses `backdrop-filter: blur()` for a frosted glass look.
- **Elastic Animation:** Uses a `cubic-bezier` timing function for the overshooting bounce effect.
- **Zero JS:** Uses the `:target` pseudo-class for state management.

## Usage
Add the `modal-container` class to your modal div and link it using an `<a>` tag with the corresponding ID.