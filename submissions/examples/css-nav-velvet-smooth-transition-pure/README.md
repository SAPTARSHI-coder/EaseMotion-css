# CSS Nav: Velvet Smooth Transition

A highly performant, JavaScript-free navigation component featuring ultra-soft "velvet" transition curves that gently ease-in layered background states and glowing indicators.

## Features
- Pure CSS and HTML implementation. No JavaScript required to manage hover or active states.
- **Component Architecture & Styling Mechanics**: 
  - **Velvet Transition Curve**: The defining feature of this component is the custom `cubic-bezier(0.22, 1, 0.36, 1)` transition timing function combined with an elongated `0.5s` duration. This creates a deeply satisfying, decelerating "velvet" slide into place.
  - **Expanding Pill Background**: The soft background fill on hover is handled by the `::before` pseudo-element. It starts scaled down (`transform: scale(0.8)`) and fully transparent. On hover, it blooms out to `scale(1)` and fades in, creating a soft pulse effect rather than a harsh block appearing.
  - **Glowing Indicator**: The `::after` pseudo-element acts as the underline indicator. It starts with `scaleX(0)` from the center. On hover, it expands outward symmetrically while revealing a subtle `box-shadow` glow that matches the accent color.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a soft base with a vibrant pink velvet accent color. Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`, which swaps solid light backgrounds for semi-transparent glowing overlays to maintain the velvet feel against dark backgrounds.
- Fully accessible semantic structure. Uses `<nav>`, `<ul>`, and standard `<a>` tags with `aria-label` and `aria-current="page"` for proper screen reader context. Honors the `prefers-reduced-motion` accessibility standard by disabling the scale and opacity transitions if requested by the OS.

## Usage
Open `demo.html` in your browser. Gently move your cursor across the navigation links. Observe the ultra-smooth, decelerating `cubic-bezier` curves as the pill backgrounds expand and the glowing underlines ease outward from the center of the text.

## Files
- `demo.html`: The HTML structure defining the semantic `<nav>` list and the active link classes.
- `style.css`: The styling, the `cubic-bezier` transition definitions, the layered `::before` and `::after` pseudo-elements, and the dark mode adjustments.
