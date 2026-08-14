# Basic Status Filter Row

## What it does

This submission adds a CSS-only status filter row for dashboards, filter panels,
settings menus, and list views.

It shows a filter marker, filter name, helper text, item count, scope, and
selected, active, or archived state in one compact reusable row.

## How to use it

Add the base row class with a filter marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-status-filter-row">
  <span class="filter-mark is-selected" aria-hidden="true">ALL</span>
  <div class="filter-copy">
    <strong>All items</strong>
    <p>Shows every item across active and archived states.</p>
  </div>
  <span class="filter-count">248</span>
  <span class="filter-scope">Global</span>
  <span class="filter-state is-selected">Selected</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
dashboard and filtering interfaces. Developers can reuse the same row pattern in
filter drawers, table views, admin dashboards, and settings panels while keeping
the implementation lightweight and CSS-only.

## Included features

- Selected, active, and archived filter examples
- Filter marker badges
- Item count metadata
- Scope metadata
- Filter state styling
- Long text truncation for compact panels
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the status filter row
- `README.md` - usage and contribution context
