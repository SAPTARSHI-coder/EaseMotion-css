# Keyframe Prefix Fix — `em-*`

**Fixes:** Issue #5045

## Problem

Generic `@keyframes` names like `fade`, `slide`, `bounce`, `spin`,
`pulse` collide with the same names in other CSS libraries
(Animate.css, Bootstrap, etc.), causing animations to silently
override each other.

## Fix

Renamed all generic keyframes to use the `em-` prefix, per the
issue's proposed solution.

See `RENAME_MAP.md` for the full before/after mapping and migration
guide for consumers.

## ⚠️ Breaking Change

Any consumer referencing these keyframe names directly in their own
`animation:` declarations must update to the new `em-*` names.
Recommend a major version bump + CHANGELOG entry pointing to
`RENAME_MAP.md`.

## Acceptance Criteria

- [x] All generic keyframes renamed with `em-` prefix
- [x] Full rename map documented
- [x] Migration guide for consumers
- [x] Demo verifies all renamed animations still work
- [x] Breaking-change called out explicitly