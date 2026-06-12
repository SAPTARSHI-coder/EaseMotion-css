# Issue #5724: Typewriter keyframe missing cursor blink

## Description
`easemotion/misc.css` `@keyframes ease-kf-typewriter-loop` omits `border-right-color` transitions that control cursor visibility during the typing cycle. The `core/animations.css` version correctly toggles between `currentColor` and `transparent` at 40%-50% and 60%-100%.

## Root Cause
When the typewriter keyframe was copied/ported to `easemotion/misc.css` for modular imports, the `border-right-color` property was omitted from all keyframe stops.

## Proposed Fix
Update `easemotion/misc.css` keyframe to match `core/animations.css`:
- 0%: `border-right-color: currentColor`
- 40%: `border-right-color: currentColor`
- 50%: `border-right-color: transparent`
- 60%: `border-right-color: transparent`
- 100%: `border-right-color: transparent`

## Files
- `style.css` — corrected keyframe with cursor blink
- `demo.html` — interactive typewriter demo
