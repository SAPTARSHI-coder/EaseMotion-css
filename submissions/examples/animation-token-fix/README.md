# Animation Token Easing Fix (#3634)

## Issue
Several exit and emphasis animation classes used hardcoded `cubic-bezier` values, which prevented global easing overrides via the `--ease-ease` CSS variable.

## Solution
Replaced hardcoded easing values with the `var(--ease-ease)` design token across all affected classes to restore full customizability.

## Testing
Verified that overriding `--ease-ease` in `:root` now correctly reflects in all animation classes.