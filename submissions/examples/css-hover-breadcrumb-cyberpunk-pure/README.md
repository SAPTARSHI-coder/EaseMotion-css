# CSS Hover Breadcrumb: Cyberpunk

A highly stylized, JavaScript-free breadcrumb navigation component featuring intense neon colors, angled geometry, and a complex CSS-only glitch animation on hover.

## Features
- Pure CSS and HTML implementation. The glitch effect is achieved without SVG filters or JavaScript, relying entirely on CSS pseudo-elements and keyframes.
- **Component Architecture & Styling Mechanics**: 
  - **Angled Geometry**: The `.cyber-breadcrumb-nav` container uses `clip-path: polygon(...)` to cut off the top-left and bottom-right corners, a staple of cyberpunk UI design.
  - **CSS Glitch Effect**: 
    - The HTML requires a `data-text="Link Text"` attribute on each `.breadcrumb-link` that matches the link's text content.
    - The CSS uses `::before` and `::after` pseudo-elements that read this `data-text` via `content: attr(data-text);`.
    - These pseudo-elements are colored Cyan and Magenta, layered behind the main text, and hidden (`opacity: 0`).
    - On hover, they become visible and run two separate `@keyframes` animations (`glitch-anim-1` and `glitch-anim-2`). These animations rapidly offset the text (`transform: translate`) and slice it horizontally using `clip-path: polygon`, creating the chaotic visual artifacting of a digital glitch.
  - **Blinking Cursor**: The active/current page indicator features a solid magenta bottom border that pulses transparent via a `steps` or simple fading animation, simulating a terminal cursor.
- **Theming**: Configured via CSS Custom Properties. The palette features high-contrast neon Cyan, Magenta/Pink, and Yellow. Note: Because cyberpunk aesthetics rely heavily on dark backgrounds for neon contrast, this component enforces a dark theme universally, ignoring the user's OS light-mode preference to maintain stylistic integrity.
- Fully accessible semantic structure. Uses `<nav aria-label="Breadcrumb">`, an ordered list `<ol>`, and `aria-current="page"` for proper screen reader context. Honors the `prefers-reduced-motion` accessibility standard by disabling the glitch animations and blinking cursor if requested by the OS.

## Usage
Open `demo.html` in your browser. Hover your mouse over the navigation links (e.g., "ROOT" or "MAINFRAME") to see the text glitch rapidly in cyan and magenta. Notice the angled corners of the container and the blinking terminal cursor on the active page.

## Files
- `demo.html`: The HTML structure defining the semantic breadcrumb list and the crucial `data-text` attributes for the links.
- `style.css`: The styling, the `clip-path` geometry, the complex `@keyframes` glitch animations, and the neon text-shadows.
