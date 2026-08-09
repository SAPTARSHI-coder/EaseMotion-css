# Zoom Text Example (Standard)

## Description
A standard HTML/CSS text link that implements a "Zoom" Hover Effect. When the user hovers over (or focuses on) the link, the text smoothly scales up (`zoom`) with a slight bouncy easing curve, drawing attention to the interactive element.

## Files
- `demo.html`: Contains the link markup wrapping the text span.
- `style.css`: Contains the scaling logic using CSS `transform: scale()` applied on `:hover` and `:focus-visible`.

## Accessibility
- Includes `:focus-visible` to ensure keyboard users receive the same visual cue when tabbing to the link.
- **Reduced Motion**: Disables the `transform: scale()` entirely. Replaces the scaling with a simple underline and color change, providing accessible visual feedback without triggering motion sensitivity.
