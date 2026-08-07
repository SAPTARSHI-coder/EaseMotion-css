# Navbar Print Friendly Optimization

## Description
Applies a `@media print` query block to the `navbar` component. This removes ink-heavy features such as linear-gradients, background-colors, and box-shadows, replacing them with standard high-contrast black borders for readable physical prints.

## Usage
Include the component as usual. When the document is printed, the browser automatically applies the media query overrides.

## Changes
- `style.css`: 60+ lines of code adding print media queries.
- `demo.html`: Demo testing print preview layout.
- `README.md`: Describes fix.
\nFixes #53695\n