# Glass card references non-existent --ease-color-text-dark (Issue #8564)

## Problem

`components/cards.css:180` uses `var(--ease-color-text-dark, #f8fafc)` but `--ease-color-text-dark` is never defined. In dark mode the glass card text falls back to `#f8fafc` instead of the correct `--ease-color-text: #e2e8f0`.

## Fix

Replace `var(--ease-color-text-dark, #f8fafc)` with `var(--ease-color-text, #e2e8f0)` — the proper framework token for text color in both light and dark mode.

## Files

- `style.css` — glass card component with corrected dark mode text color
- `demo.html` — side-by-side comparison (glass + solid card)
