# Fix: Heading Color Hardcoded to Light-Mode Only

## Issue

In `core/base.css` (line 37), headings (`h1`–`h6`) are forced to `color: var(--ease-color-neutral-900)`, which resolves to `#0f172a` (near-black). In dark mode, `--ease-color-neutral-900` is never reassigned, so headings remain near-black against a dark (`#0b1121`) background, resulting in invisible text.

## Root Cause

Headings were hardcoded to a specific neutral palette shade rather than using the semantic `--ease-color-text` token that correctly switches between light and dark themes.

## Fix

Change the heading color from `var(--ease-color-neutral-900)` to `var(--ease-color-text)` so headings inherit the theme-aware text color while preserving their other baseline styles.

## Files Changed

- `core/base.css` — Update `h1, h2, h3, h4, h5, h6` color rule.

## Demo

Open `demo.html` and toggle dark mode to verify that the heading text remains visible and correctly adapts to the active theme.
