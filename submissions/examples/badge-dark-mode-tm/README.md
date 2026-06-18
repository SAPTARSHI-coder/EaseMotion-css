# Badge Dark Mode Support

Adds `[data-theme="dark"]` dark mode support to the `badges.css` component.

## What Changed

- Added `[data-theme="dark"] .ease-badge { color }` to use `--ease-color-text` token for readable text in dark mode
- Added dark mode pulse ring colors for primary, danger, and success variants
- Handled deprecated `.em-badge*` aliases

## Usage

```html
<span class="ease-badge">Primary</span>
<span class="ease-badge ease-badge-pulse">Pulsing</span>
```

Enable dark mode: `<html data-theme="dark">`

## Browser Support

All modern browsers supporting CSS custom properties and attribute selectors.
