# CSS-only Animated Dropdowns & Mega Menus

A robust, pure CSS implementation for standard dropdowns and full-width mega menus. It provides smooth entrance animations and full keyboard accessibility without requiring JavaScript event listeners.

## Files
- `demo.html` - Interactive demonstration showing both a standard profile dropdown and a multi-column Mega Menu.
- `style.css` - The CSS implementation defining the positioning, hover logic, and animations.

## Details
Creating accessible dropdowns is usually a JavaScript-heavy task to handle `mouseenter`, `mouseleave`, click-outside, and keyboard trapping. 

This implementation elegantly bypasses JavaScript by combining two CSS pseudo-classes:
1. `:hover`: When the user hovers over the `.ease-dropdown-wrapper`, the hidden menu slides into view. A transparent `::before` pseudo-element acts as a bridge so the mouse doesn't lose hover when crossing the gap between the button and the menu.
2. `:focus-within`: When a user hits the `Tab` key to focus the trigger button, and hits `Tab` again, focus enters the hidden dropdown menu. The `:focus-within` selector detects that a child element is focused, keeping the menu open and visible while the user tabs through the links.

For Mega Menus, the `.ease-mega-wrapper` simply switches to `position: static`, allowing the absolutely positioned child menu to break out and expand to the full width of the parent navigation bar.
