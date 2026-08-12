# Step Progress Indicator

A four-step progress indicator with numbered circles and labels. Completed steps are filled in indigo with a connecting line, the active step has a ring highlight, and future steps are gray. Previous/Next buttons navigate between steps.

## EaseMotion CSS classes used

- `ease-flex` — page-level centering
- `ease-center` — vertical and horizontal centering

## How to run

Open `demo.html` in a browser. Click Next and Previous to move through the steps.

## Accessibility notes

Step numbers are rendered as text inside circles. Buttons are `<button>` elements and are disabled at boundaries. Reduced motion disables the circle transitions.
