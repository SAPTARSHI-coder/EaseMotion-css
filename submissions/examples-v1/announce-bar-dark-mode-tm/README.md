# Announce Bar Dark Mode Support

Demonstrates `[data-theme="dark"]` dark mode support for the Announce Bar component.

## What This Submission Shows

The CSS pattern for announce bar dark mode (to be added to `components/announce-bar.css`):

```css
/* Dark mode */
[data-theme="dark"] .ease-announce-bar {
  background: #1e1b4b;
}
[data-theme="dark"] .ease-announce-bar.is-info {
  background: #4338ca;
}
[data-theme="dark"] .ease-announce-bar.is-success {
  background: #059669;
}
[data-theme="dark"] .ease-announce-bar.is-warning {
  background: #d97706;
}
[data-theme="dark"] .ease-announce-bar.is-danger {
  background: #dc2626;
}
```

All variants keep white text which remains readable on all dark backgrounds.

## Usage

```html
<div class="ease-announce-bar is-success">Your message here</div>
```

Enable dark mode: `<html data-theme="dark">`
