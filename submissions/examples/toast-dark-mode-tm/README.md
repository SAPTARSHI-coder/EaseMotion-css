# Toast Dark Mode Support

Demonstrates `[data-theme="dark"]` dark mode support for the Toast component.

## What This Submission Shows

The CSS pattern for toast dark mode (to be added to `components/toast.css`):

```css
/* Dark mode */
[data-theme="dark"] .ease-toast {
  background: var(--ease-color-surface-dark, #1e293b);
}
[data-theme="dark"] .ease-toast-body p {
  color: var(--ease-color-text-muted, #94a3b8);
}
```

## Usage

```html
<div class="ease-toast ease-toast-success">
  <div class="ease-toast-icon">+</div>
  <div class="ease-toast-body"><strong>Title</strong><p>Message text.</p></div>
</div>
```

Enable dark mode: `<html data-theme="dark">`
