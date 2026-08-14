# CSS Micro-interactions: Cyberpunk Neon

A collection of hardware-accelerated, JavaScript-free micro-interactions focused on high-contrast neon glows, sharp angled geometries, and digital glitch artifacts.

## Features
- Pure CSS and HTML implementation. No external SVG assets or JavaScript glitch libraries required.
- **Component Architecture**: 
  - **Neon Slice Button**: A button featuring the classic cyberpunk angled corner cut. Instead of relying on complex borders, it utilizes `clip-path: polygon()` to slice off the bottom-right corner. The neon fill on `:hover` is achieved with a `::before` pseudo-element that scales from `0` to `1` along the X-axis (`transform-origin: left`).
  - **Glitch Text**: A highly kinetic chromatic aberration effect. It uses `data-text` attributes on the HTML element to duplicate the text into `::before` and `::after` pseudo-elements. These pseudo-elements are given contrasting neon `text-shadow` colors (Cyan and Pink). On `:hover`, rapid `@keyframes` animations alter the `clip-path` and `translate` properties, causing rapid slices of the text to shift horizontally, simulating a corrupted digital display.
  - **Neon Trace Focus**: An interactive card that traces a glowing border around its perimeter on hover. It uses four absolute-positioned `span` elements representing the four sides. Initially translated off-screen (e.g., `transform: translateX(-100%)`), they return to `0` on hover. The seamless tracing effect is achieved by staggering their `transition-delay` values (`0s`, `0.15s`, `0.3s`, `0.45s`).
- **Theming**: Configured via CSS Custom Properties. The color palette revolves around stark black backgrounds paired with intense Neon Cyan (`#00f3ff`), Neon Pink (`#ff003c`), and Neon Yellow (`#fcee0a`).
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the rapid glitch keyframes and the sequential tracing animations for users who prefer less motion, ensuring the interface remains usable without causing motion sickness or strobe effects.

## Usage
Open `demo.html` in your browser to view the gallery of micro-interactions. Hover the "Slice Button" for the solid fill, hover the "Glitch Text" to trigger the chromatic aberration, and hover the "Neon Trace" card to watch the sequential border animation.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 cyberpunk micro-interactions (including `data-text` attributes).
- `style.css`: The styling, the `clip-path` geometry, the complex glitch keyframes, and the staggered transition delays for the trace borders.
