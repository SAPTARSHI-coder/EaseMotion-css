# Button Loading & Ghost Visibility Fix

This submission demonstrates fixes for two button rendering issues:

## Problems

1. Ghost button border was transparent, making the button appear as plain text.
2. Loading spinner inherited `currentColor`, which became invisible when the loading state hid button text.

## Fixes

- Added a visible neutral border to ghost buttons.
- Added a dedicated spinner color fallback.
- Removed redundant translation causing spinner alignment issues.

These changes improve visibility and accessibility while preserving existing button behavior.
