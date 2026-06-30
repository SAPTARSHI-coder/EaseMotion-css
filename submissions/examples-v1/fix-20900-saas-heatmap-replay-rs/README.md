# SaaS Heatmap & Session Replay Tool

## Issue
**Issue #20900**: Advanced: SaaS Landing — Heatmap & Session Replay Tool

## Description
This submission builds a visual demonstration for a Heatmap and Session Replay SaaS. The mockup layers a translucent heatmap over a simulated webpage. It also features an animated SVG cursor that moves across the screen and simulates "clicks" via a radiating ripple effect.

## Implementation Details
- **HTML (`demo.html`)**: Defines the mock website structure, the overlay for the heat spots, and the SVG cursor container.
- **CSS (`style.css`)**: 
  - **Heatmap**: Uses `radial-gradient` transitioning from red to yellow to green to transparent, combined with `filter: blur()` and `mix-blend-mode: multiply` to create a realistic thermal overlay effect.
  - **Session Replay**: Uses `@keyframes moveCursor` to animate `top` and `left` properties to move the SVG pointer. The `click-ripple` animation is timed perfectly to trigger when the cursor reaches the CTA button.

## Verification
Open `demo.html` in your browser. Watch the heatmap spots fade in sequentially. Observe the cursor moving automatically across the mockup, stopping at the CTA button to trigger a red "click" ripple effect.
