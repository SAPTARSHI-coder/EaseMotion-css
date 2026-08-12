# Expand Button Example

## Description
This is a standard HTML/CSS example demonstrating an "Expand" entrance animation for a button. On hover or focus, the button expands its width to reveal a text label alongside the icon. This is a common pattern for FABs or compact action buttons.

## Files
- `demo.html`: A pill-shaped button containing an icon and a hidden text label.
- `style.css`: Animates `max-width` and `opacity` on the label, and `padding`/`gap` on the button, using smooth cubic-bezier transitions on hover/focus.

## Accessibility
- Provides an `aria-label` on the button so its purpose is known to screen readers even when the label is visually hidden.
- Uses `:focus-visible` to trigger the same expand behavior for keyboard users.
- **Reduced Motion**: Disables all transitions via `@media (prefers-reduced-motion: reduce)`. The label still becomes visible instantly on hover.
