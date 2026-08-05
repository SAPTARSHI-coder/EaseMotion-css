# Light Theme Text Contrast Fix

Fixes the bug where toggling from Dark Theme to Light Theme leaves
typography colors (headings, descriptions, and section labels) unchanged.
This results in light-colored text rendering on a light background,
making it completely unreadable.

## Files
- `demo.html` - Theme toggle demo with a card showing all three text types
- `style.css` - Fixed token-based theming
- `README.md` - This file

## Root Cause

The original typography rules used **hardcoded color values** instead of
theme tokens:

```css
/* BEFORE — hardcoded, never inverts */
.ease-heading {
  color: #f1f5f9; /* always light, even in light theme */
}

.ease-description {
  color: #cbd5e1;
}

.ease-section-label {
  color: #94a3b8;
}
```

When `.theme-light` flips `--ease-bg` / `--ease-surface` to light colors,
these hardcoded text colors stay light too — producing near-invisible
white-on-white text.

## The Fix

Typography now references theme-aware custom properties that are
redefined inside `.theme-light`:

```css
:root {
  --ease-text-heading: #f1f5f9;
  --ease-text-body: #cbd5e1;
  --ease-text-label: #94a3b8;
}

.theme-light {
  --ease-text-heading: #0f172a;
  --ease-text-body: #334155;
  --ease-text-label: #64748b;
}

.ease-heading        { color: var(--ease-text-heading); }
.ease-description    { color: var(--ease-text-body); }
.ease-section-label  { color: var(--ease-text-label); }
```

## How to Test
1. Open `demo.html` (loads in dark theme by default)
2. Confirm heading, description, and label are all readable
3. Click "Toggle Theme" to switch to light theme
4. Confirm all three text types invert to dark colors and remain
   fully readable against the light card background

## Why It Fits
- Restores WCAG-compliant contrast in both themes
- Centralizes text colors as theme tokens — any future theme only needs
  to redefine the `--ease-text-*` variables
- No structural HTML changes required, just token-based color references
