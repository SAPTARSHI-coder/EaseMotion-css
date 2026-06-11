# Issue #5714: Button loading spinner double-translation offset

## Description
`.ease-btn-loading::after` uses both `translate: -50% -50%` (modern CSS property, line 234) AND `translate(-50%, -50%)` inside `transform` in the keyframe (lines 245, 248). These compound, placing the spinner at -100%/-100% offset — visibly off-center.

## Root Cause
The `translate` CSS property and `transform` property are independent and compound. Having `translate: -50% -50%` on the element plus `translate(-50%, -50%)` in the keyframe's `transform` creates a double offset.

## Proposed Fix
In `components/buttons.css`:
- Keep `translate: -50% -50%` on `.ease-btn-loading::after` (independent property for centering)
- Remove `translate(-50%, -50%)` from the `@keyframes ease-kf-btn-spin`, keeping only `rotate()`

## Files
- `style.css` — corrected CSS (centering via `translate` property, keyframe only rotates)
- `demo.html` — interactive demo with loading buttons
