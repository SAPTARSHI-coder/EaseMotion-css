# Issue #5718: README documents non-existent duration classes

## Description
`README.md` lists duration classes including `ease-duration-normal` and `ease-duration-extra-slow`, but only 3 duration classes exist in `core/animations.css`:
- `ease-duration-fast` (150ms)
- `ease-duration-medium` (300ms)
- `ease-duration-slow` (600ms)

## Root Cause
The README table was written to document planned duration classes that were never implemented.

## Proposed Fix
Remove `ease-duration-normal` and `ease-duration-extra-slow` from the README duration table, or implement them in `core/animations.css`.

## Files
- `style.css` — the 3 valid duration classes
- `demo.html` — visual demo with valid vs invalid classes
