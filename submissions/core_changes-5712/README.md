# Issue #5712: Undefined CSS variable `--ease-color-text-muted`

## Description
`components/modals.css` line 127 uses `var(--ease-color-text-muted, #4b5563)` but `--ease-color-text-muted` is never defined in `core/variables.css`. The fallback `#4b5563` is always used, making modal body text non-themeable.

## Root Cause
`--ease-color-text-muted` is referenced in `components/modals.css` but was never added to the design token definitions in `core/variables.css`.

## Proposed Fix
Add to `core/variables.css`:
- In `:root`: `--ease-color-text-muted: #4b5563;`
- In `@media (prefers-color-scheme: dark)`: `--ease-color-text-muted: #94a3b8;`

## Files
- `style.css` — declares the missing token
- `demo.html` — interactive demo
- `README.md` — documentation
