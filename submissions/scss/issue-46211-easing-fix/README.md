# Fix SCSS Easing Aliases (Issue #46211)

This submission fixes a bug in the core SCSS architecture where `$ease-out-cubic` and `$ease-in-cubic` incorrectly resolved to the default `$ease-ease` curve instead of their respective directional curves.

## What changed
- Added `$ease-out` resolving to `cubic-bezier(0, 0, 0.2, 1)`
- Added `$ease-in` resolving to `cubic-bezier(0.4, 0, 1, 1)`
- Mapped `$ease-out-cubic` and `$ease-in-cubic` to these correct values.

## How to integrate
Maintainer: Please replace the contents of the core `scss/_variables.scss` file with the patched `_variables.scss` provided in this directory.
