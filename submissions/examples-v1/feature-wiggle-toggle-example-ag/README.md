# Wiggle Toggle Example

## Description
This example provides a pure HTML/CSS implementation of a custom toggle switch with an engaging "wiggle" animation on hover. When a user hovers over the toggle area, the switch component performs a playful wiggle, drawing attention to its interactive nature.

## Files Provided
- `demo.html`: The HTML structure containing the accessible checkbox-based toggle switch.
- `style.css`: The CSS that styles the toggle state, sets up the layout, and defines the keyframes for the wiggle animation.

## How to Run
Open `demo.html` in any modern web browser to see the animation in action.

## Implementation Details
- **Accessible Structure:** The toggle relies on a visually hidden, but focusable, `<input type="checkbox">` connected to a `<label>`. This ensures the toggle can be activated via mouse, touch, or keyboard (Spacebar).
- **CSS State:** The `+` sibling selector is used to transition the switch background and knob position when the hidden checkbox becomes `:checked`.
- **Wiggle Animation:** When the `.toggle-wrapper-ag` is hovered, the `.ease-wiggle-target-ag` element receives the `ease-wiggle-keyframes-ag` animation, rotating slightly left and right.
- **Accessibility (Reduced Motion):** If `prefers-reduced-motion: reduce` is detected, the wiggle animation and the state transition durations are disabled to respect user preferences.
