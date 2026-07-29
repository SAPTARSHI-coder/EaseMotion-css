# Button Group Fallback Fix (#3635)

## Issue
The `.ease-btn-group` used `color-mix()` which lacks support in older browsers, leading to rendering failures.

## Solution
Added a solid `background-color` fallback before the `color-mix()` property to ensure visual consistency across all browsers.

## Testing
Verified that elements render correctly even when `color-mix` is unsupported.