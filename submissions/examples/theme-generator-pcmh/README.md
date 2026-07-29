# Theme Generator — Issue #7417

## Overview

Interactive theme generator for EaseMotion CSS. Tweak colors, border radius, animation speed, and shadow intensity with live preview, then copy the generated `:root { ... }` CSS block.

## Controls

| Control | CSS Variable | Type |
|---------|-------------|------|
| Primary Color | `--ease-color-primary` | Color picker |
| Success Color | `--ease-color-success` | Color picker |
| Danger Color | `--ease-color-danger` | Color picker |
| Warning Color | `--ease-color-warning` | Color picker |
| Surface Color | `--ease-color-surface` | Color picker |
| Border Radius | `--ease-radius-md` | Range 0–24px |
| Animation Speed | `--ease-speed-medium` | Range 100–1000ms |
| Shadow Opacity | `--ease-shadow-opacity` | Range 0–40% |

## Preview

The right panel shows live preview of:
- Buttons (primary, success, danger, warning, outline)
- Cards (default + hover)
- Form elements (input, select)
- Animations (fade-in, slide-up, hover-grow)

## Copy CSS

Click "Copy CSS" to copy the generated `:root {}` block to clipboard. The CSS output is also displayed below the button.

## Files

- `demo.html` — Theme generator with controls + live preview
- `style.css` — Generator layout and control styles
- `README.md` — This documentation
