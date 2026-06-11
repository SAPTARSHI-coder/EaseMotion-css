# Core Changes — Issue #4568: Hardcoded `.ease-zoom-out` duration

## Overview
This submission fixes issue #4568 by replacing the hardcoded `0.6s ease-out` value in `.ease-zoom-out` with design-token-driven CSS custom properties (`var(--ease-speed-medium)` and `var(--ease-ease-bounce)`), matching the pattern used by every other animation class in the framework.

## Problem
```css
/* Before — in easemotion/zoom.css */
.ease-zoom-out {
  animation: ease-kf-zoom-out 0.6s ease-out forwards;
}
```
The hardcoded `0.6s ease-out` meant:
1. **Not themeable** — users could not override the duration or easing via `:root` tokens
2. **Inconsistent** — every other animation uses `var(--ease-speed-*)` and `var(--ease-ease-*)`
3. **Breaks the framework promise** — "override any token to theme everything" fails for `.ease-zoom-out`

## Fix Applied
```css
/* After — in submissions/core_changes-issue-4568/style.css */
.ease-zoom-out {
  animation: ease-kf-zoom-out var(--ease-speed-medium) var(--ease-ease-bounce) both;
}
```

## Affected File (maintainer will copy to `easemotion/zoom.css`)
`submissions/core_changes-issue-4568/style.css`

## Verification
Open `demo.html` in this folder. The page:
1. Overrides `--ease-speed-medium: 100ms` via `<style>` in the `<head>`
2. Triggers `.ease-zoom-out` on the green button
3. Confirms the animation completes in ~100ms (the old hardcoded version would still take 600ms)

## Labels
- `bug`, `level:beginner`, `GSSoC-26`
