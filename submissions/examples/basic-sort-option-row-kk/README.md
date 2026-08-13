# Basic Sort Option Row

## What it does

This submission adds a CSS-only sort option row for filter panels, settings
menus, search pages, and list customization screens.

It shows a sort marker, sort label, helper text, order type, preview hint, and
selected, recommended, or disabled state in one compact reusable row.

## How to use it

Add the base row class with a sort marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-sort-option-row">
  <span class="sort-mark is-selected" aria-hidden="true">AZ</span>
  <div class="sort-copy">
    <strong>Name A to Z</strong>
    <p>Sorts items alphabetically using the visible title.</p>
  </div>
  <span class="sort-order">Ascending</span>
  <span class="sort-preview">A-Z</span>
  <span class="sort-state is-selected">Selected</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
filtering and settings interfaces. Developers can reuse the same row pattern in
search filters, table settings, list customization panels, and sort menus while
keeping the implementation lightweight and CSS-only.

## Included features

- Selected, recommended, and disabled sort examples
- Sort marker badges
- Order type metadata
- Preview hint metadata
- Sort state styling
- Long text truncation for compact panels
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the sort option row
- `README.md` - usage and contribution context
