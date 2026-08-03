# Modal :focus-visible Enhancements

## Description
This PR adds native OS-level keyboard focus optimizations to the `modal` component by leveraging the modern `:focus-visible` pseudo-class. It provides a strong, high-contrast outline exclusively for keyboard users (WCAG 2.4.7) while hiding outlines for mouse users to maintain a clean UI.

## Usage
Include the component as usual. Focus rings will automatically appear when a user navigates via keyboard (`Tab` key).

## Changes
- `style.css`: 60+ lines adding robust `:focus-visible` styles and outline offsets.
- `demo.html`: Demo testing layout with nested interactable elements.
- `README.md`: Describes the feature.
\nFixes #55415\n