# Bounce Checkbox Example

## Description
A standard HTML/CSS example demonstrating a "Bounce" interactive state animation for a custom checkbox. When checked, the checkbox dips down slightly before bouncing back to its normal scale, giving satisfying tactile feedback, while the checkmark SVG draws itself.

## Files
- `demo.html`: Structure hiding the native checkbox while pairing it with a styled SVG container.
- `style.css`: Uses a `scale()` keyframe animation on the checked state to create the bounce, and animates `stroke-dashoffset` for the checkmark.

## Accessibility
- Wraps the native `<input type="checkbox">` in a `<label>` to retain standard keyboard interaction, screen reader semantics, and focus management.
- Exposes `:focus-visible` styles to indicate keyboard focus.
- **Reduced Motion**: Disables the scale bounce and SVG drawing animation via `@media (prefers-reduced-motion: reduce)`.
