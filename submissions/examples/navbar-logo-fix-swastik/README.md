# Navbar Logo Size Fix

## Issue
The `.docs-logo-img` height in `docs/docs.css` is currently `36px`, making the logo appear too small and visually weak compared to the rest of the navbar branding.

## Fix
Increased `.docs-logo-img` height from `36px` to `52px` for better visibility and a more balanced look in the header, while keeping `width: auto` so the SVG scales proportionally without distortion.

## Files
- `style.css` — updated logo size rule
- `demo.html` — preview of the navbar with the new logo size

Closes #8583
