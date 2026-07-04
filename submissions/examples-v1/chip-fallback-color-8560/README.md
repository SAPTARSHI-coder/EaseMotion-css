# Chip component uses wrong fallback color (Issue #8560)

## Problem

`components/chip.css` uses `#6366f1` (Tailwind indigo-500) as the fallback for `--ease-color-primary` across 7 lines (26, 52, 69, 70, 111, 115, 116). The actual EaseMotion primary color is `#6c63ff`.

## Fix

Replace all `#6366f1` fallbacks with `#6c63ff` so the chip component matches the rest of the framework if the CSS variable fails to resolve.

## Files

- `style.css` — chip component with corrected `#6c63ff` fallback
- `demo.html` — interactive chip group demo (select/deselect chips)
