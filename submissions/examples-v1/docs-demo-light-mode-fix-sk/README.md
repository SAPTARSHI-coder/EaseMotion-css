# Docs Demo Light Mode Fix

Fixes the bug in `docs/demo.html` where text colors are hardcoded to `#ffffff` or `rgba(255, 255, 255, X)`. This causes text to remain white even when the light mode theme is toggled, making the text unreadable against the light background.

## Files

- `demo.html` - A simplified version of the docs demo demonstrating the fix
- `style.css` - The corrected CSS for `docs/demo.html` using theme variables instead of hardcoded white colors
- `README.md` - This file

## Root Cause

The `<style>` block in `docs/demo.html` uses hardcoded white colors for `.demo-nav-links a`, `.demo-hero p`, `.demo-section-title`, `.ease-card`, etc. Furthermore, there are multiple inline styles hardcoding `#fff` and `rgba(255, 255, 255, X)`.

## The Fix

Replaced hardcoded colors with the existing theme variables defined in `docs/docs.css` (e.g., `var(--page-text)`, `var(--page-text-muted)`, `var(--heading-color)`, `var(--nav-link-color)`, `var(--border-color)`, `var(--card-bg)`). This allows the demo page elements to seamlessly invert colors when the `data-theme="light"` toggle is activated.
