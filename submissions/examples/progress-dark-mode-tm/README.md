# Progress Bar Dark Mode Support

Adds `[data-theme="dark"]` dark mode support to the `progress.css` component.

## What Changed

- Added `[data-theme="dark"] .ease-progress { background }` override using `--ease-color-neutral-700` token
- All progress bar variants (success, danger, warning, info) inherit correctly since their bar colors use CSS custom property tokens

## Usage

```html
<div class="ease-progress">
  <div class="ease-progress-bar" style="width:60%"></div>
</div>
```

Enable dark mode: `<html data-theme="dark">`

## Browser Support

All modern browsers supporting CSS custom properties and attribute selectors.
