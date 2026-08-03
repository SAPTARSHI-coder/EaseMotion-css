# RubberBand Menu Example (Standard)

## Description
A standard HTML/CSS example demonstrating a "RubberBand" hover effect applied to a horizontal navigation menu. When a menu item is hovered or focused, it smoothly squishes and stretches (rubberbands) to provide playful, elastic feedback.

## Files
- `demo.html`: Contains the `<nav>` and `<ul>` list representing the menu.
- `style.css`: Implements the `@keyframes menu-rubberband-ag` animation, altering `scale3d` on the X and Y axes to create the elastic effect.

## Accessibility
- Proper use of `<nav>` and list elements (`<ul>`, `<li>`) for semantic structure.
- Accessible ARIA roles for menus (`role="menu"`, `role="none"`, `role="menuitem"`).
- Implements `:focus-visible` so the rubberband effect also triggers on keyboard navigation.
- **Reduced Motion**: Completely disables the scale transformation bouncing. Relying entirely on the color and background-color transition to indicate hover/focus state for those with motion sensitivities.
