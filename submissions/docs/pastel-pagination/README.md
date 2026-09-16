# Pastel Pagination — Basic Usage

## Overview

Pastel Pagination is a lightweight pagination component with a soft pastel visual style. It can be used for navigating between pages of content.

## Basic HTML

```html
<nav class="pastel-pagination" aria-label="Pagination">
  <a href="#" class="pagination-item" aria-label="Previous page">
    &laquo;
  </a>

  <a href="#" class="pagination-item active" aria-current="page">
    1
  </a>

  <a href="#" class="pagination-item">2</a>
  <a href="#" class="pagination-item">3</a>
  <a href="#" class="pagination-item">4</a>

  <a href="#" class="pagination-item" aria-label="Next page">
    &raquo;
  </a>
</nav>
```

## CSS Class Naming

| Class                     | Purpose                    |
| ------------------------- | -------------------------- |
| `.pastel-pagination`      | Main pagination container  |
| `.pagination-item`        | Individual pagination link |
| `.pagination-item.active` | Indicates the current page |

## Modifier Class

The `.active` modifier identifies the currently selected page.

```html
<a href="#" class="pagination-item active" aria-current="page">
  1
</a>
```

## Custom CSS Variables

The component uses CSS custom properties so the appearance can be changed easily.

```css
:root {
  --pagination-bg: #fff4f8;
  --pagination-text: #6b5b73;
  --pagination-hover: #f8dce8;
  --pagination-active: #e8b4c8;
  --pagination-border: #efd6e1;
  --pagination-radius: 10px;
  --pagination-gap: 8px;
}
```

For example, to change the active page color:

```css
.pastel-pagination {
  --pagination-active: #c8e6c9;
}
```

## Accessibility

Use a semantic `<nav>` element with an accessible label:

```html
<nav class="pastel-pagination" aria-label="Pagination">
```

The current page should use `aria-current="page"`:

```html
<a href="#" class="pagination-item active" aria-current="page">
  1
</a>
```

Previous and next controls should have descriptive accessible names:

```html
<a href="#" class="pagination-item" aria-label="Previous page">
  &laquo;
</a>

<a href="#" class="pagination-item" aria-label="Next page">
  &raquo;
</a>
```

## Keyboard Interaction

Pagination links are native `<a>` elements, so keyboard users can navigate through them using the `Tab` key and activate the selected link with `Enter`.

The `:focus-visible` style provides a visible focus indicator.

```css
.pagination-item:focus-visible {
  outline: 3px solid #9b7fa4;
  outline-offset: 3px;
}
```

The component also respects `prefers-reduced-motion` to reduce unnecessary animations for users who request reduced motion.

## Usage

1. Include the pagination HTML in your page.
2. Include `style.css`.
3. Add or remove page links as required.
4. Apply `.active` to the current page.
5. Update the `href` values to point to the appropriate pages.

## Example

```html
<nav class="pastel-pagination" aria-label="Pagination">
  <a href="/page/1" class="pagination-item active" aria-current="page">1</a>
  <a href="/page/2" class="pagination-item">2</a>
  <a href="/page/3" class="pagination-item">3</a>
</nav>
```
