# Swing Checkbox Example

## Description
A standard HTML/CSS example demonstrating a custom checkbox where the checkmark "swings" in from the top (like a hinge) when selected. This 3D-like entrance animation gives the interaction a lively and satisfying feel.

## Files
- `demo.html`: A custom styled checkbox using a hidden native input and an SVG checkmark.
- `style.css`: Uses a `rotateX` keyframe animation (`swing-entrance-ag`) applied to the SVG when the hidden input is checked.

## Accessibility
- Uses a native `<input type="checkbox">` visually hidden with CSS but fully accessible to screen readers and keyboards.
- Applies a focus ring on the custom box when the native input receives `:focus-visible`.
- **Reduced Motion**: Disables the 3D swing animation entirely, showing the checkmark instantly upon checking.
