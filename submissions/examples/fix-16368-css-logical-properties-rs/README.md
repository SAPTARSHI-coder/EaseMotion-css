# Fix: CSS Logical Properties Utility Classes

## Description
Adds CSS logical properties utilities (`margin-inline`, `padding-inline`, `inline-size`, etc.) to support better internationalization (i18n) by automatically adapting to LTR and RTL text directions.

## How it works
- Uses `margin-inline-start` instead of `margin-left` and `margin-inline-end` instead of `margin-right`.
- When the document changes `dir="rtl"`, the layout correctly mirrors without requiring extra CSS.
