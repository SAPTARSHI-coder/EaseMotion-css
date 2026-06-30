# ease-btn-loading Spinner — Safari Compat Fix

**Fixes:** Issue #4225

## Root Cause

The `::after` spinner used `translate: -50% -50%` (CSS Transforms Level 5
individual property) alongside `transform: translate(…) rotate(…)` in
the keyframe. In Safari < 14.1, the standalone `translate` property is
not supported and is silently ignored, so the spinner anchors at
`top: 50%; left: 50%` with no offset — appearing at the top-left area
of the button instead of the centre.

## Fix

|                 | Before                                                    | After                                  |
| --------------- | --------------------------------------------------------- | -------------------------------------- |
| Centering       | `translate: -50% -50%` (Level 5, broken in Safari < 14.1) | Removed                                |
| Keyframe `from` | `rotate(0deg)`                                            | `translate(-50%, -50%) rotate(0deg)`   |
| Keyframe `to`   | `rotate(360deg)`                                          | `translate(-50%, -50%) rotate(360deg)` |

By embedding `translate(-50%, -50%)` in both keyframe stops, the offset
is universally supported all the way back to Safari 9+.

## Acceptance Criteria

- [x] Spinner centred in Safari 14.0
- [x] Spinner centred in Chrome, Firefox, and Edge
- [x] No visual regression on modern browsers
- [x] `prefers-reduced-motion` pauses the spinner
