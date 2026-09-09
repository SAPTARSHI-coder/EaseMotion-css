# Keyboard Shortcut Key Styles — Dark Mode Demo

## Overview

This submission demonstrates how the `.ease-kbd` component from EaseMotion CSS renders correctly in both light and dark modes. The dark mode override targets the `--kbd-bg`, `--kbd-color`, `--kbd-border`, and `--kbd-shadow` CSS variables to maintain legibility on dark surfaces.

## Usage

Apply `.ease-kbd` to any `<kbd>`-style inline element:

```html
<span class="ease-kbd">Ctrl</span>
<span class="ease-kbd ease-kbd-sm">S</span>
<span class="ease-kbd ease-kbd-lg">Enter</span>
```

Wrap a shortcut combo in `.ease-kbd-group`:

```html
<div class="ease-kbd-group">
  <span class="ease-kbd">Cmd</span>
  <span class="ease-kbd">Shift</span>
  <span class="ease-kbd">P</span>
</div>
```

To enable dark mode, add the `data-theme="dark"` attribute to `<html>` and define CSS variable overrides in `[data-theme="dark"]`.

## Dark Mode Overrides

```css
[data-theme="dark"] {
  --kbd-bg: #334155;
  --kbd-color: #f1f5f9;
  --kbd-border: #475569;
  --kbd-shadow: #1e293b;
}
```

## Browser Support

All modern browsers supporting CSS Custom Properties (`:root` variables) and `color-scheme: dark` — Chrome 87+, Firefox 78+, Safari 13.1+, Edge 88+.
