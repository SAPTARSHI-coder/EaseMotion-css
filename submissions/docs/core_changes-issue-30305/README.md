# Dropdown Menu Component — EaseMotion CSS

**Issue:** [#30305 — Add Dropdown Menu component with hover and click variants](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30305)

A CSS-only dropdown menu component supporting hover-triggered and click-triggered variants with smooth entrance animations, RTL-aware positioning, and keyboard accessibility.

## Structure

```
submissions/docs/core_changes-issue-30305/
├── demo.html       # Demo page showing all variants
├── style.css       # Component styles
└── README.md       # This file
```

## Classes

| Class | Purpose |
|-------|---------|
| `.ease-dropdown` | Inline-block wrapper (position: relative) |
| `.ease-dropdown-trigger` | Button/link that controls the dropdown |
| `.ease-dropdown-menu` | Hidden menu panel (absolute positioned) |
| `.ease-dropdown-item` | Individual menu option |
| `.ease-dropdown-divider` | Separator line between items |
| `.ease-dropdown-hover` | Opens on `:hover` / `:focus-within` |
| `.ease-dropdown-click` | Opens via checkbox `:checked` hack |
| `.ease-dropdown-checkbox` | Hidden checkbox for click variant |
| `.ease-dropdown-menu-end` | Align menu to the right |
| `.ease-dropdown-menu-top` | Open menu upward |
| `.ease-dropdown-item-icon` | Icon slot within items |
| `.ease-dropdown-item-text` | Text label within items |
| `.ease-dropdown-item-shortcut` | Keyboard shortcut hint |

## Variants

### Hover (`.ease-dropdown-hover`)
Opens on mouse hover, stays open when focus is inside the dropdown (keyboard accessible via `:focus-within`). Arrow rotates on open.

### Click (`.ease-dropdown-click`)
Uses a hidden `<input type="checkbox">` with `:checked ~ .ease-dropdown-menu`. An adjacent `<label>` serves as the trigger. Click the label to toggle open/closed.

## Features

- **CSS-only:** No JavaScript required for basic toggle behavior
- **Entrance animation:** Slide-down + fade-in with `scale(0.98 → 1)`
- **Arrow indicator:** Chevron rotates when open
- **RTL-aware:** Uses `inset-inline-*` for positioning
- **Keyboard accessible:** `:focus-within` fallback for hover variant
- **Reduced motion:** Transitions disabled when `prefers-reduced-motion: reduce`
- **Customizable:** All colors via `--ease-color-*` and spacing via `--ease-spacing-*` variables
- **Composable:** Items support icons, labels, and shortcut hints
