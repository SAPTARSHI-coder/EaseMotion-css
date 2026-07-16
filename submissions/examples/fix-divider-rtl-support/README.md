# Fix ease-divider RTL Support

## Description
Replaces physical CSS properties (like `margin-left` and `right`) with logical properties (`margin-inline-start`, `inset-inline-end`) so that the `divider` component automatically adapts to Right-to-Left reading directions without requiring extra utility classes.

## Usage
Include the component as usual. If placed inside any HTML element with `dir="rtl"`, the layout will automatically mirror itself perfectly.

## Accessibility Compliance
Ensures internationalization (i18n) best practices for users reading RTL languages.
Fixes: #38063
