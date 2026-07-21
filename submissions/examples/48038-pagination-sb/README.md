# Pagination Component

A clean pagination component for navigating through pages.

## Features

- Page numbers with active state
- Previous/next navigation
- Ellipsis for large page counts
- Hover effects

## Usage

```html
<nav class="pagination">
  <a href="#" class="page-item page-prev">‹</a>
  <a href="#" class="page-item">1</a>
  <a href="#" class="page-item active">2</a>
  <a href="#" class="page-item">3</a>
  <a href="#" class="page-item page-next">›</a>
</nav>
```

## CSS Classes

- `.pagination` - Container for pagination
- `.page-item` - Individual page link
- `.page-item.active` - Active/current page
- `.page-item.page-prev` - Previous button
- `.page-item.page-next` - Next button

Closes #48038
