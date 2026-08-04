# Fade Button Example (Standard)

## Description
A standard HTML/CSS button that implements a "Fade" Hover Effect. When hovered or focused, the button smoothly fades to a darker background color over `0.3s`, providing an elegant and non-distracting interactive state.

## Files
- `demo.html`: Contains the standard button element.
- `style.css`: Provides the styling and `transition` for the hover fade.

## Accessibility
- Uses a semantic `<button>` tag.
- Includes a clear `:focus-visible` state with `outline-offset` for keyboard navigation.
- **Reduced Motion**: The active scaling effect is removed, and the fade transition duration is reduced to `0.1s` to provide immediate feedback without animated delays.
