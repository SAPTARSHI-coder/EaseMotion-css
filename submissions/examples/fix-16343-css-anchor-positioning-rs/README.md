# CSS Anchor Positioning Utility Classes

This submission adds native CSS Anchor Positioning utilities for tooltips and popovers.

## Bug / Feature Description
Building tooltips and popovers traditionally requires complex JavaScript (like Popper.js) to calculate position offsets and collision detection. The native CSS Anchor Positioning API fixes this by allowing absolute elements to tether themselves directly to an `anchor-name`.

## Fix / Implementation Details
- Created `.ease-anchor-btn` and `.ease-anchored-tooltip` base classes.
- Used `anchor-name` to define the tether target.
- Used `position-anchor` and `anchor()` functions to calculate `top`, `bottom`, `left`, and `right` coordinates natively.
- Included directional modifiers (`.ease-anchor-bottom`, `.ease-anchor-right`, `.ease-anchor-left`).

> **Note:** The CSS Anchor Positioning API is a cutting-edge feature. You must test this in a browser that supports it (Chrome 125+, Edge 125+).

## How to Test
1. Open `demo.html` in Chrome version 125 or newer.
2. Hover over the buttons.
3. Observe the tooltips popping up precisely positioned relative to the buttons, using zero JavaScript.
