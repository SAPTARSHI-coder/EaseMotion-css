# Issue #5711: Undefined CSS variable `--ease-color-text-dark`

## Description
`components/cards.css` line 180 uses `var(--ease-color-text-dark, #f8fafc)` inside the dark-mode block for `.ease-card-glass`, but `--ease-color-text-dark` is never declared in `core/variables.css`. The fallback `#f8fafc` is used in all cases, making it impossible to theme the glass card text color.

## Root Cause
The variable `--ease-color-text-dark` is referenced in `components/cards.css` but was never added to the design token definitions in `core/variables.css`.

## Proposed Fix
Add to `core/variables.css`:
- In `:root`: `--ease-color-text-dark: #f8fafc;`
- In `@media (prefers-color-scheme: dark)`: `--ease-color-text-dark: #e2e8f0;`

## Files
- `style.css` — declares the missing token with light and dark mode values
- `demo.html` — interactive demo showing a glass card with the token applied

## Testing
1. Open `demo.html` in a browser
2. Toggle system dark/light mode
3. Verify the glass card text color changes appropriately
