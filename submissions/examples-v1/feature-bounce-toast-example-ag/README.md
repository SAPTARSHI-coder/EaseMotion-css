# Bounce Toast Example

## Description
A standard HTML/CSS example demonstrating a "Bounce" hover effect applied to a toast notification. When the user hovers over (or focuses on) the toast, it performs a subtle physical bounce upwards using a keyframe animation. This provides a tactile response indicating the element is interactive (e.g., clickable to dismiss).

## Files
- `demo.html`: The markup structure for a standard success toast.
- `style.css`: Uses `@keyframes bounce-up-ag` with `transform: translateY()` to create the bounce effect.

## Accessibility
- The toast includes `role="alert"` for screen readers.
- It is focusable via `tabindex="0"`.
- Focus visibility is clearly indicated with `outline`.
- **Reduced Motion**: Completely removes the bouncy animation. Falls back to a subtle background color change on hover/focus to provide safe interaction feedback.
