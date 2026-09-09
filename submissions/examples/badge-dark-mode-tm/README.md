# Badge Dark Mode Support

Demonstrates `[data-theme="dark"]` dark mode support for the Badge component.

## What This Submission Shows

The CSS pattern for badge dark mode (to be added to `components/badges.css`):

```css
/* Dark mode */
[data-theme="dark"] .ease-badge {
  color: var(--ease-color-text, #e2e8f0);
}
[data-theme="dark"] .ease-badge-pulse::after {
  box-shadow: 0 0 0 0 rgba(129, 140, 248, 0.7);
}
[data-theme="dark"] .ease-badge-danger.ease-badge-pulse::after {
  box-shadow: 0 0 0 0 rgba(248, 113, 113, 0.7);
}
[data-theme="dark"] .ease-badge-success.ease-badge-pulse::after {
  box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.7);
}
```

## Usage

```html
<span class="ease-badge ease-badge-pulse">Pulsing</span>
```

Enable dark mode: `<html data-theme="dark">`
