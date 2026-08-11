# CSS Slide-Up Badge (Minimalist Tech)

A pure CSS interactive badge component designed for Minimalist Tech Layouts. It features a hover-driven animation where the badge smoothly slides up from a hidden overflow state into full view.

## Features
- Pure CSS and HTML (No JavaScript required).
- The `.slide-up-badge` is nested inside an `overflow: hidden` container. Initially, it sits at `transform: translateY(100%)`.
- When the parent `.commit-item` row is hovered, the badge triggers a `transform: translateY(0)` transition using a bouncy `cubic-bezier` timing function.
- Clean, data-focused aesthetic designed for git history layouts and activity feeds, utilizing monospace typography for commit data (`JetBrains Mono`).
- Fully responsive layout. On mobile devices where hover is not viable, the badges are statically visible by default.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion (badges are permanently visible).

## Usage
Open `demo.html` in your browser. You will see a list of recent git commits. Hover your mouse over any of the rows; the corresponding status badge will slide up into view from the bottom edge of its container.

## Files
- `demo.html`: The HTML structure for the layout and the nested badge containers.
- `style.css`: The styling, flexbox layouts, and CSS `transform` logic for the hover-driven slide-up effect.
