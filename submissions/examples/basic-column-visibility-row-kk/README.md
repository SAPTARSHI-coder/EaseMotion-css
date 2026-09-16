# Basic Column Visibility Row

## What it does

This submission adds a CSS-only column visibility row for table settings, data
grids, admin dashboards, and list customization panels.

It shows a column marker, column name, helper text, data type, position, and
visible, pinned, or hidden state in one compact reusable row.

## How to use it

Add the base row class with a column marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-column-visibility-row">
  <span class="column-mark is-visible" aria-hidden="true">ON</span>
  <div class="column-copy">
    <strong>Customer name</strong>
    <p>Visible in the default customer table layout.</p>
  </div>
  <span class="column-type">Text</span>
  <span class="column-position">Col 1</span>
  <span class="column-state is-visible">Visible</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
table and settings interfaces. Developers can reuse the same row pattern in
column pickers, data grids, admin dashboards, and table customization panels
while keeping the implementation lightweight and CSS-only.

## Included features

- Visible, pinned, and hidden column examples
- Column marker badges
- Data type metadata
- Column position metadata
- Column state styling
- Long text truncation for compact settings panels
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the column visibility row
- `README.md` - usage and contribution context
