# Issue #5713: Undefined CSS variable `--ease-shadow-2xl`

## Description
`components/modals.css` line 45 uses `var(--ease-shadow-2xl, ...)` for modal `box-shadow`, but `core/variables.css` only defines shadows up to `--ease-shadow-xl`.

## Root Cause
`--ease-shadow-2xl` was never added to the shadow tokens in `core/variables.css`.

## Proposed Fix
Add `--ease-shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);` to `:root` and a dark mode override.

## Files
- `style.css` — declares the missing shadow token
- `demo.html` — interactive demo
