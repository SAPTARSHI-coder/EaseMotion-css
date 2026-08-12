# CSS Nav: Diamond Facet Edge

A hardware-accelerated, JavaScript-free navigation component featuring a 3D "diamond facet" edge effect on hover and active states using modern CSS `clip-path` techniques.

## Features
- Pure CSS and HTML implementation. No SVGs, complex nested spans, or JavaScript required for the hover interactions.
- **Component Architecture & Styling Mechanics**: 
  - **CSS Clip-Path Polygon**: The core of the diamond edge shape is achieved using `clip-path: polygon()`. By mapping 6 points `(10px 50%, 0 100%, 100% 100%, calc(100% - 10px) 50%, 100% 0, 0 0)`, we cut the standard rectangular pseudo-element into a custom polygon with inset diamond edges on both the left and right sides.
  - **Layered Pseudo-Elements for 3D Depth**: The `.nav-link` utilizes both `::before` (the primary color layer) and `::after` (the darker shadow layer). Both layers share the exact same `clip-path`. The shadow layer is slightly offset downward and to the left to simulate a 3D facet or extrusion.
  - **Staggered Hover Animation**: When a link is hovered or marked `.active`, both pseudo-elements fade in and scale up from `0.9` to `1`. A subtle `transition-delay: 0.05s` is applied to the shadow layer, creating a satisfying "pop" as the layers lock into place.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a clean, minimal background with vibrant accent colors (blue for light mode, purple for dark mode). Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`.
- Fully accessible semantic structure. Uses `<nav>`, `<ul>`, and standard `<a>` tags with `aria-label` and `aria-current="page"` for proper screen reader context. Honors the `prefers-reduced-motion` accessibility standard by disabling the scale and transform transitions if requested by the OS, providing an instant state change instead.

## Usage
Open `demo.html` in your browser. Hover your mouse over the navigation links. Observe the blue (or purple in dark mode) diamond-edged background elements smoothly scale up and fade into view. Note the subtle staggered timing of the underlying drop-shadow layer that provides the 3D faceted effect.

## Files
- `demo.html`: The HTML structure defining the semantic `<nav>` list and the active link classes.
- `style.css`: The styling, the layered `::before` and `::after` pseudo-elements, the `clip-path` polygon definitions, and the transition delay timing.
