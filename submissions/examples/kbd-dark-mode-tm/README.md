# KBD Dark Mode Support

Demonstrates `[data-theme="dark"]` dark mode support for the KBD component.

## What This Submission Shows

The `style.css` in this folder contains the dark mode CSS pattern that should be added to `components/kbd.css`:

```css
/* Dark mode */
[data-theme="dark"] .ease-kbd {
  color: #e2e8f0;
  background: #1e293b;
  border-color: #334155;
  box-shadow: 0 1px 0 #475569;
}
```

## Usage

Include the KBD component classes and add `data-theme="dark"` to your HTML:

```html
<html data-theme="dark">
  <kbd class="ease-kbd">Ctrl</kbd>
</html>
```

## Browser Support

All modern browsers. CSS custom properties and attribute selectors are widely supported.
