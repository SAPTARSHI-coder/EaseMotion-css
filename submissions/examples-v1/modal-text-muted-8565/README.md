# Modal body uses non-existent CSS variable (Issue #8565)

## Problem

`components/modals.css:127` references `var(--ease-color-text-muted, #4b5563)` but `--ease-color-text-muted` is never defined in the codebase. It always falls back to `#4b5563` instead of using the proper `--ease-color-muted` token (`#64748b` light / `#94a3b8` dark).

## Fix

Replace `var(--ease-color-text-muted, #4b5563)` with `var(--ease-color-muted, #64748b)` in `.ease-modal-body` so modal text uses the correct muted color token consistent with the rest of the framework.

## Files

- `style.css` — modal component demonstrating the corrected CSS variable
- `demo.html` — interactive modal with verification notes
