# Kinetic Toggle Switch

A highly interactive, physically-inspired toggle switch that uses CSS properties (like springy `cubic-bezier` curves) to create a satisfying kinetic effect when clicked.

## Features
- **Pure CSS**: No JavaScript required, uses the `checkbox` hack for state management.
- **Kinetic Squish**: The toggle thumb squishes when pressed (active state) and snaps into place using a spring-like cubic bezier transition.
- **Icon Transitions**: Icons inside the thumb scale and rotate in/out playfully when toggled.
- **Theme Variants**: Easily customizable colors (e.g., primary blue, purple, rose) using CSS variables or modifier classes.
- **Accessible**: Uses `focus-visible` to ensure keyboard navigation remains visible and clear.

## Files
- `demo.html`: The markup for the toggles and their layout.
- `style.css`: The styles powering the kinetic animations and visuals.

## Usage
Simply drop the `.ease-kinetic-toggle` HTML structure into your project and link the provided `style.css`. Adjust the `.ease-kinetic-track-*` classes to easily change the active colors.
