# CSS Realtime Chart Line

A pure CSS animated line chart that "draws" itself from left to right upon load, simulating real-time data plotting. Built entirely without JavaScript, utilizing inline SVG and CSS `clip-path` animations.

## Features
- Pure CSS and SVG implementation.
- **Component Architecture (Documented in Code)**: 
  - **The SVG Canvas**: The chart itself is a static SVG containing a linear gradient definition (`<linearGradient>`), an area fill path (`<path class="chart-area">`), and a stroke line (`<path class="chart-line">`). 
  - **The Clip-Path Reveal**: Instead of complex JavaScript path-length calculations, the entire SVG is placed inside a `.chart-reveal-wrapper`. This wrapper uses CSS `@keyframes` to animate the `clip-path` property. It starts at `clip-path: inset(0 100% 0 0)` (meaning the right side is inset by 100%, completely hiding the chart) and transitions to `inset(0 0 0 0)` over 2 seconds. This acts like a curtain opening from left to right, smoothly revealing the complex SVG underneath as if it were being plotted in real time.
  - **The Data Point**: A final SVG `<circle>` sits at the end of the line. It uses an `animation-delay` to fade in precisely as the chart finishes drawing, and then transitions into an infinite CSS `drop-shadow` pulse to indicate an active, "live" data feed.
  - **Background Grid**: The horizontal grid lines sit outside the reveal wrapper (`z-index: 1`), ensuring they are visible immediately on load, while the chart draws over them.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), shifting the card background to slate and modifying the grid line contrast.
- Fully accessible semantic structure. The chart is purely decorative and utilizes proper DOM layering. Honors the `prefers-reduced-motion` accessibility standard by disabling the `clip-path` reveal and pulse animations for motion-sensitive users, immediately displaying the fully rendered chart.

## Usage
Open `demo.html` in your browser. The chart will automatically plot itself upon page load. Refresh the page to see the animation again.

## Files
- `demo.html`: The HTML structure defining the SVG vector paths, the gradient definition, and the wrapper hierarchy.
- `style.css`: The styling, background grids, and the critical `clip-path: inset(...)` animation logic.
