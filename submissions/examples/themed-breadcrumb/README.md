# Themed Breadcrumb

## What does this do?
A dark mode aware breadcrumb navigation component that uses `@media (prefers-color-scheme: dark/light)` to automatically adjust text, link, and separator colors — light text on dark backgrounds, dark text on light backgrounds.

## How is it used?
```html
<nav class="ease-breadcrumb" aria-label="Breadcrumb">
  <a href="#" class="ease-breadcrumb-item">Home</a>
  <span class="ease-breadcrumb-separator" aria-hidden="true">&#8250;</span>
  <a href="#" class="ease-breadcrumb-item">Docs</a>
  <span class="ease-breadcrumb-separator" aria-hidden="true">&#8250;</span>
  <span class="ease-breadcrumb-item active" aria-current="page">Current</span>
</nav>
```
Wrap items in `.ease-breadcrumb` with `aria-label`. Use `.ease-breadcrumb-item` for links/current page, `.ease-breadcrumb-item.active` with `aria-current="page"` for the current page, and `.ease-breadcrumb-separator` with `aria-hidden="true"` for separators. Add `.ease-breadcrumb-icon` spans for optional icons.

## Why is it useful for EaseMotion CSS?
Breadcrumbs are a fundamental navigation pattern used across all websites. This component ensures proper dark mode support through automatic `prefers-color-scheme` detection, filling a critical accessibility and theming gap while maintaining keyboard accessibility with `:focus-visible` indicators and smooth link hover transitions.
