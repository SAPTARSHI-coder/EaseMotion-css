# CSS Dropdown: Cyberpunk Neon

A collection of hardware-accelerated, JavaScript-free dropdown menus and contextual actions featuring sharp geometries, neon glows, and digital glitch aesthetics.

## Features
- Pure CSS and HTML implementation. No JavaScript event listeners required for hover or click states.
- **Component Architecture**: 
  - **Hover Navigation Menu**: A classic top-level navigation dropdown. It uses `visibility: hidden`, `opacity: 0`, and `transform: translateY(15px)` on the `.dropdown-menu`. On `:hover` of the parent `.nav-item`, these properties animate to visible states (`translateY(5px)`). The dropdown features a sharp cyberpunk aesthetic using `clip-path: polygon()` to slice off the bottom-right corner, supplemented by a small decorative triangle pseudo-element.
  - **Action Menu (Click)**: A dropdown that requires a click to open, built using the CSS checkbox hack (`:checked ~`). When the hidden checkbox is checked, the adjacent `.action-dropdown` expands. Instead of `display: none` (which cannot be animated), it transitions the `max-height` property from `0` to a large value (e.g., `400px`), creating a smooth rollout effect. It features an infinite `.scanline` animation that translates vertically across the menu.
  - **Glitch Title**: A decorative header text effect utilizing layered, animated `clip-path` properties on `::before` and `::after` pseudo-elements to simulate chromatic aberration and screen tearing.
- **Theming**: Configured via CSS Custom Properties. The color palette focuses on intense neon contrasts: Cyan (`#00f3ff`), Pink (`#ff0055`), and Yellow (`#fcee0a`), set against absolute black or deeply desaturated backgrounds.
- Fully accessible semantic structure using standard `<nav>` and `<ul>` tags. Honors the `prefers-reduced-motion` accessibility standard by disabling the continuous glitch and scanline animations, as well as the dropdown entry transitions, for users who prefer less motion.

## Usage
Open `demo.html` in your browser to view the gallery of cyberpunk dropdowns. Hover over the "Subsystems" link to trigger the hover dropdown, and click the "INITIATE HACK" button to toggle the checkbox-driven action menu.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for both the hover-driven and checkbox-driven dropdown components.
- `style.css`: The styling, the `clip-path` geometries, the dropdown transition mechanics, and the keyframe animations for the glitches and scanlines.
