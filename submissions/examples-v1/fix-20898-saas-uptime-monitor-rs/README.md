# SaaS Website Uptime Monitor

## Issue
**Issue #20898**: Advanced: SaaS Landing — Website Uptime Monitor

## Description
This submission builds a sleek, dark-mode dashboard snippet for a Website Uptime Monitoring service. The visual features a grid of "uptime blocks" commonly used by status pages. A distinct red block signifies a downtime event. This red block utilizes a subtle CSS glitch animation to draw attention, and reveals an animated tooltip when hovered.

## Implementation Details
- **HTML (`demo.html`)**: Semantic layout with `div` grids representing the uptime timeline.
- **CSS (`style.css`)**: 
  - The `status-badge` employs a `@keyframes pulse` animation for the green operational dot.
  - The downtime block uses a custom `@keyframes glitchAnim` that rapidly translates the X-axis for a brief moment every 3 seconds to simulate an error state.
  - Hovering the parent column of the downtime event triggers a smooth `cubic-bezier` pop-in of an informational tooltip.

## Verification
Open `demo.html` in your web browser. Note the pulsating green operational dot. Look at the grid of green blocks and identify the single red block; watch it closely to see the intermittent glitch effect. Hover over the column containing the red block to reveal the downtime tooltip.
