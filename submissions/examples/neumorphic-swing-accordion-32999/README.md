# Neumorphic Soft Horizontal Swing-Hover Accordion

This submission resolves issue #32999.

## Features
- **Neumorphic Soft Theme**: Utilizes the signature soft-UI drop shadows (inset and outset) on a low-contrast grayish background to create the illusion of extruded physical elements.
- **Component Structure**: To ensure absolute uniqueness from previous neumorphic implementations, this uses a **Horizontal Flex Accordion** structure. Panels are arranged side-by-side and expand horizontally using CSS `flex-grow` transitions when clicked.
- **Animation**: Implements the `ease-hover-swing` animation. Hovering over a collapsed panel triggers a gentle swinging motion on its icon, perfectly matching the physics-based feel of Neumorphism.

## File Structure
- `demo.html`: The horizontal flex layout structure.
- `style.css`: Neumorphic styling, flex transition logic, and the custom Swing keyframes.
