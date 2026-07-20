# RubberBand Input Example (Standard)

## Description
A standard HTML/CSS example of an input field that uses a "RubberBand" attention-seeking animation. The animation triggers when the input receives focus, and also when it enters an `:invalid` state (after the user has started typing, avoiding yelling at them before they begin). The rubberband effect squishes and stretches the element to draw the user's eye.

## Files
- `demo.html`: Contains the email input field and label.
- `style.css`: Uses `@keyframes rubberband-ag` (scaling X and Y inversely to simulate elasticity) and CSS pseudo-classes (`:focus`, `:invalid`, `:not(:placeholder-shown)`) to apply the animation statefully.

## Accessibility
- Proper label-to-input association using `for` and `id`.
- Outlines and borders clearly indicate focus and invalid states through color and box-shadow.
- **Reduced Motion**: Disables the bouncing scale transformations. Relies purely on the color changes (blue for focus, red for invalid) to convey state changes without triggering motion sickness.
