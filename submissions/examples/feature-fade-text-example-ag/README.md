# Fade Text Example

## Description
This is a standard HTML/CSS example demonstrating a "Fade" interactive state animation for typography. When hovered or focused, the text gracefully fades to a brighter color and gains a subtle text-shadow, creating an elegant highlighting effect.

## Files
- `demo.html`: Contains the text element with `tabindex="0"` to ensure it can receive focus.
- `style.css`: Uses CSS transitions to smoothly animate the `color` and `text-shadow` properties on `:hover` and `:focus-visible`.

## Accessibility
- Uses `:focus-visible` and an underline to ensure keyboard users clearly see when the text is focused.
- **Reduced Motion**: Disables the transition duration via `@media (prefers-reduced-motion: reduce)`, making the color change instantaneous.
