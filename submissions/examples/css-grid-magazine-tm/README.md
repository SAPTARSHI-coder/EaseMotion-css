# CSS Grid Magazine Layout

This submission demonstrates how CSS Grid's two-dimensional layout system can create rich editorial magazine-style web pages, using EaseMotion's design tokens for color, spacing, and typography.

## Features

- Three-column grid with featured story spanning two columns
- Sidebar with stacked cards using flexbox alignment
- Quick-links section with two-column grid
- Article cards grid with tag badges
- Responsive breakpoints using `--ease-space-*` tokens
- Dark mode support using `--ease-color-neutral-*` tokens
- Hover transitions with `--ease-speed-fast` and `--ease-ease`
- Reduced motion support via `@media (prefers-reduced-motion: reduce)`

## Usage

```html
<div class="magazine-grid">
  <header class="magazine-header">...</header>
  <article class="featured-story">...</article>
  <aside class="sidebar-story">
    <div class="sidebar-card">...</div>
  </aside>
</div>
```

## Why is it useful?

CSS Grid magazine layouts are a staple of modern web editorial design. This example uses `grid-template-columns: repeat(3, 1fr)` combined with `grid-column` spanning to create an asymmetric layout that guides the reader's eye — a technique directly supported by EaseMotion's `--ease-space-*` spacing scale and `--ease-color-*` palette.
