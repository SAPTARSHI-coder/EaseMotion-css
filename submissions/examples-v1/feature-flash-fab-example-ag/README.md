# Flash FAB Example

## Description
A standard HTML/CSS example demonstrating a "Flash" animation on a Floating Action Button (FAB). When hovered or focused, a bright sheen sweeps across the button, drawing attention to it as a primary action.

## Files
- `demo.html`: Contains the FAB markup, represented as a circular button with an SVG icon.
- `style.css`: Uses a pseudo-element (`::after`) with a white, semi-transparent background and a skew transform. The `@keyframes` animate its `left` property from `-100%` to `200%` to create the flash/sheen effect.

## Accessibility
- Uses `aria-label="Add item"` since the button relies on an icon without visible text.
- Provides a clear focus outline via `:focus-visible`.
- **Reduced Motion**: Disables the sweeping flash animation entirely, relying only on a background color change on hover.
