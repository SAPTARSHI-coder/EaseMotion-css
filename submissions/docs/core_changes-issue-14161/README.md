# Animation Keyframe Unit Tests — Issue #14161

## What does this do?
Adds unit tests for `core/animations.css` to verify all keyframe animation definitions are present, correct, and free of duplicates. Pure text-assertion tests — no DOM required.

## Provided files

| File | Description |
|---|---|
| `tests/animations.test.js` | Vitest test file — copy to `tests/animations.test.js` and run `npm test` |
| `demo.html` | In-browser test runner that fetches `core/animations.css` and runs same assertions |
| `style.css` | Styling for the test runner |

## What gets tested?

**13 core keyframes** — verifies each `@keyframes ease-kf-*` block exists and has expected properties:

| Keyframe | Checks |
|---|---|
| `ease-kf-fade-in` | opacity 0→1, transform present |
| `ease-kf-fade-out` | opacity 1→0 |
| `ease-kf-slide-up` | translate3d(0,24px,0)→(0,0,0) |
| `ease-kf-slide-down` | translate3d(0,-24px,0)→(0,0,0) |
| `ease-kf-slide-in-left` | translate3d(-32px,0,0)→(0,0,0) |
| `ease-kf-slide-in-right` | translate3d(32px,0,0)→(0,0,0) |
| `ease-kf-zoom-in` | scale + opacity 0→1 |
| `ease-kf-flip` | rotateY + perspective |
| `ease-kf-bounce` | translate + cubic-bezier timing |
| `ease-kf-rotate` | 0deg→360deg |
| `ease-kf-pulse` | opacity 1 → 0.45 → 1 |
| `ease-kf-ping` | scale(1)→scale(2) + opacity 0 |
| `ease-kf-shake` | translateX oscillation (3+ stops) |

**Also checks:**
- No duplicate keyframe definitions
- `@media (prefers-reduced-motion: reduce)` block exists and disables animation

## Running

```bash
# Vitest (requires this file in tests/)
npm test

# Browser (served from repo root)
open submissions/core_changes-issue-14161/demo.html
```
