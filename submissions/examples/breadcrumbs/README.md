# Breadcrumbs

A navigation trail with sliding separators and an emphasized current page.

## Features
- Chevron separators between each level
- Hover tints the crumb and nudges the label
- Current page marked with an underline pill

## Usage
```html
<nav class="bc-nav" aria-label="Breadcrumb">
  <a class="bc-crumb" href="#">Home</a>
  <span class="bc-sep">&#8250;</span>
  <span class="bc-current" aria-current="page">Current</span>
</nav>
```

## Browser Support
- Chrome, Firefox, Safari, Edge (evergreen)

## Tech Stack
- Pure HTML + CSS, zero JavaScript dependencies
