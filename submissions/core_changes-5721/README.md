# Issue #5721: docs.css references non-existent CSS variables

## Description
`docs/docs.css` line 782 used `var(--ease-duration-3)` and `var(--ease-ease-in-out)`, which are not defined anywhere in `core/variables.css`. The correct variables are `--ease-speed-medium` and `--ease-ease`.

## Status
This issue has already been fixed in a prior commit. Line 782 now correctly uses:
```css
transition: filter var(--ease-speed-medium) var(--ease-ease);
```

## Root Cause
The docs CSS was written using non-existent variable names that don't match the actual design tokens.

## Proposed Fix (already applied)
Replace `--ease-duration-3` with `--ease-speed-medium` and `--ease-ease-in-out` with `--ease-ease`.

## Files
- `style.css` — shows correct variable usage
- `demo.html` — visual audit table
