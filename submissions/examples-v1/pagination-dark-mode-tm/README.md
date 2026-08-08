# Pagination — Dark Mode Demo

## Overview

Demonstrates the `.ease-pagination` component from EaseMotion CSS in both light and dark modes. Dark mode overrides `--btn-color`, `--btn-border`, `--btn-hover-bg`, and the `--btn-active-bg` tokens so the active page button and hover states remain visible on dark surfaces.

## Usage

```html
<nav class="ease-pagination" aria-label="Page navigation">
  <a href="#" class="ease-page-btn" aria-label="Previous page">&lsaquo;</a>
  <a href="#" class="ease-page-btn">1</a>
  <a href="#" class="ease-page-btn ease-page-btn-active">2</a>
  <a href="#" class="ease-page-btn">3</a>
  <a href="#" class="ease-page-btn" aria-label="Next page">&rsaquo;</a>
</nav>
```

Size variant: `.ease-page-btn-sm` for compact buttons.
Center alignment: `.ease-pagination-center` on the wrapper.

## Dark Mode Overrides

```css
[data-theme="dark"] {
  --btn-color: #cbd5e1;
  --btn-border: #475569;
  --btn-hover-bg: #334155;
  --btn-active-bg: #a78bfa;
  --btn-active-color: #0f172a;
}
```

## Browser Support

CSS Custom Properties + Flexbox: Chrome 87+, Firefox 78+, Safari 13.1+, Edge 88+.
