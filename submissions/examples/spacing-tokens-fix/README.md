# Spacing Scale — Gap Fill

**Fixes:** Issue #4240

## Summary

`variables.css` defined spacing tokens for steps 1–6, 8, 10, 12, 16
but skipped steps 7, 9, 11, and 14. Components worked around the gaps
using hard-coded `rem` literals, defeating the token system.

## New Tokens

| Token | Value | px | Notes |
|---|---|---|---|
| `--ease-space-7`  | `1.75rem` | 28px | Between 6 and 8 |
| `--ease-space-9`  | `2.25rem` | 36px | Between 8 and 10 |
| `--ease-space-11` | `2.75rem` | 44px | Between 10 and 12; matches WCAG 2.5.5 touch target minimum |
| `--ease-space-14` | `3.5rem`  | 56px | Between 12 and 16; common FAB / large button size |

All values follow the established 4px grid (1 step = 0.25rem = 4px).

## forms.css Padding Update

| Variant | Before (magic numbers) | After (tokens) |
|---|---|---|
| Default | `0.625rem 0.875rem` | `var(--ease-space-3) var(--ease-space-4)` |
| Small   | `0.375rem 0.625rem` | `var(--ease-space-2) var(--ease-space-3)` |
| Large   | `0.875rem 1.125rem` | `var(--ease-space-4) var(--ease-space-6)` |

Note: Values shift slightly to nearest 4px-grid step.

## Acceptance Criteria

- [x] `--ease-space-7`, `-9`, `-11`, `-14` declared in token block
- [x] `forms.css` padding values updated to use tokens
- [x] Tokens documented in README token reference table
- [x] Demo shows full scale and practical usage