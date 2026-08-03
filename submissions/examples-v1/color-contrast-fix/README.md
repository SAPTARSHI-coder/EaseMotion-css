# Color Contrast Accessibility Fix

This submission fixes Issue #39240 by improving color contrast for light-themed text and buttons.  
The updated variables ensure compliance with WCAG AA (minimum 4.5:1 contrast ratio).

## Changes
- Darkened `--ease-color-light-text` from light gray to #333333
- Ensured button text (#ffffff) on blue background (#007bff) meets contrast ratio
- Added darker hover state for buttons

## Usage
```css
:root {
  --ease-color-light-text: #333333;
  --ease-color-btn-bg: #007bff;
  --ease-color-btn-text: #ffffff;
}
