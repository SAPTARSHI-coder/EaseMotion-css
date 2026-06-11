# Issue #5722: Missing single-axis overflow utility classes

## Description
`core/utilities.css` defines only 5 overflow classes. Missing 7 commonly expected variants for single-axis overflow control.

## Root Cause
The overflow utilities were never completed to cover all `visible` and single-axis combinations.

## Proposed Fix
Add to `core/utilities.css`:
- `ease-overflow-visible`, `ease-overflow-x-hidden`, `ease-overflow-y-hidden`
- `ease-overflow-x-scroll`, `ease-overflow-y-scroll`
- `ease-overflow-x-visible`, `ease-overflow-y-visible`

## Files
- `style.css` — the 7 missing classes
- `demo.html` — visual demo of each overflow variant
