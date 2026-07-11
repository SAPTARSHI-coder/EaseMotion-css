# Ghost Button Border Fix

## Problem
`.ease-btn-ghost` has `border-color: transparent` making it invisible — no button box, just text.

## Fix
Set `border-color: var(--ease-color-neutral-300)` and `color: var(--ease-color-muted)` so the button is visible in both light and dark themes.
