# FAQ Accordion Mobile Overflow Fix

A bugfix solution for FAQ accordion components preventing text clipping and horizontal scrolling on narrow viewports.

## Bug Fix Details
- **Text Wrapping**: Applied `overflow-wrap: anywhere` and `word-break: break-word` across title and body elements to safely wrap uninterrupted text strings.
- **Icon Stability**: Added `flex-shrink: 0` to toggle indicator icons so long question titles do not crush button layout.
- **Dynamic Max-Height**: Increased max-height expansion bounds to accommodate multi-line mobile content cleanly.