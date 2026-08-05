# Button Fix Example

This example demonstrates the fix for buttons in `docs/demo.html` that were missing the `type="button"` attribute.

## Description
By default, `<button>` elements inside forms act as `type="submit"`. Adding `type="button"` prevents unexpected page reloads when the button is clicked.

## Changes Made
- Added `type="button"` to all buttons in the demo.
- Verified that these buttons no longer trigger form submissions.