# Floating Footer: Cyberpunk

A highly stylized, JavaScript-free persistent floating footer component featuring angled geometry, neon borders, and intense hover glitch effects.

## Features
- Pure CSS and HTML implementation. The floating behavior and complex hover animations are achieved without any external libraries.
- **Component Architecture & Styling Mechanics**: 
  - **Floating Placement**: The `.cyber-floating-footer` uses `position: fixed; bottom: 20px;` and is centered using `left: 50%; transform: translateX(-50%);`. The `z-index` ensures it stays above the page content.
  - **Angled Geometry via Clip-Path**: The container uses `clip-path: polygon(...)` to cut off the top-left and bottom-right corners, a staple of cyberpunk UI design.
  - **Neon Borders (Clip-Path Hack)**: Because `clip-path` hides standard CSS borders on the clipped edges, this component uses a clever workaround. It applies standard bottom and right borders (Cyan/Pink), and uses a `::before` pseudo-element for the top border (Yellow) to create a fragmented, tech-like framing.
  - **CSS Glitch Effect**: 
    - The HTML requires a `data-text` attribute on elements intended to glitch (like the status text and buttons).
    - On hover, pseudo-elements reading this `attr(data-text)` are revealed and run a `@keyframes glitch` animation. This animation rapidly slices the text horizontally using `clip-path: inset(...)` and shifts it slightly with `transform: translate`, creating chaotic visual artifacting.
  - **Pulsing Indicator**: The active status dot utilizes a simple `opacity` and `box-shadow` keyframe animation to pulse continuously.
- **Theming**: Configured via CSS Custom Properties. The palette features high-contrast neon Cyan, Magenta/Pink, and Yellow against a translucent, blurred dark background (`backdrop-filter`). Note: Because cyberpunk aesthetics rely heavily on dark backgrounds for neon contrast, this component enforces a dark theme universally, ignoring the user's OS light-mode preference to maintain stylistic integrity.
- Fully accessible semantic structure. Uses `<nav>` for the links, and honors the `prefers-reduced-motion` accessibility standard by disabling the glitch animations and pulsing indicator if requested by the OS.

## Usage
Open `demo.html` in your browser. Scroll the page to observe how the footer stays fixed at the bottom. Hover over the "UPLINK ACTIVE" text or the navigation buttons to see the intense cyan and pink CSS glitch effects.

## Files
- `demo.html`: The HTML structure defining the footer container, dummy scrolling content, and the crucial `data-text` attributes for the glitch effects.
- `style.css`: The styling, the `position: fixed` logic, the `clip-path` geometry, and the complex `@keyframes` glitch animations.
