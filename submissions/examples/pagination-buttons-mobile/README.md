# Pagination Buttons Mobile Fix

## Description

This example prevents pagination controls from wrapping onto multiple lines on small screens. Instead, the pagination remains on a single row and becomes horizontally scrollable when necessary.

## Usage

```html
<nav class="pagination">
  <button>Previous</button>
  <button class="active">1</button>
  <button>2</button>
  <button>3</button>
  <button>Next</button>
</nav>
```

## CSS

```css
.pagination {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow-x: auto;
}

.pagination button {
  flex: 0 0 auto;
}
```

## Benefits

- Prevents pagination wrapping
- Mobile-friendly layout
- Smooth horizontal scrolling
- Pure CSS solution
- Reusable across responsive projects