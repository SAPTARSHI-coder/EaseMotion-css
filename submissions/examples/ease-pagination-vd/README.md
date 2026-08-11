# Ease Pagination

## What does this do?

A responsive pagination navigation component with previous and next controls, page numbers, and an active page state.

## How is it used?

Open `demo.html` directly in any modern browser.

Example:

```html
<nav class="pagination" aria-label="Pagination">
    <a href="#" class="page-control">‹ <span>Previous</span></a>

    <div class="page-numbers">
        <a href="#" class="page active">1</a>
        <a href="#" class="page">2</a>
        <a href="#" class="page">3</a>
        <span class="dots">...</span>
        <a href="#" class="page">8</a>
    </div>

    <a href="#" class="page-control"><span>Next</span> ›</a>
</nav>
```

### Features

- Previous control
- Next control
- Page numbers
- Active page state
- Responsive wrapping
- Hover animation
- Pure CSS styling
- No JavaScript required

## Why is it useful?

Pagination is commonly used for tables, search results, article listings, product catalogs, and other interfaces containing multiple pages of content.

This component provides a clean and reusable pagination pattern with responsive controls and subtle interaction feedback while following the animation-first philosophy of EaseMotion CSS.