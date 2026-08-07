# Fade Dropdown Example

## Description
A standard HTML/CSS example demonstrating a smooth fade and slide down entrance for a hoverable dropdown menu. This creates a more organic feeling than snapping the menu open instantly.

## Files
- `demo.html`: The markup containing the dropdown trigger and the menu items.
- `style.css`: Uses CSS transitions on `opacity`, `transform`, and `visibility` to show the dropdown gracefully when the wrapper is hovered or focused.

## Accessibility
- Includes ARIA attributes (`aria-haspopup="true"`, `aria-expanded="false"`, `role="menu"`, `role="menuitem"`) for screen readers. Note that for a fully accessible dropdown, JS is needed to toggle `aria-expanded` and handle arrow key navigation, but this demonstrates the CSS animation foundation.
- Uses `:focus-within` so keyboard navigation keeps the dropdown open.
- **Reduced Motion**: Disables the vertical slide (`transform`), replacing it with a simple opacity fade.
