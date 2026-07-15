# Package.json Files Array Fix (Issue #46212)

This submission resolves a misleading configuration in `package.json` where the `dist/` folder was specified in the `files` array but never existed.

## What changed
- Removed `"dist/"` from the `files` array in `package.json`.

## How to integrate
Maintainer: Please replace the core `package.json` with the patched `package.json` provided in this directory.
