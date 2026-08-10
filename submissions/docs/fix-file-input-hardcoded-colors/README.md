# Fix: File Input Uses Hardcoded Colors Instead of Design Tokens

## Issue

The entire `[type="file"]` section in `components/forms.css` (lines 359–429) uses 38+ hardcoded hex values (`#cbd5e1`, `#fff`, `#1e293b`, `#6c63ff`, `#5a52e0`, `#10b981`, etc.) instead of the framework's `var(--ease-color-*)` tokens. This breaks dark mode compatibility and theme customization — file inputs always render with light-mode colors regardless of `prefers-color-scheme` or `[data-theme="dark"]`.

## Root Cause

The file-input contribution at Issue #10869 was written with raw hex values instead of consuming the framework's established design token system.

## Fix

Replace all hardcoded hex values with their corresponding `--ease-color-*` custom property references so file inputs properly inherit theme and dark mode styles.

## Files Changed

- `components/forms.css` — Replace hardcoded hex values in `[type="file"]` section with design tokens

## Demo

Open `demo.html` to see file inputs rendering correctly in both light and dark themes using design tokens.
