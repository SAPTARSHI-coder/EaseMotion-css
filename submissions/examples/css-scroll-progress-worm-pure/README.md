# CSS Scroll Progress Worm

A pure CSS scroll-linked progress indicator that renders a "worm" crawling along a winding SVG path. Powered by the modern CSS Scroll-Driven Animations API, it requires zero JavaScript scroll event listeners.

## Features
- Pure CSS implementation using the CSS Scroll-Driven Animations API.
- **Component Architecture (Documented in Code)**: 
  - **The SVG Track**: A fixed `position: fixed` SVG sits in the background containing two identical `<path>` elements: the faint track and the bright worm body.
  - **The Dash Array Trick**: To create a short "worm" segment instead of a continuous line, the `stroke-dasharray` is set to `150 2000` (a dash length of 150px, followed by a massive gap of 2000px). This guarantees only one segment exists on the path at any time.
  - **Scroll-Driven Animation**: The core mechanic utilizes `animation-timeline: scroll(root block)`. This binds the CSS `@keyframes` animation progress directly to the window's scrollbar. As the user scrolls down, the `stroke-dashoffset` animates negatively, pulling the gap forward and causing the worm to physically crawl along the winding SVG path.
  - **Graceful Fallbacks**: Includes a `@supports not (animation-timeline: scroll())` query. If the browser (like older Safari/Firefox) does not yet support scroll-linked animations, the component falls back to an infinitely crawling worm animation on a timer, ensuring the UI remains dynamic.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a neon glowing aesthetic in dark mode.
- Fully accessible semantic structure. The SVG is a purely decorative visual effect and is explicitly hidden from screen readers via `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by entirely disabling the animation timeline and rendering a standard, static full-length line indicating the path track instead.

## Usage
Open `demo.html` in your browser. Scroll down the page to physically scrub the worm animation forward and backward along the path. 
*Note: Best viewed in a Chromium-based browser (Chrome/Edge) or Firefox with the layout.css.scroll-driven-animations flag enabled.*

## Files
- `demo.html`: The HTML structure defining the background SVG, the bezier curves (`d` attribute), and the dummy scrolling content.
- `style.css`: The styling, the `stroke-dasharray` mathematics, and the critical `animation-timeline` binding.
