# Footer Contrast & Theme Toggle Fix

## Issue #35414

Fixes contrast and readability issues in the footer component (`.ease-footer`) when the application is toggled to Light Theme.

## Problem

When the application's theme was toggled to Light Theme (which sets `data-theme="light"` on the root document `html` element), the light mode rules defined inside the media query `@media (prefers-color-scheme: light)` did not activate unless the user's OS also preferred light mode.

This caused two critical issues:

1. **Low Contrast / Invisible Text**: Default dark theme text variables and hardcoded backgrounds remained active, causing elements like `.ease-footer-logo`, `.ease-footer-description`, and `.ease-footer-newsletter-text` to retain light colors (such as `#9ca3af` and `#f3f4f6`) against the light background.
2. **Theme Incoherence**: The footer background remained dark while the rest of the application changed to light background, causing visual inconsistency.

## Solution

We added explicit selectors for `[data-theme="light"]` and properly aligned the media query to target `:root:not([data-theme="dark"])`. This ensures the footer correctly switches to the light background and uses high-contrast text and link colors.

Specifically, the following elements adapt dynamically to the theme:

- `.ease-footer` (uses light-mode background and borders)
- `.ease-footer-logo`, `.ease-footer-col-title`, and `.ease-footer-newsletter-title` (shift to high-contrast dark slate color)
- `.ease-footer-description`, `.ease-footer-newsletter-text`, and links (shift to readable neutral slate color)
- Social icons (`.ease-footer-social a`) and Newsletter input (`.ease-footer-newsletter-input`) (use high-opacity white background with dark border and text)

## Files Included

- `demo.html` — Interactive demonstration showcasing the footer theme toggle and the contrast fix.
- `style.css` — CSS stylesheet containing the high-contrast light mode overrides.