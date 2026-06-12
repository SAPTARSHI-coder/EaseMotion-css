# Stepper Responsive Overflow Fix

Resolves issue #1547 where the horizontal stepper component caused layout breaks on mobile viewports due to fixed-width constraints.

## Resolution

- Replaced static width values with fluid percentage-based constraints.
- Added a media query to transition the layout from horizontal to vertical stacking at the 480px breakpoint.
- Verified zero horizontal overflow on mobile simulation profiles.

## Linked Issue

Closes #1547
