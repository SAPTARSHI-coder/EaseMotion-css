# Bug 3896 — core/animations.css

Fixes #3896

## Description
Replace hardcoded animation values with CSS variables.

| Selector   | Old value                            | New value                  |
|------------|--------------------------------------|----------------------------|
| .ease-float| animation-duration: 3s               | animation-duration: var(--ease-slow)    |
| .ease-ping | animation-timing: cubic-bezier(0,0,0.2,1) | animation-timing: var(--ease-in-out) |
| .ease-rotate | animation-timing: linear           | animation-timing: var(--ease-linear)   |

## Files
- `animations.css` -- replacement definitions
- `README.md`     -- this file

This is an additions-only PR under submissions/core_changes-v1/.
No existing files are modified.
