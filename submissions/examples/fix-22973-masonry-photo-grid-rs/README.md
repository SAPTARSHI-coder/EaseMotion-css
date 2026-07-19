# Animated Masonry Photo Grid

## Issue
**Issue #22973**: [React] Build animated masonry photo grid component

## Description
This submission implements a pure CSS masonry layout using the `column-count` property. It avoids complex JavaScript positioning calculations while providing a robust, responsive photo grid. The implementation also features a staggered scale-and-slide entry animation.

## Implementation Details
- **HTML (`demo.html`)**: A simple container of photos.
- **CSS (`style.css`)**: 
  - `column-count` and `column-gap` create the masonry structure.
  - `break-inside: avoid` ensures images are not split across columns.
  - `@keyframes masonryReveal` applies an entry animation.
  - Hardcoded classes (`item-1`, `item-2`) demonstrate staggered `animation-delay`.

## Verification
Open `demo.html` in a web browser. Note that the images fill available vertical space without rigid rows. Refresh the page to see the staggered cascading entry animation. Resize the window to observe the grid adapting from 3 to 2 to 1 column.
