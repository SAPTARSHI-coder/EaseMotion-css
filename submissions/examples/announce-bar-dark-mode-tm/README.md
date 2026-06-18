# Announce Bar Dark Mode Support

Adds `[data-theme="dark"]` dark mode support to the `announce-bar.css` component.

## What Changed

- Added `[data-theme="dark"]` overrides for all announce bar variants:
  - `.is-info` → darker indigo `#4338ca`
  - `.is-success` → darker green `#059669`
  - `.is-warning` → darker amber `#d97706`
  - `.is-danger` → darker red `#dc2626`
- All variants keep `#fff` text color which remains readable on all dark variants

## Usage

```html
<div class="ease-announce-bar is-success">Your message here</div>
```

Enable dark mode: `<html data-theme="dark">`

## Browser Support

All modern browsers supporting CSS custom properties and attribute selectors.
