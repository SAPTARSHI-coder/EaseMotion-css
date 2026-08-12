# Progress Bars — Dark Mode Demo

## Overview

Demonstrates the `.ease-progress` component from EaseMotion CSS in both light and dark modes. Dark mode overrides `--progress-track` and the variant colors to maintain clear contrast against dark surfaces.

## Usage

```html
<div class="ease-progress">
  <div class="ease-progress-bar" style="width: 65%"></div>
</div>

<div class="ease-progress ease-progress-success">
  <div class="ease-progress-bar" style="width: 82%"></div>
</div>

<div class="ease-progress ease-progress-striped ease-progress-animated">
  <div class="ease-progress-bar" style="width: 75%"></div>
</div>
```

Size variants: `.ease-progress-sm`, `.ease-progress-lg`.
Color variants: `.ease-progress-success`, `.ease-progress-danger`, `.ease-progress-warning`, `.ease-progress-info`.
Style: `.ease-progress-striped`, `.ease-progress-animated`.

## Dark Mode Overrides

```css
[data-theme="dark"] {
  --progress-track: #334155;
  --progress-primary: #a78bfa;
  --progress-success: #4ade80;
  --progress-danger: #f87171;
  --progress-warning: #fbbf24;
  --progress-info: #60a5fa;
}
```

## Browser Support

CSS Custom Properties + CSS Animations: Chrome 87+, Firefox 78+, Safari 13.1+, Edge 88+.
