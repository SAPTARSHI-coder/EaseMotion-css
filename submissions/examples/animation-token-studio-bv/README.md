# Animation Token Automation Studio

## What does this do?

The Animation Token Automation Studio is a design system utility to customize, validate, live-preview, and export animation design tokens (durations, delays, and signature easing curves) in CSS variables and Style Dictionary JSON formats.

## How is it used?

Open `demo.html` directly in any modern browser:

- **Configure Scales**: Move sliders to adjust Fast, Medium, and Slow durations.
- **Design Easing Curves**: Drag bezier curve coordinate sliders (X1, Y1, X2, Y2) to build a signature transition easing timing-function. View the curve output in the live SVG graph.
- **Preview Sandbox**: View four sandbox cards playing loops side-by-side. Click "Trigger Sequence" to play all animations in a staggered sequence to test flow rhythm. Toggles let you play/pause sandbox loops.
- **Convention Checks**: View validation checkmarks ensuring variable structures follow hierarchal rules (e.g. `fast < medium < slow`).
- **Export System**: Select the tab for either CSS Variables or Style Dictionary JSON, and copy the generated token output.

## Why is it useful?

Managing consistent motion across large applications requires centralizing animation variables (design tokens). It is difficult to align transitions without visual feedback or validation of curve boundaries.

This studio solves token management by:

1. Simulating custom token variables on interactive components in real-time.
2. Rendering cubic-bezier SVG graphs immediately as coordinates are tweaked.
3. Automatically auditing value relationships and naming patterns.
4. Exporting to standard `:root` variables and cross-platform JSON formats for seamless developer handover.

## Tech Stack

- HTML5
- CSS3 (custom CSS variables, keyframe loops, grid layouts)
- JavaScript (Bezier SVG path generators, sandbox transition triggers, validation checkers)

## Preview

Open [demo.html](file:///submissions/examples/animation-token-studio-bv/demo.html) directly in your browser.
