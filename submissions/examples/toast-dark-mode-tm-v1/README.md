# Toast Notifications — Dark Mode Demo

## Overview

This submission demonstrates the `.ease-toast` notification component from EaseMotion CSS rendered in both light and dark modes. Dark mode overrides `--toast-bg`, `--toast-border`, `--toast-shadow`, and the variant accent colors to maintain contrast and readability.

## Usage

```html
<div class="ease-toast ease-toast-success">
  <svg class="ease-toast-icon" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="..."/>
  </svg>
  <div class="ease-toast-body">
    <strong>Changes saved</strong>
    <p>Your profile has been updated.</p>
  </div>
</div>
```

Toast variants: `.ease-toast-success`, `.ease-toast-danger`, `.ease-toast-warning`, `.ease-toast-info`.
Size variants: `.ease-toast-sm`, `.ease-toast-lg`.

## Dark Mode Overrides

```css
[data-theme="dark"] {
  --toast-bg: #1e293b;
  --toast-border: #334155;
  --toast-shadow: rgba(0,0,0,0.3);
  --toast-body-color: #94a3b8;
}
```

## Browser Support

CSS Custom Properties + CSS Color Scheme: Chrome 87+, Firefox 78+, Safari 13.1+, Edge 88+.
