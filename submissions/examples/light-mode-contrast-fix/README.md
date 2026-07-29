# EaseMotion Contrast Fix Demo

This is a functional demo to address the contrast issues reported in EaseMotion (Issue #36061). It includes a working Light/Dark mode toggle to showcase the improved visibility of UI elements across both themes.

### The Issue
In the original light mode layout, certain elements were difficult to read:
- The outline button border nearly disappeared on a white background.
- The GitHub button text had poor contrast.
- The hero title gradient was too light.

### The Fix
- Replaced hardcoded colors with theme-aware CSS variables.
- Used `currentColor` and specific theme variables for the outline button borders and SVG icons to ensure they are visible in both themes.
- Provided a darker, deeper gradient for the hero heading specifically in light mode, while preserving the lighter pastel gradient in dark mode.
- Added a proper icon-based toggle switch for testing the themes.

### Files
* `index.html`: Contains the layout, SVG icons for the toggle, and the JavaScript required to switch themes.
* `styles.css`: Contains the CSS variables (`--`) for both light and dark modes, along with the updated button and gradient styles.

### How to Run
No build tools or dependencies are required. 
1. Download or clone these files.
2. Open `index.html` in any modern web browser.
3. Click the toggle in the top right corner to switch between Light and Dark modes and verify the contrast.