# Progress Bar Dark Mode Support

Demonstrates `[data-theme="dark"]` dark mode support for the Progress Bar component.

## What This Submission Shows

The CSS pattern for progress bar dark mode (to be added to `components/progress.css`):

```css
/* Dark mode */
[data-theme="dark"] .ease-progress {
  background: var(--ease-color-neutral-700, #334155);
}
```

## Usage

```html
<div class="ease-progress">
  <div class="ease-progress-bar" style="width:60%"></div>
</div>
```

Enable dark mode: `<html data-theme="dark">`
