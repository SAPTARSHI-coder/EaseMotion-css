# Blur Checkbox Hover Example

## Description
This is a standard HTML/CSS example demonstrating a custom checkbox design that employs a subtle "blur" hover effect. When the user hovers over the label or checkbox, the checkbox outline softens and glows slightly via a CSS filter, providing modern, tactile feedback.

## Files
- `demo.html`: Contains standard, accessible markup tying a hidden `<input type="checkbox">` to a `<label>` using the `for` attribute.
- `style.css`: Hides the default checkbox and recreates it using the `::before` pseudo-element on the label. Applies the hover blur effect and manages the checked state.

## How It Works
1. The default checkbox is hidden visually but remains in the DOM for keyboard access.
2. The `::before` pseudo-element on `.blur-checkbox-label-ag` acts as the visual box.
3. On hover (`.blur-checkbox-label-ag:hover::before`), a CSS `filter: blur(1px)` and a box-shadow are applied. The transition makes the blur fade in smoothly, softening the edges of the box.
4. When checked (`:checked + label::before`), the background color turns blue and an SVG checkmark is applied via `background-image`.

## Accessibility Considerations
- Fully semantic `<input type="checkbox">` linked to a `<label>`.
- The native checkbox is hidden via `opacity: 0` and `width: 0` rather than `display: none` so it remains keyboard focusable.
- A `:focus-visible` outline is provided.
- **Reduced Motion**: Disables the blur and glow transitions via `@media (prefers-reduced-motion: reduce)`. The hover state safely falls back to a simple, instant border color change.
