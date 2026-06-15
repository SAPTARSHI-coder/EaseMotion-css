# Footer Grid Overflow Fix

**Fixes:** #2853

## Problem
The `minmax(180px, 1fr)` property forced a minimum width of 180px, causing horizontal overflow on very narrow viewports (< 320px).

## Fix
Updated the `minmax` function to use `min(180px, 100%)`. This allows the column to shrink fluidly to 100% of the container width when the viewport becomes smaller than 180px.

## Result
The grid is now fully responsive, and horizontal scrollbars are eliminated on extremely narrow screens.