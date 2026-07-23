# Jello Input Example

## Description
A standard HTML/CSS example demonstrating a "Jello" exit animation applied to an input field and submit button. When the user submits the form, the input block wobbles (jellos) and then disappears. This can add a playful, celebratory feel when a user successfully subscribes or submits data.

## Files
- `demo.html`: Contains the input, button, and a small script to trigger the exit class.
- `style.css`: Uses a multi-step `@keyframes` animation altering `skewX` and `skewY`, ending with an `opacity: 0` fade out to produce the jello exit.

## Accessibility
- Input uses an associated `<label>` (visually hidden) for screen reader support.
- Standard focus rings are maintained on the input and button.
- **Reduced Motion**: Disables the complex skew animation, falling back to a subtle, simple opacity fade out.
