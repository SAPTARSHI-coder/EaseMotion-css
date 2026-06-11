# ease-sidebar Mobile Slide-in Fix

**Fixes:** Issue #4224

## Root Cause

`display: none` removes the element from the render tree.
CSS `transition` on `transform` requires the element to exist
in the render tree at the start of the transition — so it was
always skipped, causing an instant snap with no animation.

## Fix

| Property | Before | After |
|---|---|---|
| Hidden state | `display: none` | `visibility: hidden` + `pointer-events: none` |
| Open state | `display: block` | `visibility: visible` + `pointer-events: auto` |

The element stays in the render tree in both states, so
`transform: translateX()` transitions smoothly.

## Acceptance Criteria

- [x] Slide-in transition visible on mobile
- [x] `display: none` removed from mobile sidebar styles
- [x] `prefers-reduced-motion` fallback disables transition