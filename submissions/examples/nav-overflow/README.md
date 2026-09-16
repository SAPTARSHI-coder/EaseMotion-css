# Bug 1 Fix: Top Navigation Overflow

## Overview
This patch addresses the bug where the "Discord" link was flowing rightwards and getting cut off at the edge of the viewport.

## Implementation Details
* Targeted the `.top-nav` container.
* Added `overflow-x: auto` to allow horizontal scrolling on smaller screens instead of clipping.
* Ensured `width: 100%` is respected so child elements don't push the parent boundaries off-screen.
* Maintained the `gap` property for consistent spacing without relying on arbitrary margins.