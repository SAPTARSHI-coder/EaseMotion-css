# CSS Blur-Entrance Badge (Minimalist Tech)

A pure CSS badge component designed for Minimalist Tech Layouts. It features a cinematic, high-tech entrance animation where the badges pull sharply into focus from a heavily blurred state when the page loads.

## Features
- Pure CSS and HTML (No JavaScript required).
- The `.blur-enter` class utilizes a CSS `@keyframes` animation that transitions `filter: blur()`, `opacity`, and `transform: scale()` simultaneously, simulating a camera pulling focus on data points.
- Inner elements utilize a sequential stagger effect, leveraging a custom CSS property (`--delay`) mathematically calculated within the `animation-delay`.
- Clean, professional aesthetic designed for dashboards and deployment lists, utilizing pill-shaped borders and monospace typography for technical data (`JetBrains Mono`).
- Fully responsive layout utilizing flexbox.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion (animations are disabled and opacity is locked to 1).

## Usage
Open `demo.html` in your browser. You will see a list of recent deployments. The status badges on the right side of the list will sequentially pop into focus one by one, triggered by the CSS animation timeline on page load.

## Files
- `demo.html`: The HTML structure for the layout and the badges utilizing inline `--delay` CSS variables.
- `style.css`: The styling, flexbox layouts, and CSS `filter: blur()` logic for the `@keyframes` animation.
