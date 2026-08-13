# Tabs: CSS variable fallback values missing

**Issue:** `#5864`  
**File:** `components/tabs.css`

## Problem

Several `var()` references in tabs.css lack fallback values. If the CSS custom properties aren't loaded (e.g., the base layer is missing), properties resolve to `initial` rather than a sensible default.

### Affected lines

| Line | Current | Problem |
|------|---------|---------|
| 11 | `var(--ease-color-neutral-200)` | no fallback |
| 23 | `var(--ease-color-muted)` | no fallback |
| 48 | `var(--ease-color-primary)` | no fallback |
| 59 | `var(--ease-color-primary)` | no fallback |
| 60 | `var(--ease-speed-medium)` + `var(--ease-ease)` | no fallbacks |
| 78 | `var(--ease-color-primary)` | no fallback |

## Expected

Every `var()` should include a fallback, e.g. `var(--ease-color-primary, #6c63ff)`.

## Demo

Open `demo.html` without the EaseMotion base layer to see the tabs render with transparent colors (broken state). The fix is shown in `style.css`.
