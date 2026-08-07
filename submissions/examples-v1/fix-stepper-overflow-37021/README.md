# Fix Stepper Overflow on Mobile

This submission resolves issue #37021.

## The Bug
The horizontal stepper/timeline container used a fixed `width: 600px`. On viewports smaller than 480px, this caused horizontal overflow, forcing the browser to render an ugly horizontal scrollbar and breaking the page layout on mobile devices.

## The Fix
This submission demonstrates a responsive, overflow-safe implementation of the animated stepper.
1. Replaced the fixed `width: 600px` with a fluid `width: 100%; max-width: 600px;`.
2. Implemented a media query (`@media (max-width: 480px)`) that transforms the horizontal flex layout into a vertical stack (`flex-direction: column`), ensuring the stepper remains usable and visually appealing on the smallest of screens.

## File Structure
- `demo.html`: Contains the responsive stepper HTML structure.
- `style.css`: Contains the updated, fluid layout rules and responsive media queries.
