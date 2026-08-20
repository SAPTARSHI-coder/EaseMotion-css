# SCSS Print Media Styles Helper Mixins

An SCSS helper mixin suite for tailoring layouts, suppressing non-printable UI chrome, and optimizing visual rendering during document printing (`@media print`).

## Overview & Features
- `hide-on-print()`: Completely hides elements when printing documents.
- `optimize-for-print($text-color, $bg-color)`: Strips shadows and applies clean printer-friendly color backgrounds.
- `print-theme($variant)`: Preset theme selectors supporting standard, card, and dark-report print formatting.

## Usage Example
```scss
@use 'mixins' as *;

.invoice-container {
  @include print-theme('card');
}

.sidebar-nav {
  @include hide-on-print;
}