# Missing @keyframes for Motion Engine tokens — issue #52721

## Summary

The JavaScript Motion Engine (`easemotion/engine/compiler.js` `KEYFRAME_MAP`) maps 7 animation tokens to `@keyframes` names that do not exist in `core/animations.css`. Animations using these tokens compile successfully but never execute at runtime.

## Root cause

`compiler.js` defines these mappings:

| Token | Expected `@keyframes` | Exists in `core/animations.css`? |
|-------|----------------------|----------------------------------|
| `spin` | `ease-kf-spin` | No |
| `wobble` | `ease-kf-wobble` | No |
| `flip-x` | `ease-kf-flip-x` | No |
| `flip-y` | `ease-kf-flip-y` | No |
| `float` | `ease-kf-float` | No (only legacy `ease-float`) |
| `heartbeat` | `ease-kf-heartbeat` | No |
| `rubber-band` | `ease-kf-rubber-band` | No |

When a user writes `em="spin repeat-infinite"`, the engine generates:

```css
._em_abc123 { animation: ease-kf-spin 300ms ...; }
```

But the browser finds no `@keyframes ease-kf-spin`, so the animation silently does nothing.

## How to reproduce

Open `demo.html` in a browser. The "Before" section shows animations that never run. The "After" section (after applying the patch) shows them working correctly.

## Proposed fix

Apply the included `fix.patch` to `core/animations.css`. The patch:

1. Adds all 7 missing `@keyframes` definitions
2. Renames legacy `@keyframes ease-float` to `@keyframes ease-kf-float`
3. Updates `.ease-float` utility class to reference the corrected keyframe name

```bash
cd /path/to/EaseMotion-css
git apply submissions/docs/missing-keyframes-motion-engine-52721/fix.patch
```

## Why this fix is correct

- Follows the existing `ease-kf-*` naming convention used by all other keyframes in `core/animations.css`
- Matches the keyframe names already hardcoded in `compiler.js` `KEYFRAME_MAP`
- No changes needed to `parser.js` or `compiler.js` — the mapping is already correct; only the keyframe definitions were missing
- All 61 existing tests pass after applying the patch

## Files included

- `README.md` — this document
- `fix.patch` — unified diff to apply to `core/animations.css`
- `demo.html` — visual before/after demonstration
- `style.css` — simple styling for the demo
